// Callback hell problem
/**
 * Delay funtion
 * @param {*} ms : time of delay
 * @param {*} result : result after delay
 */
const delay = (ms, result) =>
  new Promise(resolve => setTimeout(() => resolve(result), ms));

/**
 * Pros
        - No pyramid of doom
        - Flow can be traced easily
    Cons
        - Some coroutine library is needed
        - Generators must be used
 */
function* AsyncCoroutine() {
    let a = yield delay(800, "Hello, I'm an");
    console.log(a);
  
    let b = yield delay(400, "async coroutine!");
    console.log(b);
  }



  const coroutine = nextValue => iterator => {
    const { done, value } = iterator.next(nextValue);
  
    if (done) {
      return;
    }
  
    if (value.constructor === Promise) {
      value.then(promiseValue => {
        coroutine(promiseValue)(iterator);
      });
    } else {
      coroutine(value)(iterator);
    }
  };
  
  
  // call it
  coroutine()(AsyncCoroutine());