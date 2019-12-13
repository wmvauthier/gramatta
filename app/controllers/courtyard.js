module.exports.courtyard = function (application, req, res) {

    var connection = application.config.dbConnection();
    var courtyardModel = new application.app.models.CourtyardDAO(connection);

    var id_courtyard = req.params.id;

    courtyardModel.getCourtyard(id_courtyard, function (error, result) {
        updateCountDocuments(application, result);
        if (result) {
            res.json(result[0]);
        }
        else {
            res.json({ 'error': error });
        }
    });

}

module.exports.courtyards = function (application, req, res) {

    var connection = application.config.dbConnection();
    var courtyardModel = new application.app.models.CourtyardDAO(connection);

    courtyardModel.getAllCourtyards(function (error, result) {

        updateCountDocuments(application, result);

        courtyardModel.getAllCourtyards(function (error, resultFinal) {
            if (resultFinal) {
                res.json(resultFinal);
            }
            else {
                res.json({ 'error': error });
            }
        });

    });

}

function updateCountDocuments(application, courtyards) {

    if (courtyards) {
        courtyards.forEach(element => {

            var connection = application.config.dbConnection();
            var courtyardModel = new application.app.models.CourtyardDAO(connection);
            var documentModel = new application.app.models.DocumentDAO(connection);

            var id_courtyard = element.id_patio;

            courtyardModel.getCourtyard(id_courtyard, function (error, resultCourtyard) {
                documentModel.getAllOnCourtyardDocumentsFromCourtyard(id_courtyard, function (error, resultDoc) {

                    if (resultDoc) {
                        if (resultCourtyard) {
                            var onCourtyard = resultDoc.length;
                            var outCourtyard = resultCourtyard[0].qtd - resultDoc.length;

                            courtyardModel.updateCountCourtyard(onCourtyard, outCourtyard, id_courtyard, function (error, resultCount) {
                                courtyardModel.getCourtyard(id_courtyard, function (error, result) {

                                });
                            });
                        }
                    }

                });
            });

        });
    }

}

module.exports.countDocumentsFromCourtyards = function (application, req, res) {

    var connection = application.config.dbConnection();
    var courtyardModel = new application.app.models.CourtyardDAO(connection);
    var documentModel = new application.app.models.DocumentDAO(connection);

    var id_courtyard = req.params.id;

    documentModel.getAllOnCourtyardHoristsDocumentsFromCourtyard(id_courtyard, function (error, resultHorists) {
        documentModel.getAllOnCourtyardMonthlyDocumentsFromCourtyard(id_courtyard, function (error, resultMonthly) {
            documentModel.getAllOnCourtyardAuthorizedDocumentsFromCourtyard(id_courtyard, function (error, resultAuthorized) {
                documentModel.getAllOnCourtyardAffiliateDocumentsFromCourtyard(id_courtyard, function (error, resultAffiliates) {
                    courtyardModel.getCourtyard(id_courtyard, function (error, resultCourtyard) {

                        if (resultAffiliates) {
                            var total = Object.keys(resultAffiliates).length +
                                Object.keys(resultMonthly).length +
                                Object.keys(resultHorists).length +
                                Object.keys(resultAuthorized).length;

                            var onCourtyard = total;
                            var outCourtyard = resultCourtyard[0].qtd - total;

                            courtyardModel.updateCountCourtyard(onCourtyard, outCourtyard, id_courtyard, function (error, resultDB) {
                                courtyardModel.getCourtyard(id_courtyard, function (error, resultCourtyardFinal) {

                                    var counts = (`{"Afiliados" : "${Object.keys(resultAffiliates).length}",
                                "Mensalistas" : "${Object.keys(resultMonthly).length}",
                                "Horistas" : "${Object.keys(resultHorists).length}",
                                "Autorizados" : "${Object.keys(resultAuthorized).length}",
                                "Disponível" : "${resultCourtyardFinal[0].qtd - total}"
                                }`);

                                    var result = JSON.parse(counts);
                                    res.json(result);
                                });
                            });
                        } else {
                            res.json({ 'error': error });
                        }

                    });
                });
            });
        });
    });

}

module.exports.insertCourtyard = function (application, req, res) {

    var connection = application.config.dbConnection();
    var courtyardModel = new application.app.models.CourtyardDAO(connection);

    var courtyard = req.body;
    courtyard.outCourtyard = courtyard.qtd;

    courtyardModel.insertCourtyard(courtyard, function (error, resultDB) {

        if (resultDB.insertId) {
            courtyardModel.getCourtyard(resultDB.insertId, function (error, result) {
                if (result) {
                    res.json(result[0]);
                }
                else {
                    res.json({ 'error': error });
                }
            });
        } else {
            res.json({ 'error': errorDB });
        }

    });

}

module.exports.updateCourtyard = function (application, req, res) {

    var connection = application.config.dbConnection();
    var courtyardModel = new application.app.models.CourtyardDAO(connection);

    var id_courtyard = req.params.id;
    var courtyard = req.body;

    courtyardModel.updateCourtyard(courtyard, id_courtyard, function (error, resultDB) {
        courtyardModel.getCourtyard(id_courtyard, function (error, result) {
            if (result) {
                res.json(result[0]);
            }
            else {
                res.json({ 'error': error });
            }
        });
    });

}

module.exports.deleteCourtyard = function (application, req, res) {

    var connection = application.config.dbConnection();
    var courtyardModel = new application.app.models.CourtyardDAO(connection);

    var id_courtyard = req.params.id;

    courtyardModel.deleteCourtyard(id_courtyard, function (error, result) {
        if (result) {
            res.json(result);
        }
        else {
            res.json({ 'error': error });
        }
    });

}