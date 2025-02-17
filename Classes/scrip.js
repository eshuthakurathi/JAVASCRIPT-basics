let first = document.getElementById("first");

// when something is assigned to elem.className, it replaces the whole string of classes
first.className = "text-black red"

// classList is the list of classes in the class

// adds/removes a class
first.classList.add("red")
first.classList.remove("red")

// checks for the given class, returns true/false
first.classList.contains("red")

// adds the class if it exist otherwise removes it
first.classList.toggle("red")