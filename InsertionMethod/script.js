// inserting element using innerhtml by adding into our existing innerhtml
let a =document.getElementsByTagName('div')[0]
a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';

// for inserting bhot saare element then this is used for convenience
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World!</h1>';
a.appendChild(div);


// append at the end of the node
a.append(div);

// insert at the beginning of node
a.prepend(div);

// insert before node
a.before(div);

// insert after node
a.after(div);

// replaces node with the given node
a.replaceWith(div);

// insert html immediately before element
first.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>');

// insert html into element at the end
first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>');

// insert html into element at the beginning
first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>');

// insert html immediately after element
first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>');

// to remove the node
first.remove()