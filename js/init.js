(function ($) {
  'use strict';

  var init = {
    domCache: function () {
      this.$header = $('#nav');
    },

    stickyHeader: function () {
      var self = this;
      $(window).on('scroll load', function () {
        if (!self.$header.data('open') && $(window).scrollTop() > 1) {
          self.$header.data('open', true);
          $('nav').addClass('stickynav-active');
        } else if (self.$header.data('open') && $(window).scrollTop() < 1) {
          self.$header.data('open', false);
          $('nav').removeClass('stickynav-active');
        }
      });
    },

    fadeText: function () {
      $("#hero_fade").fadeIn(3000);
    },

    init: function () {
      init.domCache();
      this.stickyHeader();
      this.fadeText();
    }
  };

  $(function () {
    init.init();
  });
})(jQuery);