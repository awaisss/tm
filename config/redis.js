/* Redis Client Event Listeneres..  */
module.exports  = function(redisClient){
	redisClient
	  .on('ready', function () {
	    console.log(" REDIS ready ");
	  })
	  .on('error', function (err) {
	    console.log('redis error ------------')
	  })
	  .on('end', function () {
	    console.log('redis end listener -------------------')
	  });


	return redisClient;
}
