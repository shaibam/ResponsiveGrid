# ResponsiveGrid
Responsive grid using JS and CSS's grid layout.
Written in vanilla JS, using the ECMA6 class syntax. 
A responsive grid is displayed whith default cell size of 300/169.
On every 2 rows one cell is blown up to be twice it's original sizem thus taking space of 4 cells. 
The random selection of a cell on a line is performed with every resize.

Notes:
* It's a shame that the syntax dosent have true private declerations)
* Though performance is pretty good, it could have had better performance if a virtual dom was used.
* If nodeJS is installed, this can be easily tested using :
 npm install http-server -g
 http-server

