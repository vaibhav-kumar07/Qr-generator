const express = require('express');
const app = express();
const qrRoutes = require('./routes/qrRoutes');
app.use(express.json());
const PORT = process.env.PORT || 3002;
app.use('/qr', qrRoutes);


app.listen(PORT, () => {
    console.log(`post is listening on ${PORT}`);
})

