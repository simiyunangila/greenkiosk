document.body.style.backgroundColor = 'silver';

document.getElementById('title').style.color = 'green';

const titles = document.querySelectorAll('h3');
titles.forEach(h3 => {
  h3.innerHTML = h3.innerHTML.toUpperCase();
});

const node = document.createElement("li");
const textnode = document.createTextNode("passion");
node.appendChild(textnode);
document.getElementById("fruList").appendChild(node);

// const node = document.createElement("li");
// const textnode = document.createTextNode("Water");
// node.appendChild(textnode);
// document.getElementById("myList").appendChild(node);