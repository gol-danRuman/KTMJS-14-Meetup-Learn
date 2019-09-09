
/**
 * Delay funtion
 * @param {*} ms : time of delay
 * @param {*} result : result after delay
 */
const delay = (ms, result) =>
  new Promise(resolve => setTimeout(() => resolve(result), ms));


  /**
   * Pros
      - Clean code, low syntax noise
      -  Native in current Chrome, Node.js
    Cons
      - Still needs to be transpiled with Babel for most projects 
   * 
   */
  async function AsyncCodeWithAsyncAwaitFunction() {
    let a = await delay(800, "Hello, I'm in an");
    console.log(a);
  
    let b = await delay(400, "async function!");
    console.log(b);
  }
  
  AsyncCodeWithAsyncAwaitFunction();

