module.exports = function(grunt){
	// Configurações do projeto
	grunt.initConfig({

		// Configurações dos plugins
		less:{
			development:{
				options:{
					paths:["dev/assets/css"]
				},
				files:{
					"dev/assets/css/menu.css":"dev/assets/less/menu.less",
          "dev/assets/css/core.css":"dev/assets/less/core.less",
          "dev/assets/css/conteudo.css":"dev/assets/less/conteudo.less"
				}
			}
		}, // Less
		cssmin: {
        	target: {
            	files: [{
            		expand: true,
      				cwd: 'dev/assets/css',
      				src: ['main.css'],
      				dest: 'dev/assets/css/min',
      				ext: '.min.css'
    			}]
  			}
		}, // Css Minifier
		uglify: {
     		my_target: {
      			files: {
        			'dev/assets/js/min/main.min.js': ['dev/assets/js/main.js']
      			}
    		}
  		}, // Uglify
 	 	concat: {
    		options: {
      			separator: ''
    		},
    		dist: {
      			src: ['dev/assets/css/core.css', 'dev/assets/css/menu.css', 'dev/assets/css/conteudo.css'],
            dest: 'dev/assets/css/main.css'
    		}
  		}, // Concat
  		watch: {
  			scripts: {
    			files: ['dev/assets/js/main.js','dev/assets/less/menu.less', 'dev/assets/less/core.less', 'dev/assets/less/conteudo.less'],
    			tasks: ['less','concat','cssmin','uglify'],
    		options: {
      			spawn: false
    			}
  			}
		}, // Watch
		'ftp-deploy': {
      		build: {
        		auth: {
          			host: 'ftp.gbrand.com.br',
          			port: 21,
          			authKey: 'lab'
        		},
        		src: 'dev/',
        		dest: 'www/lab/sites-landing'
      		}
    	}, //Dploy
   compress : {
      main : {
        options : {
          archive : "download/sites-landing.zip"
        },
      files : [
          { expand: true, src : "**/*", cwd : "dev/" }
      ]
    }
  } // Compress
	});

	// Declarando plugins
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.loadNpmTasks('grunt-contrib-compress');

	// Tarefas a serem executadas
	grunt.registerTask('default',['less','concat','cssmin','uglify']);
	grunt.registerTask('w',['watch']);
	grunt.registerTask('ftp',['ftp-deploy']);
  grunt.registerTask('zip',['compress']);
};