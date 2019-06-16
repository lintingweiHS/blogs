const controller = require('egg').Controller;
class diaryController extends controller {
    async index() {
        let data = await this.ctx.service.diaryService.get();
        this.ctx.body = data;
    }
    async show() {
      let id = this.ctx.params.id;
      let data = await this.ctx.service.diaryService.show(id);
      this.ctx.body = data
    }
    async create() {
        let options = this.ctx.request.body;
        options.date = new Date();
        let data = await this.ctx.service.diaryService.post(options);
        if (data) {
            this.ctx.body = { success: 200, message: '添加成功' };

        } else {
            this.ctx.body = { success: 404, message: '添加失败' };
        }
    }
    async destroy(){
        let id = this.ctx.params.id;
        let data = await this.ctx.service.diaryService.delete(id);
        if(data){
          this.ctx.body = {success:200,message:'删除成功'};
    
        }else{
          this.ctx.body = {success:404,message:'删除失败'};
        }
      }
      async update(){
        let options = this.ctx.request.body;
        let data = await this.ctx.service.diaryService.put(options);
        if(data){
          this.ctx.body = {success:200,message:'编辑成功'};
    
        }else{
          this.ctx.body = {success:404,message:'编辑失败'};
        }
      }
}

module.exports = diaryController;