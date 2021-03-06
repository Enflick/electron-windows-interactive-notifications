const addon = require('bindings')('notifications_bindings');

module.exports = {
    registerAppForNotificationSupport: function (shortcutPath, appId) {
        return addon.registerAppForNotificationSupport(shortcutPath, appId);
    },

    registerComServer: function () {
        return addon.registerComServer();
    },

    registerActivator: function () {
        return addon.registerActivator();
    },

    unregisterActivator: function () {
        return addon.unregisterActivator();
    }
}
