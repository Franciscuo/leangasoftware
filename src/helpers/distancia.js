const distancia = (posicion1, posicion2) => {

    const radio = 6378;
    const sinLatA = Math.sin(posicion1.latitud * Math.PI / 180);
    const sinLatB = Math.sin(posicion2.latitud * Math.PI / 180);
    const cosLatA = Math.cos(posicion1.latitud * Math.PI / 180);
    const cosLatB = Math.cos(posicion2.latitud * Math.PI / 180)
    const cosLonA_LonB = Math.cos((posicion1.longitud - posicion2.longitud) * Math.PI / 180);

    const C = Math.acos(sinLatA * sinLatB + cosLatA * cosLatB * cosLonA_LonB)
    return radio * C;
}

module.exports = distancia;