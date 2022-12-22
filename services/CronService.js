var moment = require('moment-timezone');
const Mysql = require('./MysqlService2');
const CronJob = require('cron').CronJob;

const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const client = require('twilio')(accountSid, authToken); 
const desde = 'whatsapp:+'+process.env.PHONE_NUMBER_ID;
//Time cron para ejecutar cada hora algo
//59 * * * * //hora
//'* * * * *' // minuto
async function initNotification(){
var job = new CronJob(
	'59 * * * *',
    async function() {
                    
            moment().tz("America/Mexico_City").format();

            var fecha = moment().format('YYYY-MM-DD');
            var hora = moment().format('HH:mm:ss');
            var hora_sig = moment().add(1, 'hours').format('HH:mm:ss');//hours//minutes
            var lista = [];
            console.log('busqueda fecha '+ fecha + ' desde ' + hora + ' a ' + hora_sig);
            
            const query = `SELECT u.lada, u.telefono, 'Primera toma' as toma, p.fecha_prim_toma as fecha, p.hora_prim_toma as hora
                FROM users u
                LEFT JOIN prescriptions p on u.id = p.id_user
                where u.recordatorio = 1 and p.fecha_prim_toma = '${fecha}'
                    and p.hora_prim_toma between '${hora}' and '${hora_sig}'
                    UNION
                    SELECT u.lada, u.telefono, 'Segunda toma' as toma, p.fecha_seg_toma as fecha, p.hora_seg_toma as hora
                FROM users u
                LEFT JOIN prescriptions p on u.id = p.id_user
                where u.recordatorio = 1 and p.fecha_seg_toma = '${fecha}'
                    and p.hora_seg_toma between  '${hora}' and '${hora_sig}'`;
            
            await Mysql.executeQuery(query,async (result) => {
                
                if(result.length > 0){
                    
                    for (const registro of result) {
        
                    var toma = registro.toma;
                    var para = 'whatsapp:+521'+registro.lada+registro.telefono;
                    var cel = registro.lada+registro.telefono;
                    var fecha_t = moment(registro.fecha).format('YYYY-MM-DD');
                    var hora_t = moment(registro.hora,'HH:mm:ss').format('HH:mm');
                    lista.push(cel);
                    var mensaje = 'Hola, recuerda de tu '+toma+' de hm, el dia '+fecha_t+' a la hora '+hora_t;
                    //await console.log(mensaje);
                    client.messages 
                        .create({ 
                            body: mensaje, 
                            from: desde,       
                            to: para,
                            accountSid
                        }) 
                        .then(message => console.log(message)) 
                        .done();
                    
                    }
                    
                    
                } else {
                    lista = [];
                    //console.log('sin recordatorios');
                }
                console.log(lista);
               
        })
	},
	null,
	true,
	'America/Mexico_City'
);
// Use this if the 4th param is default value(false)
// job.start()

}

module.exports = {
    initNotification
};