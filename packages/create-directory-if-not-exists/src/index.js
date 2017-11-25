import fs from 'fs';

export default (dir) => new Promise( (resolve, reject)=> {
  fs.mkdir(dir, (error) => {
    if (error) {
      if (error.code === 'EEXIST'){
        resolve("existed");
      } else {
        reject(error);
      }
    } else {
      resolve("created");
    }
  });
});
