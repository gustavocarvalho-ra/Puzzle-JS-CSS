function drag(event) {
  event.dataTransfer.setData('text', event.target.id);
}

onload = function() {
  let parent = document.getElementById('drag');
  let frag = document.createDocumentFragment();
  while (parent.children.length) {
    frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
  }
  parent.appendChild(frag)
}