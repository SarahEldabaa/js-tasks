$(document).ready(function () {
  // API URL
  var API = "https://dummyjson.com/products";

  // Fetch data from API
  $.ajax({
    url: API,
    method: "GET",
    dataType: "json",
    success: function (data) {
      // Check if products exist
      if (data && data.products && data.products.length > 0) {
        // Loop through products and display them
        $.each(data.products, function (index, product) {
          var productHtml = '<div class="product">';

          // Display the image
          if (product.images && product.images.length > 0) {
            productHtml +=
              '<div class="image"><img src="' +
              product.images[0] +
              '" alt="Product Image"></div>';
          }

          productHtml += "<h3>" + product.title + "</h3>";
          productHtml += "<p>ID: " + product.id + "</p>";

          // Description goes here
          productHtml +=
            "<p>Description: " + product.description.slice(0, 100) + "</p>";

          productHtml += "<p>Price: $" + product.price + "</p></div>";

          // Append product to the product-list
          $("#product-list").append(productHtml);
        });
      } else {
        $("#product-list").html("<p>No products found.</p>");
      }
    },
    error: function () {
      $("#product-list").html(
        "<p>Error loading products. Please try again later.</p>"
      );
    },
  });
});
