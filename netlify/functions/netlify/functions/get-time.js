exports.handler = async function (event, context) {
  const now = new Date(); // current UTC time

  // Format as HH:MM string
  const hh = String(now.getUTCHours()).padStart(2, '0');
  const mm = String(now.getUTCMinutes()).padStart(2, '0');
  const formatted = `${hh}:${mm}`;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ time: formatted }),
  };
};
