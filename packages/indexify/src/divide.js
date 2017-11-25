// @flow

import createReduce from './reduce'
import indexify from './index.js'

type divideConditionType = ( value: any, key: string | number) => boolean

/* Keys and values must be provided from indexify to create the divide function */
type keysAndValues = {keys: Array<string>, values: Array<any>}

/* Our divideFunction is composed of a divideCondition function, and returns an array with two groups of objects */
type divideFunction = (condition: divideConditionType ) => {yes: Object, no: Object};


/* The result is a divided set */
type groups = {};
type resultGroupsType = Array<groups>

/* Creator function for divide */
export default ({keys, values}: keysAndValues) : divideFunction => {

  const resultGroups : resultGroupsType = [{}, {}];

  return (condition) => {
    const reduce = createReduce({keys, values});

    const results = reduce((acc, value, key) => {
      if (condition(value, key) === true){
        acc[0][key] = value;
      } else {
        acc[1][key] = value;
      }
      return acc;
    }, resultGroups).map(division => indexify(division))
    return {yes: results[0], no: results[1]}
  }
}
