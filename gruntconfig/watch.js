module.exports = {
    sass: {
        files: [
            '<%= paths.example %>/**/*.scss',
            '<%= paths.sass %>/**/*.scss',
            '!<%= paths.sass %>/**/*scsslint*.scss'
        ],
        tasks: [
            'scsslint',
            'compass:dev'
        ]
    },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            'index.html',
            '<%= paths.temp %>/<%= paths.css %>/*.css'
        ]
    }
};