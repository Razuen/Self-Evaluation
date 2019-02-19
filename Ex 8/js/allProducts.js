/**
 * func :: ready
 * desc :: 
 */
$(document).ready(function () {
    ajaxCall();
});

/**
 * func :: ajaxCall
 * desc :: make ajax call
 */
function ajaxCall() {
    $.ajax({
        type: 'GET',
        url: 'https://api.myjson.com/bins/17fxyw',
        dataType: 'json',
        success: function (response) {
            if (response.isSuccess == true) {

                createDOM(response);
            }
        },
        error: function (x, textStatus, err) {
            alert("AJAX CONECTION FAILED");
        }

    });

}
/**
 * func :: create dom
 * @param {*} response 
 * desc :: sepearte category
 */
function createDOM(response) {
    var jsonObj = {};
    category = response.data[0].category.toLowerCase();
    for (var i = 0; i < response.data.length; i++) {
    }
    for (var i = 0; i < response.data.length; i++) {
        if (jsonObj[(response.data[i].category.toLowerCase())]) {
            jsonObj[(response.data[i].category.toLowerCase())].push(response.data[i]);
        } else {
            jsonObj[(response.data[i].category.toLowerCase())] = [];

        }
    }
    for (var i in jsonObj) {
        displayDOM(jsonObj[i], i);
    }

}
/**
 * func :: displayDOM
 * @param {*} data 
 * desc :: constructs DOM
 */

function displayDOM(data, category) {
    var categoryS = "<div class = '" + category + "'>\
        <h1>"+ category.charAt(0).toUpperCase() + category.substring(1, category.length) + "</h1>\
        <div class = 'item-list'>";
    for (var i = 0; i < data.length; i++) {
        console.log("heeelo.....", i);
        var id = data[i]._id;
        var picture = data[i].imageUrl;
        var brand = data[i].brand;
        var productName = data[i].name;
        var star = data[i].rating;
        var starRatings = displayStars(star);
        var productDetails = "<div class = 'product-details'>\
            <h6 class = 'brand'>"+ brand + "</h6>\
            <h4 class = 'product-name'>"+ productName + "</h4>\
            <div class = 'star-ratings'>"+ starRatings + "</div>";
        categoryS += "<div class = 'item'><img id = '" + id + "'src='" + picture + "'/>" + productDetails + "</div></div>";

    }
    categoryS += "</div>\
    </div>";
    $("section").append(categoryS).html();
    showProductDetails();

}
/**
 * func :: showProductDetails
 * desc :: bind click to the image and redirect to next page
 */
function showProductDetails() {
    $(".item img").on("click", function () {
        var id = $(this).attr("id");
        window.location.href = "../html/product.html?id=" + id;

    });
}

