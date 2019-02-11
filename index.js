
   $(function() {
    $('#js-shopping-list-form').submit(event => {
      event.preventDefault();
      $("shopping-list").empty();
     let submitEntry= $('#entry').val();
          $(".shopping-list").append('<li>  <span class="shopping-item">'+ submitEntry + '</span>'
          + '<div class="shopping-item-controls">'
          + '<button class="shopping-item-toggle"><span class="button-label">check</span></button>'
          + '<button class="shopping-item-delete"><span class="button-label">delete</span></button>'
          + '</div></li>');
    });
    
  });
  
      $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
          event.preventDefault();
          $(this).parent('div').parent('li').remove();
          event.preventDefault();
      });

     $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
          event.preventDefault();
          $(this).parent('div').parent('li').toggleClass('shopping-item__checked');
          event.preventDefault();
      });