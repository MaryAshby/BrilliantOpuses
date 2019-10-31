var setgoodNews = function(message)
{
    d3.select(".goodNews").text(message);
}

var listPromise = 
    d3.json("https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL");
         listPromise.then(function(listData)
{
          console.log ("works1", listData);
               setgoodNews("Data has successfully loaded");
             
},
          function(err)
{
          console.log("broke1",err);
             setgoodNews("Houston, we have a problem.");
             
})
                         
var listPromise = 
    d3.json("https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL");
         listPromise.then(function(listData)
{
          console.log ("works2", listData);
},
          function(err)
{
          console.log("broke2",err);
})

var listPromise = 
    d3.json("https://api.nytimes.com/svc/books/v3/lists/current/young-adult-hardcover.json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL");
         listPromise.then(function(listData)
{
          console.log ("works3", listData);
},
          function(err)
{
          console.log("broke3",err);
})

 var listPromise = 
    d3.json("https://api.nytimes.com/svc/books/v3/lists/current/graphic-books-and-manga.json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL");
         listPromise.then(function(listData)
{
          console.log ("works4", listData);
},
          function(err)
{
          console.log("broke4",err);
})           


//calls//
//https://api.nytimes.com/svc/books/v3//

//for current lists//
//https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL//

