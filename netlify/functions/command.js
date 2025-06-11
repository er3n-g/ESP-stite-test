// set-command.js
let currentCommand = "";

exports.handler = async (event) => {
  if (event.httpMethod === "POST") {
    const { command } = JSON.parse(event.body || "{}");
    currentCommand = command;
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Command updated", command }),
    };
  }

  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify({ command: currentCommand }),
    };
  }

  return { statusCode: 405, body: "Method Not Allowed" };
};

