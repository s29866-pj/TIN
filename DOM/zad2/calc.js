function calculate(){
    // Get user inputs
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;

    // Perform the calculation based on the selected operator
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Cannot divide by zero!');
                return;
            }
            result = num1 / num2;
            break;
        case '^':
            result = Math.pow(num1, num2);
            break;
        default:
            alert('Invalid operator!');
            return;
    }

    // Display the result
    document.getElementById('result').textContent = `${result}`;
}