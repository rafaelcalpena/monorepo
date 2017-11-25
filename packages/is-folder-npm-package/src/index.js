import path from 'path'

export default (folder) => {
  return new Promise(async (resolve, reject) => {
    try {
      const filePath = path.resolve(folder, 'package.json');
      const fileExists = await readFile(filePath);
      resolve(true);
    } catch(e) {
      resolve(false);
    }
  })
}
