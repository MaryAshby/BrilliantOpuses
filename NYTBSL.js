/*Check load of data. Use var to make easy retrival of 
message depending on later promise and put it in p class goodNews*/

var setgoodNews = function(message)
                  {
                   d3.select(".goodNews").text(message);
                   }

//Make table header sort - used switching as described by 3wSchool//

var sorter = function sortTable(n) 
      {
               var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
               table = document.getElementById("putHere");
               switching = true;
               dir = "asc";
               while (switching) 
                   {
                    switching = false;
                    rows = table.rows;
                    for (i = 1; i < (rows.length - 1); i++) 
                       {
                        shouldSwitch = false;
                        x = rows[i].getElementsByTagName("TD")[n];
                        y = rows[i + 1].getElementsByTagName("TD")[n];
                       }
                 /*check if works then add other headers*/
                         
      /* Check if 2 rows should switch place */
                         
            if (dir == "asc") 
                  {
                  if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
                        {
                        shouldSwitch = true;
                        break;
                        }
                  } 
            else if (dir == "desc") 
                {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) 
                      {
                      shouldSwitch = true;
                      break;
                      }
                }
          }
    if (shouldSwitch) 
        {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
        } 
     else 
        {
        if (switchcount == 0 && dir == "asc") 
        {
        dir = "desc";
        switching = true;
        }
    }
  }
}

//add columns & rows to table//
    
 var addCol = function(rows, fcn)
 {
     rows.append("td").text(fcn);
 }
 
 
 var makeTable = function(books, mode)
 {
     d3.selectAll("tbody *").remove();
     
     var rows = d3.select("tbody")
                  .selectAll("tr")
                  .data(filterbooks(books, mode))
                  .enter()
                  .append("tr");
   
     addCol(rows, function(books){return results.rank})
     addCol(rows, function(books){return results.book_details.title})
     addCol(rows, function(books){return results.book_details.author})
     addCol(rows, function(books){return results.book_details.description})
 }

/*Data promise*/

var getData = firstFunction() 
{   
   
if (#whatItBe = "combined-print-and-e-book-fiction")
{     
         d3.json("https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=1koWnqTA52klgXEgxygUqAjVc372SrnL");
         listPromise.then(function(listData));
                          {
          console.log ("works", listData);
               setgoodNews("Data has successfully loaded");
             
}
      return getData;
}

