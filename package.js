Package.describe({
	name: 'sorenpeterson:createjs',
	version: '0.0.2',
	// Brief, one-line summary of the package.
	summary: 'EaselJS 0.8.1, TweenJS 0.6.1, SoundJS 0.6.1, PreloadJS 0.6.1',
		// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/sorenpeterson/createjs-meteor.git',
		// By default, Meteor will default to using README.md for documentation.
		// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.2');
	api.addFiles('create-js.2015.05.21.combined.js', 'client');
});

