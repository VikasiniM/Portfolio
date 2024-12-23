
(function () {
    emailjs.init("yDHVEKGvMNJuFL-XH"); 
})();


function sendMail() {
    
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
    if (!name || !phone || !email || !message) {
        alert("Please fill out all fields!");
        return;
    }

    
    const templateParams = {
        name: name,
        phone: phone,
        email: email,
        message: message,
    };

   
    emailjs
        .send("service_0y4wa67", "template_mx0y58o", templateParams)
        .then((response) => {
            alert("Message sent successfully!");
            console.log("SUCCESS:", response.status, response.text);
        })
        .catch((error) => {
            alert("Failed to send message. Please try again.");
            console.error("ERROR:", error);
        });
}

$(document).ready(function(){
    $(window).scroll(function(){
        
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     
   
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        
        $('html').css("scrollBehavior", "smooth");
    });

    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    
    var typed = new Typed(".typing", {
        strings: ["Software Developer💻", "Coder","Problem solver","Graduate🎓"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Developer💻", "Coder","Problem solver","Graduate🎓"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

