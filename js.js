// JavaScript Document

	function adKarsila(ad){
		var ad = prompt("Adınız nedir?");
		var gun=new Date();
		var ay=new Date();
		var yil=new Date();
		var saat=new Date();
		var dakika=new Date();

		if(ad.length){
		
		
		document.querySelector("#show").innerText = `Merhaba ${ad}, hoşgeldin!

	Tarih: ${gun.getDate()}/${ay.getMonth()}/${yil.getFullYear() }
	Saat: ${saat.getHours()}:${dakika.getMinutes()}

	`;
	}

else{document.querySelector("#show").innerText =""
	 alert("İsim girmediniz!")}
		
		
	}
	adKarsila();