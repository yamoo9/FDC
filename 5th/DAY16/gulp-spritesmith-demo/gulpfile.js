var gulp         = require('gulp'),
    spritesmith  = require("gulp.spritesmith");

gulp.task('sprite', () => {
    var spriteData = gulp.src('sprite/*')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css'
        }));
    spriteData.img.pipe(gulp.dest('dist'));
    spriteData.css.pipe(gulp.dest('dist'));
});