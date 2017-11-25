// @flow

/*
  Indexify is a type of object that can be used for easier data manipulation.
*/

import schema from './schema'

import type {inputObject} from './input-object.type';

import indexifyArray from './indexify-array';
import createReduce from './reduce';
import createDivide from './divide';
import createMap from './map';

type optionsType = {value: (any, number) => any, key: (any, number) => string }


/* send PR to flow, because when type is nested in code there is a weird bound to error
  Therefore, type must be on top of code
 */

type keepKeyIntactType = (v: string) => string;

type getObjectKeyNamedAsInputType = (v: string) => any

const indexify = (object: inputObject , options?: optionsType ) : Object => {

  /* Initial setup. These are private keys for the created object */
  let obj, length;
  let keys = [];
  let values = [];

  /* Two types of input are accepted: An array, or a hashtable */

  if (Array.isArray(object) ){

    const result = indexifyArray(object, options, keys, values)
    obj = result.obj,
    length = result.length;

  } else if (typeof object === "object" ) {
    /* If the object provided is not an array, we can create one by recursively calling indexify
      The "dictionary" will make use of the options to invert the key and value provided
    */
    /* This function does not transform a key */
    const keepKeyIntact : keepKeyIntactType = (v) => v;

    /* This will get the object key that is named as the input */
    const getObjectKeyNamedAsInput : getObjectKeyNamedAsInputType = (v) => object[v];

    const objectKeys = Object.keys(object);

    return indexify(objectKeys, {key: keepKeyIntact, value: getObjectKeyNamedAsInput })
  }


  return {
    getAll: () => obj,
    get: (item) => obj[item],
    length: () => length,
    keys: () => keys,
    values: () => values,
    reduce: createReduce({keys, values}),
    divide: createDivide({keys, values}),
    map: createMap({keys, values})
  }

}

export default indexify
