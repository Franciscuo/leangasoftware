const mongoose = require('mongoose');
const ResourceAccomodation = require('../../database/models/ResourceAccommodation');
const distancia = require('../../helpers/distancia')


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

dataCtrl.average = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if (!data) return reject('Peticion erronea');
            const filters = data.split('&');
            if (filters.length < 3) return reject('Peticion erronea');

            let key = [];
            let value = [];

            filters.forEach(element => {
                key.push(element.split('=')[0]);
                value.push(element.split('=')[1]);
            });
            if (!key.includes('latitud') || !key.includes('longitud') || !key.includes('distancia')) return reject('Peticion erronea');
            if (value[0] == undefined || value[1] == undefined || value[2] == undefined) return reject('Peticion erronea');

            const posicion1 = {
                latitud: value[key.indexOf('latitud')],
                longitud: value[key.indexOf('longitud')],
            }
            let posicion2 = {
                latitud: 0,
                longitud: 0,
            }
            let precio = 0;
            let cantidadAlquileres = 0;
            const dataDB = await ResourceAccomodation.find();
            dataDB.forEach((element, index) => {
                posicion2.latitud = element.latitud;
                posicion2.longitud = element.longitud;
                if (distancia(posicion1, posicion2) <= value[key.indexOf('distancia')]) {
                    precio = precio + element.precio;
                    cantidadAlquileres += 1;
                }
            })
            precioPromediom2 = {
                precioPromedio: precio / cantidadAlquileres,
                cantidadAlquileres: cantidadAlquileres,
            };
            resolve(precioPromediom2);
        } catch (e) {
            reject(`Error ${e}`);
        }
    })
}

dataCtrl.report = () => {
    return new Promise(async(resolve, reject) => {
        try {

        } catch (e) {
            return reject(e);
        }
    })
}

module.exports = dataCtrl;