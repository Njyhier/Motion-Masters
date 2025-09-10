function Specs(color, gears, brakeType) {
  this.color = color;
  this.gears = gears;
  this.brakeType = brakeType;
}

function Bicycle(name, id, cost, color, gears, brakeType) {
  this.name = name;
  this.id = id;
  this.hireCost = cost;
  this.specs = new Specs(color, gears, brakeType)
  this.features = [];
  this.linkedImage = document.getElementById(this.id);

  this.useDetails = () => {
    document.getElementById("bName").innerHTML = this.name;
    document.getElementById("gears").innerHTML = "Gears - " + this.specs.gears;
    document.getElementById("break").innerHTML = "Braketype - " + this.specs.brakeType;
    document.getElementById("hirecost").innerHTML = "Hirecost - " + this.hireCost;

    document.getElementById("popUp").style.display = "flex";
    document.getElementById("bImage").src =  this.linkedImage.src;
    document.getElementById("inputHireCost").value = this.hireCost;
  }

 this.linkedImage.onclick = () => {
  if(hiredBikes.includes(this.name)) {
    alert("This bike has already been hired out, please select another one.")
  }
   else{
    this.useDetails();
   }
  
  
 }
 
}

var bikes = [
  new Bicycle("Huffy", "bike1", 150, "green", 18, "disk"),
  new Bicycle("BMX", "bike2", 200, "blue", 12, "rim"),
  new Bicycle("Trek", "bike3", 300, "red", 21, "disk"),
  new Bicycle("Giant", "bike4", 250, "black", 15, "rim"),
  new Bicycle("Cannondale", "bike5", 400, "yellow", 24, "disk"),
  new Bicycle("Scott", "bike6", 350, "white", 18, "rim"),
  new Bicycle("Specialized", "bike7", 450, "orange", 27, "disk"),
  new Bicycle("Merida", "bike8", 280, "purple", 16, "rim"),
  new Bicycle("Santa Cruz", "bike9", 500, "silver", 30, "disk")
];

var hiredBikes = [];


function calculatedHireCost(){
  let hours = parseInt($("#hours").val());
  let inputtedCost = parseInt($("#inputHireCost").val());
  if(hours){
  var total = hours*inputtedCost;
  document.getElementById("total").innerHTML = "Total Cost - " + total;
  }
  else{
    document.getElementById("total").innerHTML = "";
  }
  
  
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("hours").addEventListener("input", calculatedHireCost);
  });



$("#close").on("click", (event) => {
  event.preventDefault();
  document.getElementById("popUp").style.display = "none";
});

window.onclick = (click) => {
  let modal = document.getElementById("popUp");
  if(click.target === modal){
    modal.style.display = "none"
  }
}

$("#hire").click(function(event){
  event.preventDefault();
  $("#hireForm").slideDown().show(2000);
});

$("#calculate").click(function(event){
  event.preventDefault();
  calculatedHireCost();
});

$("#hireForm").submit(function(event){
  event.preventDefault();
  let cName = $("#cName").val();
  let bikeName = document.getElementById("bName").innerText;
  hiredBikes.push(bikeName);
    alert("Hello " + cName + "! " +"Your request has been received. Please visit our shop and pick up your bike");
  $("#hireForm")[0].reset();
  $("#popUp").hide();
});
