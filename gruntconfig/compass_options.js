module.exports = {
    force: true,
    relativeAssets: true,
    basePath: '.',
    cssDir: '<%= paths.css %>',
    sassDir: '<%= paths.sass %>',
    fontsDir: '<%= paths.fonts %>',
    imagesDir: '<%= paths.images %>',
    generatedImagesDir: '<%= paths.build %>/sprites'
    //importPath: ['<%= paths.assets %>/sass'],
    //spriteLoadPath: ['<%= paths.assets %>/images'],
    //httpImagesPath: '<%= paths.assets %>/images'
};