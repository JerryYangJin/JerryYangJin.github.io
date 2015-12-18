module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      tmp: ['js/tmp/**']
    },
    concat: {
      options: {
        separator: ';'
      },
      index: {
        src: [
          'js/index.js',
          'js/services/*.js',
          'js/controllers/index.js'
        ],
        dest: 'js/tmp/index.js'
      },
      project: {
        src: [
          'js/project.js',
          'js/services/*.js',
          'js/controllers/project.js'
        ],
        dest: 'js/tmp/project.js'
      },
      calendar: {
        src: [
          'js/calendar.js',
          'js/services/*.js',
          'js/controllers/calendar.js'
        ],
        dest: 'js/tmp/calendar.js'
      },
      music: {
        src: [
          'js/music.js',
          'js/services/*.js',
          'js/controllers/music.js'
        ],
        dest: 'js/tmp/music.js'
      },
      quant: {
        src: [
          'js/quant.js',
          'js/directives/mathjax.js',
          'js/directives/chart.js',
          'js/services/*.js',
          'js/controllers/quant.js'
        ],
        dest: 'js/tmp/quant.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! Jerry Yang Jin */\n'
      },
      dist: {
        files: {
          'js/tmp/index.min.js': ['<%= concat.index.dest %>'],
          'js/tmp/project.min.js': ['<%= concat.project.dest %>'],
          'js/tmp/calendar.min.js': ['<%= concat.calendar.dest %>'],
          'js/tmp/music.min.js': ['<%= concat.music.dest %>'],
          'js/tmp/quant.min.js': ['<%= concat.quant.dest %>']
        }
      }
    },
    copy: {
      index:{
        files: [
          {
            expand: true,
            cwd: 'js/tmp',
            src: ['index.min.js'],
            dest: ''
          }
        ]
      },
      project:{
        files: [
          {
            expand: true,
            cwd: 'js/tmp',
            src: ['project.min.js'],
            dest: 'project'
          }
        ]
      },
      calendar:{
        files: [
          {
            expand: true,
            cwd: 'js/tmp',
            src: ['calendar.min.js'],
            dest: 'calendar'
          }
        ]
      },
      music:{
        files: [
          {
            expand: true,
            cwd: 'js/tmp',
            src: ['music.min.js'],
            dest: 'music'
          }
        ]
      },
      quant:{
        files: [
          {
            expand: true,
            cwd: 'js/tmp',
            src: ['quant.min.js'],
            dest: 'quant'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['clean', 'concat', 'uglify', 'copy']);

};
