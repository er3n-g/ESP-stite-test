let sensorData = { sensor: "No data yet" };

exports.handler = async function(event) {
  if (event.httpMethod === "POST") {
    try {
      const data = JSON.parse(event.body);
      if (data.sensor) {
        sensorData.sensor = data.sensor;
        return {
          statusCode: 200,
          body: JSON.stringify({ message: "Sensor data saved." }),
        };
      }
      return { statusCode: 400, body: "Missing sensor value" };
    } catch (e) {
      return { statusCode: 400, body: "Invalid JSON" };
    }
  } else if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify(sensorData),
    };
  }
  return { statusCode: 405, body: "Method Not Allowed" };
};
