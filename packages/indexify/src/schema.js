/* Schema for indexify:
  object: hashtable,
  options: (optional) hashtable
*/

const isDictionary = (object) => {
  return isObject(object) && isNotNull(object) && isNotArray(object) && isNotDate(object) && isNotHTMLElement(object)
}

const isNotHTMLElement = (object) => {
   return Object.prototype.toString.call(object) !== '[object HTMLDivElement]'
}

const isNotDate = (object) => {
  Object.prototype.toString.call(date) !== '[object Date]'
}

const isNotArray = (object) => {
  return Array.isArray(object) !== true
}

const isNotNull = (object) => {
  return object !== null
}

const isObject = (object) => {
  return typeof object === "object"
}

const isUndefined = (...args) => {
  typeof args[0] === "undefined" && args.length === 1
}


export default ({object, options}) => {
  return isDictionary(object) && optional( isDictionary, options)
}
