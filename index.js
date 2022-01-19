//Global Scope Ex
const nama = "Naufal"

const printName = () => {
	console.log(nama)
}

printName()

//Closure
/**
 * 
 * @param {String} nama 
 * @param {String} kelas 
 */
function murid(nama, kelas) {
	var data = `Nama: ${nama} \nKelas: ${kelas}`

	function displayname() {
		console.log(data)
	}

	return displayname
}

let naufal = murid("Naufal", "10 RPL B")
naufal()