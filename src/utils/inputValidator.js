const _ = require('lodash');

const inputValidator = (inputObject) => {
    const objectEntries = Object.entries(inputObject);
    for(let i in objectEntries){
      if(_.isNil(objectEntries[i][1])){
        return {
          success: false,
          message: `Param ${objectEntries[i][0]} is missing`,
        }
      }
    }
    return {
      success: true,
    };
}

module.exports = inputValidator;
