var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task("default", () => {
   
    browserSync.init({
        server: {
            baseDir: "./src"
        },
        https: true
    });
    
});