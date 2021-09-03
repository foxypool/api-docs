import './styles.css'

window.addEventListener('load', function () {
  const links = document.getElementsByClassName('link');
  const link = links[0];
  const img = link.children[0];
  img.alt = 'Foxy';
  img.src = 'assets/fox.png';
  const title = document.createElement('span');
  title.innerHTML = 'Foxy-Pool';
  link.appendChild(title);
});
