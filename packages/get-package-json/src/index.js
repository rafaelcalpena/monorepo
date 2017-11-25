import path from 'path'

export default ({parentFolder, folder}) => {
  return require(path.resolve(parentFolder, folder, './package.json'))
}
