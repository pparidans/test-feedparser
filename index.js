var FeedParser = require('./feedparser')
var fetch = require('node-fetch')

fetch('http://la-grange.net/feed').then( res => {
  var parser = FeedParser(res.body)
    .then( feed => { console.log('feed ==> ', feed) } )
    .catch( err => { console.log('Feed parsing failed!', err) })
})
