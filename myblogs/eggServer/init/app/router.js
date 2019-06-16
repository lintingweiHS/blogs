'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.login.post);
  router.get('/home', controller.home.get);
  router.get('/home/:id', controller.home.show);
  router.post('/home', controller.home.post);
  router.delete('/home/:id', controller.home.delete);
  router.put('/home/:id', controller.home.put);

  router.resources('lianjie', '/lianjie', controller.lianjie);
  // router.get('/lianjie', controller.lianjie.get);
  router.resources('diary', '/diary', controller.diary);
  // router.get('/diary', controller.diary.get);
  // router.get('/custom',controller.customController.index)
};
