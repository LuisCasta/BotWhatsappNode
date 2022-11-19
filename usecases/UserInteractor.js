const query = require('../services/UserService');

module.exports =  () => {

    async function GetUser(data) {
        var result = await query.GetUser(data);

        return result;
    } 
    
    async function CreateUser(data) {
        var exist_user = await query.ExistUser(data);
        var result = []
        if(exist_user.status == 400){
            result = await query.CreateUser(data);
        } else {
            result = exist_user
        }
        return result;
    } 

    async function UpdateUser(data) {
        var getuser = await query.GetUser(data);
        var result = []
        if(getuser.status == 200){
            result = await query.UpdateUser(data);
        } else {
            result = getuser
        }
        return result;
    } 

    async function DeleteUser(data) {
        var getuser = await query.GetUser(data);
        var result = []
        if(getuser.status == 200){
            result = await query.DeleteUser(data);
        } else {
            result = getuser
        }
        return result;
    } 

    return {
        GetUser,
        CreateUser,
        UpdateUser,
        DeleteUser
    }
};