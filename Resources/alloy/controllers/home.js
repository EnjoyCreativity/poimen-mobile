function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.win = Ti.UI.createWindow({
        title: "Home",
        id: "win"
    });
    $.addTopLevelView($.__views.win);
    init ? $.__views.win.addEventListener("focus", init) : __defers["$.__views.win!focus!init"] = !0;
    $.__views.web = Ti.UI.createWebView({
        id: "web"
    });
    $.__views.win.add($.__views.web);
    $.__views.errorLabel = Ti.UI.createLabel({
        text: "Please check your internet connection.",
        id: "errorLabel",
        visible: "false"
    });
    $.__views.win.add($.__views.errorLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Alloy = require("alloy"), win = $.win, view = $.web, init = function() {
        Ti.API.info("[home][init]");
        refresh();
    }, refresh = function() {
        Ti.API.info("[home][refresh]");
        var xhr = Titanium.Network.createHTTPClient(), url = Alloy.Globals.REST_PATH + "node/9" + ".json";
        Ti.API.info("[home][refresh] url = " + url);
        xhr.open("GET", url);
        xhr.onload = function() {
            Ti.API.info("[onload]");
            var statusCode = xhr.status;
            if (statusCode == 200) {
                var response = xhr.responseText, data = JSON.parse(response), bodyHtml = "<html><head><title>Sample HTML</title><link rel=\"stylesheet\" href=\"styles.css\" type=\"text/css\" /></head><body><div class=\"webview\">";
                bodyHtml = bodyHtml + "<h1>" + data.title + "</h1>" + data.body.und[0].value;
                bodyHtml += "</div></body></html>";
                Ti.API.info("bodyHTML = " + bodyHtml);
                view.setHtml(bodyHtml);
            } else handleError();
        };
        xhr.onerror = function(err) {
            handleError();
        };
        xhr.send();
    }, handleError = function() {
        $.errorLabel.visible = !0;
    };
    __defers["$.__views.win!focus!init"] && $.__views.win.addEventListener("focus", init);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;