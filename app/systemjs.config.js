(function (global) {
	const ngPackageNames  = [
		'core',
		'common',
		'compiler',
		'forms',
		'platform-browser',
		'platform-browser-dynamic',
		'router'
	];

	const config = {
		paths: {
			// paths serve as alias
			'npm:': 'static/'
		},
		// map tells the System loader where to look for things
		map: {
			app: '.',
			// angular bundles

			// other libraries
			'rxjs': 'npm:rxjs',
			'quagga': 'npm:quagga/dist',
		},

		// packages tells the System loader how to load when no filename and/or no extension
		packages: {
			app: {
				main: 'static/main.js',
				defaultExtension: 'js'
			},
			rxjs: {
				defaultExtension: 'js'
			},
			quagga: {
				main: 'quagga.min.js'
			},
		}
	};

	// angular bundles
	ngPackageNames.forEach(function (pkgName) {
		config.map['@angular/'+pkgName] = 'npm:@angular/' + ((pkgName.indexOf('/') >=0) ? pkgName.substr(0,pkgName.indexOf('/')) : pkgName) + '/bundles/' + pkgName.replace('/','-') + '.umd.js';
	});

	System.config(config);
})(this);

