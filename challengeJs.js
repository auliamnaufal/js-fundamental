/**
 * ================= Challenges ========================================================================
 * 
 * 
 *
 * Buatlah cek tipe data dengan output :
 * 
 * ini tipe data string
 * ini tipe data boolean
 * ini tipe data undifined 
 * ini tipe data object
 * 
 * buatlah looping dari kata berikut dan tentukan jumlah karakternya nya  : 
 * 
 * - Hello
 * - Assalamualaikum
 * - Selamat Datang
 * - semangat!!
 * 
 * buatlah object dengan nama siswa dari properti : 
 * 
 * nama depan : almerio
 * nama belakang : setiawan
 * kelas : 10
 * kompetensi keahlian : Rekayasa Perangkat Lunak 
 * alamat : -   jalan : jalan raya dayeuh
 *              kecamatan: jonggol
 *              kabupaten : bogor
 * sekolah : IDN Boarding School
 * nilai :  - diniyah : B+
 *          - IT : A
 *            bahasa inggris : B
 * 
 * buatlah output dengan memanggil : 
 * 
 * data siswa:
 * nama lengkap : almerio setiawan
 * kelas : 10
 * kompetensi keahlian : rekayasa perangkat lunak
 * asal kota : bogor
 * nilai : diniyah (B+), IT (A), Bahasa Inggris (B)
 * 
 * 
 * let nama = john kelas = 10 jurusan = RPL 
 * buatlah output menggunakan template literal
 * hallo nama saya john, saya berasal dari kelas 10 jurusan RPL.
 * 
 * 
 * =============================================================================================================
 */


// challange 
const str = "strijg"
const itn = 12
const bool = true
const obj = null
let undf;

if (typeof (str) == 'string') console.log("ini tipe data string")
if (typeof (itn) == 'number') console.log("ini tipe data Number")
if (typeof (bool) == 'boolean') console.log("ini tipe data Boolean")
if (typeof (obj) == 'object') console.log("ini tipe data Object")
if (typeof (undf) == 'undefined') console.log("ini tipe data undefined")


const text = ["Hello", "assalamualaikum", "selamat datang", "Semangat!!"]

text.forEach((word) => {
	for (let i = 0; i < word.length; i++) {
		console.log(word[i])
	}
	console.log(`panjang ${word}: ${word.length}`)
	console.log("====================")
})


const rio = {
	namaDepan: "almerio",
	namaBelakang: "setiawan",
	kelas: 10,
	kompetensiKeahlian: "Rekayasa Perangkat Lunak",
	alamat: {
		jalan: "jalan raya dayeuh",
		kecamatan: "jonggol",
		kabupaten: "bogor",
	},
	sekolah: "IDN Boarding School",
	nilai: {
		diniyah: "B+",
		it: "A",
		bahasaInggris: "B"
	}
}

const dataRio = `
data Siswa:
	nama lengkap: ${rio.namaDepan} ${rio.namaBelakang}
	kelas: ${rio.kelas}
	kompetensi keahlian: ${rio.kompetensiKeahlian}
	asal kota: ${rio.alamat.kabupaten}
	nilai: Diniyah(${rio.nilai.diniyah}), IT(${rio.nilai.it}), Bahasa Inggris(${rio.nilai.bahasaInggris})
`
console.log(dataRio)

let nama = "john", kelas = 10, jurusan = "RPL" 
console.log(`hallo nama saya ${nama}, saya berasal dari kelas ${kelas} jurusan ${jurusan}`)




