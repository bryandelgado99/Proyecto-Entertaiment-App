const settings = {
	async: true,
	crossDomain: true,
	url: 'https://footapi7.p.rapidapi.com/api/search/p',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ec2913ee6cmsh54b2136298a30c2p1509f0jsn08f9ff6edf76',
		'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});