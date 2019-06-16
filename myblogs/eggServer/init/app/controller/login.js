const contorller = require('egg').Controller;
class loginController extends contorller{
   async post(){
    let options = await this.ctx.request.body
    let info = await this.ctx.service.loginService.post(options);
    if(info){
        this.ctx.body = {success:200,message:options.name}
    }else{
        this.ctx.body ={message:'账号或密码错误'}
    }
    }
}
module.exports = loginController;