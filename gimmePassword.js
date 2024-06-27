daftarCharPass = 'qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./`1234567890-=~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?'

function genPassword(length){
	var hasil = ''
	for (let i=0; i < length;i++){
		hasil += daftarCharPass[Math.floor(Math.random()*daftarCharPass.length)];
	}
	return hasil
}

jenisTombol.push(['password','Gimme Password']);
flagTombol.password = 1;