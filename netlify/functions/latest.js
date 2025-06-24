let sensorData = { tank1: "No data yet", tank2: "No data yet" };

exports.handler = async function(event) {
  if (event.httpMethod === "POST") {
    try {
      const data = JSON.parse(event.body);

      // Ensure both tank1 and tank2 are present
      if (data.tank1 !== undefined && data.tank2 !== undefined) {
        sensorData.tank1 = data.tank1;
        sensorData.tank2 = data.tank2;

        return {
          statusCode: 200,
          body: JSON.stringify({ message: "Sensor data saved." }),
        };
      }
      return { statusCode: 400, body: "Missing tank1 or tank2 value" };
    } catch (e) {
      return { statusCode: 400, body: "Invalid JSON" };
    }
  } 
  
  else if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify(sensorData),
    };
  }
  
  return { statusCode: 405, body: "Method Not Allowed" };
};
