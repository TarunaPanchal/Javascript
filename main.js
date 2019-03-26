
/*var a = document.querySelector('p');
a.textContent = 'Hello';*/


/*document.querySelector('p').onclick = function() {
    alert('Stop !');
}*/

/*var a = document.querySelector('p');
a.onclick = function() { alert('Stop 1 !');  };*/



var img = document.querySelector('img');

img.onclick = function() {
    var src = img.getAttribute('src');
    if(src === 'image/index.jpeg') {
      img.setAttribute ('src','image/images.jpeg');
    } else {
      img.setAttribute ('src','image/index.jpeg');
    }
}

