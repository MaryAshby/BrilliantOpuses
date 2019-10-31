var name = document.getElementById("BSform").value;

var key = ".json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL";

var baseURL =  "https://api.nytimes.com/svc/books/v3/lists/current/";

var listPromise = d3.json("baseURL"+"name"+"key");
          

var listed = d3.select(".putHere")
    .selectAll("p")
    .data(killMeNow)
    .enter()
    .append("a")
    .atttr("href", function(d)
          {return d.listed})
}


       


            


//calls//
//https://api.nytimes.com/svc/books/v3//

//for current lists//
//https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL//

