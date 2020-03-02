export var camelCaseToNormal = function (str) {
    return str.replace(/([A-Z])/g, ' $1').replace(/^./, function (str2) { return str2.toUpperCase(); });
};
