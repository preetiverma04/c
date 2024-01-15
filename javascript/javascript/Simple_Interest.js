function simple_interest() {
    
    let Amount, Rate, Time;
    if (Amount !== "" && Rate !== "" && Time !== "") {
        Amount = parseFloat(document.getElementById("p").value);
        Rate = parseFloat(document.getElementById("r").value);
        Time = parseFloat(document.getElementById("t").value);


        if (!isNaN(Amount) && !isNaN(Rate) && !isNaN(Time)) {
            let si = (Amount * Rate * Time) / 100;
            document.getElementById("si").value=si;
        } }
}
