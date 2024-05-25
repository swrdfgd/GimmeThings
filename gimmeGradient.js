function getRandomGradient() {
	var gradientTypes = ['linear-gradient', 'radial-gradient', 'conic-gradient'];
	var gradientType = gradientTypes[Math.floor(Math.random() * gradientTypes.length)];
	var numColors = Math.floor(Math.random() * 4) + 2; // Between 2 and 5 colors
	var gradient = gradientType + '(';
	
	if (gradientType === 'linear-gradient') {
		gradient += Math.floor(Math.random() * 360) + 'deg, ';
	}

	for (var i = 0; i < numColors; i++) {
		gradient += getRandomColor() + ' ' + Math.floor(Math.random() * 100) + '%';;
		if (i < numColors - 1) {
			gradient += ', ';
		}
	}
	gradient += ')';
	return gradient;
}

flagTombol.gradient = 1;
jenisTombol.push(['gradient','Gimme Gradient']);