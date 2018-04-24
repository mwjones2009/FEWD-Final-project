
var yourname= prompt("what is your name?");

if(yourname != "" && yourname != null){
  document.getElementById("sayHello").innerHTML= "hello "+yourname;
} else {
  alert("please enter a name next time!");
}