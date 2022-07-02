import {Dbank } from '../../declarations/Dbank'

window.addEventListener('load', async function() {
    const CurrentAmount = await Dbank.checkbalance()
    document.getElementById("value").innerText = CurrentAmount;

})

document.querySelector("form"),addEventListener("submit",async function(event){
    event.preventDefault();

    const button = event.target.querySelector("#submit-btn");

    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

    button.setAttribute("disabled", true);

    if (document.getElementById("input-amount").value.length != 0 ){
        await Dbank.add(inputAmount);
    };
    if (document.getElementById("withdrawal-amount").value.length != 0 ){
        await Dbank.subtract(outputAmount);
    };

    const CurrentAmount = await Dbank.checkbalance()
    document.getElementById("value").innerText = CurrentAmount;
    button.removeAttribute("disabled");



    document.getElementById("value").innerText = CurrentAmount;
    document.getElementById("input-amount").value = "";
    document.getElementById("withdrawal-amount").value = "";
    button.removeAttribute("disabled");
    
}); 