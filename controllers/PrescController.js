const PrescInteractor = require('../usecases/PrescInteractor');

module.exports = () => {
    const prescInteractor = PrescInteractor();

    const GetPrescription = (req, res, next) => {
        const data = req.body
        prescInteractor.GetPrescription(data).then((response) => {
            //res.json(response);
            var status_r = response.status
            var message_r = response.message
            var values = response.data
            return res.status(status_r).json({status:status_r,message:message_r,data:values})
        }, (err) => {
            return res.status(500).json({error:err});
        })
    }

    const CreatePrescription = (req, res, next) => {
        const data = req.body
        prescInteractor.CreatePrescription(data).then((response) => {
            //res.json(response);
            var status_r = response.status
            var message_r = response.message
            var values = response.data
            return res.status(status_r).json({status:status_r,message:message_r,data:values})
        }, (err) => {
            return res.status(500).json({error:err});
        })
    }

    const UpdatePrescription = (req, res, next) => {
        const data = req.body
        prescInteractor.UpdatePrescription(data).then((response) => {
            //res.json(response);
            var status_r = response.status
            var message_r = response.message
            var values = response.data
            return res.status(status_r).json({status:status_r,message:message_r,data:values})
        }, (err) => {
            return res.status(500).json({error:err});
        })
    }

    const DeletePrescription = (req, res, next) => {
        const data = req.body
        prescInteractor.DeletePrescription(data).then((response) => {
            //res.json(response);
            var status_r = response.status
            var message_r = response.message
            var values = response.data
            return res.status(status_r).json({status:status_r,message:message_r,data:values})
        }, (err) => {
            return res.status(500).json({error:err});
        })
    }

    return{
        GetPrescription,
        CreatePrescription,
        UpdatePrescription,
        DeletePrescription
    }
};