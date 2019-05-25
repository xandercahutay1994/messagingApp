'use strict'

const Promise = require('bluebird')

class Utility {

    insertData(params, table) {
        const data = r.table(table).insert(params)
        return data
    }

    paramsValidator(params, validator){
        let error = new Error()
        validator.map(key => {
            if (!params.hasOwnProperty(key)) {
                error.message = `${key} is required`
                throw error       
            } 
        })

        // return validator
        // return Promise.resolve(true)
    }
}

module.exports = Utility