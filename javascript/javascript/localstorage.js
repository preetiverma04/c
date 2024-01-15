function l(){
let a;
localStorage.setItem("a","hello");
document.getElementById("local").textContent=localStorage.getItem("a");
}l();