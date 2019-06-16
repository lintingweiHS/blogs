'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  };
  async get() {
    let data = await this.ctx.service.homeService.get();
    this.ctx.body = data;
  };
  async post() {
    let options = this.ctx.request.body;
    options.date = new Date();
    let data = await this.ctx.service.homeService.post(options);
    if (data) {
      this.ctx.body = { success: 200, message: '添加成功' };

    } else {
      this.ctx.body = { success: 404, message: '添加失败' };
    }
  }
  async show() {
    let id = this.ctx.params.id;
    let data = await this.ctx.service.homeService.show(id);
    this.ctx.body = data
  }
  async delete() {
    let id = this.ctx.params.id;
    let data = await this.ctx.service.homeService.delete(id);
    if (data) {
      this.ctx.body = { success: 200, message: '删除成功' };

    } else {
      this.ctx.body = { success: 404, message: '删除失败' };
    }
  }
  async put() {
    let id = this.ctx.params.id;
    let options = this.ctx.request.body;
    let data = await this.ctx.service.homeService.put(options);
    if (data) {
      this.ctx.body = { success: 200, message: '编辑成功' };

    } else {
      this.ctx.body = { success: 404, message: '编辑失败' };
    }
  }
}

module.exports = HomeController;
