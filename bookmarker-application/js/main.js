//Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);
//Save bookmark
function saveBookmark(e) {
	//Get form values
	var siteName = document.getElementById('siteName').value;
	var siteURL = document.getElementById('siteURL').value;
	if( !siteName || !siteURL) {
		alert('Please fill in the form!');
		return false;
	}
	//Object 
	var bookmark = {
		name: siteName,
		url: siteURL
	}
	//Test if bookmarks is null
	if(localStorage.getItem('bookmarks') === null) {
		//Init array
		var bookmarks = [];
		//Add to array
		bookmarks.push(bookmark);
		//Set to localStorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	} else {
		//Get bookmarks from localStorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		//Add bookmark to array
		bookmarks.push(bookmark);
		//Re-set to localStorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}
	//Clear form 
	document.getElementById('myForm').reset();
	//Re-fetch
	fetchBookmarks();
	//Prevent form from submitting
	e.preventDefault(); 
}
//Delete bookmark
function deleteBookmark(url) {
		//Get bookmarks from localStorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		//Loop throught bookmarks
		for(var i = 0; i < bookmarks.length;i++) {
			if(bookmarks[i].url == url) {
				//Remove from array
				bookmarks.splice(i,1);
				//Re-set to localStorage
				localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
			}
		}
		//Re-fetch
		fetchBookmarks();
}
//Fetch bookmarks
function fetchBookmarks() {
	//Get bookmarks from localStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	//Get output id
	var bookmarksResults = document.getElementById('bookmarksResults');
	//Build output
	bookmarksResults.innerHTML = '';
	for(var i = 0; i < bookmarks.length; i++) {
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;	
		bookmarksResults.innerHTML += '<div class="well">'+
		'<h3 class="list">' +name+
		' <a class="btn" target="_blank" href="'+url+'">Visit</a> '+
		' <a onclick="deleteBookmark(\''+url+'\')" class="btn">Delete</a> '+
		'</h3>'+
		'</div>';
	} 
}
