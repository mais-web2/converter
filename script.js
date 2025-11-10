function convertToMiles() {
  const kmInput = document.getElementById("kmInput");
  const resultDiv = document.getElementById("result");

  // التأكد من وجود العنصر
  if (!kmInput || !resultDiv) {
    console.error("Element not found: kmInput or resultDiv");
    return;
  }

  const kilometers = parseFloat(kmInput.value);

  // التحقق من صحة الإدخال
  if (isNaN(kilometers) || kilometers < 0) {
    resultDiv.style.color = "red";
    resultDiv.textContent = "Please enter a valid non-negative number.";
    return;
  }
const miles = kilometers * 0.621371;
resultDiv.style.color = "#008000";
resultDiv.textContent = '${kilometers} km = ${miles.toFixed(3)} mi';}

function clearFields() {
  const kmInput = document.getElementById("kmInput");
  const resultDiv = document.getElementById("result");

  if (kmInput) kmInput.value = "";
  if (resultDiv) resultDiv.textContent = "";
}