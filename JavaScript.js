const dateCars = []

const printfCars = () => {
    const table = document.getElementById("table")
    table.lastElementChild.innerHTML=``
    for (const user of dateCars) {
        table.lastElementChild.innerHTML+=`<tr><td>${user.id}</td><td>${user.brand}</td><td>${user.model}</td><td>${user.colour}</td><td>${user.year}</td><td>${user.price}</td><td><button class="btn btn-danger" onclick="deleteCars(${user.id})">Remove</button><button onclick="toUpdate(${user.id})" class="btn btn-primary left">To update</button></td></tr>`
    }
}

const addCars = () => {
    const brand = document.getElementById("Brand").value
    const model = document.getElementById("Model").value
    const colour = document.getElementById("Colour").value
    const year = document.getElementById("Year").value
    const price = document.getElementById("Price").value
    const index = dateCars.length
    const id = index
    const arrCars = {
            brand,
            model,
            colour,
            year,
            price,
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
    const updCars = {
            brand,
            model,
            colour,
            year,
            price,
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