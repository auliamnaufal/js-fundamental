//Global Scope Ex
// const nama = "Naufal"

// const printName = () => {
// 	console.log(nama)
// }

// printName()

//Closure
// function hello(nama, julukan) {
// 	var a = "hello " + nama + ' ' + julukan;

// 	return function() {
// 		console.log(a)
// 	}
// }

// let john = hello("John", "Si tuakng ngutang")
// john()

function murid(nama, kelas) {
	var data = `Nama: ${nama} \nKelas: ${kelas}`

	function displayname() {
		console.log(data)
	}

	return displayname
}

let naufal = murid("Naufal", "10 RPL B")
naufal()