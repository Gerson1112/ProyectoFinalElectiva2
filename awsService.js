const awsIot = require("aws-iot-device-sdk");

const device  =  awsIot.device({
  keyPath: './awsCerts/ea2bc5989eb6bb06055c85001bb615ca5cc5549400a998638c6570cc6a1d0fad-private.pem.key',
  certPath: './awsCerts/ea2bc5989eb6bb06055c85001bb615ca5cc5549400a998638c6570cc6a1d0fad-certificate.pem.crt',
  caPath: './awsCerts/AmazonRootCA1.pem',
  host: 'atx0ids0eqp04-ats.iot.us-east-1.amazonaws.com',
  clientId: 'Prueba_Proyecto',
  region: 'us-east-1',
});



module.exports = { device };
