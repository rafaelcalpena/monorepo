import hostile from 'hostile';

export default {
  get(preserve){
    return new Promise((resolve, reject) => {
      hostile.get(preserve, (err, lines) => {
        if (err) {
          reject(err);
        }
        resolve(lines);
      })
    })
  },
  set(a, b){
    return new Promise((resolve, reject) => {
      hostile.set(a, b, (err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      })
    })
  },
  remove(a, b){
    return new Promise((resolve, reject) => {
      hostile.remove(a, b, (err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      })
    })
  }
}
