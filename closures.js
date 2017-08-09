/******************************************************************************\
  #PROBLEM-01
  - I left this problem mostly the same.
  - I like the outer and inner function names. I think they are helpful.
  - All I changed was the variable name, looking for a more descriptive, didactic variable name.
\******************************************************************************/

function outer() {
  var outerName = 'Tyler';
  
  return function() {
    return 'The original name was ' + outerName;
  }
}

/****** INSTRUCTIONS PROBLEM 1 ******/
/* Above you're given a function that returns another function which has a
closure over the outerName variable. Invoke outer saving the return value into
another variable called 'inner'. */

// Code Here

// Solution
var inner = outer();

//Once you do that, invoke inner.

//Code Here

// Solution
inner();





/******************************************************************************\
  #PROBLEM-02
  - Replaces callJake problem
  - Chicken/egg analogy seemed helpful to DM26 students
  - Illustrates how function is made inside but is called (hatched) outside
  - Compare to Alien/human callback problem to illustrate difference between callbacks and closures
\******************************************************************************/


function mamaBird(bird) {
  function egg(adj) {
    return 'Look what hatched! A ' + adj + ' baby ' + bird + '!';
  }
  return egg;
}
/****** INSTRUCTIONS PROBLEM 2 ******/
/* Above you see a mamaBird function that returns an egg function.
Declare a variable called chicken, and in it store a function that returns 
'Look what hatched! A little baby chicken!' when you invoke it with 'little'. */

//Code Here

// Solution
var chicken = mamaBird('chicken');
chicken('little');






/******************************************************************************\
  #PROBLEM-03
  - I left this unchanged (other than writing a working solution).
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 3 ******/
/* Write a function called makeCounter that makes the following code work
properly. */

//Code Here

// Solution
function makeCounter() {
  var count = 0;
  
  return function() {
    count++;
    return count;
  }
}

//Uncomment this once you make your function
  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4




/******************************************************************************\
  #PROBLEM-04
  - I like this one. I didn't change it (except for working solution below).
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 4 ******/
/* Inside the function called counterFactory return two functions that implement
up/down counter. The first function is called inc, this function is responsible
for incrementing the value once. The second function is called dec, this
function is responsible for decrementing the value by one. You will need to use
the module pattern to achieve this. 
Information on the module pattern available here: 
http://stackoverflow.com/questions/17776940/javascript-module-pattern-with-example?answertab=votes#tab-top
*/

function counterFactory(value) {
  // Code here.

  // Solution
  return {
    inc: function() {
      value++;
      return value;
    },
    dec: function() {
      value--;
      return value;
    }
  }

}


counter = counterFactory(10);
counter.inc() // 11
counter.inc() // 12
counter.inc() // 13
counter.dec() // 12










/******************************************************************************\
  #PROBLEM-05
  - replaces motivation problem.
  - I thought packages in Santa's workshop might be a good analogy for an inner function returned from functions.
  - The original problem (just like this one) was set up return the invoked inner function, which is a little different than how we normally show closures working (normally we return the function definition in a variable and call it later). Is this what we want to do here?
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 5 ******/
/* Inside the santasWorkshop function create another function called giftPackage that
will return 'Santa and his elves wish you a very merry Christmas, firstname lastname.' */

function santasWorkshop(firstname, lastname) {
  var giftCard = 'Santa and his elves wish you a very merry Christmas, ';

  // code message function here.

  // Solution
  var giftPackage = function() {
    return giftCard + firstname + " " + lastname + "!";
  }

  //Uncommment this to return the value of your invoked message function
  return giftPackage();

}

santasWorkshop('Ralphie', 'Parker'); // 'Santa and his elves wish you a very merry Christmas, Ralphie Parker!








/******************************************************************************\
  #PROBLEM-06
  - I liked this one the way it was. 
  - I only made a suggestion to rename the private variable privatePerson.
  - Oh, and I capitalized Phillip's name.
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 6 ******/
/* Inside the module's return object create a publicMethod function that
invokes privateMethod. Invoke this by calling module.publicMethod(); outside
the module scope */

var module = (function() {
  var privatePerson = {
    name: "Phillip",
    age: 29,
    location: "Utah"
  };

  function privateMethod(){
    return "Hi, I'm " + privatePerson.name + ", age " + privatePerson.age + " from " + privatePerson.location;
  }

  // Anything that is being returned is made public and can be invoked from
  // outside our lexical scope
  return {
    // Code here.

    // Solution
    publicMethod: function() {
      return privateMethod();
    }
  };

})();

module.publicMethod();


/******************************************************************************\
 #PROBLEM-07
 - I didn't change this one (except the working solution).
 \******************************************************************************/
/****** INSTRUCTIONS PROBLEM 7 ******/
/* Here we are given three arrays: an array of friends, an array of second-level
friends (friends of friends), and an array of all users. These arrays may share
users. Write a function that takes in our existing friends and returns
a function that will tell us if a given user is not already a friend. */
var friends = ["Tom", "Dick", "Harry"];
var secondLevelFriends = ["Anne", "Harry", "Quinton"];
var allUsers = ["Tom", "Dick", "Harry", "Anne", "Quinton", "Katie", "Mary"];

function findPotentialFriends(existingFriends) {
  // Solution
  return function(friend) {
    return existingFriends.indexOf(friend) === -1;
  }
}

var isNotAFriend = findPotentialFriends( friends );
// isNotAFriend(allUsers[0]); // false
// isNotAFriend(secondLevelFriends[2]); // true


/******************************************************************************\
 #PROBLEM-07 -- BLACK DIAMOND
 - I didn't change the Black Diamond.
 \******************************************************************************/
/* Using your findPotentialFriends function from above and the Array.filter
method, find all potential second level friends as well as potential friends
from allUsers. */

// Solution
var potentialSecondLevelFriends = secondLevelFriends.filter((friend) => isNotAFriend(friend));
var allPotentialFriends = allUsers.filter((friend) => isNotAFriend(friend));


/******************************************************************************\
  #PROBLEM-08
  - I like this one as is.
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 8 ******/
/* Here we have a for loop that will iterate as long as i is less than or equal
to 5. What we need to do is console.log(i) so that it logs like so:
 0 second after call - log 0
 1 seconds after call - log 1
 2 seconds after call - log 2
 3 seconds after call - log 3
 4 seconds after call - log 4
 5 seconds after call - log 5
 However, because each call to console.log occurs after the loop has finished,
 the value of i has changed before the console.log executes. We'll need to use
 a closure to preserve a reference to i at the time of execution.

 Fix the code below to log the desired output.
 */


function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
    setTimeout((function() {
    	console.log(i)
	}), i * 1000)
  }
}
timeOutCounter();


// Solution #1
function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
    setTimeout((function(i) {
    	return function() {
        console.log(i)
      }
	})(i), i * 1000)
  }
}
timeOutCounter();

// Solution #2
// Alternatively, just switch var to let, which preserves block scope
// function timeOutCounter() {
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(function() {
//     	console.log(i)
// 	}, i * 1000)
//   }
// }
// timeOutCounter();







/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
                        BONUS PROBLEMS
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


/******************************************************************************\
  #PROBLEM-09
  - This one is similar in difficulty to problems 1 and 2.
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 9 ******/
/* 
  All employees at the company are getting a 15% bonus this year. Here is a 
  function called earnings that takes in a job title and salary, calculates 
  the total earnings, and returns an inner function that displays the result 
  in a string.

  Create a ceo function, passing in "CEO" (string) and the CEO's salary of 
  2 million dollars (just a number, no dollar sign).
 */

function earnings(title, salary) {
  var total = salary * 1.15;
  
  return function() {
    return 'The ' + title + ' made $' + total + ' this year.';
  };
}

// Solution
var ceo = earnings("CEO", 2000000);
ceo();



/******************************************************************************\
  #PROBLEM-10
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 10 ******/
/* 
  Below is a family function which takes in a family name (i.e., a last name). 
  It returns a function that takes in a given name and returns the full name 
  (with a small compliment). Pass the correct parameters into each function.

  Now create a function called alvarez and another called ziegler by calling 
  the family function and passing in 'Alvarez' and 'Ziegler'. Call each of 
  these two functions to return correct strings for both Lisa Alvarez and 
  Amy Ziegler.
 */

function family(/* ? */) {
  
  return function(/* ? */) {
    return firstname + ' ' + lastname + ' is a lovely name.'
  };
}

// Solution
function family(lastname) {
  
  return function(firstname) {
    return firstname + ' ' + lastname + ' is a lovely name.'
  };
}

var alvarez = family('Alvarez');
alvarez('Lisa');
var ziegler = family('Ziegler');
ziegler('Amy');




/******************************************************************************\
  #PROBLEM-11
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 11 ******/
/* 
  Here is a function called stateSalesTax, which accepts a sales tax rate for a 
  given state and returns an inner function that calculates the total when given 
  the cost of the purchased items.

  Pass the correct parameters into the function definition.

  Below the function, create a utah function for calculating the sales tax on 
  purchases made in Utah. Use 0.047 as the tax rate. Invoke the function you 
  created to calculate the total given a cost of $1000.
*/

  
function stateSalesTax(/* ? */) { // pass in the correct parameter

  return function(/* ? */) { // pass in the correct parameter
    return cost * (1 + rate);
  };
}


// Solution
function stateSalesTax(rate) {

  return function(cost) {
    return cost * (1 + rate);
  };
}
var utah = stateSalesTax(0.047);
utah(1000);






/******************************************************************************\
  #PROBLEM-12
  - This one requires students to write out the main function.
  - It also tests understanding of the modular pattern.
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 12 ******/
/* 
  Write a function call devMountain that has a private variable on its local 
  scope which is an array of core coding skills as shown below.
  var skills = ['JavaScript', 'React', 'Node', 'Express', 'SQL', 'HTML/CSS'];

  Have the function return an object with two methods, one called listSkills 
  and the other called learnSkills. The first simply returns the list of 
  skills. The second can take in either a single skill (string) or a list of 
  skills (array) and will add the new skill(s) to the list.

  Create an object called jane to represent a new student named Jane who just 
  started at DevMountain. This variable should store the devMountain function's 
  inner functions. Use implicit binding to call jane's learnSkills method and 
  have Jane learn 'RegEx' and 'ping pong' in addition to the core skills. Then 
  use implicit binding to call the listSkills method.
*/

function devMountain() {
  // Code Here
}


// Solution
function devMountain() {
  var skills = ['JavaScript', 'React', 'Node', 'Express', 'SQL', 'HTML/CSS'];
  
  return {
    listSkills: function() {
      return skills;
    },
    learnSkills: function(newSkills) {
      skills = skills.concat(newSkills);
    }
  };
}
var jane = devMountain();
jane.learnSkills(['ping pong', 'RegEx']);
jane.listSkills();