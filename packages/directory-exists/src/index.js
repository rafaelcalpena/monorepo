import fs from 'fs'

export default (folder) => new Promise( async (resolve, reject) => {
  fs.stat(folder, function (err, stats){
    if (err) {
      resolve(false);
    } else {
      resolve(true);
    }
  });
})
