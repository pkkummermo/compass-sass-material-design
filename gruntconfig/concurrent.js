module.exports = {
    generateSources: ['copy'],
    watchDev: {
        tasks: ['watch:sass', 'watch:livereload'],
        options: {
            logConcurrentOutput: true
        }
    },
    buildDev: [
        'scsslint',
        'compass:dev'
    ],
    buildRelease: [
        'compass:prod',
        'copy:release'
    ]
};