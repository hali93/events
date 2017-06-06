var add = document.getElementById('addElem'),
	list = document.getElementById('list');
	
add.addEventListener('click', function() {
	var element = document.createElement('li');
	var num = list.getElementsByTagName('li');
	element.innerHTML = 'item ' + num.length;
	list.appendChild(element);
	});

