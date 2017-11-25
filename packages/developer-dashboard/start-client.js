const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: './node_modules/@rafaelcalpena/custom-app-client', shell: true };
require('child_process').spawn('npm', args, opts);
