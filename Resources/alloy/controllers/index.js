function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.tabs = Ti.UI.createTabGroup({
        id: "tabs"
    });
    $.__views.home = Alloy.createController("home", {
        id: "home"
    });
    $.__views.__alloyId0 = Ti.UI.createTab({
        window: $.__views.home.getViewEx({
            recurse: !0
        }),
        title: "Home",
        icon: "/icons/53-house.png",
        id: "__alloyId0"
    });
    $.__views.tabs.addTab($.__views.__alloyId0);
    $.__views.blog = Alloy.createController("blog", {
        id: "blog"
    });
    $.__views.blogTab = Ti.UI.createTab({
        window: $.__views.blog.getViewEx({
            recurse: !0
        }),
        id: "blogTab",
        title: "Blog",
        icon: "/icons/96-book.png"
    });
    $.__views.tabs.addTab($.__views.blogTab);
    $.__views.pastors = Alloy.createController("pastors", {
        id: "pastors"
    });
    $.__views.pastorsTab = Ti.UI.createTab({
        window: $.__views.pastors.getViewEx({
            recurse: !0
        }),
        id: "pastorsTab",
        title: "Pastors",
        icon: "/icons/112-group.png"
    });
    $.__views.tabs.addTab($.__views.pastorsTab);
    $.__views.contact = Alloy.createController("contact", {
        id: "contact"
    });
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.contact.getViewEx({
            recurse: !0
        }),
        title: "Contact",
        icon: "/icons/96-book.png",
        id: "__alloyId1"
    });
    $.__views.tabs.addTab($.__views.__alloyId1);
    $.addTopLevelView($.__views.tabs);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tabs.open();
    $.blog.setParentTab($.blogTab);
    $.pastors.setParentTab($.pastorsTab);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;