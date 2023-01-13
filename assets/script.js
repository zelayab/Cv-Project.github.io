
     //function to download a pdf file cv
    function downloadCV(){
        //save in the user pc the pdf cv
            window.open('./assets/BernardoCV.pdf')
            }
        //function to change to dark mode
            function darkMode(){
                document.body.classList.toggle("dark-mode");
            }
        // up to top button
            window.onscroll = function() {scrollFunction()};
            function scrollFunction() {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    document.getElementById("myBtn").style.display = "block";
                    //up-to-top create class
                    document.getElementById("myBtn").classList.add("up-to-top");
                } else {
                    document.getElementById("myBtn").style.display = "none";
                    //up-to-top create class
                    document.getElementById("myBtn").classList.add("up-to-top");
                }
            }
            function topFunction() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        // animation to whatsapp button
            function whatsapp(){
                document.getElementById("whatsapp").classList.add("whatsapp");
            }
            function whatsappOut(){
                document.getElementById("whatsapp").classList.remove("whatsapp");
            }