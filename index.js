let resultElement = document.getElementById("result");
let currentInput = "";

      function appendToResult(value) {
        currentInput += value;
        resultElement.textContent = currentInput;
      }

      function clearResult() {
        currentInput = "";
        resultElement.textContent = "0";
      }

      function calculateResult() {
        try {
            const result = eval(currentInput);
            const calculation = `${currentInput} = ${result}`;
            
            currentInput = result;
            resultElement.textContent = result;
            
            // Save calculation and result to localStorage
            const calculations = JSON.parse(localStorage.getItem('calculations')) || [];
            calculations.push(calculation);
            localStorage.setItem('calculations', JSON.stringify(calculations));
        } catch (error) {
            resultElement.textContent = 'Error';
        }
    }

      const eliminateNumbers = () => {
        if(resultElement.textContent === "Infinity" || resultElement.textContent === "Error"){
          resultElement.textContent = "0";
          currentInput = "";
        } else if(resultElement.textContent.length === 1){
          resultElement.textContent = "0";
          currentInput = "";
        } else {
          let newValue = resultElement.textContent.slice(0, -1);
          resultElement.textContent = newValue;
        }
      };

      const calculateSquare = () => {
        if(currentInput){
        try {
            const result = currentInput * currentInput;
            const calculation = `${currentInput}^2 = ${result}`;
            
            currentInput = result;
            resultElement.textContent = result;
            
            // Save calculation and result to localStorage
            const calculations = JSON.parse(localStorage.getItem('calculations')) || [];
            calculations.push(calculation);
            localStorage.setItem('calculations', JSON.stringify(calculations));
        } catch (error) {
            resultElement.textContent = 'Error';
        }
      }
    };
  
    const calculateRoot = () => {
      if(currentInput){
      try {
          const result = Math.sqrt(currentInput);
          const calculation = `√${currentInput} = ${result}`;
          
          currentInput = result;
          resultElement.textContent = result;
          
          // Save calculation and result to localStorage
          const calculations = JSON.parse(localStorage.getItem('calculations')) || [];
          calculations.push(calculation);
          localStorage.setItem('calculations', JSON.stringify(calculations));
      } catch (error) {
          resultElement.textContent = 'Error';
      }
    }
  };
  
  const calculateDivisionByOne = () => {
    if(currentInput){
    try {
        if (currentInput === '0') {
            resultElement.textContent = 'Error'; // Avoid division by zero
            return;
        }

        const result = 1 / currentInput;
        const calculation = `1 / ${currentInput} = ${result}`;
        
        currentInput = result;
        resultElement.textContent = result;
        
        // Save calculation and result to localStorage
        const calculations = JSON.parse(localStorage.getItem('calculations')) || [];
        calculations.push(calculation);
        localStorage.setItem('calculations', JSON.stringify(calculations));
    } catch (error) {
        resultElement.textContent = 'Error';
    }
  }
};

const showHistory = () => {
  let historyContainer = document.getElementById("history-container");
  historyContainer.classList.toggle('active');
  const savedData = localStorage.getItem('calculations');
  const historyTextElement = document.getElementById('history-text');

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    const lista = document.createElement('ul');

    // Record the data and create list items (li) for each data
    for (const key in parsedData) {
      if (parsedData.hasOwnProperty(key)) {
        const dato = parsedData[key];
        const listItem = document.createElement('li');
        listItem.classList.add('list');
        listItem.textContent = `${dato}`;
        lista.appendChild(listItem);
      }
    }

    // Clean the content
    historyTextElement.innerHTML = '';
    historyTextElement.appendChild(lista);

  } else {
   
    historyTextElement.textContent = 'There is no history yet';
  }
}

const removeHistory = () => {
  const historyTextElement = document.getElementById('history-text');
  localStorage.removeItem('calculations');
  historyTextElement.textContent = 'There is no history yet';
}


