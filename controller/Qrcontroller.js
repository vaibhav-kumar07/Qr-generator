const qrservice = require("../services/qrservice");

exports.generateQr = async function (req, res) {
    let { data } = req.body;
    const color = "#FF0000";
    console.log(data);
    text = JSON.stringify(data);
    try {
        const result = await qrservice.generateQr(text, color, 300);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json("an error occured while generating the qrcode");
    }

}