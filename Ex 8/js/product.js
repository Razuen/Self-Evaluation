/**
 * func :: ready
 * desc :: splits the parameters from url and calls displayProductDetails
 */
$(document).ready(function() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    ajaxCall(id);
});
/**
 * func :: ajaxCall
 * desc :: make ajax call
 */
function ajaxCall(id) {
    $.ajax({ 
        type: 'GET', 
        url: 'https://api.myjson.com/bins/17fxyw', 
        dataType: 'json',
        success: function (response) { 
            if(response.isSuccess == true){
                for(var i = 0;i<response.data.length;i++) {
                    if(response.data[i]._id == id){
                        displayProductDetails(response.data[i]);
                        break;

                    }
                }
 
            }
        },
        error: function(x,textStatus,err){
            alert("AJAX CONECTION FAILED");
        }
        
    });

}
/**
 * func :: displayProductDetails
 * @param {*} id 
 * desc :: creates the elements about product details
 */
function displayProductDetails(data) {
    var src = data.imageUrl;
    var brand = data.brand;
    var productName = data.name;
    var cost = data.price;
    var starRatings = displayStars(data.rating);
    var description = data.description;
    var size = data.size;
    var color = data.color;
    $(".product-details img").append().attr("src",src);
    $(".brand").append(brand);
    $(".product-name").append(productName);
    $(".cost").append(cost);
    $(".star-ratings").append("&emsp;"+starRatings);
    $("#description").append(description);
    $("#size").append(size);
    $("#color").append(color);
    bindListeners();
}
/**
 * func :: bindListeners
 * desc :: add event listeners to elements
 */
function bindListeners(){
    $("#add-to-cart").on("click",function(){
        alert("Added to cart");

    });
    $("#buy-now").on("click",function(){
        alert("Dispatched");

    });
    $(".read-more h5").on("click",function(){
        var reviews = "";
        for (var i = 0;i<4;i++){
            reviews +=" <div class = 'reviews'>\
            <h6>KEVIN HART &emsp; <span class = 'ratings'>3.5stars</span></h6>\
            <p>Only choli fabric is slik lahangaa and dupatta is net fabric</p>\
            </div>";
        }
        $(".reviews-list").append(reviews).html();
        
    });
}

// ------------------BAD PRACTICE--------------------------
   /* var productDetails = "<img src = '"+data.imageUrl+"'/>\
            <div class = 'product-description'>\
                <h4 class = 'brand'>"+data.brand+"</h4>\
                <h1 class = 'product-name'>"+data.name+"</h1>\
                <h2 class = 'cost'>Rs."+data.price+"</h2>\
                <div class='star-ratings'>"+starRatings+"&emsp;<span>200 reviews and 45 ratings</span></div>\
                <p>"+data.description+"</p>\
                <h5 class = 'attributes'>\
                    Size: <span class = 'values'>"+data.size+"</span>\
                </h5>\
                <h5 class = 'attributes'>\
                    Color: <span class = 'values'>"+data.color+"</span>\
                </h5>\
                <button id = 'add-to-cart'>ADD TO CART</button>\
                <button id = 'buy-now'>BUY NOW</button>\
                <h5 class = 'attributes'>\
                    Deliver to: <span class = 'values'>600098</span>\
                </h5>\
                <div class = 'offer'>\
                <p>Bank Offer : 5% Instant Discount on EMIs with Axis Bank Credit Card</p>\
                <p>Bank Offer : Extra 5% off<sup>*</sup> with Axis Bank Buzz Credit Card</p>\
                </div>\
            </div>";  */
    //console.log(productDetails);
    //$(".product-details").append(productDetails).html();
    
    


