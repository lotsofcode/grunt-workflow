module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),
		concat : {
			js : {
				'src' : ['vendor/js/**/*.js', 'src/js/**/*.js'],
				'dest' : 'dev/app.js'
			},
			css : {
				'src' : ['vendor/css/**/*.css', 'src/css/**/*.css'],
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
		},
		watch : {
			js : {
				files: ['<%= concat.js.src %>'],
				tasks: ['concat:js']
			},
			css : {
				files: ['<%= concat.css.src %>'],
				tasks: ['concat:css']
			},
			homepage : {
				files: ['<%= homepage.template %>'],
				tasks: ['homepage:dev']
			},
		}
	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.loadTasks("tasks");

	grunt.registerTask("default", ["concat", "homepage:dev", "watch"]);
}