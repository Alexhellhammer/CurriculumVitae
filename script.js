console.log("Loading Javascript.......");

function saveCont() {
    let nameContact = document.getElementById("Nombres").value;
    let telefonoContact = document.getElementById("telefono").value;
    let emailContact = document.getElementById("Email").value;
    let temaContact = document.getElementById("tema").value;
    let mensajeContact = document.getElementById("mensaje").value;

    let cont = {
        Nombres: nameContact,
        telefono: telefonoContact,
        Email: emailContact,
        tema: temaContact,
        mensaje: mensajeContact,
    }

    console.log(cont);

    let url = "http://localhost:8000/api/contactoC";
    let params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cont),
    }
    
    fetch(url, params)
        .then(response => {
            console.log(response);
    
            if (response.status == 201) {
                alert("Creación de Contacto");
            } else {
                alert("Error en la creación del Contacto");
            }
        })
        .catch(error => {
            console.log(error);
        });
    
    return true;
}

function getCont() {
    let url = "http://localhost:8000/api/contactoR";
    let params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }

    fetch(url, params)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });

    url = "https://api.agify.io/?name=meelad";
    params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }

    fetch(url, params)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });

    return true;
}