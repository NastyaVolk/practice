var removeSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512px" version="1.1" height="512px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><g><path class="fill" fill="#ababab" d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/></g></svg>';
var completeSVG = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512px" version="1.1" height="512px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><g><path class="fill" fill="#ababab" d="m16.074,55.049c0.369,0.534 0.975,0.838 1.615,0.838 0.133,0 0.269-0.049 0.404-0.076 0.098,0.016 0.193,0.064 0.292,0.064 0.575,0 1.134-0.249 1.526-0.681l43.514-43.521c0.785-0.784 0.785-2.056 0-2.841-0.784-0.784-2.056-0.784-2.84,0l-42.52,42.526-14.34-14.337c-0.784-0.785-2.056-0.785-2.84,0-0.785,0.784-0.785,2.056 0,2.841l15.189,15.187z"/></g></svg>';

document.getElementById('add').addEventListener('click', function() {
var value = document.getElementById('item').value;
if (value) {
	addItemTodo(value);
	document.getElementById('item').value = '';
}
});

//Adds a new item to the todo list
function addItemTodo(text) {
var list = document.getElementById('todo');

var item = document.createElement('li');
item.innerHTML = text;

var buttons = document.createElement('div');
buttons.classList.add('buttons');

var remove = document.createElement('button');
remove.classList.add('remove');
remove.innerHTML = removeSVG;

var complete = document.createElement('button');
complete.classList.add('coplete');
complete.innerHTML = completeSVG;

buttons.appendChild(remove);
buttons.appendChild(complete);
item.appendChild(buttons);

list.insertBefore(item, list.childNodes[0]);
}

