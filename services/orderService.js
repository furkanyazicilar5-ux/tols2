const plcService = require('./plcService');

let queue = [];
let processing = false;

function enqueue(order) {
  return new Promise((resolve, reject) => {
    queue.push({ order, resolve, reject });
    run();
  });
}

async function run() {
  if (processing || queue.length === 0) return;
  processing = true;
  const { order, resolve, reject } = queue.shift();
  try {
    const result = await plcService.makeDrink(order);
    resolve(result);
  } catch (err) {
    reject(err);
  } finally {
    processing = false;
    run();
  }
}

async function processOrder(order) {
  return enqueue(order);
}

module.exports = { processOrder };
