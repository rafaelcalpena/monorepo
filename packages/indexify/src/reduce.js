// @flow

type objectReduceFunctionIterator = (accumulator : any, values: any, key: string) => any ;
type objectReduceFunction = (fn : objectReduceFunctionIterator, acc: any) => any;

import type {reduceInput} from './reduce-input.type'
/* Constructor function.
  Receives an array of keys, and another of values
 */
export default ({keys, values} : reduceInput) : objectReduceFunction => {
  /* Similar to an array reduce, but this will return a dictionary instead */
  /* First input should be a function that will iterate key/value pairs, the second should be an accumulator */
  return (fn, acc) => {
    keys.forEach((key, index) => {
      acc = fn(acc, values[index], key);
    })
    return acc;
  }
}
