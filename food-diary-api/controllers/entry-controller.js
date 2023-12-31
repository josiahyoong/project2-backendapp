const {v4: uuidv4} = require("uuid");
const httpStatus = require("http-status");
const {create: createEntry, list: listEntry, remove: removeID} = require("../services/entry.service"); // Add this line
const data = [];

// Refactor the `create` function
const create = async (req, res) => {
    try{
        await createEntry(req.body);
        return res.sendStatus(httpStatus.CREATED);
    } catch(e){
        console.log("Failed to create entry", e);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

// Refactor the `readAll` function
const readAll = async (req, res) => {
    try{
        const data = await listEntry();
        return data.length > 0 ? res.json(data) : res.sendStatus(httpStatus.NOT_FOUND);
    }catch(e){
        console.log("Failed to list entries", e);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
    
}

// Pseudo code for delete
const remove = async (req, res) => {
    // call delete function from entry.service.js
    // refer to the readAll function in this file
    try{
        const ID = req.params.id
        const data = await removeID(ID);
        // return data.length > 0 ? res.json(data) : res.sendStatus(httpStatus.NOT_FOUND);
    }catch(e){
        console.log("Failed to list entries", e);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }

}
// Use the `removeID` function as a callback for removing an entry




// const {v4: uuidv4} = require("uuid");
// const httpStatus = require("http-status"); // using library to manage status code at ease
// const data = []; // used for storing resource in the memory

// const create = (req, res) => {
//     data.push(req.body);
//     res.sendStatus(httpStatus.CREATED); // Able to use httpStatus.CREATED instead of 201
// }

// const readAll = (req, res) => {
//     if(data.length > 0){
//         return res.json(data);
//     }
//     return res.sendStatus(httpStatus.NOT_FOUND);
    
// }

module.exports = {
    create,
    readAll,
    remove
}

