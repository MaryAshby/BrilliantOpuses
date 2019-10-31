var value = $('form').serialize() 

var key = ".json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL"

var baseURL =  "https://api.nytimes.com/svc/books/v3/lists/current/"

var urls = ["baseURL"+"value"+"key"]


var listPromise = urls.map(function(url)
{
       return d3.jason(url);
})

            


//calls//
//https://api.nytimes.com/svc/books/v3//

//for current lists//
//https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL//

//for exact dates//
//https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL//

