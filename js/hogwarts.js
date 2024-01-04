/* ------------------------------- SECTION 1 ------------------------------- */
//FUNCIÓN QUE CAPTA EL NOMBRE INGRESADO POR EL USUARIO:
function captureNameAndDisplaySection2(){
    // INCIALIZACIÓN Y DEFINICIÓN DE VARIABLE CON EL VALOR DEL INPUT:
    let name_input_1 = document.getElementById('1-input-section-1').value;
    // INCIALIZACIÓN Y DEFINICIÓN DE VARIABLE DE LA SECCIÓN 1 Y SECCIÓN 2:
    let section_1 = document.getElementById('section-1');
    let section_2 = document.getElementById('section-2');
    // REMOVER LA SECCIÓN 1 Y AÑADIR LA SECCIÓN 2:
    section_1.classList.add('display-none');
    section_2.classList.remove('display-none');
    //AÑADIR EL NOMBRE EN EL CAMPO INDICADO:
    document.getElementById('userName').innerHTML = name_input_1+'!';
}
/* ------------------------------- SECTION 2 ------------------------------- */
//FUNCIÓN QUE CAPTA LA INFORMACIÓN INGRESADA POR EL USUARIO:
function captureInformationAndDisplaySection3(){
    // VALOR DEL INPUT AGE:
    let age_input_1 = document.getElementById('1-input-section-2').value;
    // VALOR DEL INPUT FAMILY:
    let family_input_2 = document.getElementById('2-input-section-2').value;
    // VALOR DEL INPUT LINEAGE:
    let lineage_input_3 = document.getElementById("3-input-section-2").value;
    // VALOR DEL INPUT QUALITIES:
    let qualities_input_3 = document.getElementById('4-input-section-2').value;
    // CONDITIONAL TO ASSIGN THE HOUSE:
    let assignedHouse = '';
    if(age_input_1 < 11 || age_input_1 > 11){
        alert('You must be 11 years old to be accepted.');
    }else{
        if((qualities_input_3 == 1) && (lineage_input_3 === 'pureblood' || lineage_input_3 === 'halfbreed' || lineage_input_3 === 'muggle')){
            assignedHouse = 'Gryffindor';
        }else if((qualities_input_3 == 2) && (lineage_input_3 === 'halfbreed' || lineage_input_3 === 'muggle')){
            assignedHouse = 'Hufflepuff';
        }else if((qualities_input_3 == 3) && (lineage_input_3 === 'halfbreed' || lineage_input_3 === 'muggle' || lineage_input_3 === 'pureblood')){
            assignedHouse = 'Ravenclaw';
        }else if((qualities_input_3 == 4) && (lineage_input_3 === 'pureblood')){
            assignedHouse = 'Slytherin';
        }else {
            assignedHouse = false;
        }
        // INCIALIZACIÓN Y DEFINICIÓN DE VARIABLE DE LA SECCIÓN 2 Y 3:
        let section_3 = document.getElementById('section-3');
        // REMOVER LA SECCIÓN 2 Y AÑADIR LA SECCIÓN 3:
        let section_2 = document.getElementById('section-2');
        section_2.classList.add('display-none');
        section_3.classList.remove('display-none');
        if (assignedHouse) {
            // INCIALIZACIÓN Y DEFINICIÓN DE VARIABLE CON EL VALOR DEL INPUT:
            let name_input_1 = document.getElementById('1-input-section-1').value;
            // AÑADIR EL NOMBRE EN EL CAMPO INDICADO:
            document.getElementById('userName-2').innerHTML = 'Congratulations ' + name_input_1 + ', your house is ' + assignedHouse + '!';
        } else {
            // INCIALIZACIÓN Y DEFINICIÓN DE VARIABLE CON EL VALOR DEL INPUT:
            let name_input_1 = document.getElementById('1-input-section-1').value;
            // AÑADIR EL NOMBRE EN EL CAMPO INDICADO:
            document.getElementById('userName-2').innerHTML = 'We do apologize ' + name_input_1 + ', you were not assigned to any house!';
        }
    }
}