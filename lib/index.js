"use strict";
var jhtmls = require("jhtmls");
module.exports = (function (content, attrs, scope) {
    if (!content) {
        return content;
    }
    var render = jhtmls.render(content);
    var data = null;
    if (attrs.data) {
        data = scope.execImport(attrs.data, true);
    }
    return render(data);
});
