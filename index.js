let body = document.getElementById("body");

let house = document.getElementById("icon-1");
house.addEventListener("click", f_house);

document.getElementById("name").innerHTML = localStorage.getItem("fullname");

document.getElementById("usernamee").innerHTML = "@" + localStorage.getItem("username");
function f_house() {

profilebackground.style.display = "none";
plusbackground.style.display = "none";
anabackground.style.display = "none";
walletbackground.style.display = "none";
homebackground.style.display = "block";


  activated.style.left = "15%";
  body.style.backgroundColor = "#f6b355";
  house.style.backgroundColor = "#F28C3C";
  person.style.backgroundColor = "#212121";
  mail.style.backgroundColor = "#212121";
  star.style.backgroundColor = "#212121";
  bell.style.backgroundColor = "#212121";

  house.style.top = "10%";
  house.style.width = "75px";
  house.style.height = "75px";

  person.style.top = "50%";
  person.style.width = "50px";
  person.style.height = "50px";

  mail.style.top = "50%";
  mail.style.width = "50px";
  mail.style.height = "50px";

  star.style.top = "50%";
  star.style.width = "50px";
  star.style.height = "50px";

  bell.style.top = "50%";
  bell.style.width = "50px";
  bell.style.height = "50px";

  activated.style.transitionDuration = "0.7s";
  house.style.transitionDuration = "0.7s";
}

let person = document.getElementById("icon-2");
person.addEventListener("click", f_person);

function f_person() {

  homebackground.style.display = "none";
plusbackground.style.display = "none";
anabackground.style.display = "none";
walletbackground.style.display = "none";
profilebackground.style.display = "block";




  activated.style.left = "32.5%";
  house.style.backgroundColor = "#212121";
  body.style.backgroundColor = "#F195BC";
  person.style.backgroundColor = "#EC4687";
  mail.style.backgroundColor = "#212121";
  star.style.backgroundColor = "#212121";
  bell.style.backgroundColor = "#212121";

  house.style.top = "50%";
  house.style.width = "50px";
  house.style.height = "50px";

  person.style.top = "10%";
  person.style.width = "75px";
  person.style.height = "75px";

  mail.style.top = "50%";
  mail.style.width = "50px";
  mail.style.height = "50px";

  star.style.top = "50%";
  star.style.width = "50px";
  star.style.height = "50px";

  bell.style.top = "50%";
  bell.style.width = "50px";
  bell.style.height = "50px";

  activated.style.transitionDuration = "0.7s";
  person.style.transitionDuration = "0.7s";
}

let mail = document.getElementById("icon-3");
mail.addEventListener("click", f_mail);

function f_mail() {

  
  homebackground.style.display = "none";
profilebackground.style.display = "none";
anabackground.style.display = "none";
walletbackground.style.display = "none";
plusbackground.style.display = "block";


  
  activated.style.left = "50%";
  house.style.backgroundColor = "#212121";
  person.style.backgroundColor = "#212121";
  mail.style.backgroundColor = "#4347F6";
  body.style.backgroundColor = "#9998F8";
  star.style.backgroundColor = "#212121";
  bell.style.backgroundColor = "#212121";

  house.style.top = "50%";
  house.style.width = "50px";
  house.style.height = "50px";

  person.style.top = "50%";
  person.style.width = "50px";
  person.style.height = "50px";

  mail.style.top = "10%";
  mail.style.width = "75px";
  mail.style.height = "75px";

  star.style.top = "50%";
  star.style.width = "50px";
  star.style.height = "50px";

  bell.style.top = "50%";
  bell.style.width = "50px";
  bell.style.height = "50px";

  activated.style.transitionDuration = "0.7s";
  mail.style.transitionDuration = "0.7s";
}

let star = document.getElementById("icon-4");
star.addEventListener("click", f_star);

function f_star() {

  
  homebackground.style.display = "none";
plusbackground.style.display = "none";
profilebackground.style.display = "none";
walletbackground.style.display = "none";
anabackground.style.display = "block";


  activated.style.left = "67.6%";
  house.style.backgroundColor = "#212121";
  person.style.backgroundColor = "#212121";
  mail.style.backgroundColor = "#212121";
  star.style.backgroundColor = "#E0B13F";
  body.style.backgroundColor = "#FDE697";
  bell.style.backgroundColor = "#212121";

  house.style.top = "50%";
  house.style.width = "50px";
  house.style.height = "50px";

  person.style.top = "50%";
  person.style.width = "50px";
  person.style.height = "50px";

  mail.style.top = "50%";
  mail.style.width = "50px";
  mail.style.height = "50px";

  star.style.top = "10%";
  star.style.width = "75px";
  star.style.height = "75px";

  bell.style.top = "50%";
  bell.style.width = "50px";
  bell.style.height = "50px";

  activated.style.transitionDuration = "0.7s";
  star.style.transitionDuration = "0.7s";
}

let bell = document.getElementById("icon-5");
bell.addEventListener("click", f_bell);

function f_bell() {

  
  homebackground.style.display = "none";
plusbackground.style.display = "none";
anabackground.style.display = "none";
profilebackground.style.display = "none";
walletbackground.style.display = "block";


  activated.style.left = "85%";
  house.style.backgroundColor = "#212121";
  person.style.backgroundColor = "#212121";
  mail.style.backgroundColor = "#212121";
  star.style.backgroundColor = "#212121";
  bell.style.backgroundColor = "#65DDB7";
  body.style.backgroundColor = "#CFFCF1";

  house.style.top = "50%";
  house.style.width = "50px";
  house.style.height = "50px";

  person.style.top = "50%";
  person.style.width = "50px";
  person.style.height = "50px";

  mail.style.top = "50%";
  mail.style.width = "50px";
  mail.style.height = "50px";

  star.style.top = "50%";
  star.style.width = "50px";
  star.style.height = "50px";

  bell.style.top = "10%";
  bell.style.width = "75px";
  bell.style.height = "75px";

  activated.style.transitionDuration = "0.7s";
  bell.style.transitionDuration = "0.7s";
}

document.getElementById("weeklylim").innerHTML = "₹" + localStorage.getItem("limit");

var balance = [localStorage.getItem("balance")];

function set(){
  balance[0] = 300;
localStorage.setItem("balance", balance[0]);

document.getElementById("balance2").innerHTML = "₹" + localStorage.getItem("balance");

localStorage.setItem("limit", balance[0]);

document.getElementById("weeklylim").innerHTML = "₹" + localStorage.getItem("limit");

document.getElementById("bance2").innerHTML = "₹" + localStorage.getItem("balance");

}



function plus(){

  localStorage.setItem("balance", Number(localStorage.getItem("balance") ) + 20) ;

  localStorage.setItem("limit", Number(localStorage.getItem("limit") ) + 20) ;


  document.getElementById("moneyrem").innerHTML = "₹" + localStorage.getItem("balance");
  document.getElementById("weeklylim").innerHTML = "₹" + localStorage.getItem("limit");
document.getElementById("balance2").innerHTML = "₹" + localStorage.getItem("balance");

document.getElementById("bance2").innerHTML = "₹" + localStorage.getItem("balance");
}

function minus(){
  localStorage.setItem("balance", Number(localStorage.getItem("balance") ) - 20) ;

  localStorage.setItem("limit", Number(localStorage.getItem("limit") ) - 20) ;
  document.getElementById("weeklylim").innerHTML = "₹" + localStorage.getItem("limit");
  document.getElementById("moneyrem").innerHTML = "₹" + localStorage.getItem("balance");

  document.getElementById("balance2").innerHTML = "₹" + localStorage.getItem("balance");

  document.getElementById("bance2").innerHTML = "₹" + localStorage.getItem("balance");
  }

  document.getElementById("balance2").innerHTML = "₹" + localStorage.getItem("balance");

var bhai = [];

setInterval(function(){alert("Hello")},604800000);


function login(){

  if(localStorage.getItem("login") != "true"){

document.getElementById("login1").style.display = "block";

document.getElementById("login").style.display = "block";

document.getElementById("loginbox").style.display = "block";
  }
}
let data = []

function submitdata(){



document.getElementById("limitweek").style.display = "block";

  data[0]  = document.getElementById("user").value ;

  localStorage.setItem("username", data[0] )

  data[1]  = document.getElementById("pass").value ;

  localStorage.setItem("password", data[1] )
  
  data[2]  = document.getElementById("full").value ;

  localStorage.setItem("fullname", data[2] )

  data[3]  = document.getElementById("prof").value ;

  localStorage.setItem("profession", data[3] )

  document.getElementById("loginbox").style.display = "none";

  weeklimit();

}

function weeklimit(){

  set();
  
}

function submitfinal(){

  document.getElementById("login").style.display = "none";


bhai[0] = "true";
localStorage.setItem("login", bhai[0]);

location.reload();
}

let where = [];
let spent = [];
var i = [-1];

function record(){

  localStorage.setItem("balance", Number(localStorage.getItem("balance") ) -  document.getElementById("amount").value) ;


  localStorage.setItem("count", Number(localStorage.getItem("count") ) +1) ;

  where[localStorage.getItem("count")] = document.getElementById("whyspent").value;
  spent[localStorage.getItem("count")] = document.getElementById("amount").value;

localStorage.setItem("where" + localStorage.getItem("count") ,  where[localStorage.getItem("count")] )

localStorage.setItem("spent" + localStorage.getItem("count") ,  spent[localStorage.getItem("count")] )
 

document.getElementById("amount").value = null;
document.getElementById("whyspent").value = null;
  // alert(localStorage.getItem("count"))
  document.getElementById("balance2").innerHTML = "₹" + localStorage.getItem("balance");

  document.getElementById("moneyrem").innerHTML = "₹" + localStorage.getItem("balance");
}

document.getElementById("moneyrem").innerHTML = "₹" + localStorage.getItem("balance");


var xValues = ["Weekly Limit","Money Spent"];
var yValues = [55, 49];
var barColors = [
  "green",
  "red",
 
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      // text: "World Wide Wine Production 2018"
    }
  }
});









  




