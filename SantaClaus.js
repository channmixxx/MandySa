const santa = document.querySelector('.santa.santa--walk');
const speak = santa.querySelector('.hukidashi.hukidashi--speak');

santa.addEventListener('mouseover', function() {
   santa.style.left = '80px';
   speak.style.opacity = '1'; 
});

santa.addEventListener('mouseout', function() {
    santa.style.left = '30px';
    speak.style.opacity = '0'; 
 });
