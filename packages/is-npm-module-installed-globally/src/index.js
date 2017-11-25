import {asyncAwait} from '@rafaelcalpena/js-module/src/asyncAwait'

import run from '@rafaelcalpena/run'


const isInstalledGlobally = (module) => new Promise (async (resolve, reject) => {
  const npmCommand = run('npm', ['list', '-g', module, '--depth=0', '--json=true'],  { shell: true, stdio: 'pipe' });

  npmCommand.on('exit', (code) => {
    if (code === 0){
      resolve(true);
    } else if (code === 1) {
      resolve(false);
    } else {
      reject(code);
    }
  });

});

export default isInstalledGlobally;
