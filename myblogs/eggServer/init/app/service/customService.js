const Service = require('egg').Service;

class customService extends Service{
    async getInfo(option){
        const result = await this.app.mysql.insert('users',{
            name:'ltwbb11',password:'1221'
        });
        // const results = await this.app.mysql.get('users',{id:1});
        // const result = await this.app.mysql.delete('users',{id:'2'})
            // const result = await this.app.mysql.update('users',{
            //     id:3,
            //     name:'12321',
            //     password:'999999'
            // })
        // return results[0].name;
        const updateSuccess = result.affectedRows === 1;
        return result
    }
}
module.exports = customService