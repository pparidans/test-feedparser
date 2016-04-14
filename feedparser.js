const FeedParser = require('feedparser')

module.exports = (stream, opts) => new Promise( (resolve, reject) => {
  const feedparser = new FeedParser(opts || {})
  var items = [];
  feedparser.on('readable', () => {
    var item
    while(item = feedparser.read()) {
      items = items.concat(item)
    }
  })
  stream.pipe(feedparser).on('end', () => resolve(items)).on('error', (err) => reject(err))
})
