const DataInteractor = require("../usecases/DataInteractor");

module.exports = () => {
    const dataInteractor = DataInteractor();

    const GetStates = (req, res, next) => {
        //const data = req.body;
        dataInteractor.GetStates().then((response) => {
            //res.json(response);
            var status_r = response.status
            var message_r = response.message
            var values = response.data
            return res.status(status_r).json({status:status_r,message:message_r,data:values})
        }, (err) => {
            return res.status(500).json({error:err});
        });
    } 

    const GetTown = (req, res, next) => {
        const data = req.body;
        dataInteractor.GetTown(data).then((response) => {
            //res.json(response);
            var status_r = response.status
            var message_r = response.message
            var values = response.data
            return res.status(status_r).json({status:status_r,message:message_r,data:values})
        }, (err) => {
            return res.status(500).json({error:err});
        });
    } 

    return {
        GetStates,
        GetTown
    }
};