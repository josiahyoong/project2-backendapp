const { Entry } = require('../models');

const create = async (data) => {
    try{
        const created = await Entry.create(data);
        return created;
    }catch(e){
        throw e;
    }
}

const list = async () => {
    try{
        return await Entry.find(); 
    }catch(e){
        throw e;
    }
}

const remove = async (id) => {
    try {
        // Use Mongoose's deleteOne to remove the entry with the given ID
        const result = await Entry.deleteOne({ _id: id });

        // Check if the operation was successful
        // if (result.deletedCount === 1) {
        //     // Entry was successfully removed
        //     return true;
        // } else {
        //     // Entry with the given ID not found
        //     return false;
        // }
    } catch (e) {
        throw e;
    }
}

module.exports = {
    create,
    list,
    remove
}