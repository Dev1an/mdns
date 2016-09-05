const mdns = Npm.require('mdns')

Mdns = {
	createAdvertisement: mdns.createAdvertisement,
	createBrowser: function(serviceType, options) {
		var browser = mdns.createBrowser(serviceType)
		const self = {
			on:   function(event, callback) { browser.on(  event, Meteor.bindEnvironment(callback)) },
			once: function(event, callback) { browser.once(event, Meteor.bindEnvironment(callback)) },

			start: function() { browser.start()},
			stop:  function() { browser.stop() },

			get domain(     ) { return browser.domain},
			set domain(value) {browser.domain = value},

			get serviceRef(     ) { return browser.serviceRef},
			set serviceRef(value) {browser.serviceRef = value},

			get watcher(     ) { return browser.watcher},
			set watcher(value) {browser.watcher = value}
		}
		return self
	},
	resolve: Meteor.wrapAsync(mdns.resolve),
	makeServiceType: mdns.makeServiceType,

	tcp: mdns.tcp,
	udp: mdns.udp,

	rst: mdns.rst,
	isAvahi: mdns.isAvahi,

	dns_sd: mdns.dns_sd
}