// add flow later

import divide from '../src/divide'

describe('Divide function', () => {

  const keys = ['a','b','c','d'];
  const values = [0,1,2,3];
  const divideFunction = divide({keys, values}); //bind keys and values to created function

  const condition = (value) => value < 2;

  it('divide an indexify object based on a condition', () => {
    const {yes, no} = divideFunction(condition);

    expect(yes.getAll()).toEqual({'a': 0, 'b': 1});
    expect(yes.length()).toEqual(2);
    expect(no.getAll()).toEqual({'c': 2, 'd': 3});
    expect(no.length()).toEqual(2);

  })

});
