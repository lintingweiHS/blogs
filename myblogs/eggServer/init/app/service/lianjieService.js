const service = require('egg').Service;
class lianjieService extends service {
    async get() {
        let data = await this.app.mysql.select('lianjie');
        return data
    }
    async delete(id) {
        let data = await this.app.mysql.delete('lianjie', { id: id });
        const updateSuccess = data.affectedRows === 1;
        return updateSuccess
    }
    async post(option){
        let data = await this.app.mysql.insert('lianjie',option)
        const updateSuccess = data.affectedRows === 1;
        return updateSuccess
    }
}
module.exports = lianjieService