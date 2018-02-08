function convertToObj(arr, spotify=false) {
    
    var obj = {};
    if (spotify) {
        arr.forEach(element => {
            obj[element.name]=null;
        });
        return obj;
    }
    for (var idx = 0; idx < arr.length; idx++) {
        obj[arr[idx]] = null;
    }
    return obj;
};

module.exports = convertToObj;