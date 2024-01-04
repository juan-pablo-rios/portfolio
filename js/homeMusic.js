// INICIALIZACIÓN Y DEFINICIÓN DE VARIABLES CON LOS DATOS DEL LOCALSTORAGE:
let auth = sessionStorage.getItem('auth');
let user_name_storage = sessionStorage.getItem('name');
// INICIALIZACIÓN Y DEFINICION DE VARIABLE CON EL ID DEL CAMPO A LLENAR CON EL NOMBRE:
let put_user_name = document.getElementById('user-name');
// PONER EL NOMBRE EN EL CAMPO INDICADO:
put_user_name.innerHTML = user_name_storage;
// VERIFICACIÓN DE QUE EL USUARIO SÍ HAYA INICIADO SESIÓN:
if (auth != 1) {
    location.href = 'index.html';
}

// FUNCIÓN PARA CAMBIAR EL TEMA SEGÚN EL GÉNERO DEL USUARIO:
function changeTheme(){
    // INICIALIZACIÓN Y DEFINICIÓN DE VARIABLE QUE CAPTURA AL ELEMENTO BODY:
    let bodyTheme = document.getElementById('theme');
    // INICIALIZACIÓN Y DEFINICIÓN DE VARIABLE QUE CAPTURA EL ELEMENTO BOTÓN:
    let buttonLogOut = document.getElementById('button-log-out');
    // INICIALIZACIÓN Y DEFINICIÓN DE VARIABLE QUE CAPTURA EL GÉNERO DEL USUARIO:
    let gender = sessionStorage.getItem('gender');
    if(gender == 'male'){
        bodyTheme.classList.add('male-theme');
        buttonLogOut.classList.add('button-log-out-male');
        buttonLogOut.classList.remove('button-log-out-female');
        bodyTheme.classList.remove('female-theme');
        bodyTheme.classList.remove('other-theme');
    }else if(gender == 'female'){
        bodyTheme.classList.add('female-theme');
        buttonLogOut.classList.add('button-log-out-female');
        buttonLogOut.classList.remove('button-log-out-male');
        bodyTheme.classList.remove('male-theme');
        bodyTheme.classList.remove('other-theme');
    }else{
        bodyTheme.classList.add('other-theme');
        bodyTheme.classList.remove('male-theme');
        bodyTheme.classList.remove('female-theme');
    }
}
changeTheme();
// FUNCIÓN PARA OBTENER LAS IMAGENES DEL USUARIO QUE INICIÓ SESIÓN:
function getUserImages(){
    // INICIALIZACIÓN Y DEFINICIÓN DE LA VARIABLE QUE CONTENDRÁ EL NOMBRE DEL SESSION STORAGE, ASÍ SE SABRÁ QUIÉN INICIÓ SESIÓN:
    let user_name_storage = sessionStorage.getItem('name');
    // BUSCAR EL USUARIO EN EL ARRAY 'people', UNA VEZ SE OBTENGA EL USUARIO SE GUARDARÁ EN LA VARIABLE 'currentUser'
    let currentUser = people.find(user => user.name === user_name_storage);
    // RETORNO DIRECTO DE LAS IMÁGENES DEL USUARIO. SI EL USUARIO NO SE ENCUENTRA, SE DEVUELVE UN ARRAY VACÍO:
    return currentUser ? currentUser.images : [];
}
// FUNCIÓN PARA PONER LAS IMÁGENES DE CADA USUARIO:
function putImages(){
    // INICIALIZACIÓN Y DEFINICIÓN DE LA FUNCIÓN QUE OBTUVO LAS IMÁGENES DEL USUARIO:
    let userImages = getUserImages();
    // INICIALIZACIÓN Y DEFINICIÓN DE LA VARIABLE QUE REPRESENTARÁ AL CONTAINER PARA PONER LAS IMÁGENES ADENTRO:
    let containerMain = document.getElementById("container-main");
    // MÉTODO forEach PARA REORRER LAS IMÁGENES DEL USUARIO:
    userImages.forEach(image => {
        // INICIALIZACIÓN Y DEFINICIÓN DE LA VARIABLE QUE SERÁ EL ELEMENTO IMAGEN:
        let img = document.createElement('img');
        //SE CREA EL ATRIBUTO 'src' PARA AGREGAR LA RUTA DE LA IMAGÉN:
        //img.src = image;
        img.setAttribute('src',image);
        containerMain.appendChild(img);
    });
}
putImages();




// FUNCIÓN PARA CERRAR SESIÓN:
function logOut() {
    // MODIFICACIÓN DEL LOCALSTORAGE QUE AUTORIZA EL INICIO DE SESIÓN:
    sessionStorage.setItem('auth', 0);
    let auth = sessionStorage.getItem('auth');
    if (auth != 1) {
        location.href = './indexMusic.html';
    }
}