//key 1koWnqTA52klgXEgxygUqAjVc372SrnL//

var setBanner = function(message)
            {
             d3.select("#banner").text(message);
            }

var listPromise = d3.json("https://api.nytimes.com/svc/books/v3/lists.json")
         listPromise.then(function(NYTlist)
            {
            setBanner("Search the New York Times Best Seller Lists");
             },
          function(err)
            {
            setBanner("NYT Best Seller Lists Currently Not Available");
             });

            .show 
            {
             display:block;
            }

var drop = listFunction() 
            {
            document.getElementById("listDropDown").classList.toggle("show");
            }



