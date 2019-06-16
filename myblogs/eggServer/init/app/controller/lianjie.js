const Controller = require('egg').Controller;
class lianjieController extends Controller{
    async index(){
        let data = await this.ctx.service.lianjieService.get();
        this.ctx.body = data
    }
    async destroy(){
        let id = this.ctx.params.id;
        let data = this.ctx.service.lianjieService.delete(id);
        if(data){
            this.ctx.body = {success:200,message:'删除成功'};
      
          }else{
            this.ctx.body = {success:404,message:'删除失败'};
          }
    }
    async create(){
        let option = this.ctx.request.body;
        let data = this.ctx.service.lianjieService.post(option)
        if(data){
            this.ctx.body = {success:200,message:'新增成功'};
      
          }else{
            this.ctx.body = {success:404,message:'新增失败'};
          }
    }
}
module.exports = lianjieController