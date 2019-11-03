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
        if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
        }
    }
  }
}
