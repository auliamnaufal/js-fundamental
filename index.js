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

//Variable
/*
 *	Var
 *		- Bersifat mutable artinya bisa merubah value atau nilainya
 *		- Memiliki dua function scope, global dan local scope
 */

 /*
	*	Let
	* 	- Global, local, block Scope
	* 	- Mutable
  */

	/*
	 * Const 
	 * 	- Global, local, block scope
	 *  - Immutable
	 */

const jeneng = 'Dajang'

function dajangoke(dajang) {
	if (dajang) {
		console.log(jeneng)
		const jenengDajang = 'altap'
	}
	console.log(jenengDajang)

}

dajangoke(true)
