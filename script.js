document.getElementById('number-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const numberInput = document.getElementById('number');
  const stackContainer = document.getElementById('stack-container');
  stackContainer.innerHTML = '';

  const num = parseInt(numberInput.value);
  if (!isNaN(num) && num > 0) {
    generateStack(stackContainer, num);

    // Add additional HTML text below the stack elements
    const additionalText = document.createElement('div');
    additionalText.textContent = 'each function call contributes to the calculation of the factorial of 5, ultimately resulting in the final value of 120..';
    stackContainer.appendChild(additionalText);

    setTimeout(() => {
      const unwindingHeading = document.createElement('div');
      unwindingHeading.className = 'stack-element stack-heading';
      unwindingHeading.textContent = 'recursion Unwinding Process:';
      stackContainer.appendChild(unwindingHeading); // Insert before unwinding process
      unwindStack(stackContainer, 1);
    }, 1000); // Delay unwinding process by 1 second
  } else {
    alert("Please enter a valid positive number.");
  }
});

function generateStack(stackContainer, num) {
  if (num === 0) {
    return;
  } else {
    const stackElement = document.createElement('div');
    stackElement.className = 'stack-element';
    stackElement.textContent = `factorial(${num})`;
    stackContainer.appendChild(stackElement);
    generateStack(stackContainer, num - 1);
  }
}

function unwindStack(stackContainer, currentNum) {
  if (currentNum === 6) { // Base case: when currentNum reaches 6, stop recursion
    return;
  } else {
    let result = 1;
    let expression = '';
    for (let i = currentNum; i >= 1; i--) {
      result *= i;
      if (i === 1) {
        expression += `${i}`;
      } else {
        expression += `${i} * `;
      }
    }
    const stackElement = document.createElement('div');
    stackElement.className = 'stack-element';
    stackElement.textContent = `factorial(${currentNum}) = ${expression} = ${result}`;
    stackContainer.appendChild(stackElement);

    setTimeout(() => unwindStack(stackContainer, currentNum + 1), 1000); // Delay next recursion by 1 second
  }
}