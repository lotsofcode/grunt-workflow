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
		}
	});

	grunt.loadNpmTasks("grunt-contrib-concat");

	grunt.registerTask("default", "concat");
}