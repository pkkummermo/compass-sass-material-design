/*global module,require */
module.exports = function (grunt) {
    'use strict';
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        paths: {
            app: 'app',
            css: 'css',
            sass: 'sass',
            build: 'dist',
            temp: '.temp',
            test: 'test',
            images: 'images',
            bower: 'lib',
            fonts: 'fonts',
            example: 'example',
            gruntConfig: 'gruntconfig/'
        },
        jshint: {
            options: require('./gruntconfig/jshint_options'),
            prod: require('./gruntconfig/jshint_prod.js')
        },
        clean: require('./gruntconfig/clean.js'),
        compass: {
            options: require('./gruntconfig/compass_options.js'),
            dev: require('./gruntconfig/compass_dev.js'),
            prod: require('./gruntconfig/compass_prod.js')
        },
        watch: require('./gruntconfig/watch.js'),
        copy: require('./gruntconfig/copy.js'),
        concurrent: require('./gruntconfig/concurrent.js'),
        scsslint: require('./gruntconfig/scsslint.js'),
        autoprefixer: require('./gruntconfig/autoprefixer.js'),
        connect: require('./gruntconfig/connect.js')
    });

// Define tasks.
    grunt.registerTask('default', [
        'build'
    ]);
    grunt.registerTask('build', [
        'clean:release',
        'concurrent:buildRelease'
    ]);
    grunt.registerTask('serve', [
        'clean:temp',
        'concurrent:buildDev',
        'autoprefixer:watch',
        'connect:livereload',
        'concurrent:watchDev'
    ]);
    grunt.registerTask('serve-build', [
        'build',
        'connect:release:keepalive'
    ]);
    grunt.registerTask('test', [
        'jshint:prod',
        'scsslint'
    ]);
    grunt.registerTask('test-dev', [
        'serve',
        'jshint',
        'watch:test'
    ]);
};