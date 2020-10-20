// The event bus is used to pass events between sibling components without the
// need to declare hanlders on the component definition.
var EventBus = new Vue();

var appData = {
	siteName: '',
	pageTitle: ''
};

var appRouter = {};
var appWatches = {};
var appMethods = {};
var appMixins = [];
var appBeforeMount = function() {};
var appMounted = function() {};
var appBeforeDestroy = function() {};
var appDestroyed = function() {};
var appRouter = {};
