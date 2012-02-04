
(function (win) {
  var Voluble = win.Voluble = win.Voluble || {};
  var Backbone = win.Backbone, templates = Voluble.Templater;
  templates.preCache('userHeader');  

  Voluble.UserHeader = Backbone.View.extend({
    'id': 'userHeader',
    'el': $('.navigation'),
    'initialize': function (user) {
      console.log('user initia');
      this.user = user.model;

      this.user.bind('change', this.render, this);
      this.user.bind('reset', this.render, this);
      this.user.bind('destroy', this.close, this);
      this.render();
    },
    'render': function (eventName) {
      var user = this;
      templates.render('userHeader', function (template) {
        $(user.el).html(template({'user':user.user.toJSON()}));
      });
      return this;
    },
    'close': function () {
      $(this.el).unbind();
      $(this.el).empty();
    }
  });
})(this);

