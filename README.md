<!DOCTYPE html>
<html>
<head>
  <title>ESP Control Panel</title>
</head>
<body>
  <h1>Control ESP</h1>
  <button onclick="sendCommand(1)">Turn ON</button>
  <button onclick="sendCommand(0)">Turn OFF</button>

  <script>
    function sendCommand(cmd) {
      fetch(`https://your-api-url.com/control?state=${cmd}`)
        .then(res => console.log("Command sent:", cmd));
    }
  </script>
</body>
</html>
