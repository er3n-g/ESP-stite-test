exports.handler = async () => {
  const now = new Date();

  // Israel time = UTC + 3 hours
  const offsetMinutes = 3 * 60; // 180 minutes
  const israelTime = new Date(now.getTime() + offsetMinutes * 60000);

  const hours = israelTime.getHours().toString().padStart(2, '0');
  const minutes = israelTime.getMinutes().toString().padStart(2, '0');
  const time = `${hours}:${minutes}`;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ time })
  };
};
