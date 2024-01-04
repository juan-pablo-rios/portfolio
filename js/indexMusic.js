// FUNCIÓN PARA VALIDAR EL INICIO DE SESIÓN:
// function signIn() {
//     // OBJETO CON EL/LOS USUARIOS AUTORIZADOS/REGISTRADOS:
//     let people = {
//         name: 'Juan',
//         email: 'juan@gmail.com',
//         password: '123456'
//     }
//     // INICIALIZACIÓN Y DEFINICIÓN DE VARIABLES CON LOS VALORES QUE INGRESE EL USUARIO:
//     let user_email = document.getElementById('input_email');
//     let user_password = document.getElementById('input_password');
//     // CONDICIONAL PARA VERIFICAR QUE LOS DATOS INGRESADOS COINCIDAN CON LOS QUE SE TIENEN GUARDADOS EN EL OBJETO:
//     if (user_email.value == people.email && user_password.value == people.password) {
//         sessionStorage.setItem('name', people.name);
//         sessionStorage.setItem('auth', 1);
//         sessionStorage.setItem('gender',);
//         location.href = "home.html";
//     } else {
//         alert('¡Los datos ingresados no son válidos!');
//     }
// }

// ------------------------------------------------------------------------------------------------------
// OBJETO CON EL/LOS USUARIOS AUTORIZADOS/REGISTRADOS:
let people = [
    {
        name : "Samuel",
        email: "samuel@gmail.com",
        gender : "male",
        password : "123",
        images : [
            '../images/img-11.jpg',
            '../images/img-12.jpg',
            '../images/img-13.jpeg',
            '../images/img-14.webp',
            '../images/img-15.jpg',
            '../images/img-16.jpg',
            '../images/img-17.webp',
            '../images/img-18.jpg',
            '../images/img-19.jpg',
            '../images/img-20.jpg',
        ]
    },
    {
        name : "Manuela",
        email : "manuela@gmail.com",
        gender : "female",
        password : "123",
        images : [
            '../images/img-1.jpg',
            '../images/img-2.jpeg',
            '../images/img-3.jpg',
            '../images/img-4.jpg',
            '../images/img-5.webp',
            '../images/img-6.jpg',
            '../images/img-7.jpg',
            '../images/img-8.jpg',
            '../images/img-9.webp',
            '../images/img-10.jpeg',
        ]
    }
];
// FUNCIÓN PARA VALIDAR EL INICIO DE SESIÓN:
function signIn() {
    // INICIALIZACIÓN Y DEFINICIÓN DE VARIABLES CON LOS VALORES QUE INGRESE EL USUARIO:
    let user_email = document.getElementById('input_email');
    let user_password = document.getElementById('input_password');
    // CICLO FOR PARA RECORRER LAS POSICIONES DEL ARRAY QUE CONTIENE A LOS USUARIOS:
    for (let i = 0; i<people.length; i++){
        // CONDICIONAL PARA VERIFICAR QUE LOS DATOS INGRESADOS COINCIDAN CON LOS QUE SE TIENEN GUARDADOS EN EL OBJETO:
        if (user_email.value == people[i].email && user_password.value == people[i].password) {
            sessionStorage.setItem('name', people[i].name);
            sessionStorage.setItem('auth', 1);
            sessionStorage.setItem('gender', people[i].gender);
            location.href = "./homeMusic.html";
            return;
        }
    }
    alert('¡Los datos ingresados no son válidos!');
}