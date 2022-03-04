    var node = document.querySelector('.container');
    window.addEventListener('scroll', function() {
    const heightOfContent = document.body.clientHeight;
    const height = window.screen.height;

    if (heightOfContent - window.scrollY - height < 500) {
        
        var Box = document.createElement('div');
        Box.className = 'box';
        
        var box1 = document.createElement('img');
        box1.src = './images/5.jpg';
        var box2 = document.createElement('img');
        box2.src = './images/7.jpg';
        var box3 = document.createElement('img');
        box3.src = './images/8.jpg';
        var box4 = document.createElement('img');
        box4.src = './images/6.jpg';
        Box.appendChild(box1);
        Box.appendChild(box2);
        Box.appendChild(box3);
        Box.appendChild(box4);
        node.appendChild(Box);
        

        var Box1 = document.createElement('div');
        Box1.className = 'box';
        
        var box5 = document.createElement('img');
        box5.src = './images/8.jpg';
        var box6 = document.createElement('img');
        box6.src = './images/6.jpg';
        var box7 = document.createElement('img');
        box7.src = './images/7.jpg';
        var box8 = document.createElement('img');
        box8.src = './images/5.jpg';
        Box1.appendChild(box5);
        Box1.appendChild(box6);
        Box1.appendChild(box7);
        Box1.appendChild(box8);
        node.appendChild(Box1);
        

        var Box2 = document.createElement('div');
        Box2.className = 'box';
        
        var box9 = document.createElement('img');
        box9.src = './images/6.jpg';
        var box10 = document.createElement('img');
        box10.src = './images/8.jpg';
        var box11 = document.createElement('img');
        box11.src = './images/5.jpg';
        var box12 = document.createElement('img');
        box12.src = './images/7.jpg';
        Box2.appendChild(box9);
        Box2.appendChild(box10);
        Box2.appendChild(box11);
        Box2.appendChild(box12);
        node.appendChild(Box2);
        
        




    }
});