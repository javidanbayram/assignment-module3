$(document).ready(function() {
    var foodItems = [
        { name: "Chicken", description: "Chicken is a versatile protein loved by many. Whether grilled, roasted, fried, or baked, chicken is a popular choice for meals worldwide. Its mild flavor makes it easy to pair with a variety of seasonings and sauces. From classic chicken parmesan to spicy buffalo wings, there's a chicken dish for every taste preference."},
        { name: "Beef", description: "Beef is a staple protein in many cuisines around the world. From tender steaks to hearty stews, beef offers a rich and savory flavor profile. Whether you prefer your beef grilled to perfection, slow-cooked until melt-in-your-mouth tender, or minced into a juicy burger, there's no shortage of delicious beef dishes to enjoy."},
        { name: "Sushi", description: "Sushi is a Japanese delicacy that has gained popularity worldwide. Made with vinegared rice, fresh seafood, and various fillings, sushi offers a unique blend of flavors and textures. From classic nigiri to creative rolls filled with avocado, cucumber, and crab, sushi is as visually appealing as it is delicious."}
    ];

    var $menu = $(".navbar-nav");
    foodItems.forEach(function(item) {
        $menu.append("<li><a href='#' data-name='" + item.name + "'>" + item.name + "</a></li>");
    });

    $(".navbar-nav").on("click", "a", function(e) {
        e.preventDefault();
        var foodName = $(this).data("name");
        var foodDescription = getFoodDescription(foodName);
        $("#food-description").html("<h2>" + foodName + "</h2><p>" + foodDescription + "</p>");
    });

    function getFoodDescription(name) {
        for (var i = 0; i < foodItems.length; i++) {
            if (foodItems[i].name === name) {
                return foodItems[i].description;
            }
        }
        return "";
    }
});
