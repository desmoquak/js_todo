// Add a "checked" mark when clicking on a list item.
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') { 
  ev.target.classList.toggle('checked');
}
}, false);