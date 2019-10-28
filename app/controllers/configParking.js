module.exports.getConfigParking = function (application, req, res) {

  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  var connection = application.config.dbConnection();
  var configParkingModel = new application.app.models.ConfigParkingDAO(connection);

  configParkingModel.getConfigParking(function (error, result) {
    res.json(result[0]);
  });

}

module.exports.updateConfigParking = function (application, req, res) {

  var connection = application.config.dbConnection();
  var configParkingModel = new application.app.models.ConfigParkingDAO(connection);

  var configParking = req.query;

  configParkingModel.updateConfigParking(configParking, function (error, resultDB) {
    configParkingModel.getConfigParking(function (error, result) {
      res.json(result[0]);
    });
  });

};
