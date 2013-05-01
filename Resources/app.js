<<<<<<< HEAD
var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.REST_PATH = "http://poimen.enjoycreativity.com/api/rest/";

Alloy.Globals.SITE_PATH = "http://poimen.enjoycreativity.com/";

Alloy.createController("index");
=======
// Create a reference to the underscore.js module
// var _ = require('lib/underscore')._;

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// Create tab group to hold all the tabs
var tabGroup = Titanium.UI.createTabGroup();

//Create a events variable to hold some information about the events
var events = {
	uid: Titanium.App.Properties.getInt("eventsUid"),
	sessid: Titanium.App.Properties.getString("eventsSessionId"),
	session_name: Titanium.App.Properties.getString("eventsSessionName"),
	name: Titanium.App.Properties.getString("eventsName"),
}

// Create the home window
var homeWin = Titanium.UI.createWindow({  
	// Set the title for the window
    title:'Home',
    
    // Set the background color for the window
    backgroundColor:'#fff',
    
    // The actual window data will be in this file, not here
    url: 'includes/home.js'
});

// Create the home tab
var homeTab = Titanium.UI.createTab({  
	// Set the icon for the button
    icon:'icons/53-house.png',
    
    // Set the title for the tab
    title:'Home',
    
    // Relate the tab to a window so the app knows what window to open.
    window:homeWin
});

// Create the blog window
var blogWin = Ti.UI.createWindow({
	title: "Blog",
	backgroundColor: '#fff',
	url: 'includes/blog.js',
});

// Create the blog tab
var blogTab = Ti.UI.createTab({
	title: "Blog",
	icon: "icons/96-book.png",
	window: blogWin,
});

// Create the pastors window
var pastorsWin = Ti.UI.createWindow({
	title: "Pastors",
	backgroundColor: '#fff',
	url: 'includes/pastors.js'
});

// Create the pastors tab
var pastorsTab = Ti.UI.createTab({
	title: 'Pastors',
	icon: "icons/112-group.png",
	window: pastorsWin,
});

// Create the contact window
var contactWin = Ti.UI.createWindow({
	title: "Contact",
	backgroundColor: '#fff',
	url: 'includes/contact.js'
});

// Create the tab window
var contactTab = Ti.UI.createTab({
	title: "Contact",
	icon: "icons/08-chat.png",
	window: contactWin,
});

// Add the home tab to the tab group
tabGroup.addTab(homeTab);  

// Add the events tab to the tab group 
tabGroup.addTab(blogTab);

// Add the sermons tab to the tab group
tabGroup.addTab(pastorsTab);

// Add the contact tab
tabGroup.addTab(contactTab);

// open tab group
tabGroup.open();
>>>>>>> 5377c82863ef3be666cece8815f15a223c271286
