// script.js
document.getElementById("calculateBtn").addEventListener("click", function() {
    const name = document.getElementById("name").value || "Usuario";
    const height = parseFloat(document.getElementById("height").value) / 100; // Convertir cm a m
    const weight = parseFloat(document.getElementById("weight").value);
    const resultDiv = document.getElementById("result");
    const dietDiv = document.getElementById("diet");
    const exerciseDiv = document.getElementById("exercise");
    const bibliographyDiv = document.getElementById("bibliography");
    const motivationalQuoteDiv = document.getElementById("motivationalQuote");

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = "Por favor, ingrese valores válidos de altura y peso.";
        dietDiv.innerHTML = "";
        exerciseDiv.innerHTML = "";
        bibliographyDiv.innerHTML = "";
        motivationalQuoteDiv.innerHTML = "";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    resultDiv.innerHTML = `Hola ${name}, su IMC es: <strong>${bmi}</strong>`;

    let diet = "";
    let exercises = "";
    let resources = "";

    if (bmi < 18.5) {
        diet = `
            <h4>Dieta recomendada:</h4>
            <ul>
                <li>Desayuno: 2 tostadas integrales con aguacate y un batido de plátano.</li>
                <li>Almuerzo: Ensalada de pollo con quinoa y nueces.</li>
                <li>Merienda: Yogur griego con miel y frutas.</li>
                <li>Cena: Salmón a la plancha con arroz integral y espárragos.</li>
            </ul>
        `;
        exercises = `
            <h4>Ejercicios recomendados:</h4>
            <ul>
                <li>Entrenamiento de fuerza 3 veces por semana.</li>
                <li>Nadar 30 minutos, 2 veces por semana.</li>
            </ul>
        `;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        diet = `
            <h4>Dieta recomendada:</h4>
            <ul>
                <li>Desayuno: Avena con frutas y nueces.</li>
                <li>Almuerzo: Filete de ternera magra con verduras al vapor.</li>
                <li>Merienda: Hummus con zanahorias.</li>
                <li>Cena: Pechuga de pollo a la plancha con batata asada.</li>
            </ul>
        `;
        exercises = `
            <h4>Ejercicios recomendados:</h4>
            <ul>
                <li>30 minutos de ejercicio cardiovascular 5 veces a la semana.</li>
                <li>Entrenamiento de fuerza 2 veces por semana.</li>
            </ul>
        `;
    } else if (bmi >=  25 && bmi < 29.9) {
        diet = `
            <h4>Dieta recomendada:</h4>
            <ul>
                <li>Desayuno: Batido de proteínas con frutas y avena.</li>
                <li>Almuerzo: Ensalada de atún con lechuga, tomate y aguacate.</li>
                <li>Merienda: Yogur griego con frutas.</li>
                <li>Cena: Pollo al curry con arroz integral y brócoli.</li>
            </ul>
        `;
        exercises = `
            <h4>Ejercicios recomendados:</h4>
            <ul>
                <li>45 minutos de ejercicio cardiovascular 5 veces a la semana.</li>
                <li>Entrenamiento de fuerza 3 veces por semana.</li>
            </ul>
        `;
    } else if (bmi >= 30) {
        diet = `
            <h4>Dieta recomendada:</h4>
            <ul>
                <li>Desayuno: Batido de proteínas con frutas y avena.</li>
                <li>Almuerzo: Ensalada de pollo con lechuga, tomate y aguacate.</li>
                <li>Merienda: Yogur griego con frutas.</li>
                <li>Cena: Pescado al horno con verduras al vapor.</li>
            </ul>
        `;
        exercises = `
            <h4>Ejercicios recomendados:</h4>
            <ul>
                <li>60 minutos de ejercicio cardiovascular 5 veces a la semana.</li>
                <li>Entrenamiento de fuerza 4 veces por semana.</li>
            </ul>
        `;
    }

    dietDiv.innerHTML = diet;
    exerciseDiv.innerHTML = exercises;
    
    bibliographyDiv.innerHTML = `
        <h3>Bibliografía:</h3>
        <ul>
            <li><a href="https://www.cdc.gov/healthyweight/spanish/assessing/bmi/adult_bmi/index.html" target="_blank">Acerca del IMC para adultos</a></li>
            <li><a href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" target="_blank">Obesidad y sobrepeso</a></li>
        </ul>
    `;

    motivationalQuoteDiv.innerHTML = `<h3>Frase motivadora:</h3><p>"El éxito es la suma de pequeños esfuerzos repetidos día tras día."</p>`;
});

// Botón para nueva consulta
document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("name").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("diet").innerHTML = "";
    document.getElementById("exercise").innerHTML = "";
    document.getElementById("bibliography").innerHTML = "";
    document.getElementById("motivationalQuote").innerHTML = "";
});
