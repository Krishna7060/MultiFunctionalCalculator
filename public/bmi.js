const form = document.querySelector('form');
  
form.addEventListener('submit', function (e) {
    // prevent default submission of form because here we are not using any server to store data
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const score = document.querySelector('#score');  
    const instruction = document.querySelector('.instruction');
    // const instruction= document.querySelector('.instrction');
    if (height < 0 || isNaN(height) || height === '') {
        score.innerHTML = 'please give valid height';
    } else if (weight < 0 || isNaN(weight) || weight === '') {
        score.innerHTML = 'please give valid weight';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show the score
        score.innerHTML = bmi;
        
         if (bmi < 18) {
         instruction.innerHTML = 'you are underweight'; 
         } else if (bmi < 25) {  
             instruction.innerHTML = 'you are overweight';  
        } else {
            instruction.innerHTML = 'you are fit';
     }
    }
});