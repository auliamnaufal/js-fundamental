//Tipe-tipe data di Javascript

/*
 * - null
 * - undefined
 * - boolean
 * - number
 * - bigInt
 * - string
 * - symbol
 * JS Merupakan salah satu loosely typed language (variable tidak terikat dengan tipe data tertentu). namun, nilai dari variable memiliki tipe data
 *  
 */

 //e.g
 let name = null
 name = 'Niji'

 console.log(typeof name);

 // Undefined
 /*
	* undefined merupakan tipe data primitive yang nilainya undefined atau tidak didefinisikan
	* Merupakan tipe data default untuk variable yang tidak ada nilai 
  */

	let age;
	console.log(typeof age);

	// Null
 /*
	* Tipe data null adalah tipe data yang bernilai null. bedanya hanya di letaknya saja dengan undefined
  */

	let obj = null
	console.log(typeof obj);

	// Number
	/*
	 * Tipe data yang mewakili angka, biasanya bilangan bulat, floating atau desimal
	 */
	let num = 100
	let min = -100
	console.log(num - min, typeof (num - min))

	//NaN (Not a Number)
	/*
	 * NaN Merupakan nilai numeric spesial. Memberi tahu bahwa suatu nilai merupakan invalid number atau bukan angka
	 * Keunikan:
	 * 	- Operator matematika yang menghasilkan NaN
	 * 	- operasi perbandingan tidak dapat dilakukan pada nilai yang akan mengasilkan false
	 */

	console.log(isNaN("1"))

	//String
	/*
	 * tipe data string merupakan salah satu tipe data yang berhubungan dengan karakter
	 * Cirinya adalah menggunakan tanda petik "", '', `` 
	 */ 

	 let nama = 'john doe'
	 console.log(nama.length)

	 nama.split('').forEach((letter) => {
		 console.log(letter);
	 })

	 // Boolean
	 let mainLeptop = true
	 if (!mainLeptop) console.log("Maen laptop");
	 else console.log("udh maen laptop")

	 // object
	 /*
		*	Tipe data object merupakan tipe data kompleks yang terdiri dari props(property). key & value 
	  */
	 let person = {
		 name: "Naufal",
		 age: 12,
		 height: "idk"
	 }

	 console.log(person.age)

	 // Template Literals 
	 console.log(`hello ${person.name}`);

	 //shorthand property names
	 let a = 1, b = 2, c = 3;

	 console.log(`${a} + ${b} = ${c}`);