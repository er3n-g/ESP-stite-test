exports.handler = async (event, context) => {
  const sensorValue = event.queryStringParameters.sensor;

  // For now, just log the value. You can save it to a file or database later.
  console.log("Received sensor value:", sensorValue);

  return {
    statusCode: 200,
    body: `Sensor value received: ${sensorValue}`,
  };
};
