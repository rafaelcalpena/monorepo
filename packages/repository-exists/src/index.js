import run from '@rafaelcalpena/run'
import path from 'path'

import directoryExists from '@rafaelcalpena/directory-exists'

export default ({folder, parentFolder}) => new Promise ( async (resolve, reject) => {
  const directory = path.resolve(parentFolder, folder);

  const folderExists = await directoryExists(directory);
  if (folderExists) {
    const gitCommand = run('git', ['rev-parse','--show-toplevel'],  { shell: true, cwd: directory });

    let isRepo;

    gitCommand.stdout.on('data', (data) => {
      const repoRoot = path.resolve(data.toString().split('\n')[0]);
      isRepo = repoRoot === directory;
    });

    gitCommand.on('exit', (...args) => {
      resolve(isRepo);
    });
  } else {
    resolve(false);
  }


});
