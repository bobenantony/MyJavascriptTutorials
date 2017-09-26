/**/
/**
 * change the handling function names for window.onload event
 */

//window.onload = onloadHandlerJoin();

/**
 * Using the 'length' property
 */
function onloadHandlerLength() {
    var anArray = new Array('soccer', 'basketball', 'cricket', 'badminton');
    alert("Length of the array is " + anArray.length);
}

/**
 * Using the 'concat' method
 */
function onloadHandlerConcat() {
    var sports = new Array('football', 'cricket', 'rugby', 'tennis', 'badminton');
    var moreSports = new Array('soccer', 'basketball', 'hockey');
    var combinedSports = sports.concat(moreSports);

    alert("Length of the sports array is " + sports.length);
    alert("Length of the moreSports array is " + moreSports.length);
    alert("Length of the combinedSports array is " + combinedSports.length);
}

/**
 * Using the 'indexOf' and 'lastIndexOf' methods
 */
function onloadHandlerIndexOf() {
    var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
    var index = sports.indexOf('cricket', 0);

    alert("Index of cricket is " + index);
}

/**
 * Using the join method
 */
function onloadHandlerJoin() {
    var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
    var joined = sports.join(', ');

    alert("Joined sports array is " + joined);
}

/**
 * change the handling function names for button click event
 */

/**
 * Using the reverse method
 */
function onClickHandlerReverse() {
    var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
    sports.reverse();

    var sportsArrayLength = sports.length;
    var results = "";

    for (var i = 0; i < sportsArrayLength; i++) {
        results = results + sports[i] + "<br />";
    }

    document.getElementById("demo").innerHTML = results;
}

/**
 * Using the sort method
 */
function onClickHandlerSort() {
    var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
    sports.sort();

    var sportsArrayLength = sports.length;
    var results = "";

    for (var i = 0; i < sportsArrayLength; i++) {
        results = results + sports[i] + "<br />";
    }

    document.getElementById("demo").innerHTML = results;
}

/**
 * Using the slice method
 */
function onClickHandlerSlice() {
    var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
    var someSports = sports.slice(2, 5);
    /**
     * the above code slices elements from index 2 through 4 (not including 5) to someSports array.That
     * means the elements hockey, football and cricket to someSports array
     * No changes to sports array
     */

    var sportsArrayLength = someSports.length;
    var results = "";

    for (var i = 0; i < sportsArrayLength; i++) {
        results = results + someSports[i] + "<br />";
    }

    document.getElementById("demo").innerHTML = results;
}

/**
 * Using the splice method
 */
function onClickHandlerSplice() {
    var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
    var someSports = sports.splice(2, 1, "GoGo", "Kabaddi");
    /**
     * the above code splices replaces 1 element from index 2 with the given 2 new elements to sports array.The
     * remvoed element hockey is in the someSports array
     */

    var sportsArrayLength = someSports.length;
    var results = "";

    for (var i = 0; i < sportsArrayLength; i++) {
        results = results + someSports[i] + "<br />";
    }

    document.getElementById("demo").innerHTML = results;
}

/**
 * Using the pop and push methods
 */
function onClickHandlerPushAndPop() {
    var sports = new Array('soccer', 'basketball', 'hockey');
    sports.push('football');

    var nextSport = sports.pop();

    var sportsArrayLength = sports.length;
    var results = "";

    for (var i = 0; i < sportsArrayLength; i++) {
        results = results + sports[i] + "<br />";
    }

    document.getElementById("demo").innerHTML = results;
}

/**
 * Using the shift and unshift methods
 */
function onClickHandlerShiftAndUnshift() {
    var sports = new Array('soccer', 'basketball', 'hockey');
    
    // expects to expel soccer (shift removes the first element of the array)
    var expelledSport = sports.shift();

     // expects to add football at the beginning of the array (shift removes the first element of the array)
    sports.unshift('football');

    var sportsArrayLength = sports.length;
    var results = "";

    for (var i = 0; i < sportsArrayLength; i++) {
        results = results + sports[i] + "<br />";
    }

    document.getElementById("demo").innerHTML = results;
}
/**
 * Using advanced array methods - Every
 */
function onClickHandlerEvery() {
    var evenNumbers = new Array(0, 2, 4, 6, 8, 9, 10, 12); 
    var allEven = evenNumbers.every(evenNumberCheck, this); 

    if (allEven) {
        document.getElementById("demo").innerHTML = "all the numbers are even numbers";
    } else {
        document.getElementById("demo").innerHTML = "all the numbers are not even numbers";
    }
 }

function evenNumberCheck(value, index, array) {
    return (value % 2) === 0;
}

/**
 * Using advanced array methods - Some
 */
function onClickHandlerSome() {
    var evenNumbers = new Array(1, 3, 5, 7, 11, 9);
    var allEven = evenNumbers.some(evenNumberCheck, this);

    if (allEven) {
        document.getElementById("demo").innerHTML = "some of the numbers are even numbers";
    } else {
        document.getElementById("demo").innerHTML = "No even numbers";
    }
}

/**
 * Using advanced array methods - ForEach
 */
function onClickHandlerForEach() {
    var sportsArray = ['soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby'];
    sportsArray.forEach(offerSport); 
}

function offerSport(value, index, array) {
    var sportsList = document.getElementById("demo");
    var bullet = document.createElement("li");
    bullet.innerText = value;
    sportsList.appendChild(bullet);
}

/**
 * Using advanced array methods - Filter
 */
function onClickHandlerFilter() {
    var evenNumbers = new Array(0, 2, 4, 6, 8, 9, 10, 12);
    var allEven = evenNumbers.filter(evenNumberCheck, evenNumbers);
    var results =""

    for (var i = 0; i < allEven.length; i++) {
        results = results + allEven[i].toString() + "<br />";
    }

    document.getElementById("demo").innerHTML = results;
}

/**
 * Using advanced array methods - Map
 */
function onClickHandlerMap() {
    var money = [12.8, 15.9, 21.7, 35.2];
    var roundedMoney = money.map(roundOff, money); 
    var results = ""

    for (var i = 0; i < roundedMoney.length; i++) {
        results = results + roundedMoney[i].toString() + "<br />";
    }

    document.getElementById("demo").innerHTML = results;
}

function roundOff(value, position, array) {
    return Math.round(value);
}

/**
 * Implementing iterative control flow - For in Loop
 */
function onClickHandlerForInLoop() {
    var person = { firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender: "female" };
    var results = "";

    for (var prop in person) {
        document.write(prop) + "<br />";;
    }

    for (var prop in person) {
        document.write(person[prop]) + "<br />";;
    }
}


