const dateCars = []

const printfCars = () => {
    const table = document.getElementById("table")
    table.lastElementChild.innerHTML=``
    for (const car of dateCars) {
        table.lastElementChild.innerHTML+=`<tr><td>${car.id}</td><td>${car.brand}</td><td>${car.model}</td><td>${car.colour}</td><td>${car.year}</td><td>${car.price}</td><td><img width="150px" src="${car.image}" class="img-thumbnail" alt="Sin imagen"></td><td><button class="btn btn-danger" onclick="deleteCars(${car.id})">Remove</button><button onclick="toUpdate(${car.id})" class="btn btn-primary left">To update</button></td></tr>`
    }
}

const addCars = () => {
    const brand = document.getElementById("Brand").value
    const model = document.getElementById("Model").value
    const colour = document.getElementById("Colour").value
    const year = document.getElementById("Year").value
    const price = document.getElementById("Price").value
    const image = document.getElementById("Image").value
    const index = dateCars.length
    const id = index
    const arrCars = {
            brand,
            model,
            colour,
            year,
            price,
            image,
            id
        }
    if (brand!="" && model!="" && colour!="" && year!="" && price!="") {
        dateCars.push(arrCars)
    printfCars()
    document.getElementById("form-cars").reset()
    } else {
        alert ("No se completaron los datos suficientes para registrar el auto.")
    }
}

const deleteCars = (id) => {
    let index = dateCars.findIndex((user)=>user.id==id)
    dateCars.splice(index,1)
    for (let i=0; i<dateCars.length; i++) {
        dateCars[i].id=i
    }
    printfCars()

    document.getElementById("form-cars").reset()
}

const toUpdate = (id) => {
    const brand = document.getElementById("Brand").value
    const model = document.getElementById("Model").value
    const colour = document.getElementById("Colour").value
    const year = document.getElementById("Year").value
    const price = document.getElementById("Price").value
    const image = document.getElementById("Image").value
    const updCars = {
            brand,
            model,
            colour,
            year,
            price,
            image,
            id
        }
        if (brand!="" && model!="" && colour!="" && year!="" && price!="") {
            dateCars.splice(id,1,updCars)
        printfCars()
        document.getElementById("form-cars").reset()
        } else {
            alert ("No se completaron los datos suficientes para la actualizacion de datos.")
        }
}