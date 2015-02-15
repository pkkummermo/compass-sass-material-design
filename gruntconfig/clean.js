module.exports = {
    release: {
        files: [{
            dot: true,
            src: [
                '<%= paths.temp %>/',
                '<%= paths.build %>/*',
                '!<%= paths.build %>/.git*'
            ]
        }]
    },
    temp: '<%= paths.temp %>/',
    css: {
        src: [
            '<%= paths.css %>/*.css',
            '<%= paths.css %>/!vendor/**/*.css'
        ],
        filter: 'isFile'
    },
    sass: {
        src: ['.sass-cache']
    }
};