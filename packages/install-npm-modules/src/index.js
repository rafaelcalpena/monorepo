import run from '@rafaelcalpena/run'


export default ({folder}) => new Promise (async (resolve, reject) => {
  const npmCommand = run('npm', ['install'],  { shell: true, cwd: folder, stdio: 'pipe' });

  npmCommand.on('exit', (code) => {
    if (code === 0){
      resolve(true);
    } else {
      reject(code)
    }
  })

})
