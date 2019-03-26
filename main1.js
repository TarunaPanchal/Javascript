var b = document.querySelector('button');
var h = document.querySelector('h5');


function setname()
{
   var Name = prompt("Enter Name:");
   localStorage.setItem('name',Name);
   h.textContent = ' My Name : ' + Name ; 
}

if(!localStorage.getItem('name')) {
  setname();
}

 else {
  var storedName = localStorage.getItem('name');
 h.textContent = 'My Name' + storedName;
}

b.onclick = function() {
  setname();
}




