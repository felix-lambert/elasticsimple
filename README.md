elasticsimple
===========

elasticsimple ables you to use elasticsearch in a simple way.

Use it :

```javascript
	var elasticsimple = require('elasticsimple');
```

Initialize it :

```javascript
	elasticsimple.init(host);
```
You need to put the elasticsearch host here. If you're working in local, the host is probably: "localhost:9200".

Save an announce for example :

```javascript
	var body = {
        created: Date.now(),
        title: req.body.title,
        content: req.body.content,
        type: req.body.type,
        price: req.body.price,
        creator : req.user._id,
        activated: req.body.activated,
        category: req.body.category,
        tags: req.body.tags,
        nbComment: 0,
        FORMATTED_DATE: moment(announce.DATE_CREATED).format('DD/MM/YYYY, hA:mm')
      };
      elasticsimple.save('announce', 'ann', announceID, body, function(err) {
        cb(err ? err : null, announce);
      });
```

Destroy :

```javascript
	elasticsimple.destroy('announce', 'ann', req.params.announceId, function(err) {
	    cb(err ? err : null, announce);
	});
```

Search :

(params: "model", "term to search", "data in model")
```javascript
	elasticsimple.search('announce', terms, 'title', function(err, resp) {
		console.log(resp.hits.hits);
	});

Enjoy!
