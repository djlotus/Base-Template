 module.exports = function(grunt) {
  
  	grunt.initConfig({
  		uglify: {
  			my_target: {
  				options: {
				    	beautify: {
				          	width: 80, beautify: true
				        	}
  				},
  				files : {
  					'./_/js/script.js' : ['_/components/js/*.js']
  				}
  			}
  		}, 

  		compass: {
  			dev: {
  				options:  {
  					config: 'config.rb'
  				}
  			}

  		}, 

  		watch : {
  			options: {
  				livereload: true
  			},
  			scripts: {
  				files: ['./_/components/js/*.js'], 
  				tasks: ['uglify']
  			}, 
  			html: {
  				files: ['./*.html']
  			}, 
  			sass: {
  				files: ['./_/components/sass/*.scss'], 
  				tasks: ['compass:dev']
  			}
  			
  		}, 

  		connect: {
  			server: {
  				options: {
  					hostname: 'localhost', 
  					port: 3000,
  					base: './',
  					livereload: true
  				}
  			}
  		}



  	});  	

  	grunt.registerTask('default', ['connect','watch']);
    grunt.loadNpmTasks('grunt-contrib-connect');
  	grunt.loadNpmTasks('grunt-contrib-watch');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-compass');
  	
}; 



