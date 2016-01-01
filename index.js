var elasticsearch = require("elasticsearch");

var ES;

module.exports = {

	init: function(host) {	
	  ES = new elasticsearch.Client({
	    host: host
	  });
	},

	save: function(index, type, id, body, cb) {
		ES.create({
        	index: index,
        	type: type,
        	id: id,
        	body: body
	    }, function(err) {
	        cb(err ? err : null);
	    });
	},

	search: function(index, terms, searchType, cb) {
		ES.search({
	      	index: index,
	      	body: {
	        	'size' : 1000,
	        	'query': {
	          		'match': {
	            		searchType: terms
	          		}
	        	}
	      	}
	    }).then(function (resp) {
	    	cb(null, resp);
	    }, function (err) {
	      console.log(chalk.red(err));
	      cb(err);
	    });
	},

	destroy: function(index, type, id, cb) {
		ES.delete({
	        index: index,
	        type: type,
	        id : id
	    }, function(err) {
	    	cb(err ? err : null);
	    });
	}
};