
const fs = require('fs');
const path = require('path');

function returnWhatIsPassed(arg) {
  return arg
}

module.exports = (fileName) => {
  let functionToReturn
  try {
    functionToReturn = require(path.resolve(process.env.REACT_SCRIPTS_CONFIG, fileName));
  } catch(e) {
    functionToReturn = returnWhatIsPassed;
  }
  return functionToReturn;
};
