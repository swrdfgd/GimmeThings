daftarApi = ['AIzaSyBwwv3LrgSG3NcETgahW-3-_DyP74GwViA','AIzaSyB7TX3CfUSUBnWnNP9CGBjLzmfIeo6SpfM'] 
daftarChannelAda = [];

function videoTop(firstTime = true, nextPageToken = '', idChannel = '', apiKey = '') {

	if (Math.random() < 1/2){
		$.getScript('https://cdn.jsdelivr.net/gh/swrdfgd/RandomYoutube/MusicAndDance'+Math.ceil(Math.random()*10)+'.js');
	}

	if (apiKey ==''){apiKey = daftarApi[Math.floor(Math.random()*daftarApi.length)];}
	if (idChannel == ''){
		idChannel = daftarChannel[Math.floor(Math.random()*daftarChannel.length)];
	};
	let url = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${'UU'+idChannel}&part=snippet&key=${apiKey}&maxResults=${Math.ceil(Math.random()*50)}`;
	if (nextPageToken !== ''){url += `&pageToken=${nextPageToken}`;}
	
	console.log(url);
	fetch(url)
		.then(response => response.json())
		.then(data => {
			nextPageToken = data.nextPageToken;
			if (nextPageToken !== null && Math.random() < 1/50){videoTop(firstTime, nextPageToken, idChannel, apiKey); return}
			const videoIds = [];
			
			data.items.forEach(item => {
				if (item.snippet.resourceId.kind === 'youtube#video') {
					videoIds.push(item.snippet.resourceId.videoId);
				}
			});
			
			if (firstTime == true){};
			const randomIndex = Math.floor(Math.random() * videoIds.length);
			const randomVideoId = videoIds[randomIndex];
			daftarChannelAda.push(randomVideoId);

		})
		.catch(error => {
			if (firstTime == true){};
			console.error('Terjadi kesalahan:', error);
		});
}

function genRandomMusicVid(){
	var randomVideoId = daftarChannelAda[Math.floor(Math.random() * daftarChannelAda.length)];;
	document.getElementById('content').innerHTML = '<div id="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/'+randomVideoId+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
	videoTop();
}

videoTop();

flagTombol.musicVideo = 1;
jenisTombol.push(['musicVid','Gimme Music/Dance Video']);