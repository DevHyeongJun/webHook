const Service = require('node-windows').Service;

// Create a new service object
const svc = new Service({
  name:'nateOn WebHook',
  description: 'The nodejs.org example web server.',
  script: __dirname+'/main.js',                                //실행 메인 서버 스크립트 경로

  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();