//1、加载gulp包
var gulp = require("gulp");


gulp.task("copy-index",function(){
	gulp.src("index.html").pipe(gulp.dest("D:/zjw/php/WWW/xiangmu"));
});
gulp.task("copy-images",function(){
	gulp.src("img/*.jpg").pipe(gulp.dest("D:/phpStudy/WWW/xiangmu/img"));
});


