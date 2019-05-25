
class User {

    async createUser(params, table) {
        await Utility.paramsValidator(params.body, ['name', 'email', 'password'])

        console.log(params)
        params.res.send(params.body)
        // return params.body
    }
}

module.exports = User