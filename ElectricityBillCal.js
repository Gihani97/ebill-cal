alert("Welcome to Domestic Electricity Bill Calculator");
alert("Calculate Your Electricity Bill From Here!!!");
document.write("<center><h1 style='color:green'> Your Domestic Electricity Bill From Here!!!</h1></center>");
function ElectricityBillCal(){
	var unit=document.getElementById('units').value;
var amount=0;

if(unit>0 && unit<=30)
{
    amount=unit*7.85;
}
else if(unit>30 && unit<=60)
{
    amount=235+((unit-30)*7.85);
}
else if(unit>60 && unit<=90)
{
    amount=471+((unit-60)*10);
}
else if(unit>90 && unit<=120)
{
    amount=771+((unit-90)*27.75);
}
else if(unit>120 && unit<=180)
{
    amount=1603.5+((unit-120)*32);
}
else if(unit>180)
{
    amount=3223.5+((unit-120)*33);
}
var bill=document.getElementById("Result");
	bill.innerHTML="<h4 style='color:white'> Your Domestic Electricity Bill Amount : &nbsp &nbsp&nbsp&nbsp&nbsp&nbsp"+amount+"</h4>";
}
