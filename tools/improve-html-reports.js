<script>
(function() {

  // include jquery
  var script = document.createElement('script');
  script.src = 'http://code.jquery.com/jquery-1.11.3.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);
  var checkReady = function(callback) {
    if (window.jQuery) {
      callback(jQuery);
    } else {
      window.setTimeout(function() { checkReady(callback); }, 50);
    }
  };

  // run jquery code
  checkReady(function($) {
      console.log('check ready called');
    // to be able to paste this script on the console 
    var iframe = document.getElementById('myframe'); 
    var doc = (iframe) ? iframe.contentWindow.document : document;
    $ul = $(doc).find('ul');
    $h4 = $(doc).find('h4');

    // add the result status on each title
    $ul.each(function() {
        var $this = $(this);
        var h4 = $this.children('h4');

        if (h4.find('button').length === 0) {
          if ($this.find('.failed').length) {
            $this.children('h4').prepend('<span class="failed">✗</span>');
          } else {
            $this.children('h4').prepend('<span class="passed">✓</span>');
          }

          // add the button and the collapse action
          h4.prepend($('<button>').addClass('toggle').html('–'));
          $toggle = h4.find('.toggle');
          $toggle.click(function() {
            var $this = $(this);
            if ($this.html() == '+') {
              $this.html('–').closest('ul').children('li, ul').show();
            } else {
              $this.html('+').closest('ul').children('li, ul').hide();
            }
          });

          $toggle.click();
        }
    });
  });
})();
</script>
