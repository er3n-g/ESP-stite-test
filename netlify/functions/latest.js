let lastSensorValue = "No data yet";

exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    const { sensor } = JSON.parse(event.body || "{}");
    lastSensorValue = sensor || lastSensorValue;
    return {
      statusCode: 200,
      body: "Sensor data saved.",
    };
  } else if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sensor: lastSensorValue }),
    };
  }
};

