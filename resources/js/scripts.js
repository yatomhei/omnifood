(function(){
    
    /* sticky navigation bar */

    var sticky = new Waypoint({
        element: document.getElementsByClassName('js--section-features')[0],

        handler: function(direction) {          
            if(direction === 'down'){
                document.getElementsByTagName('nav')[0].classList.add('sticky');
            }else{
                document.getElementsByTagName('nav')[0].classList.remove('sticky');  
            }
        },

        offset: 60
    });


    /* animations on scroll */

    var features = new Waypoint({
        element: document.getElementsByClassName('js--wp-1')[0],
        handler: function(direction) {
            this.element.classList.add('animated');            
            this.element.classList.add('fadeIn');            
        },
        offset: '50%'
    });


})();