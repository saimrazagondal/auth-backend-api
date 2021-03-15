const app = require("./app");

const PORT = 8080;

app.get('/status', (req, res) => {
  res.send({ status: 'Sever is active' });
});

app.listen(PORT, () => console.log(`🌩️ Server running at port ${PORT}`));
