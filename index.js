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

  var xValues = ["Limit Remaining", "Money Spent"];
  var yValues = [localStorage.getItem("ana2"), localStorage.getItem("ana1")];
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

      responsive: true,
      title: {
        display: true,
        // text: "World Wide Wine Production 2018"
      }
    }
  });


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
  var count = localStorage.getItem("count");
  var no = 1;
  var nos = 11;
  var jui, jui2;

  while (count >= 2) {

    jui = localStorage.getItem("where" + count);

    jui2 = localStorage.getItem("spent" + count);
    if (nos > 55 || no > 5) {
      break;
    }
    // alert(jui);
    document.getElementById("his" + no).innerHTML = jui;
    document.getElementById("his" + nos).innerHTML = "-₹" + jui2;

    count = count - 2;
    no++;
    nos = nos + 11;


  }
  if (localStorage.getItem("balance") / localStorage.getItem("limit") * 100 == 100) {

    document.getElementById("balance2").style.backgroundColor = "#1d8d15";
    document.getElementById("used").innerHTML = "You have used 0% of your Limit"

    document.getElementById("used").style.color = "#1d8d15"
  }


  else if (localStorage.getItem("balance") / localStorage.getItem("limit") * 100 > 50 && localStorage.getItem("balance") / localStorage.getItem("limit") * 100 <= 99
  ) {

    document.getElementById("balance2").style.backgroundColor = "#1d8d15";
    document.getElementById("used").innerHTML = "You have used " + (100 - parseInt(localStorage.getItem("balance") / localStorage.getItem("limit") * 100)) + "% of your Limit"

    document.getElementById("used").style.color = "#1d8d15"
  }
  else if (localStorage.getItem("balance") / localStorage.getItem("limit") * 100 <= 50 && localStorage.getItem("balance") / localStorage.getItem("limit") * 100 >= 20) {
    document.getElementById("balance2").style.backgroundColor = "#cf6c0f";

    document.getElementById("used").innerHTML = "You have used " + (100 - parseInt(localStorage.getItem("balance") / localStorage.getItem("limit") * 100)) + "% of your Limit"
    document.getElementById("used").style.color = "#cf6c0f"

  }
  else if (localStorage.getItem("balance") / localStorage.getItem("limit") * 100 < 20) {

    document.getElementById("balance2").style.backgroundColor = "red";

    document.getElementById("used").innerHTML = "You have used " + (100 - (parseInt(localStorage.getItem("balance") / localStorage.getItem("limit") * 100))) + "% of your Limit"

    document.getElementById("used").style.color = "red"
  }

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

function set() {
  balance[0] = 300;
  localStorage.setItem("balance", balance[0]);

  document.getElementById("balance2").innerHTML = "₹" + localStorage.getItem("balance");

  localStorage.setItem("limit", balance[0]);

  document.getElementById("weeklylim").innerHTML = "₹" + localStorage.getItem("limit");
  document.getElementById("weeklylim2").innerHTML = "₹" + localStorage.getItem("limit");
  document.getElementById("bance2").innerHTML = "₹" + localStorage.getItem("balance");

  var datee = new Date();

  // ✅ Reset a Date's time to midnight
  datee.setHours(0, 0, 0, 0);
  localStorage.setItem("datenow", datee);
  localStorage.setItem("datecount", 1)
  document.getElementById("dayc").innerHTML = "Day " + "1";
}






function plus() {

  // localStorage.setItem("balance", Number(localStorage.getItem("balance") ) + 20) ;
  localStorage.setItem("ana1", localStorage.getItem("limit") - localStorage.getItem("balance") + 20);

  localStorage.setItem("ana2", localStorage.getItem("limit") - localStorage.getItem("ana1") + 20);


  localStorage.setItem("limit", Number(localStorage.getItem("limit")) + 20);


  document.getElementById("moneyrem").innerHTML = "₹" + localStorage.getItem("balance");
  document.getElementById("weeklylim").innerHTML = "₹" + localStorage.getItem("limit");
  document.getElementById("balance2").innerHTML = "₹" + localStorage.getItem("balance");

  document.getElementById("bance2").innerHTML = "₹" + localStorage.getItem("limit");

  document.getElementById("weeklylim2").innerHTML = "₹" + localStorage.getItem("limit");
}

function minus() {
  // localStorage.setItem("balance", Number(localStorage.getItem("balance") ) - 20) ;

  localStorage.setItem("limit", Number(localStorage.getItem("limit")) - 20);
  document.getElementById("weeklylim").innerHTML = "₹" + localStorage.getItem("limit");
  document.getElementById("moneyrem").innerHTML = "₹" + localStorage.getItem("balance");

  document.getElementById("balance2").innerHTML = "₹" + localStorage.getItem("balance");

  document.getElementById("bance2").innerHTML = "₹" + localStorage.getItem("limit");

  document.getElementById("weeklylim2").innerHTML = "₹" + localStorage.getItem("limit");

  localStorage.setItem("ana1", localStorage.getItem("limit") - localStorage.getItem("balance"));
  localStorage.setItem("ana2", localStorage.getItem("limit") - localStorage.getItem("ana1"));
}

document.getElementById("balance2").innerHTML = "₹" + localStorage.getItem("balance");



var bhai = [];

setInterval(function () { alert("Hello") }, 604800000);
// var ava = ["ava2.png", "ava3.png", "ava3.png", "ava4.png",  "ava5.png", "ava6.png", "ava7.png", "ava8.png",  "ava9.png", "ava10.png", "ava11.png", "ava12.png",  "ava13.png", "ava14.png", "ava15.png", "ava1.png"]



function login() {


  // document.getElementById("avatar").src = ava[localStorage.getItem("avat")];

  if (localStorage.getItem("login") != "true") {


    document.getElementById("login1").style.display = "block";

    document.getElementById("login").style.display = "block";

    document.getElementById("loginbox").style.display = "block";
  }
}
let data = []

function submitdata() {

  localStorage.setItem("av", 0);

  document.getElementById("avatar").src = ava[localStorage.getItem("av")];


  document.getElementById("avatarccc").src = ava[localStorage.getItem("av")];

  document.getElementById("avatarcc").src = ava[localStorage.getItem("av")];

  document.getElementById("limitweek").style.display = "block";

  data[0] = document.getElementById("user").value;

  localStorage.setItem("username", data[0])

  data[1] = document.getElementById("pass").value;

  localStorage.setItem("password", data[1])

  data[2] = document.getElementById("full").value;

  localStorage.setItem("fullname", data[2])

  data[3] = document.getElementById("prof").value;

  localStorage.setItem("profession", data[3])

  document.getElementById("loginbox").style.display = "none";

  weeklimit();

}

function weeklimit() {

  set();

}

function submitfinal() {

  document.getElementById("avatar").src = ava[localStorage.getItem("av")];




  document.getElementById("avatarccc").src = ava[localStorage.getItem("av")];

  document.getElementById("avatarcc").src = ava[localStorage.getItem("av")];

  document.getElementById("login").style.display = "none";
  localStorage.setItem("balance", localStorage.getItem("limit"));

  bhai[0] = "true";
  localStorage.setItem("login", bhai[0]);

  location.reload();


  // var date = Date();
  // localStorage.setItem("datec", date);
  // localStorage.setItem("daycount", 1);

}

let where = [];
let spent = [];
var i = [-1];
var data1 = [];
var data2 = [];
var data11 = [];
var data22 = [];

function record() {


  setTimeout(function () {
    document.getElementById("dc").style.display = "block"
  }, 0);

  setTimeout(function () {
    document.getElementById("dc").style.display = "none"
  }, 1500);

  localStorage.setItem("balance", Number(localStorage.getItem("balance")) - document.getElementById("amount").value);

  localStorage.setItem("ana1", localStorage.getItem("limit") - localStorage.getItem("balance"));
  localStorage.setItem("ana2", localStorage.getItem("limit") - localStorage.getItem("ana1"));

  data22[0] = localStorage.getItem("balance") -
    localStorage.getItem("limit");
  localStorage.setItem("count", Number(localStorage.getItem("count")) + 1);

  data1[0] = localStorage.getItem("limit") - localStorage.getItem("balance");

  data2[0] = localStorage.getItem("balance") -
    localStorage.getItem("limit");
  localStorage.setItem("count", Number(localStorage.getItem("count")) + 1);

  where[localStorage.getItem("count")] = document.getElementById("whyspent").value;
  spent[localStorage.getItem("count")] = document.getElementById("amount").value;

  localStorage.setItem("where" + localStorage.getItem("count"), where[localStorage.getItem("count")])

  localStorage.setItem("spent" + localStorage.getItem("count"), spent[localStorage.getItem("count")])


  document.getElementById("amount").value = null;
  document.getElementById("whyspent").value = null;
  // alert(localStorage.getItem("count"))
  document.getElementById("balance2").innerHTML = "₹" + localStorage.getItem("balance");

  document.getElementById("moneyrem").innerHTML = "₹" + localStorage.getItem("balance");


  document.getElementById("moneyrem2").innerHTML = "₹" + localStorage.getItem("balance");

  // location.reload();


}

document.getElementById("moneyrem").innerHTML = "₹" + localStorage.getItem("balance");





function next1() {


  document.getElementById("mirr1").style.display = "block"

  document.getElementById("mirr2").style.display = "none"


  document.getElementById("mirror").style.display = "block";
  document.getElementById("mirror1").style.display = "none";

  document.getElementById("mirror2").style.display = "none";

  document.getElementById("mirror3").style.display = "none";

  document.getElementById("mirror4").style.display = "none";

  document.getElementById("mirror5").style.display = "none";



  document.getElementById("wlwl").style.display = "block";
  document.getElementById("wlwl1").style.display = "none";
  document.getElementById("wlwl2").style.display = "none";
  document.getElementById("wlwl3").style.display = "none";
  document.getElementById("wlwl4").style.display = "none";
  document.getElementById("wlwl5").style.display = "none";


  document.getElementById("nextpng").style.display = "none";
  document.getElementById("nextpng1").style.display = "none";
  document.getElementById("nextpng2").style.display = "none";
  document.getElementById("nextpng3").style.display = "none";
  document.getElementById("nextpng4").style.display = "none";
  document.getElementById("nextpng5").style.display = "none";

  document.getElementById("mirror").style.height = "54%"

  document.getElementById("mirror1").style.height = "9%"

  document.getElementById("mirror2").style.height = "9%"

  document.getElementById("mirror3").style.height = "9%"

  document.getElementById("mirror4").style.height = "9%"

  document.getElementById("mirror5").style.height = "9%"

  document.getElementById("nextpng11").style.display = "block";

  document.getElementById("nextpng22").style.display = "none";

  document.getElementById("nextpng33").style.display = "none";

  document.getElementById("nextpng44").style.display = "none";

  document.getElementById("nextpng55").style.display = "none";

  document.getElementById("nextpng66").style.display = "none";



}

function prev1() {

  document.getElementById("mirr1").style.display = "none"

  document.getElementById("mirror1").style.display = "block";
  document.getElementById("mirror").style.display = "block";

  document.getElementById("mirror2").style.display = "block";

  document.getElementById("mirror3").style.display = "block";

  document.getElementById("mirror4").style.display = "block";

  document.getElementById("mirror5").style.display = "block";

  document.getElementById("wlwl1").style.display = "block";
  document.getElementById("wlwl").style.display = "block";
  document.getElementById("wlwl2").style.display = "block";
  document.getElementById("wlwl3").style.display = "block";
  document.getElementById("wlwl4").style.display = "block";
  document.getElementById("wlwl5").style.display = "block";


  document.getElementById("nextpng").style.display = "block";
  document.getElementById("nextpng1").style.display = "block";
  document.getElementById("nextpng2").style.display = "block";
  document.getElementById("nextpng3").style.display = "block";
  document.getElementById("nextpng4").style.display = "block";
  document.getElementById("nextpng5").style.display = "block";
  document.getElementById("nextpng11").style.display = "none";

  document.getElementById("nextpng").style.display = "block";
  document.getElementById("mirror").style.height = "9%"


}

function next2() {

  document.getElementById("mirr2").style.display = "block";

  document.getElementById("mirror").style.display = "block";
  document.getElementById("mirror1").style.display = "block";

  document.getElementById("mirror2").style.display = "block";

  document.getElementById("mirror3").style.display = "none";

  document.getElementById("mirror4").style.display = "none";

  document.getElementById("mirror5").style.display = "none";



  document.getElementById("wlwl").style.display = "block";
  document.getElementById("wlwl1").style.display = "block";
  document.getElementById("wlwl2").style.display = "block";
  document.getElementById("wlwl3").style.display = "none";
  document.getElementById("wlwl4").style.display = "none";
  document.getElementById("wlwl5").style.display = "none";


  document.getElementById("nextpng").style.display = "block";
  document.getElementById("nextpng1").style.display = "none";
  document.getElementById("nextpng2").style.display = "none";
  document.getElementById("nextpng3").style.display = "none";
  document.getElementById("nextpng4").style.display = "none";
  document.getElementById("nextpng5").style.display = "none";

  document.getElementById("mirror").style.height = "9%"

  document.getElementById("mirror1").style.height = "58%"

  document.getElementById("mirror2").style.height = "9%"

  document.getElementById("mirror3").style.height = "9%"

  document.getElementById("mirror4").style.height = "9%"

  document.getElementById("mirror5").style.height = "9%"


  document.getElementById("nextpng11").style.display = "none";

  document.getElementById("nextpng22").style.display = "block";

  document.getElementById("nextpng33").style.display = "none";

  document.getElementById("nextpng44").style.display = "none";

  document.getElementById("nextpng55").style.display = "none";

  document.getElementById("nextpng66").style.display = "none";



  document.getElementById("mirror").style.display = "block";
  document.getElementById("mirror1").style.display = "block";

  document.getElementById("mirror2").style.display = "none";

  document.getElementById("mirror3").style.display = "none";

  document.getElementById("mirror4").style.display = "none";

  document.getElementById("mirror5").style.display = "none";



  document.getElementById("wlwl").style.display = "block";
  document.getElementById("wlwl1").style.display = "block";
  document.getElementById("wlwl2").style.display = "none";
  document.getElementById("wlwl3").style.display = "none";
  document.getElementById("wlwl4").style.display = "none";
  document.getElementById("wlwl5").style.display = "none";


  //  


}

function prev2() {

  document.getElementById("mirr2").style.display = "none";

  document.getElementById("mirror1").style.display = "block";
  document.getElementById("mirror").style.display = "block";

  document.getElementById("mirror2").style.display = "block";

  document.getElementById("mirror3").style.display = "block";

  document.getElementById("mirror4").style.display = "block";

  document.getElementById("mirror5").style.display = "block";

  document.getElementById("wlwl1").style.display = "block";
  document.getElementById("wlwl").style.display = "block";
  document.getElementById("wlwl2").style.display = "block";
  document.getElementById("wlwl3").style.display = "block";
  document.getElementById("wlwl4").style.display = "block";
  document.getElementById("wlwl5").style.display = "block";


  document.getElementById("nextpng").style.display = "block";
  document.getElementById("nextpng1").style.display = "block";
  document.getElementById("nextpng2").style.display = "block";
  document.getElementById("nextpng3").style.display = "block";
  document.getElementById("nextpng4").style.display = "block";
  document.getElementById("nextpng5").style.display = "block";
  document.getElementById("nextpng22").style.display = "none";


  document.getElementById("mirror1").style.height = "9%"

}

function next3() {



  document.getElementById("mirror").style.display = "block";
  document.getElementById("mirror1").style.display = "block";

  document.getElementById("mirror2").style.display = "block";

  document.getElementById("mirror3").style.display = "none";

  document.getElementById("mirror4").style.display = "none";

  document.getElementById("mirror5").style.display = "none";



  document.getElementById("wlwl").style.display = "block";
  document.getElementById("wlwl1").style.display = "block";
  document.getElementById("wlwl2").style.display = "block";
  document.getElementById("wlwl3").style.display = "none";
  document.getElementById("wlwl4").style.display = "none";
  document.getElementById("wlwl5").style.display = "none";


  document.getElementById("nextpng").style.display = "block";
  document.getElementById("nextpng1").style.display = "block";
  document.getElementById("nextpng2").style.display = "none";
  document.getElementById("nextpng3").style.display = "none";
  document.getElementById("nextpng4").style.display = "none";
  document.getElementById("nextpng5").style.display = "none";

  document.getElementById("mirror").style.height = "9%"

  document.getElementById("mirror1").style.height = "9%"

  document.getElementById("mirror2").style.height = "69%"

  document.getElementById("mirror3").style.height = "9%"

  document.getElementById("mirror4").style.height = "9%"

  document.getElementById("mirror5").style.height = "9%"


  document.getElementById("nextpng11").style.display = "none";

  document.getElementById("nextpng22").style.display = "none";

  document.getElementById("nextpng33").style.display = "block";

  document.getElementById("nextpng44").style.display = "none";

  document.getElementById("nextpng55").style.display = "none";

  document.getElementById("nextpng66").style.display = "none";





}

function resetday() {
  var dateee = Date();


  // ✅ Reset a Dateda's time to midnight
  dateee.setHours(0, 0, 0, 0);


  localStorage.setItem("datenow", dateee)

  localStorage.setItem("datecount", 1);

}

function prev3() {
  document.getElementById("mirror1").style.display = "block";
  document.getElementById("mirror").style.display = "block";

  document.getElementById("mirror2").style.display = "block";

  document.getElementById("mirror3").style.display = "block";

  document.getElementById("mirror4").style.display = "block";

  document.getElementById("mirror5").style.display = "block";

  document.getElementById("wlwl1").style.display = "block";
  document.getElementById("wlwl").style.display = "block";
  document.getElementById("wlwl2").style.display = "block";
  document.getElementById("wlwl3").style.display = "block";
  document.getElementById("wlwl4").style.display = "block";
  document.getElementById("wlwl5").style.display = "block";


  document.getElementById("nextpng").style.display = "block";
  document.getElementById("nextpng1").style.display = "block";
  document.getElementById("nextpng2").style.display = "block";
  document.getElementById("nextpng3").style.display = "block";
  document.getElementById("nextpng4").style.display = "block";
  document.getElementById("nextpng5").style.display = "block";
  document.getElementById("nextpng22").style.display = "none";
  document.getElementById("nextpng33").style.display = "none";

  document.getElementById("mirror2").style.height = "9%"

}

function next4() {



  document.getElementById("mirror").style.display = "block";
  document.getElementById("mirror1").style.display = "block";

  document.getElementById("mirror2").style.display = "block";

  document.getElementById("mirror3").style.display = "block";

  document.getElementById("mirror4").style.display = "none";

  document.getElementById("mirror5").style.display = "none";



  document.getElementById("wlwl").style.display = "block";
  document.getElementById("wlwl1").style.display = "block";
  document.getElementById("wlwl2").style.display = "block";
  document.getElementById("wlwl3").style.display = "block";
  document.getElementById("wlwl4").style.display = "none";
  document.getElementById("wlwl5").style.display = "none";


  document.getElementById("nextpng").style.display = "block";
  document.getElementById("nextpng1").style.display = "block";
  document.getElementById("nextpng2").style.display = "block";
  document.getElementById("nextpng3").style.display = "none";
  document.getElementById("nextpng4").style.display = "none";
  document.getElementById("nextpng5").style.display = "none";

  document.getElementById("mirror").style.height = "9%"

  document.getElementById("mirror1").style.height = "9%"

  document.getElementById("mirror2").style.height = "9%"

  document.getElementById("mirror3").style.height = "69%"

  document.getElementById("mirror4").style.height = "9%"

  document.getElementById("mirror5").style.height = "9%"


  document.getElementById("nextpng11").style.display = "none";

  document.getElementById("nextpng22").style.display = "none";

  document.getElementById("nextpng33").style.display = "none";

  document.getElementById("nextpng44").style.display = "block";

  document.getElementById("nextpng55").style.display = "none";

  document.getElementById("nextpng66").style.display = "none";





}

function prev4() {
  document.getElementById("mirror1").style.display = "block";
  document.getElementById("mirror").style.display = "block";

  document.getElementById("mirror2").style.display = "block";

  document.getElementById("mirror3").style.display = "block";

  document.getElementById("mirror4").style.display = "block";

  document.getElementById("mirror5").style.display = "block";

  document.getElementById("wlwl1").style.display = "block";
  document.getElementById("wlwl").style.display = "block";
  document.getElementById("wlwl2").style.display = "block";
  document.getElementById("wlwl3").style.display = "block";
  document.getElementById("wlwl4").style.display = "block";
  document.getElementById("wlwl5").style.display = "block";


  document.getElementById("nextpng").style.display = "block";
  document.getElementById("nextpng1").style.display = "block";
  document.getElementById("nextpng2").style.display = "block";
  document.getElementById("nextpng3").style.display = "block";
  document.getElementById("nextpng4").style.display = "block";
  document.getElementById("nextpng5").style.display = "block";
  document.getElementById("nextpng22").style.display = "none";
  document.getElementById("nextpng33").style.display = "none";
  document.getElementById("nextpng44").style.display = "none";

  document.getElementById("mirror3").style.height = "9%"

}

function next5() {



  document.getElementById("mirror").style.display = "block";
  document.getElementById("mirror1").style.display = "block";

  document.getElementById("mirror2").style.display = "block";

  document.getElementById("mirror3").style.display = "block";

  document.getElementById("mirror4").style.display = "block";

  document.getElementById("mirror5").style.display = "none";



  document.getElementById("wlwl").style.display = "block";
  document.getElementById("wlwl1").style.display = "block";
  document.getElementById("wlwl2").style.display = "block";
  document.getElementById("wlwl3").style.display = "block";
  document.getElementById("wlwl4").style.display = "block";
  document.getElementById("wlwl5").style.display = "none";


  document.getElementById("nextpng").style.display = "block";
  document.getElementById("nextpng1").style.display = "block";
  document.getElementById("nextpng2").style.display = "block";
  document.getElementById("nextpng3").style.display = "block";
  document.getElementById("nextpng4").style.display = "none";
  document.getElementById("nextpng5").style.display = "none";

  document.getElementById("mirror").style.height = "9%"

  document.getElementById("mirror1").style.height = "9%"

  document.getElementById("mirror2").style.height = "9%"

  document.getElementById("mirror3").style.height = "9%"

  document.getElementById("mirror4").style.height = "69%"

  document.getElementById("mirror5").style.height = "9%"


  document.getElementById("nextpng11").style.display = "none";

  document.getElementById("nextpng22").style.display = "none";

  document.getElementById("nextpng33").style.display = "none";

  document.getElementById("nextpng44").style.display = "none";

  document.getElementById("nextpng55").style.display = "block";

  document.getElementById("nextpng66").style.display = "none";





}

function prev5() {
  document.getElementById("mirror1").style.display = "block";
  document.getElementById("mirror").style.display = "block";

  document.getElementById("mirror2").style.display = "block";

  document.getElementById("mirror3").style.display = "block";

  document.getElementById("mirror4").style.display = "block";

  document.getElementById("mirror5").style.display = "block";

  document.getElementById("wlwl1").style.display = "block";
  document.getElementById("wlwl").style.display = "block";
  document.getElementById("wlwl2").style.display = "block";
  document.getElementById("wlwl3").style.display = "block";
  document.getElementById("wlwl4").style.display = "block";
  document.getElementById("wlwl5").style.display = "block";


  document.getElementById("nextpng").style.display = "block";
  document.getElementById("nextpng1").style.display = "block";
  document.getElementById("nextpng2").style.display = "block";
  document.getElementById("nextpng3").style.display = "block";
  document.getElementById("nextpng4").style.display = "block";
  document.getElementById("nextpng5").style.display = "block";
  document.getElementById("nextpng22").style.display = "none";
  document.getElementById("nextpng33").style.display = "none";
  document.getElementById("nextpng44").style.display = "none";
  document.getElementById("nextpng55").style.display = "none";
  document.getElementById("mirror4").style.height = "9%"

}

function next6() {



  document.getElementById("mirror").style.display = "block";
  document.getElementById("mirror1").style.display = "block";

  document.getElementById("mirror2").style.display = "block";

  document.getElementById("mirror3").style.display = "block";

  document.getElementById("mirror4").style.display = "block";

  document.getElementById("mirror5").style.display = "block";



  document.getElementById("wlwl").style.display = "block";
  document.getElementById("wlwl1").style.display = "block";
  document.getElementById("wlwl2").style.display = "block";
  document.getElementById("wlwl3").style.display = "block";
  document.getElementById("wlwl4").style.display = "block";
  document.getElementById("wlwl5").style.display = "block";


  document.getElementById("nextpng").style.display = "block";
  document.getElementById("nextpng1").style.display = "block";
  document.getElementById("nextpng2").style.display = "block";
  document.getElementById("nextpng3").style.display = "block";
  document.getElementById("nextpng4").style.display = "block";
  document.getElementById("nextpng5").style.display = "none";

  document.getElementById("mirror").style.height = "9%"

  document.getElementById("mirror1").style.height = "9%"

  document.getElementById("mirror2").style.height = "9%"

  document.getElementById("mirror3").style.height = "9%"

  document.getElementById("mirror4").style.height = "9%"

  document.getElementById("mirror5").style.height = "69%"


  document.getElementById("nextpng11").style.display = "none";

  document.getElementById("nextpng22").style.display = "none";

  document.getElementById("nextpng33").style.display = "none";

  document.getElementById("nextpng44").style.display = "none";

  document.getElementById("nextpng55").style.display = "none";

  document.getElementById("nextpng66").style.display = "block";





}

function prev6() {
  document.getElementById("mirror1").style.display = "block";
  document.getElementById("mirror").style.display = "block";

  document.getElementById("mirror2").style.display = "block";

  document.getElementById("mirror3").style.display = "block";

  document.getElementById("mirror4").style.display = "block";

  document.getElementById("mirror5").style.display = "block";

  document.getElementById("wlwl1").style.display = "block";
  document.getElementById("wlwl").style.display = "block";
  document.getElementById("wlwl2").style.display = "block";
  document.getElementById("wlwl3").style.display = "block";
  document.getElementById("wlwl4").style.display = "block";
  document.getElementById("wlwl5").style.display = "block";


  document.getElementById("nextpng").style.display = "block";
  document.getElementById("nextpng1").style.display = "block";
  document.getElementById("nextpng2").style.display = "block";
  document.getElementById("nextpng3").style.display = "block";
  document.getElementById("nextpng4").style.display = "block";
  document.getElementById("nextpng5").style.display = "block";
  document.getElementById("nextpng22").style.display = "none";
  document.getElementById("nextpng33").style.display = "none";
  document.getElementById("nextpng44").style.display = "none";
  document.getElementById("nextpng55").style.display = "none";
  document.getElementById("nextpng66").style.display = "none";
  document.getElementById("mirror5").style.height = "9%"

}


function setti() {

  document.getElementById("setting").style.display = "block";

  document.getElementById("dayrem").innerHTML = "Day " + localStorage.getItem("datecount")

}
function homie() {

  document.getElementById("name").innerHTML = localStorage.getItem("fullname");

  document.getElementById("usernamee").innerHTML =
   localStorage.getItem("username");

  document.getElementById("setting").style.display = "none";
  // location.reload();
  document.getElementById("avatar").src = ava[localStorage.getItem("av")];

  document.getElementById("avatarcc").src = ava[localStorage.getItem("av")];

  document.getElementById("avatarccc").src = ava[localStorage.getItem("av")];



}

document.getElementById("weeklylim2").innerHTML = document.getElementById("weeklylim").innerHTML;



function reset() {


  localStorage.setItem("balance", localStorage.getItem("limit"));

  document.getElementById("moneyrem2").innerHTML = "₹" + localStorage.getItem("balance");

  document.getElementById("moneyrem").innerHTML = "₹" + localStorage.getItem("balance");

  document.getElementById("balance2").innerHTML = "₹" + localStorage.getItem("balance");
}

document.getElementById("moneyrem2").innerHTML = "₹" + localStorage.getItem("balance");

function dataput() {
  localStorage.setItem("ana1", localStorage.getItem("limit") - localStorage.getItem("balance"));

}


var datte = new Date();

// ✅ Reset a Date's time to midnight
datte.setHours(0, 0, 0, 0);

localStorage.setItem("datethen", datte);



if (localStorage.getItem("datenow") != localStorage.getItem("datethen")) {


  if (localStorage.getItem("datecount") >= 7) {

    localStorage.setItem("datecount", 0);
  }

  localStorage.setItem("datecount", Number(localStorage.getItem("datecount")) + 1);

  document.getElementById("dayc").innerHTML = "Day " + localStorage.getItem("datecount");
  var ndatte = new Date();

  // ✅ Reset a Date's time to midnight
  ndatte.setHours(0, 0, 0, 0);
  localStorage.setItem("datenow", ndatte);


}

else if (localStorage.getItem("datenow") == datte) {

  document.getElementById("dayc").innerHTML = "Day " + localStorage.getItem("datecount");

}

var ava = ["ava2.png", "ava3.png", "ava4.png", "ava5.png", "ava6.png", "ava7.png", "ava8.png", "ava9.png", "ava10.png", "ava11.png", "ava12.png", "ava13.png", "ava14.png", "ava15.png", "ava1.png"]

function changeava() {


  document.getElementById("avatarcc").src = ava[Number(localStorage.getItem("av")) + 1];

  document.getElementById("avatar").src = ava[Number(localStorage.getItem("av")) + 1];

  document.getElementById("avatarccc").src = ava[Number(localStorage.getItem("av")) + 1];


  localStorage.setItem("av", Number(localStorage.getItem("av")) + 1);

  if (localStorage.getItem("av") >= 15) {


    localStorage.setItem("av", 0);
    document.getElementById("avatar").src = ava[localStorage.getItem("av")];

    document.getElementById("avatarcc").src = ava[localStorage.getItem("av")];

    document.getElementById("avatarccc").src = ava[localStorage.getItem("av")];
  }



}

document.getElementById("avatar").src = ava[localStorage.getItem("av")];

document.getElementById("avatarcc").src = ava[localStorage.getItem("av")];

document.getElementById("avatarccc").src = ava[localStorage.getItem("av")];


function cn(){

localStorage.setItem("fullname", document.getElementById("namec").value);

document.getElementById("namec").value = "";

}


function cu(){

  localStorage.setItem("username", document.getElementById("userc").value);
  
  document.getElementById("userc").value = "";
  
  }

  function cp(){

    localStorage.setItem("profession", document.getElementById("profc").value);
    
    document.getElementById("profc").value = "";
    
    }
  

    function record1() {


      setTimeout(function () {
        document.getElementById("dc").style.display = "block"
      }, 0);
    
      setTimeout(function () {
        document.getElementById("dc").style.display = "none"
      }, 1500);
    
      // localStorage.setItem("balance", Number(localStorage.getItem("balance")) - document.getElementById("amount").value);
    
      // localStorage.setItem("ana1", localStorage.getItem("limit") - localStorage.getItem("balance"));
      // localStorage.setItem("ana2", localStorage.getItem("limit") - localStorage.getItem("ana1"));
    
      data22[0] = localStorage.getItem("balance") -
        localStorage.getItem("limit");
      localStorage.setItem("count", Number(localStorage.getItem("count")) + 1);
    
      data1[0] = localStorage.getItem("limit") - localStorage.getItem("balance");
    
      data2[0] = localStorage.getItem("balance") -
        localStorage.getItem("limit");
      localStorage.setItem("count", Number(localStorage.getItem("count")) + 1);
    
      where[localStorage.getItem("count")] = document.getElementById("whyspent1").value;
      spent[localStorage.getItem("count")] = document.getElementById("amount1").value;
    
      document.getElementById("whyspent1").value = "";
      document.getElementById("amount1").value = "";

      localStorage.setItem("where" + localStorage.getItem("count"), where[localStorage.getItem("count")])
    
      localStorage.setItem("spent" + localStorage.getItem("count"), spent[localStorage.getItem("count")])
    
    
      document.getElementById("amount").value = null;
      document.getElementById("whyspent").value = null;
      // alert(localStorage.getItem("count"))
      // document.getElementById("balance2").innerHTML = "₹" + localStorage.getItem("balance");
    
      // document.getElementById("moneyrem").innerHTML = "₹" + localStorage.getItem("balance");
    
    
      // document.getElementById("moneyrem2").innerHTML = "₹" + localStorage.getItem("balance");
    
      // location.reload();
    
    
    }
    


