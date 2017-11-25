// @flow
type optionsType = {value: ({}, number) => any, key: (any, number) => string }

type indexifyArrayResult = {obj: Object, length: number} ;
type indexifyArrayType = (object : Array<any>, options?: optionsType, keys: Array<string>, values: Array<any> ) => indexifyArrayResult;

const indexifyArray : indexifyArrayType = (object, options, keys, values)  => {
  /* This function mutates input. Bad. */
  let length = 0;
  const objResult = object.reduce((acc, item, index) => {
  let key;

  /* An option for customizing each key can be specified in options.key
    The function will receive the item and index for each iteration */
  if( typeof options === "object" && options !== null && options.key ){
    key = options.key(item, index);
  }
  /* If not specified, the key will be set as the array index */
  else {
    key = index;
  }

  let value;

  /* Values can also be customized, similar to the above, but by specifying
    a function in options.value */
  if ( typeof options === "object" && options !== null && 'value' in options ){
    value = options.value(item, index);
  }
  /* If not specified, value will remain intact */
  else {
    value = item;
  }

  /* We set the value for the accumulator */
  acc[key] = value;

  /* Increase the length for each iteration.
    Maybe arr.length would be more useful here?
   */
  length++;

  /* These options enable keys and values lookup in O(1),
     the downside is that it adds up 2*n to space.
     They should be off by default
   */
  if (/*options && options.o1 && keys in options.o1 && options.o1.includes('keys')*/ true){
    /* We must convert from key int type to string */
    keys.push(key.toString());
  }
  if (/*options && options.o1 && values in options.o1 && options.o1.includes('values')*/ true){
    values.push(value);
  }

  return acc
}, {})
  return {obj: objResult, length}
}

export default indexifyArray;
