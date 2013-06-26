module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),
		concat : {
			js : {
				'src' : ['vendor/js/**/*.js', 'src/js/**/*.js'],
				'dest' : 'dev/app.js'
			},
			css : {
				'src' : ['vendor/js/**/*.css', 'src/js/**/*.css'],
				'dest' : 'dev/app.css'
			}
		},
		homepage : {
			template : 'src/index.us',
			dev : {
				dest : 'dev/index.html',
				context : { 
					css : 'app.css',
					js  : 'app.js'
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-concat");

	grunt.loadTasks("tasks");

	grunt.registerTask("default", ["concat", "homepage:dev"]);
}