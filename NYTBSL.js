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
                        x = rows[i].getElementsByTagName("rank")[n];
                        y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
