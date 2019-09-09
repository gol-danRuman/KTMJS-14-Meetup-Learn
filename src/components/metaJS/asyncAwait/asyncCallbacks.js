// Callback hell problem
/**
 * Delay funtion
 * @param {*} ms : time of delay
 * @param {*} result : result after delay
 */
const delay = (ms, result, cb) => setTimeout(() => cb(result), ms);

/**
 * Pros
        - Easy to understand
        - No libs needed, backward compatible
    Cons
        - Pyramid of doom
        - More difficult to maintain
 */
function AsyncCallbacks() {
  delay(800, "Hello, I'm in a", a => {
    console.log(a);
    delay(400, "callback!", b => {
      console.log(b);
    });
  });
}

// call it
AsyncCallbacks();