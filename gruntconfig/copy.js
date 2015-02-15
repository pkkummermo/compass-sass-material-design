module.exports = {
    fonts: {
        expand: true,
        flatten: true,
        src: ['<%= paths.fonts %>/*'],
        dest: '<%= paths.build %>/fonts',
        filter: 'isFile'
    },
    release: {
        files: [
            {
                expand: true,
                dot: true,
                flatten: true,
                dest: '<%= paths.build %>/assets',
                src: [
                    '<%= paths.assets %>/fonts/*.*'
                ]
            }
        ]
    }
};
