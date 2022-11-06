window.onload = function() {
var searchBtn = document.querySelector('#search')
var superheroSearch = document.querySelector('#superhero')
var httpRequest;


searchBtn.addEventListener("click", function(element){
    element.preventDefault();

    httpRequest = new XMLHttpRequest();
    var url = "superheroes.php?superhero="+superheroSearch.value;
    httpRequest.onreadystatechange = loadList;
    httpRequest.open('GET', url);
    httpRequest.send();
});

function loadList(){
    if (httpRequest.readyState === XMLHttpRequest.DONE){
        if (httpRequest.status === 200){
            var response = httpRequest.responseText;
            var list = document.querySelector('#list');
            result.innerHTML = response;
            
        }
        else {
            alert('There was a problem with the request.');
        }
    }
}
}


