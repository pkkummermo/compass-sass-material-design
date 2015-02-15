module.exports = {
    options: {
        sourcemap: true,
        environment: 'develop',
        sassDir: '<%= paths.example %>/',
        cssDir: '<%= paths.temp %>/<%= paths.css %>/',
        fontDir: '<%= paths.fonts %>',
        noLineComments: true,
        force: true
    }
};
