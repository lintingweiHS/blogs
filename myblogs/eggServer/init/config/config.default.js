/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    
    security: {
      csrf: {
        enable: false,
        ignoreJSON: true,
        // headerName: 'x-csrf-token',
      },
      domainWhiteList: ['http://localhost:8081']
    },
    cors : {
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  },
    mysql : {
      client:{
        host:'127.0.0.1',
        port:'3305',
        user:'root',
        password:'',
        database:'myblog'
      },
      app:true,
      agent:false
    }
  };


  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1558421166934_1633';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
