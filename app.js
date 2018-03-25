
var selUnit = document.getElementById("chooseUnitContainerSelect");
var weightCvt = document.getElementById("convertWeightContainer");
var lengthCvt = document.getElementById("convertLengthContainer");

//Select WEIGHT or LENGTH
selUnit.addEventListener("change", showSelectedConverter, false);
function showSelectedConverter(e){
  console.log(e.target.value);
  if(e.target.value === "Weight"){
    weightCvt.style.display = "block";
    lengthCvt.style.display = "none";
  }
  else if (e.target.value === "Length") {
    lengthCvt.style.display = "block";
    weightCvt.style.display = "none";
  }
  else if(e.target.value === "Select -----"){
      weightCvt.style.display = "none";
      lengthCvt.style.display = "none";
    }
  else {
      //catch   error
  }
}

//Select Weight between Gramm/Oz Kg/Lb
var weightSel = document.getElementById("convertWeightContainerSelect");
var weightInput = document.getElementById("weightInputContainer");
var iWeight = document.getElementById("inputWeight");
var outputW = document.getElementById("outputW");
weightSel.addEventListener("change", doWeightConversion, false);
function doWeightConversion(e){
  console.log(e.target.value);
  if(e.target.value === "Select ----"){
      iWeight.style.display = "none";
      outputW.style.display = "none";
  }
  else if(e.target.value === "Gramm to Ounces"){
    weightInput.style.display = "block";
    doConversionGrToOz();
  }
  else if (e.target.value === "Ounces to Gramm") {
    weightInput.style.display = "block";
    doConversionOzToGr();
  }
  else if (e.target.value === "Kilogramm to Pounds") {
    weightInput.style.display = "block";
    doConversionKgToLb();
  }
  else if (e.target.value === "Pounds to Kilogramm") {
    weightInput.style.display = "block";
    doConversionLbToKg();
  }
  else{
    //catch error
  }
}

function doConversionGrToOz(){
  var gr = 0.03527396; //1gr=0.03527396oz
  iWeight.value = '';
  outputW.innerHTML = '';
  iWeight.addEventListener("keyup", doCalc, false);
  function doCalc(e){
      var conv = parseInt(iWeight.value) * gr;
      if(iWeight.value != ''){
          outputW.innerHTML = conv + " oz";
      }
      else{
        outputW.innerHTML = '';
      }
  }
}

function doConversionOzToGr(){
  var oz = 28.34952313; //1oz=28.34952313gramms
  iWeight.value = '';
  outputW.innerHTML = '';
  iWeight.addEventListener("keyup", doCalc, false);
  function doCalc(e){
      var conv = parseInt(iWeight.value) * oz;
      if(iWeight.value != ''){
          outputW.innerHTML = conv + " gr";
      }
      else{
        outputW.innerHTML = '';
      }
  }
}

function doConversionKgToLb(){
  var kg = 2.20462; //1kg=2.20462lbs
  iWeight.value = '';
  outputW.innerHTML = '';
  iWeight.addEventListener("keyup", doCalc, false);
  function doCalc(e){
      var conv = parseInt(iWeight.value) * kg;
      if(iWeight.value != ''){
          outputW.innerHTML = conv + " lbs";
      }
      else{
        outputW.innerHTML = '';
      }
  }
}

function doConversionLbToKg(){
  var lb = 0.453592; //1LB= 0.453592kgs
  iWeight.value = '';
  outputW.innerHTML = '';
  iWeight.addEventListener("keyup", doCalc, false);
  function doCalc(e){
      var conv = parseInt(iWeight.value) * lb;
      if(iWeight.value != ''){
          outputW.innerHTML = conv + " kg";
      }
      else{
        outputW.innerHTML = '';
      }
  }
}




//Select Length between Cm/Inc Mt/Feet
var lengthSel = document.getElementById("convertLengthContainerSelect");
var lengthInput = document.getElementById("lengthInputContainer");
var iLength = document.getElementById("inputLength");
var outputL = document.getElementById("outputL");
lengthSel.addEventListener("change", doLengthConversion, false);
function doLengthConversion(e){
  console.log(e.target.value);
  if(e.target.value === "Select ----"){
      iLength.style.display = "none";
      outputL.style.display = "none";
  }
  else if(e.target.value === "centimeters to inches"){
    lengthInput.style.display = "block";
    doConversionCmToInc();
  }
  else if(e.target.value === "inches to centimeters"){
    lengthInput.style.display = "block";
    doConversionIncToCm();
  }
  else if(e.target.value === "meter to feet"){
    lengthInput.style.display = "block";
    doConversionMtToFt();
  }
  else if(e.target.value === "feet to meter"){
    lengthInput.style.display = "block";
    doConversionFtToMt();
  }
  else{
    //catch error
  }
}

function doConversionCmToInc(){
  var cm = 0.393701; //1cm= 0.393701inches
  iLength.value = '';
  outputL.innerHTML = '';
  iLength.addEventListener("keyup", doCalc, false);
  function doCalc(e){
      var conv = parseInt(iLength.value) * cm;
      if(iLength.value != ''){
          outputL.innerHTML = conv + " inches";
      }
      else{
        outputL.innerHTML = '';
      }
  }
}

function doConversionIncToCm(){
  var inc = 2.54; //1inc = 2.54cm
  iLength.value = '';
  outputL.innerHTML = '';
  iLength.addEventListener("keyup", doCalc, false);
  function doCalc(e){
      var conv = parseInt(iLength.value) * inc;
      if(iLength.value != ''){
          outputL.innerHTML = conv + " cm";
      }
      else{
        outputL.innerHTML = '';
      }
  }
}

function doConversionMtToFt(){
  var mt = 3.28084; //1mt =  3.28084 feet
  iLength.value = '';
  outputL.innerHTML = '';
  iLength.addEventListener("keyup", doCalc, false);
  function doCalc(e){
      var conv = parseInt(iLength.value) * mt;
      if(iLength.value != ''){
          outputL.innerHTML = conv + " ft";
      }
      else{
        outputL.innerHTML = '';
      }
  }
}

function doConversionFtToMt(){
  var ft = 0.3048; //1foot =  0.3048meter
  iLength.value = '';
  outputL.innerHTML = '';
  iLength.addEventListener("keyup", doCalc, false);
  function doCalc(e){
      var conv = parseInt(iLength.value) * ft;
      if(iLength.value != ''){
          outputL.innerHTML = conv + " mt";
      }
      else{
        outputL.innerHTML = '';
      }
  }
}
