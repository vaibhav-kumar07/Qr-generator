const qrcode = require("qrcode");
const fs = require('fs');
const qr = require('qr-image');
const outputFilePath = "qr-code.png"

exports.generateQr = async function (text, color, size) {
    try {
        const Qr = await qrcode.toDataURL(text, { color, width: size, height: size });

        const base64Data = Qr;
        const base64Image = base64Data.replace(/^data:image\/png;base64,/, '');
        const buffer = Buffer.from(base64Image, 'base64');
        fs.writeFileSync(outputFilePath, buffer);

        console.log('QR code generated successfully');
        return { success: true, filePath: outputFilePath };
    } catch (error) {
        console.error('Error generating QR code:', error);
        return { error: 'Error generating QR code' };
    }
};
