/*load all data and make sure it works*/

var setBanner = function(message)
{
    d3.select("#banner").text(message);
    
    
}

/*table work*/

var sortColumn = function(results,col,accessor)
{
      d3.select(col)
        .on("click",function()
    {
        results.sort(function(a,b) 
        { 
            return (accessor(a)-accessor(b));
        })
        makeTable(results, "ALL");
    })
}

var makeTableHeader = function(results)
{
    d3.select("#rank")
        .on("click",function()
    {
        makeTable(results.sort(function(a,b)
        {
            if(a.rank ==b.rank ) { return 0; }
            if(a.rank < b.rank ) { return -1; }
            if(a.rank > b.rank ) { return 1; }
        }))    
    })
    
    /*check first line*/
    
    sortColumn(results,"#rank",function(r){return r.results.rank});
    sortColumn(results,"#author",function(r){return r.results.author});
    sortColumn(results,"#title",function(r){return r.results.title});
    sortColumn(results,"#description",function(r){return r.results.description});
}
    
var addCol = function(rows,fcn)
{
    rows.append("td").text(fcn);
}

var makeTable = function(results,mode)
{
    d3.selectAll("tbody *").remove();
  console.log (results)
    var rows = d3.select("tbody")
    .selectAll("tr")
    .data(results)
    .enter()
    .append("tr");
    
    
    addCol(rows,function(results){return results.rank})        
    addCol(rows,function(results){return results.title})
    addCol(rows,function(results){return results.author})
    addCol(rows,function(results){return results.description})
}

var drawDetails = function(results)
{
    d3.selectAll("#book_info *").remove();
    
    
    var box = d3.select("#book_info");
    
    box.append("div").attr("class","rank").text(rank)
    var info  = box.append("div").attr("class","info")

    info.append("div").text(author);
    info.append("div").text(title);
    info.append("div").text(description);
    
}

var booksPromise = 
             d3.json("https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL")
console.log (booksPromise)
    booksPromise.then(function(results)
    { console.log ("got ittt", results)
      setBanner("Ready to Explore");
      makeTableHeader(results.results.books);
      makeTable(results.results.books, "ALL")
    },
      function(err)
      {
        setBanner ("Lists are unavailable");
      });

