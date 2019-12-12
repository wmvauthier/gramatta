function getActualTime() {

    var d = new Date();
    var month = d.getMonth() + 1;
    d = d.toString();

    var year = d.slice(11, 15);
    var day = d.slice(8, 10);
    var hour = d.slice(16, 24);
    d = d.slice(0, 5);

    return (`${day}/${month}/${year} ${hour}`);

}

module.exports.getActualTime = getActualTime;
