(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const bannerImage = banner.querySelector('img');
    const sections = document.querySelectorAll('section')
    const switchImg = document.getElementById("switch-img");
    const bannerImg = document.getElementById("banner");
    
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            bannerImage.src = "banner2.png";
            mode = 'light';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            bannerImage.src = "banner1.png";
            mode = 'dark'
        }
    })

    switchImg.addEventListener("click", function() {
        if (switchImg.src.endsWith("off.png")) {
          switchImg.src = "on.png";
          bannerImg.src = "banner1.png"
        } else {
          switchImg.src = "off.png";
          bannerImg.src = "banner2.png"


        }
      });

     
})()