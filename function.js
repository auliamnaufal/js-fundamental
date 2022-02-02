/**
 * Function
 * Blok kode yang digunakan untuk membungkus suatu proses agar tidak ditulis kembali secara berulang (DRY)
 * 
 * Penulisan function ada yang memilik paramater dan ada yang tidak memiliki parameter
 */

 // Function normal
 function example(param) {
	 console.log(param);
 }

 example("Hello Normal Function")

//Arrow Function
const arrowFunction = (param) => {
	console.log(param)
}

arrowFunction("Hello Arrow Function")

const inlineArrowFunction = (n1, n2) => n1 + n2
console.log(inlineArrowFunction(2, 3))

/**
 * High Order Function
 * Function yang menerima Function sebagai argumen
 * 
 * Callback function
 * Function yang akan menjadi argumen dalam pemanggilan high-order function
 */

 function genap(number) {
	 return number % 2 == 0
 }

 function printGenap(isOdd, n) {
		
		if (isOdd(n)) {
			console.log(`${n} adalah bilangan genap`);
		} else {
			console.log(`${n} adalah bilangan ganjil`);

		}
 }

 printGenap(genap, 2)