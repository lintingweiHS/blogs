service = require('egg').Service;
class diaryService extends service{
    async get(){
        let data = await this.app.mysql.select('diary');
        return data
    }
    async show(id){
      let data = await this.app.mysql.get('diary',{id:id});
      return data
   }
    async post(option){
        let data = await this.app.mysql.insert('diary',option)
        const updateSuccess = data.affectedRows === 1;
        return updateSuccess
     }
     async delete(id){
        let data = await this.app.mysql.delete('diary',{id:id})
        const updateSuccess = data.affectedRows === 1;
        return updateSuccess
     }
     async put(option){
       let data = await this.app.mysql.update('diary',{id:option.id,content:option.content,title:option.title})
       const updateSuccess = data.affectedRows === 1;
       return updateSuccess
     }
}
module.exports = diaryService;