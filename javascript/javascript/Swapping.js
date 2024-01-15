function swapping() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;

    if (a !== "" && b !== "") {
        let c = a;
        a = b;
        b = c;  
        document.getElementById("b").value=b ;
        document.getElementById("a").value=a;
    } else {
         alert("Please enter values for both a and b.");
    }
}
