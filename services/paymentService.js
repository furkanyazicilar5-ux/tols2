async function preauth(amount) {
  // Placeholder for payment provider preauthorization
  return { authId: 'demo', amount };
}

async function capture(authId) {
  // Placeholder capture
  return { success: true, authId };
}

async function refund(authId) {
  // Placeholder refund
  return { success: true, authId };
}

module.exports = { preauth, capture, refund };
