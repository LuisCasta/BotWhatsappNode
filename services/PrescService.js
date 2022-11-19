const Mysql = require('./MysqlService2');
var moment = require('moment');

const GetPrescription = async(data) => {
    return new Promise(async(resolve,reject) => {
        var id_presc = data.id_presc;
        const query = `SELECT * FROM prescriptions 
            WHERE id = ${id_presc}`;
        await Mysql.executeQuery(query,(result) => {
            var resp = [];
            if(result.length > 0){
                resp.status = 200;
                resp.message = "Prescription Exist"
                resp.data = {id_presc:id_presc,rows: result}; 
            } else {
                resp.status = 400;
                resp.message = "Prescription not Exist"
                resp.data = {id_presc:id_presc, rows: result};
            }
            resolve(resp)
        })
    })
}

const ExistPrescription = async(data) => {
    return new Promise(async (resolve,reject) => {
        var fecha_estudio = data.fecha_estudio
        var hora_estudio = data.hora_estudio

        const query = `SELECT * FROM prescriptions 
            WHERE fecha_estudio = '${fecha_estudio}' and hora_estudio = '${hora_estudio}'`;
        await Mysql.executeQuery(query,(result) => {
            var resp = [];
            if(result.length > 0){
                resp.status = 200;
                resp.message = "Prescription Exist"
                resp.data = {rows: result.length}; 
            } else {
                resp.status = 400;
                resp.message = "Prescription not Exist"
                resp.data = {rows: result.length};
            }
            resolve(resp)
        })
    })
}

const CreatePrescription = async(data) => {
    return new Promise(async (resolve,reject) => {
        var id_user = data.id_user
        var fecha_estudio = data.fecha_estudio
        var hora_estudio = data.hora_estudio
        var fecha_prim_toma = data.fecha_prim_toma
        var hora_prim_toma = data.hora_prim_toma
        var fecha_seg_toma = data.fecha_seg_toma
        var hora_seg_toma = data.hora_seg_toma
        var create_at = moment().format('YYYY-MM-DD'); 
        //console.log(create_at)
        const query = `INSERT INTO prescriptions(id_user, fecha_estudio, hora_estudio, 
            fecha_prim_toma, hora_prim_toma, fecha_seg_toma, hora_seg_toma, create_at)
            VALUES (${id_user},'${fecha_estudio}','${hora_estudio}',
            '${fecha_prim_toma}','${hora_prim_toma}','${fecha_seg_toma}','${hora_seg_toma}','${create_at}')`;
        
        await Mysql.executeQuery(query,(result) => {
            var resp = [];
            if(result.affectedRows > 0){
                resp.status = 200;
                resp.message = "Success Create prescription"
                resp.data = {id_presc: result.insertId}; //insertId
            } else {
                resp.status = 400;
                resp.message = "Error Create prescription"
                resp.data = {id_presc: result.insertId};
            }
            resolve(resp)
        })
        
    })
}

const UpdatePrescription = async(data) => {
    return new Promise(async (resolve,reject) => {
        var id_presc = data.id_presc
        var fecha_estudio = data.fecha_estudio
        var hora_estudio = data.hora_estudio
        var fecha_prim_toma = data.fecha_prim_toma
        var hora_prim_toma = data.hora_prim_toma
        var fecha_seg_toma = data.fecha_seg_toma
        var hora_seg_toma = data.hora_seg_toma
        var update_at = moment().format('YYYY-MM-DD'); 
        //console.log(create_at)
        const query = `UPDATE prescriptions SET fecha_estudio = '${fecha_estudio}', hora_estudio ='${hora_estudio}',
            fecha_prim_toma = '${fecha_prim_toma}', hora_prim_toma = '${hora_prim_toma}',
            fecha_seg_toma = '${fecha_seg_toma}', hora_seg_toma = '${hora_seg_toma}', update_at = '${update_at}'
            WHERE id = ${id_presc}`; 
        
        await Mysql.executeQuery(query,(result) => {
            var resp = [];
            if(result.affectedRows > 0){
                resp.status = 200;
                resp.message = "Success update prescription"
                resp.data = {id_presc: id_presc, rows: result.affectedRows};
            } else {
                resp.status = 400;
                resp.message = "Error update prescription"
                resp.data = {id_presc: id_presc, rows: result.affectedRows};
            }
            resolve(resp)
        })
        
    })
}

const DeletePrescription = async(data) => {
    return new Promise(async (resolve,reject) => {
        var id_presc = data.id_presc
        var delete_at = moment().format('YYYY-MM-DD'); 
        //console.log(create_at)
        const query = `UPDATE prescriptions SET delete_at = '${delete_at}'
            WHERE id = ${id_presc}`; 
        
        await Mysql.executeQuery(query,(result) => {
            var resp = [];
            if(result.affectedRows > 0){
                resp.status = 200;
                resp.message = "Success delete prescription"
                resp.data = {id_presc: id_presc, rows: result.affectedRows};
            } else {
                resp.status = 400;
                resp.message = "Error delete prescription"
                resp.data = {id_presc: id_presc, rows: result.affectedRows};
            }
            resolve(resp)
        })
        
    })
}

module.exports = {
    GetPrescription,
    ExistPrescription,
    CreatePrescription,
    UpdatePrescription,
    DeletePrescription
};