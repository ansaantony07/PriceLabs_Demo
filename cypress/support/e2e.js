// https://on.cypress.io/configuration
// ***********************************************************
import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Cypress caught an exception:', err.message);
  if (err.message.includes('Script error') || err.message.includes('Minified React error #419')) {
    return false;
  }
  return true;
});

  
  