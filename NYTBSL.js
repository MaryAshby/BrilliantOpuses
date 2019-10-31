/*load all data and make sure it works*/

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

//onclick call//
function firstFunction() {
  var x = document.createElement("FORM");
  x.setAttribute("Author", "myForm");
  document.body.appendChild(x);

  var y = document.createElement("INPUT");
  y.setAttribute("type", "text");
  document.getElementById("myForm").appendChild(y);
}

//Table Creation//

var sortColumn = function(books, col, accessor)
{
    d3.select(col)
      .on("click", function()
          {
          books.sort(function(a,b)
                     {
                     return(accessor(a)accessor(b));
                     })
        makeTable(books,"ALL");
    })
}

var makeTableHeader = function(books)
{d3.select("#rank")
   .on("click", function()
       {
        makeTable(books.sort(function(a, b)
                             {
                              return a-b
                             }), "ALL")
})
 
 var addCol = function(rows, fcn)
 {
     rows.append("td").text(fcn);
 }
 
 var makeTable = function(books, mode)
 {
     d3.selectAll("tbody*").remove();
     
     var rows = d3.select("tbody")
                  .selectAll("tr")
                  .data(filterbooks(books, mode))
                  .enter()
                  .append("tr");
     addCol(rows, function(books)
            {
             return book.rank
            })
            .attr("alt", function(books)
                  {
                   return results.rank;
                   })
     addCol(rows, function(books){return results.book_details.title})
     addCol(rows, function(books){return results.book_details.author})
     addCol(rows, function(books){return results.book_details.description})
     
  
 
                             



//calls//
//https://api.nytimes.com/svc/books/v3//

//for current lists//
//https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL//

