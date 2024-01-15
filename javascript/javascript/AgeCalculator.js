let today;
let d;
let m;
let y;

function ageCalculator() {
    today = new Date();
    d = today.getDate();
    m = today.getMonth()+1;
    y = today.getFullYear();
    document.getElementById("enter_date").value = d;
    document.getElementById("enter_month").value = m;
    document.getElementById("enter_year").value = y;
    setTimeout(ageCalculator, 1000);
    var enteredDate=parseInt(document.getElementById("date").value);
    var enteredMonth=parseInt(document.getElementById("month").value);
    var enteredYear=parseInt(document.getElementById("year").value);
    
}

function ageCal() {
    var current_date = new Date();
    var date = current_date.getDate();
    var month = current_date.getMonth() + 1; 
    var year = current_date.getYear();
    document.getElementById("date").innerHTML = date;
    document.getElementById("month").innerHTML = month;
    document.getElementById("year").innerHTML = year;
    setTimeout(ageCal, 1000);
    
}
function calculation(){

    enteredDate= date-enteredDate;
    enteredDMonth=month-enteredMonth;
    enteredYear=year-enteredYear;

}
ageCalculator();
ageCal();
