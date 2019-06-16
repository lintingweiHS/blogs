const service = require('egg').Service;
class loginService extends service{
    async post(options){
        const result = await this.app.mysql.select('users',options);
        return result[0].password == options.password
    }
}
module.exports = loginService