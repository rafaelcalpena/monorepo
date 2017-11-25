import run from '@rafaelcalpena/run'

export default async ({url, folder, parentFolder}) => new Promise((resolve, reject) => {

  /* filter out git+ from url to avoid errors */
  url = url.replace(/^git\+/, '');

  const cloneCommand = run('git', [
    'clone',
    url,
    folder
  ], { shell: true, cwd: parentFolder });

  cloneCommand.on('exit', (code) => {
    if (code === 0){
      resolve(true);
    } else {
      reject(code);
    }
  });
})
