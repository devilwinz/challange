const prompt = require("prompt-sync")();
do {
	var nilai = prompt("Masukkan nilai (0-100) : ",0);
}
while(typeof(nilai) == "number" && nilai >= 0 && nilai <= 100);

if(nilai < 40){
	console.log("Nilai anda adalah E");
}else if(nilai < 55){
	console.log("Nilai anda adalah D");
}else if(nilai < 70){
	console.log("Nilai anda adalah C");
}else if(nilai < 85){
	console.log("Nilai anda adalah B");
}else if(nilai < 100){
	console.log("Nilai anda adalah A");
}