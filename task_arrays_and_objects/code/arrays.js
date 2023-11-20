/**
 * In these tasks you will need to manipulate the array below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

stations = ["Dundee", "Edinburgh", "North Berwick", "Newcastle", "York", "Leeds", "Doncaster", "Peterborough"];

/**
 * Q1.
 * The East Coast Main Line doesn't stop at Peterborough! Add London Kings Cross to the end of the array to complete the line.
 */

stations.push("London Kings Cross");
console.log(stations);



/**
 * Q2.
 * It doesn't go as far as Dundee either, so remove it from the start of the array.
 */

stations.shift();
console.log(stations);



/**
 * Q3.
 * How many stations are on the line?
 */

stationCount = stations.length;

console.log("There are " + stationCount + " stations.");



/**
 * Q4.
 * Which station is the third stop?
 */

thirdStation = stations.at(2);
console.log("The third station is " + thirdStation);



/**
 * Q5.
 * Someone put the wrong Berwick on the timetable! Update "North Berwick" to "Berwick-upon-Tweed".
 */

foundIndex = stations.indexOf("North Berwick");
stations[foundIndex] = "Berwick-upon-Tweed";
// stations["Berwick-upon-Tweed", stations.findIndex(find)]

console.log(stations);



/**
 * Q6.
 * How did Leeds get on there? Better remove it.
 */

foundIndex = stations.indexOf("Leeds");
stations.splice(foundIndex, 1);

//OR

console.log(stations);



/**
 * Q7.
 * We forgot about Darlington! Add it to the route between Newcastle and York.
 */


foundIndex = (stations.indexOf("Newcastle"))+1;
stations.splice(foundIndex,0, "Darlington"); // DOUBLE CHECK meaning of array.splice(index, howmany, item1, ....., itemX)

console.log(stations)



/**
 * Q8.
 * Is Durham one of the stops?
 */

stoppingAtDurham = stations.includes("Durham");

console.log(stoppingAtDurham);


/**
 * Q9.
 * If we are stopping at Durham, print "Yay Durham!" to the terminal. If not print "Aww...".
 */
stoppingAtDurham = stations.includes("Durham");
console.log(stoppingAtDurham);
// stoppingAtDurham = true;

if (stoppingAtDurham === true){ // watch ===
    console.log("Yay Durham!")
} else {
    console.log("Awww...")
}