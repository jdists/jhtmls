"use strict";
var jhtmls = require("jhtmls");
var jdistsUtil = require("jdists-util");
var jsyaml = require("js-yaml");
module.exports = (function (content, attrs, scope) {
    if (!content) {
        return content;
    }
    var render = jhtmls.render(content);
    var data = null;
    if (attrs.data) {
        data = scope.execImport(attrs.data);
        if (typeof data === 'string') {
            data = jsyaml.safeLoad(data);
        }
    }
    if (jdistsUtil.isNo(attrs.rework)) {
        return render(data);
    }
    else {
        return scope.compile(render(data));
    }
});
