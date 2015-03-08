// Include gulp
var gulp = require('gulp'); 

// Get comments form Poole
gulp.task("comments", function() {
  
  var options = {
    hostname: 'pooleapp.com',
    port: 80,
    path: '/data/b9795210-2fdf-4d80-8dfe-31ed93a0ea24.yaml',
    method: 'GET'
  };

  // Go and get data
  require('http').get(options, function(res) {
    
    var body = '';
    res.on('data', function(chunk) {
        body += chunk;
    });
    res.on('end', function() {
      
      // Save the comments for jekyll to use as a data source
      require('fs').writeFile('./_data/comments.yml', body, function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("Comments data saved.");
        }
      });

    });
  }).on('error', function(e) {
    console.log("Got error: ", e);
  });
});

gulp.task('default', ['comments']);  
