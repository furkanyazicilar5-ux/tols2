const ModbusRTU = require('modbus-serial');
const config = require('../config/plc_map.json');

const client = new ModbusRTU();
let connected = false;

async function connect() {
  if (connected) return;
  try {
    await client.connectTCP('127.0.0.1', { port: 502 });
    client.setID(1);
    connected = true;
  } catch (err) {
    throw new Error('PLC connection failed: ' + err.message);
  }
}

async function readStatus() {
  await connect();
  const statusReg = config.registers.status;
  const errorReg = config.registers.error_code;
  const status = await client.readHoldingRegisters(statusReg, 2);
  return {
    status: status.data[0],
    error: status.data[1]
  };
}

async function makeDrink(order) {
  await connect();
  // Placeholder: simulate drink process
  await client.writeCoil(config.coils.valve_a, true);
  await new Promise(r => setTimeout(r, 500));
  await client.writeCoil(config.coils.valve_a, false);
  return { done: true };
}

module.exports = { readStatus, makeDrink };
