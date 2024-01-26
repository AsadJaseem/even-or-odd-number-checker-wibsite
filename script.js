function checkNumber() {
    // Get the input value
    var inputElement = document.getElementById("numberInput");
    var inputValue = inputElement.value;

    // Check if the input is a valid number
    if (isNaN(inputValue)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }

    // Check if the number is even or odd
    var resultMessage = inputValue % 2 === 0 ? "Even" : "Odd";

    // Display the result
    document.getElementById("result").innerText = "Result: " + resultMessage;
}
