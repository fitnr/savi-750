var element = document.getElementById('click');
var p = document.getElementsByTagName('p');

document.addEventListener('click', function() {
    element.innerHTML = '<i>blue</i>';
    Array.from(p).forEach(function(e) {
        e.style.color = 'blue';
    });
});
