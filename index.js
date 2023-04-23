// getElementby id use insted of qureySelector
const countValue= document.querySelector("#counter");

const increment=() => {
    // update the value from UI

    // change string to int by parse
let value = parseInt (countValue.innerText);

// update the value
value = value + 1;

// Set the value onto UI
countValue.innerText=value;
};



function decrement(){
  // update the value from UI

    // change string to int by parse
    let value = parseInt (countValue.innerText);

    // update the value
    value = value - 1;
    
    // Set the value onto UI
    countValue.innerText=value;
};
