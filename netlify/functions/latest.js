let lastSensorValue = "No data yet";

exports.handler = async (event, context) => {
  console.log("HTTP Method:", event.httpMethod);
  console.log("Event Body:", event.body);

  if (event.httpMethod === "POST") {
    try {
      const { sensor } = JSON.parse(event.body || "{}");
      console.log("Received sensor:", sensor);

      if (sensor) {
        lastSensorValue = sensor;
      }

      return {
        statusCode: 200,
        body: "Sensor data saved.",
      };
    } catch (err) {
      console.error("Error parsing POST body:", err);
      return {
        statusCode: 400,
        body: "Invalid JSON",
      };
    }
  } else if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sensor: lastSensorValue }),
    };
  }
};
