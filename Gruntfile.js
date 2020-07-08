module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {

      build: {
        src: ['js/libs/jquery.js','js/s.js'],
        dest: 'js/build/s.min.js'
      }
    },

    sass: {
      options: {
       // debugInfo: true,
       style: 'expanded'
      },

      compile: {

        files: {
          'css/style.css': ['scss/style.scss']
        }
      }
    },

    watch: {
      // sprite: {
      //   files: 'scss/*.scss',
      //   tasks:['sprite']
      // },

      sass: {
        files: 'scss/*.scss',
        tasks: ['sass']
        // options: {
        //   livereload: true,
        // },
      },

      scripts: {
        files: ['**/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      }
    },

    // sprite: {
    //   all: {
    //     'algorithm': 'binary-tree',
    //     src: 'img/sprites/*.png',
    //     destImg: 'img/sprite.png',
    //     destCSS: 'scss/_sprite.scss'
    //   }
    // }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify','sass','watch']);

};