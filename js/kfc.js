// ---------------------------- FUNCTION TO CHANGE THE THEME ----------------------------
function changeTheme(){
    // DEFINICIÓN E INICIALIZACIÓN DE VARIABLE DEL SELECTOR:
    let themeValue = document.getElementById("general-theme").value;
    let theme = document.getElementById("theme");

    if(themeValue == "os"){
        theme.classList.remove("theme-light");
        theme.classList.add("theme-dark");
    }else{
        theme.classList.remove("theme-dark");
        theme.classList.add("theme-light");
    }
};
// ---------------------------- FUNCTION TO CHANGE THE LANGUAGE ----------------------------
//DEFINICIÓN E INICIALIZACIÓN DEL ARRAY QUE CONTIENE DOS OBJETOS, CADA UNO CON SU CONTENIDO TRADUCIDO:
const translations = [
    {
        language: 'es',
        content: {
            optionLanguage_1: 'Seleccionar idioma',
            optionLanguage_2: 'Español',
            optionLanguage_3: 'Inglés',
            optionTheme_1: 'Seleccionar Tema',
            optionTheme_2: 'Claro',
            optionTheme_3: 'Oscuro',
            price_1: '$ 8.900',
            nameProduct_1: 'BBQ Crunch',
            description_1:'1 Sándwich BBQ Crunch (1 Filete de pollo apanado).',
            buyButton: 'Comprar',
            price_2: '$ 15.900',
            nameProduct_2: 'Kentucky Sandwich',
            description_2:'1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos y vegetales).',
            price_3: '$ 20.900',
            nameProduct_3: 'Combo BBQ Crunch',
            description_3:'1 Sándwich BBQ Crunch (1 Filete de pollo apanado) + 1 Papa Pequeña + 1 Gaseosa Petsi.',
            price_4: '$ 16.900',
            nameProduct_4: 'Kentucky Coronel Sandwich',
            description_4:'1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado y Ensalada).',
            price_5: '$ 21.900',
            nameProduct_5: 'Combo Kentucky Sandwich',
            description_5:'1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Pepinillos y Papas).',
            price_6: '$ 22.900',
            nameProduct_6: 'Combo Kentucky Coronel Sandwich',
            description_6:'1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada y Papas).',
            price_7: '$ 23.900',
            nameProduct_7: 'Sandwich Crispy BBQ',
            description_7:'1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla cristalizada y Queso).',
            price_8: '$ 29.900',
            nameProduct_8: 'Combo Sandwich Crispy BBQ',
            description_8:'1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, Cebolla, Papas + 1 Gaseosa Petsi).',
        },
    },
    {
        language: 'en',
        content: {
            optionLanguage_1: 'Select language',
            optionLanguage_2: 'Spanish',
            optionLanguage_3: 'English',
            optionTheme_1: 'Select Theme',
            optionTheme_2: 'Light',
            optionTheme_3: 'Dark',
            price_1: '$ 3',
            nameProduct_1: 'BBQ Crunch',
            description_1:'1 Sandwich BBQ Crunch (1 Breaded Chicken Steak).',
            buyButton: 'Buy',
            price_2: '$ 5',
            nameProduct_2: 'Kentucky Sandwich',
            description_2:'1 Kentucky hamburguesa / Sandwich (1 Breaded Chicken Steak, Pickles and Vegetables).',
            price_3: '$ 6',
            nameProduct_3: 'BBQ Crunch Combo',
            description_3:'1 Sandwich BBQ Crunch (1 Breaded Chicken Steak) + 1 Small Fries + 1 Petsi Soda.',
            price_4: '$ 3.5',
            nameProduct_4: 'Kentucky Coronel Sandwich',
            description_4:'1 Kentucky Coronel Hamburger / Sandwich (1 Breaded Chicken Steak and Salad).',
            price_5: '$ 7',
            nameProduct_5: 'Combo Kentucky Sandwich',
            description_5:'1 Kentucky Hamburger / Sandwich (1 Breaded Chicken Steak, Pickles and Fries).',
            price_6: '$ 8',
            nameProduct_6: 'Combo Kentucky Coronel Sandwich',
            description_6:'1 Kentucky Coronel Hamburger / Sandwich (1 Breaded Chicken Steak, Salad y Fries).',
            price_7: '$ 7.5',
            nameProduct_7: 'Sandwich Crispy BBQ',
            description_7:'1 Sandwich Crispy BBQ (1 Extra Large Breast Fillet, Triple Breaded, Crystallized Onion and Cheese).',
            price_8: '$ 9.8',
            nameProduct_8: 'Combo Sandwich Crispy BBQ',
            description_8:'1 Sandwich Crispy BBQ (1 Extra Large Breast Fillet, Triple Breaded, Onion, Fries + 1 Petsi soda).',
        },
    },
];
// FUNCTION:
function changeLanguage(){
    // DEFINICIÓN E INICIALIZACIÓN DE LA CONSTANTE, TENIENDO EN CUENTA EL VALUE DEL SELECTOR:
    const languageSelected = document.getElementById("language").value;
    // DEFINICIÓN E INICIALIZACIÓN DE LA CONSTANTE TENIENDO EN CUENTA QUE LA OPCIÓN SELECCIONADA POR EL USUARIO COINCIDA CON UNA OPCION DISPONIBLE EN EL SELECTOR YA SEA 'es' O 'en', ASÍ DEVOLVERÁ EL OBJETO INDICADO CON EL KEY 'Language' CORRESPONDIENTE 'es' O 'en':
    const userLanguage = translations.find(option => option.language == languageSelected);
    // CONDICIONAL PARA EVALUAR QUE EL VALOR SELECCIONADO POR EL USUARIO COINCIDA CON UNA OPCIÓN DISPONIBLE EN EL SELECTOR:
    if(userLanguage){
        document.getElementById("optionLanguage_1").textContent = userLanguage.content.optionLanguage_1;
        document.getElementById("optionLanguage_2").textContent = userLanguage.content.optionLanguage_2;
        document.getElementById("optionLanguage_3").textContent = userLanguage.content.optionLanguage_3;
        document.getElementById("optionTheme_1").textContent = userLanguage.content.optionTheme_1;
        document.getElementById("optionTheme_2").textContent = userLanguage.content.optionTheme_2;
        document.getElementById("optionTheme_3").textContent = userLanguage.content.optionTheme_3;
        document.getElementById("price_1").textContent = userLanguage.content.price_1;
        document.getElementById("nameProduct_1").textContent = userLanguage.content.nameProduct_1;
        document.getElementById("description_1").textContent = userLanguage.content.description_1;
        document.getElementById("price_2").textContent = userLanguage.content.price_2;
        document.getElementById("nameProduct_2").textContent = userLanguage.content.nameProduct_2;
        document.getElementById("description_2").textContent = userLanguage.content.description_2;
        document.getElementById("price_3").textContent = userLanguage.content.price_3;
        document.getElementById("nameProduct_3").textContent = userLanguage.content.nameProduct_3;
        document.getElementById("description_3").textContent = userLanguage.content.description_3;
        document.getElementById("price_4").textContent = userLanguage.content.price_4;
        document.getElementById("nameProduct_4").textContent = userLanguage.content.nameProduct_4;
        document.getElementById("description_4").textContent = userLanguage.content.description_4;
        document.getElementById("price_5").textContent = userLanguage.content.price_5;
        document.getElementById("nameProduct_5").textContent = userLanguage.content.nameProduct_5;
        document.getElementById("description_5").textContent = userLanguage.content.description_5;
        document.getElementById("price_6").textContent = userLanguage.content.price_6;
        document.getElementById("nameProduct_6").textContent = userLanguage.content.nameProduct_6;
        document.getElementById("description_6").textContent = userLanguage.content.description_6;
        document.getElementById("price_7").textContent = userLanguage.content.price_7;
        document.getElementById("nameProduct_7").textContent = userLanguage.content.nameProduct_7;
        document.getElementById("description_7").textContent = userLanguage.content.description_7;
        document.getElementById("price_8").textContent = userLanguage.content.price_8;
        document.getElementById("nameProduct_8").textContent = userLanguage.content.nameProduct_8;
        document.getElementById("description_8").textContent = userLanguage.content.description_8;
    }
}
