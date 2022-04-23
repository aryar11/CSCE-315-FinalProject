var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"Accept-Encoding": "application/gzip",
		"X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
		"X-RapidAPI-Key": "1ddc54a6c4msh45644da1fbd2293p1b97ebjsn71641fbfa6a5"
	},
	"data": {
		"q": "Hello, world!",
		"target": "es",
		"source": ""
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});