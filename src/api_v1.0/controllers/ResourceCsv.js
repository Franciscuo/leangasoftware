const mongoose = require('mongoose')
const resourceAccoCtrl = {};

const ResourceAccomodation = require('../../database/models/ResourceAccommodation');

resourceAccoCtrl.addData = (data) => {
    return new Promise((resolve, reject) => {
        data.forEach(async(element) => {
            const newResource = new ResourceAccomodation({
                latitud: element[0],
                longitud: element[1],
                id: element[2],
                titulo: element[3],
                anunciante: element[4],
                descripcion: element[5],
                reformado: element[6],
                telefono: element[7],
                tipo: element[8],
                precio: element[9],
                precioM2: element[10],
                direccion: element[11],
                provincia: element[12],
                ciudad: element[13],
                m2: element[14],
                habitaciones: element[15],
                banhos: element[16],
                parking: element[17],
                segundaMano: element[18],
                armariosEmpotrados: element[19],
                construidoEn: element[20],
                Amueblado: element[21],
                calefaccionIndividual: element[22],
                certificacionEnergetica: element[23],
                planta: element[24],
                exterior: element[25],
                interior: element[26],
                ascensor: element[27],
                fecha: element[28],
                calle: element[29],
                barrio: element[30],
                distrito: element[31],
                terraza: element[32],
                trastero: element[33],
                cocinaEquipada: element[34],
                cocinaequipada: element[35],
                aireAcondicionado: element[36],
                piscina: element[37],
                jardin: element[38],
                m2utiles: element[39],
                aptoDiscapacidad: element[40],
                plantas: element[41],
                mascotas: element[42],
                balcon: element[43],
            });
            await newResource.save((err, product) => {
                if (err) {
                    reject(`Error al actualizar base de datos${e}`)
                } else {
                    resolve(`Base de datos actualizada`);
                }
            })

        });
    })
}

resourceAccoCtrl.removeCollection = () => {
    return new Promise((resolve, reject) => {
        mongoose.connection.collection('resourceaccomodations').drop()
            .then(() => {
                resolve(`Base de datos borrada`);
            })
            .catch((e) => {
                reject(`Error al borrar base de datos${e}`)
            })
    })
}
module.exports = resourceAccoCtrl;