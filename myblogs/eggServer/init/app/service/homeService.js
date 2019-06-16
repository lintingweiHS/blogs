const service = require('egg').Service;

class homeService extends service{
    async get(){
       let data = await this.app.mysql.select('home');
    //    console.log(data);
       return data
    }
    async post(option){
       let data = await this.app.mysql.insert('home',option)
       const updateSuccess = data.affectedRows === 1;
       return updateSuccess
    }
    async show(id){
       let data = await this.app.mysql.get('home',{id:id});
       return data
    }
    async delete(id){
       let data = await this.app.mysql.delete('home',{id:id})
       const updateSuccess = data.affectedRows === 1;
       return updateSuccess
    }
    async put(option){
       console.log(option)
      let data = await this.app.mysql.update('home',{id:option.id,content:option.content,title:option.title})
      const updateSuccess = data.affectedRows === 1;
      return updateSuccess
    }
}
module.exports = homeService;