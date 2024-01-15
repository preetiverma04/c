function validate() {
    var n = document.getElementById("name").value;
    var p = document.getElementById("password").value;
    var resultElement = document.getElementById("result");

    if (n == "") {
        resultElement.innerHTML = "Not Valid. Please enter the name";
    } else if (p.length < 6 || p == "") {
        resultElement.innerHTML = "Not Valid. Password should be at least 6 characters.";
    } else {
        resultElement.innerHTML = "Valid";
    }
}
