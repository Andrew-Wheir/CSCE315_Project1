
function loadTheme(theme) {
    var prev_theme = document.getElementsByTagName('link')[0];
    prev_theme.setAttribute('href',theme);
    localStorage.setItem("mytheme",theme);
}

/* I made two functions for switching because if you closed the site
     on a sub page, and reopened the site on the landing page (or vice 
     versa), the two style sheets would be switched and be wrong.
     That still happens, but now if you click any link, they will
     reset and be correct.
*/

/* Used to switch from the sub css to the landing css */
function switchLand() {
    var prev_theme = document.getElementsByTagName('link')[0];
    
    if (prev_theme.getAttribute('href') == "redstar_sub.css") {
        prev_theme.setAttribute('href',"redstar_land.css");
        localStorage.setItem("mytheme","redstar_land.css");
    }
    else if (prev_theme.getAttribute('href') == "brown_sub.css") {
        prev_theme.setAttribute('href',"brown_land.css");
        localStorage.setItem("mytheme","brown_land.css");
    }
}

/* Used to switch from the landing css to the sub css */
function switchSub() {
    var prev_theme = document.getElementsByTagName('link')[0];

    if (prev_theme.getAttribute('href') == "redstar_land.css") {
        prev_theme.setAttribute('href',"redstar_sub.css");
        localStorage.setItem("mytheme","redstar_sub.css");
    }
    else if (prev_theme.getAttribute('href') == "brown_land.css") {
        prev_theme.setAttribute('href',"brown_sub.css");
        localStorage.setItem("mytheme","brown_sub.css");
    }

}

/* Used to switch from the redstar style sheet to the brown style sheet*/
/* Is called when you press 'Switch Style'*/
function switchTheme() {
    var prev_theme = document.getElementsByTagName('link')[0];

    if (prev_theme.getAttribute('href') == "redstar_land.css") {
        prev_theme.setAttribute('href',"brown_land.css");
        localStorage.setItem("mytheme","brown_land.css");
    }
    else if (prev_theme.getAttribute('href') == "brown_land.css") {
        prev_theme.setAttribute('href',"redstar_land.css");
        localStorage.setItem("mytheme","redstar_land.css");
    }
    else if (prev_theme.getAttribute('href') == "redstar_sub.css") {
        prev_theme.setAttribute('href',"brown_sub.css");
        localStorage.setItem("mytheme","brown_sub.css");
    }
    else if (prev_theme.getAttribute('href') == "brown_sub.css") {
        prev_theme.setAttribute('href',"redstar_sub.css");
        localStorage.setItem("mytheme","redstar_sub.css");
    }
}

window.onload = function() {
    if (localStorage.getItem("mytheme") == "redstar_land.css" ||
        localStorage.getItem("mytheme") == "redstar_sub.css" ||
        localStorage.getItem("mytheme") == "brown_land.css" ||
        localStorage.getItem("mytheme") == "brown_sub.css") {
            loadTheme(localStorage.getItem("mytheme"));
    }
    else {
        loadTheme("redstar_land.css");
    }
}