import indexifyArray from '../src/indexify-array'

describe('indexifyArray', () => {
  it('indexifies an array and return the hashmap', () => {

    const array = [
      'first value',
      'second item',
      'third thing'
    ]

    const result = {
      obj: {
        0: 'first value',
        1: 'second item',
        2: 'third thing'
      },
       length: 3
     }

  expect( indexifyArray(array, null, [], []) )
  .toEqual(result)
  })
})
