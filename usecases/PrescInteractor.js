const query = require('../services/PrescService');

module.exports = () => {

    async function GetPrescription(data) {
        var result = await query.GetPrescription(data);

        return result;
    }

    async function CreatePrescription(data) {
        
        var exist_presc = await query.ExistPrescription(data);
        var result = []
        if(exist_presc.status == 400){
            result = await query.CreatePrescription(data);
        } else {
            result = exist_presc
        }
        return result;
    }

    async function UpdatePrescription(data) {
        
        var getpresc = await query.GetPrescription(data);
        var result = []
        if(getpresc.status == 200){
            result = await query.UpdatePrescription(data);
        } else {
            result = getpresc
        }
        return result;
    }

    async function DeletePrescription(data) {
        
        var getpresc = await query.GetPrescription(data);
        var result = []
        if(getpresc.status == 200){
            result = await query.DeletePrescription(data);
        } else {
            result = getpresc
        }
        return result;
    }

    return {
        GetPrescription,
        CreatePrescription,
        UpdatePrescription,
        DeletePrescription
    }
}