const logo = document.querySelector('.logo');

logo.addEventListener('mouseover', function() {
  logo.src = './images/jd2.png';
});
logo.addEventListener('mouseout', function() {
  logo.src = './images/jd1.png';
});
