'use strict';

module.exports.errorlog = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `La variable numero  ${event.pathParameters.numero}`,
        multiplicado: `The variable * 2 will be ${Number(event.pathParameters.numero) * 2}`,

        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
