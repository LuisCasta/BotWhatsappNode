module.exports = () => {

    async function GetStates() {
        const estados = require('../helpers/estados.json')
        //console.log(estados)
        var result = [];
        result.status = 200;
        result.message = "Success";
        result.data = await estados;
        return result;
    }

    async function GetTown(data) {
        const datos = require('../helpers/municipios.json')
        var estado = data.estado;
        var municipios = datos[estado];
        //console.log(municipios)
        var result = [];
        result.status = 200;
        result.message = "Success";
        result.data = await municipios;
        return result;
    }

    return {
        GetStates,
        GetTown
    }
};