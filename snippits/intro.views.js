require.paths.unshift('path/to/express/lib')
require('express')
   
configure(function(){
  set('root', __dirname)
})

get('/', function(){
  this.redirect('/hello/world')
})

get('/hello/world', function(){
  this.render('title.haml.html', {
    layout: false,
    locals: {
      title: 'Hello World'
    }
  })
})

run()