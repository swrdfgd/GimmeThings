coeffTypes = ['integer','rational'];

function genCoeff(type){
	var hasil;
	switch(type){
		case 'integer':
			hasil = genInteger();
			if (hasil == 1){hasil = '+'}
			else if (hasil == -1){hasil = '-'}
			else if (hasil > 0){hasil = '+' + hasil} 
		break;
		case 'rational':
			pilihanRasional = rationalSet[Math.floor(Math.random()*rationalSet.length)];
			pembilang = pilihanRasional[0];
			penyebut = pilihanRasional[1];
			if (penyebut == 1){hasil = pembilang;
				if (hasil == 1){hasil = '+'}
				else if (hasil == -1){hasil = '-'}
				else if (hasil > 0){hasil = '+' + hasil} 
			}
			else{hasil = '\\frac{' + pembilang + '}{' + penyebut + '}'}
			
		break;
	}
	
	return hasil
}

function genPolynom(variable = 'x'){
	var hasil;
	coeffType = 0;
	if (Math.random() < 1/2 && coeffType < coeffTypes.length){coeffType ++;}
	degree = 5;
	while (Math.random() < 1/2){degree ++}
	degree = Math.floor(Math.random()*degree);
	
	hasil = '\\(';
	
	for (let i = degree; i > 0; i++){
		coeff = genCoeff(coeffTypes[coeffType]);
		v = ' x^{' + degree + '} '
		if (degree == 1){v = ' x '}
		if (degree == 0){v = ''}
		if (coeff == '0'){coeff = ''; v =''}
		hasil += coeff + v;
	}
	hasil += '\\)';
	if (hasil == '\\(\\)'){hasil = '\\(0\\)';}
	
	if (coeffType == 1){rationalSetUpdate();}
	return hasil
}

flagTombol.polynomial = 1;
jenisTombol.push(['polynomial','Gimme Polynomial']);