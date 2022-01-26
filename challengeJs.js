// challange 2
const str = "strijg"
const itn = 12
const bool = true
const obj = {}

if (typeof (str) == 'string') console.log("ini tipe data string")
if (typeof (itn) == 'number') console.log("ini tipe data Number")
if (typeof (bool) == 'boolean') console.log("ini tipe data Boolean")
if (typeof (obj) == 'object') console.log("ini tipe data Object")

const text = ["Hello", "assalamualaikum", "selamat datang", "Semangat!!"]

text.forEach((word) => {
	for (let i = 0; i < word.length; i++) {
		console.log(word[i])
	}
	console.log(`panjang ${word}: ${word.length}`)
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
data Siswa:\n
	nama lengkap: ${rio.namaDepan} ${rio.namaBelakang}\n
	kelas: ${rio.kelas}\n
	kompetensi keahlian: ${rio.kompetensiKeahlian}\n
	asal kota: ${rio.alamat.kabupaten}\n
	nilai: Diniyah(${rio.nilai.diniyah}), IT(${rio.nilai.it}), Bahasa Inggris(${rio.nilai.bahasaInggris})
`

console.log(dataRio)

let nama = "john", kelas = 10, jurusan = "RPL" 

console.log(`hallo nama saya ${nama}, saya berasal dari kelas ${kelas} jurusan ${jurusan}`)




