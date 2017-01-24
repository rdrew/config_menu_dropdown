(function($, undefined){

  Drupal.behaviors.config_dropdown = {
    attach: function (context, settings) {

      $('.js-config-dropdown__button').click(function() {
        var $button, $menu;
        $button = $(this);
        $menu = $button.siblings(".config-dropdown__menu");
        $menu.toggleClass("show-menu");
        $menu.children("li").click(function() {
          $menu.removeClass("show-menu");
          $button.html($(this).html());
        });
      }); 

    }
  };

})(jQuery);
