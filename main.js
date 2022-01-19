const names = ["ujang", "asep", "Joko", "Siti"];


const namesWithUppercase = names.map((name) => {
  return name[0].toUpperCase() + name.substr(1)
})

names.forEach((name, index) => {
  console.log(name)
  console.log(namesWithUppercase[index])
})

