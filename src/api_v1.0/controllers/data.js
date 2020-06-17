const mongoose = require('mongoose');
const ResourceAccomodation = require('../../database/models/ResourceAccommodation');
const { query } = require('express');
const { all } = require('../routes/index.routes');


const dataCtrl = {};


const dataQuery = (query) => {
    let key = [];
    let value = [];
    if (!query) return finalQuey = {}
    const filters = query.split('&');
    filters.forEach(element => {
        key.push(element.split('=')[0]);
        value.push(element.split('=')[1]);
    });
    finalQuey = {
        precio: {
            $gte: key.includes('precio_min') ? value[key.indexOf('precio_min')] : 0,
            $lte: key.includes('precio_max') ? value[key.indexOf('precio_max')] : Infinity
        },
    }
    if (key.includes('habitaciones')) {
        finalQuey.habitaciones = value[key.indexOf('habitaciones')];
    }
    console.log(finalQuey)
    return finalQuey;
}


dataCtrl.filter = (filter) => {
    return new Promise(async(resolve, reject) => {
        try {
            const data = await ResourceAccomodation.find(dataQuery(filter));
            if (data.length > 0) return resolve(data);
            return reject('No se encontraron datos para la busqueda');
        } catch (e) {
            return reject(e);
        }
    })
}

dataCtrl.all = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const data = await ResourceAccomodation.find();
            if (data.length > 0) return resolve(data);
            return reject('No se encontraron datos');
        } catch (e) {
            return reject(e);
        }
    })
}


module.exports = dataCtrl;