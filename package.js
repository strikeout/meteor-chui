Package.describe({
    summary: "ChocolateChipUI smart package for Meteor"
});

Package.on_use(function(api, where) {
    api.use('jquery', 'client');
    api.add_files('lib/chui/chocolatechip-3.0.6.js', 'client'); // jQuery clone

    api.add_files('lib/chui/chui-3.0.6.js', 'client');
    api.add_files('lib/chui/chui.ios-3.0.6.css', 'client');

});
