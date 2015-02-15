module.exports = {
    options: {
        port: 9000,
        livereload: true,
        hostname: '0.0.0.0' // Change this to '0.0.0.0' to access the server from outside
    },
    livereload: {
        options: {
            open: true,
            base: [
                '<%= paths.temp %>/',
                './'
            ]
        }
    },
    test: {
        options: {
            port: 8000,
            base: ['./']
        }
    },
    release: {
        options: {
            open: true,
            base: '<%= paths.build %>',
            livereload: false
        }
    }
};