
/**
 * Delay funtion
 * @param {*} ms : time of delay
 * @param {*} result : result after delay
 */
const delay = (ms, result) =>
  new Promise(resolve => setTimeout(() => resolve(result), ms));

  /***
   * Pros
        - No extra libraries needed since Promises are native
    Cons
        - Noisy callbacks
   */

  function AsyncWithPromiseChaining() {
    return delay(800, "Hello, I'm in a").then(a => {
      console.log(a);
      return delay(400, "Promise!");
    }).then(b => {
      console.log(b);
    });
  }
  
  // call it
  AsyncWithPromiseChaining();