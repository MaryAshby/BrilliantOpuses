

var listPromise = 
    d3.json("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL");
         listPromise.then(function(listData)
{
          console.log ("works", listData);
},
          function(err)
{
          console.log("broke",err)
})
                         




            


//calls//
//https://api.nytimes.com/svc/books/v3//

//for current lists//
//https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL//

