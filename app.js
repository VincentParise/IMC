const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m
//récupérez les inputs dans une valeur et le bouton
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const bmiValue = document.querySelector(".bmi-value");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  calculateBmi();
});

function calculateBmi() {
  const height = inputs[0].value;
  const weight = inputs[1].value;

  if (!height || !weight || height <= 0 || weight <= 0) {
    handleError();
    return;
  }
  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
  bmiValue.textContent = bmi;

  showResult(bmi);
  // for (data of BMIData){
  //   if (bmi>=data.range[0] && bmi<=data.range[1]) {
  //     result.textContent=data.name;
  //   }
  // }
}

function handleError() {
  bmiValue.textContent = "Woops !!";
  bmiValue.style.color="inherit";
  result.textContent = "Erreur de saisie null ou manquante";
}

function showResult(bmi) {
  const rank = BMIData.find(data =>{
    if (bmi>data.range[0] && bmi<data.range[1]) {
      return data;
    }else {
      if(typeof data.range==="number" && bmi>=data.range){
        return data;
      }
    }
  })
  bmiValue.textContent = bmi;
  result.textContent = `Résultat : ${rank.name}`;
  bmiValue.style.color=`${rank.color}`;
};