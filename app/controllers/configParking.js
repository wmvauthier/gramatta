module.exports.getConfigParking = function (application, req, res) {

  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  var connection = application.config.dbConnection();
  var configParkingModel = new application.app.models.ConfigParkingDAO(connection);

  configParkingModel.getConfigParking(function (error, result) {
    if(result){
      res.json(result[0]);
  }
  else{
      res.json({'error': error});
  }
  });

}

module.exports.updateConfigParking = function (application, req, res) {

  var connection = application.config.dbConnection();
  var configParkingModel = new application.app.models.ConfigParkingDAO(connection);

  var configParking = req.query;

  configParkingModel.updateConfigParking(configParking, function (error, resultDB) {
    configParkingModel.getConfigParking(function (error, result) {
      if(result){
        if(result){
          res.json(result[0]);
      }
      else{
          res.json({'error': error});
      }
    }
    else{
        res.json({'error': error});
    }
    });
  });

};
