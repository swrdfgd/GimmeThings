function genSequence(){
	var hasil = '';
	var numTerm = 5;
	while (Math.random() < 1/2){numTerm ++}
	numTerm = 1 + Math.ceil(Math.random()*numTerm);
	
	for (let i = 0; i < numTerm;i++){
		hasil += genInteger();
		if (i < numTerm - 1){hasil += ', '}
	}
	
	return hasil
}

flagTombol.sequence = 1;
jenisTombol.push(['sequence','Gimme Sequence']);