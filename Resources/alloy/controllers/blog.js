function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.win = Ti.UI.createWindow({
        id: "win",
        title: "Blog"
    });
    $.addTopLevelView($.__views.win);
    init ? $.__views.win.addEventListener("focus", init) : __defers["$.__views.win!focus!init"] = !0;
    $.__views.tv = Ti.UI.createTableView({
        id: "tv"
    });
    $.__views.win.add($.__views.tv);
    onTableClick ? $.__views.tv.addEventListener("click", onTableClick) : __defers["$.__views.tv!click!onTableClick"] = !0;
    $.__views.errorLabel = Ti.UI.createLabel({
        text: "Please check your internet connection.",
        id: "errorLabel",
        visible: "false"
    });
    $.__views.win.add($.__views.errorLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Alloy = require("alloy"), nav = $.nav, win = $.blogWin, table = $.tv, tab = null;
    exports.setParentTab = function(pTab) {
        tab = pTab;
    };
    var init = function() {
        Ti.API.info("[blog][init]");
        refresh();
    }, refresh = function() {
        Ti.API.info("[blog][refresh]");
        var url = Alloy.Globals.SITE_PATH + "blog/api/json", xhr = Titanium.Network.createHTTPClient();
        xhr.open("GET", url);
        xhr.onerror = function() {
            handleError();
        };
        xhr.onload = function() {
            var statusCode = xhr.status;
            if (statusCode == 200) {
                var response = xhr.responseText, result = JSON.parse(response), results = new Array;
                for (var key in result) {
                    var data = result[key];
                    results[key] = {
                        title: data.title,
                        hasChild: !0,
                        nid: data.nid
                    };
                }
                table.setData(results);
            } else handleError();
        };
        xhr.send();
    }, onTableClick = function(e) {
        var node = Alloy.createController("blogNode", {
            nid: e.rowData.nid,
            title: e.rowData.title
        });
        tab.open(node.window);
    }, handleError = function() {
        $.errorLabel.visible = !0;
    };
    __defers["$.__views.win!focus!init"] && $.__views.win.addEventListener("focus", init);
    __defers["$.__views.tv!click!onTableClick"] && $.__views.tv.addEventListener("click", onTableClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;