// @flow
import indexify from './index'

type keysAndValues = {keys: Array<string>, values: Array<any>};

export default ({keys, values} : keysAndValues ) => {
  return (fn : (value : any, key: string) => any ) => {
    return indexify(keys.reduce((acc, key, i) => {
      const value = values[i]
      const response = fn(value, key)
      const k : string = Object.keys(response)[0];
      acc[k] = response[k]
      return acc;
    }, {}))
  }
}
