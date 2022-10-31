'use strict';

const moment = require('moment-timezone'); 
moment.locale('es');

module.exports.GetMoment = async (event) => {

  try {
    var timeSec = new Date().getDate();
    var timeT2 = moment.tz(timeSec, 'America/Mexico_city');

    return{
      statusCode: 200, 
      headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          message: 'Success', 
          data: {
            "TimeSec": timeSec, 
            "timeTZ" : timeT2
          }
        })
    }
  } catch (error) {
      return {
        statusCode: 400, 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          message: 'there was an error', 
          error: error.message
        })
      }
  }


  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
