const mdns = Npm.require('mdns')

Mdns = {
	createAdvertisement: function(serviceType, options) {
		const advertisement = mdns.createAdvertisement(serviceType, options)
		var self = {
			start: Meteor.wrapAsync(advertisement.start),
			stop:  Meteor.wrapAsync(advertisement.stop )
		}
		return self
	},

	createBrowser: Meteor.wrapAsync(mdns.createBrowser),
	resolve: Meteor.wrapAsync(mdns.resolve)
	makeServiceType: mdns.makeServiceType,

	tcp: mdns.tcp,
	udp: mdns.udp,

	rst: mdns.rst,
	isAvahi: mdn.isAvahi
}