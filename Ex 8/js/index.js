/**
 * func :: createHeaderFooter
 * desc :: create header and footer
 */
function createrHeaderFooter() {
    var header = " <div class = 'logo'>\
    <i class='fas fa-shopping-cart'></i>\
    e-kart</div> \
    <nav >\
    <h4 id='home'>HOME</h4>\
    <h4 id='add-product'>ADD PRODUCT</h4>\
    </nav>";
    var footer = "<div class = 'social-media'>\
    <a href = 'https://www.facebook.com'><img src = '../images/facebook.png' target='_blank' /></a>\
    <a href = 'https://www.instagram.com'><img src = '../images/instagram.png' target='_blank' /></a>\
    <a href = 'https://www.twitter.com'><img src = '../images/twitter.png' target='_blank'/></a>\
    </div><div class = 'logo'><i class = 'fas fa-shopping-cart'></i>e-kart</div>"
    $("header").append(header).html();
    $("footer").append(footer).html();
    redirect();

}
/**
 * func :: redirect
 * desc :: bind action listeners to elements
 */
function redirect() {
    
    $("#home").on("click",function(){
        //console.log("home clicked");
        window.location.href = "../html/index.html";
    });
    $("#add-product").on("click",function(){
        window.location.href = "../html/addProduct.html";
    });
    $(".logo").on("click",function(){
        window.location.href = "../html/index.html";

    });
    
}

/**
 * func :: ready
 * desc :: call createHeaderFooter and bind listeners
 */
$(document).ready(function() {
    createrHeaderFooter();
});

/**
 * @function :: displayStars
 * @param {*} n 
 * desc :: show the stars for ratings
 */

function displayStars(n) {

    var stars = "";
    for (var i = n;i > 0;i--) {
        if(i == 0.5 ) {
            stars += "<i class='fas fa-star-half-alt'></i>";
        }
        else {
            stars += "<i class='fas fa-star'></i>" ;
        }
    }
    if(n != 4.5) {
        for( var i = 5;i>n;i--) {
            stars += "<i class='far fa-star'></i>";

        }
    }

    return stars;

}

