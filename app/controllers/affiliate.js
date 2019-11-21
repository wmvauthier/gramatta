module.exports.affiliate = function (application, req, res) {

    var connection = application.config.dbConnection();
    var affiliateModel = new application.app.models.AffiliateDAO(connection);

    var id_affiliate = req.params.id;

    affiliateModel.getAffiliate(id_affiliate, function (error, result) {
        if(result){
            res.json(result[0]);
        }
        else{
            res.json({'error': error});
        }
    });

}

module.exports.affiliates = function (application, req, res) {

    var connection = application.config.dbConnection();
    var affiliateModel = new application.app.models.AffiliateDAO(connection);

    affiliateModel.getAllAffiliates(function (error, result) {
        if(result){
            res.json(result);
        }
        else{
            res.json({'error': error});
        }
    });

}

module.exports.insertAffiliate = function (application, req, res) {

    var connection = application.config.dbConnection();
    var affiliateModel = new application.app.models.AffiliateDAO(connection);

    var affiliate = req.body;

    affiliateModel.insertAffiliate(affiliate, function (error, resultDB) {

        if(resultDB.insertId){
            affiliateModel.getAffiliate(resultDB.insertId, function (error, result) {
                if(result){
                    res.json(result[0]);
                }
                else{
                    res.json({'error': error});
                }
            });
        }else{
            res.json({'error': error});
        }

    });

}

module.exports.updateAffiliate = function (application, req, res) {

    var connection = application.config.dbConnection();
    var affiliateModel = new application.app.models.AffiliateDAO(connection);

    var id_affiliate = req.params.id;
    var affiliate = req.body;

    affiliateModel.updateAffiliate(affiliate, id_affiliate, function (error, resultDB) {
        affiliateModel.getAffiliate(id_affiliate, function (error, result) {
            if(result){
                res.json(result[0]);
            }
            else{
                res.json({'error': error});
            }
        });
    });

}

module.exports.deleteAffiliate = function (application, req, res) {

    var connection = application.config.dbConnection();
    var affiliateModel = new application.app.models.AffiliateDAO(connection);

    var id_affiliate = req.params.id;

    affiliateModel.deleteAffiliate(id_affiliate, function (error, result) {
        if(result){
            res.json(result);
        }
        else{
            res.json({'error': error});
        }
    });

}