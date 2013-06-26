module.exports = function(grunt) {

	var _ = grunt.util._; // lodash

	grunt.registerTask("homepage", "generate a home page html file for out app", function(target) {
		var content, source, targetConfig, template;
		
		// target otherwise defaults
		target = target || "dist";
		
		// validation: take the key'd name
		this.requiresConfig("homepage.template");

		// validation: take a key'd name based on target var homepage:target
		this.requiresConfig("homepage." + target);
		
		// read in the template variable
		template = grunt.config.get("homepage.template");

		// read in the key'd variable connfig
		targetConfig = grunt.config.get("homepage." + target);
		
		// read the content of the template
		source = grunt.file.read(template);

		// merge the config and the context together (so we can access css / js from root level)
		context = _(grunt.config.get()).extend(targetConfig.context);

		// write out the content to the file
		grunt.file.write(targetConfig.dest, _(source).template(context));

		// write output to the log
		grunt.log.writeln("Homepage HTML written '" + targetConfig.dest + "' done!");
	});

};