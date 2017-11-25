import getPackageJSON from '@rafaelcalpena/get-package-json'


export default ({parentFolder, folder}) => {
  const packageJSON = getPackageJSON({parentFolder, folder});
  return {
    ...packageJSON.dependencies,
    ...packageJSON.devDependencies
  }
}
