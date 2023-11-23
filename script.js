function volume_sphere() {
    //Write your code here

	let r=document.getElementById("radius").value;
	let v=document.getElementById("volume");

	let num1=4/3;
	
	let num2=(num1)*3.14*r*r*r;

	v.value=num2;
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
