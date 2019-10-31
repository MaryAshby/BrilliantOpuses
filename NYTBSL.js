var name = document.getElementById("BSform").value;

var key = ".json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL";

var baseURL =  "https://api.nytimes.com/svc/books/v3/lists/current/";

fetch('https://api.nytimes.com/svc/books/v3/ists/current/hardcover-fiction.json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL, {    method: 'get',  }) 
          .then(response => { return response.json(); })  
          .then(json => { console.log(json); });





            


//calls//
//https://api.nytimes.com/svc/books/v3//

//for current lists//
//https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL//

