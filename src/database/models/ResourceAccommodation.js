// Se usa mongoose como esquema de validacion antes de guardar archivos en la base de datos
const mongoose = require('mongoose');
const { Schema } = mongoose; //se va a crear un objeto timo esquema


const resourceAccomodationSchema = new Schema({ //se define las propiedades del nuevo esquema
    latitud: { type: Number, required: true },
    longitud: { type: Number, required: true },
    id: { type: Number, required: true },
    titulo: { type: String, required: true },
    anunciante: { type: String },
    descripcion: { type: String },
    reformado: { type: String },
    telefono: { type: String },
    tipo: { type: String },
    precio: { type: Number },
    precioM2: { type: Number },
    direccion: { type: String },
    provincia: { type: String },
    ciudad: { type: String },
    m2: { type: Number },
    habitaciones: { type: Number },
    banhos: { type: Number },
    parking: { type: String },
    segundaMano: { type: String },
    armariosEmpotrados: { type: String },
    construidoEn: { type: Number },
    Amueblado: { type: String },
    calefaccionIndividual: { type: String },
    certificacionEnergetica: { type: String },
    planta: { type: String },
    exterior: { type: String },
    interior: { type: String },
    ascensor: { type: String },
    fecha: { type: String },
    calle: { type: String },
    barrio: { type: String },
    distrito: { type: String },
    terraza: { type: String },
    trastero: { type: String },
    cocinaEquipada: { type: String },
    cocinaequipada: { type: String },
    aireAcondicionado: { type: String },
    piscina: { type: String },
    jardin: { type: String },
    m2utiles: { type: Number },
    aptoDiscapacidad: { type: String },
    plantas: { type: Number },
    mascotas: { type: String },
    balcon: { type: String },
});


module.exports = mongoose.model('ResourceAccomodation', resourceAccomodationSchema)