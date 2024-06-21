wordMaxIndex = 0;
while (Math.random() < 1/2){
	wordMaxIndex ++;
}

function genWord(){
	if (wordMaxIndex > englishWordsFreq.length){wordMaxIndex = englishWordsFreq.length}
	var wordIndex = Math.floor(Math.random()*wordMaxIndex);
	while (Math.random() < 1/2){
		wordMaxIndex ++;
	}
	return englishWordsFreq[wordIndex];
}

flagTombol.word = 1;
jenisTombol.push(['word','Gimme Word']);