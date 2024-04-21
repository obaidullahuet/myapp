var name = prompt("What is your name");
firstLetterUpper = name.slice(0,1).toUpperCase();

alert("Hello " + firstLetterUpper + name.slice(1, name.length).toLowerCase());