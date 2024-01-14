module.exports = function(grunt) {

var rewrite = require('connect-modrewrite');
    
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    handlebars: {
        all: {
	       options: {
		      processName: function(filePath) {
	           return filePath.replace(/webroot\//g, "");
            }
           },
        files: {
            "js/templates.js": ["templates/**/*.hbs"]
        }
    }
   }
          
});
    
  grunt.loadNpmTasks('grunt-contrib-handlebars');
 
  grunt.registerTask('default', []);
    
};
