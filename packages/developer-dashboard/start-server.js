const args = [ 'start' ];
const env = {
  ...process.env, //this line is necessary, otherwise: env: node: No such file or directory
  CONFIG_PATH: process.env.CONFIG_PATH || require('path').resolve(process.cwd(), 'config.js')
};

console.log('config path is', env.CONFIG_PATH)

const opts = { stdio: 'inherit', cwd: './node_modules/@rafaelcalpena/developer-dashboard-server', shell:true, env };
require('child_process').spawn('npm', args, opts);
