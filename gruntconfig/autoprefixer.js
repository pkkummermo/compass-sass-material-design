module.exports = {
    options: {
        browsers: ['last 1 version']
    },
    release: {
        files: [{
            expand: true,
            cwd: '<%= paths.build %>/<%= paths.css %>/',
            src: '*.css',
            dest: '<%= paths.build %>/<%= paths.css %>/'
        }]
    },
    watch: {
        files: [{
            expand: true,
            cwd: '<%= paths.temp %>/<%= paths.css %>/',
            src: '*.css',
            dest: '<%= paths.temp %>/<%= paths.css %>/'
        }]
    }
};