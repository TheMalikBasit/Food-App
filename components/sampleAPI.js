const app = require('express')();
const PORT = 3000;

app.listen(
    PORT,
    () => console.log('Port is running on http://localhost:${PORT}')
)