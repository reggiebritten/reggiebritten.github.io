function clearText(field) {
    if (field.defaultValue == field.value) field.value = '';
    else if (field.value == '') field.value = field.defaultValue;
}


console.log(abilityList["Cleave"]["Momentum"]);



$.get('file_to_read.txt', function(data) {
   console.log(data);
}, 'text');

/*
var str = `link,model,role,access
link1,model1,role1,true`;

var lines = str.split('\n');
console.log(lines);
var obj = {};

var lineHeaders = lines[0].split(',');
console.log(lineHeaders[0]);
// Ignore the first line as it contains only the header info.


for(var i = 1; i < lines.length; i++) {
  var lineItems = lines[i].split(',');
  console.log(lineItems);
  var h1 = lineItems[0];
  var model = lineItems[1];
  var role = lineItems[2];
  var roleValue = lineItems[3];
  
  
  
  //Object.assign(obj, {dink: lineItems[1]});
  

  
  obj[lineHeaders[0]] = h1;
  obj[lineHeaders[1]] = model;
  obj[lineHeaders[2]] = role;
  obj[lineHeaders[3]] = roleValue;
}

console.log(obj);

*/







/*




if (1 != '1') {

document.getElementById('box-1').style.display = 'none';
}

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
  
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
	elmnt.style.position = "absolute";
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



// Make myimage scale:
var myimage = document.getElementById("myimage");
if (myimage.addEventListener) {
	// IE9, Chrome, Safari, Opera
	myimage.addEventListener("mousewheel", MouseWheelHandler, false);
	// Firefox
	myimage.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
}
// IE 6/7/8
else myimage.attachEvent("onmousewheel", MouseWheelHandler);

function MouseWheelHandler(e) {

	// cross-browser wheel delta
	var e = window.event || e; // old IE support
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	
	
	myimage.style.width = Math.max(50, Math.min(800, myimage.width + (30 * delta))) + "px";

	return false;
}*/