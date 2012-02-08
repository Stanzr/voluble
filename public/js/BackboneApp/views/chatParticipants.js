(function (win) {
  var Voluble = win.Voluble = win.Voluble || {};
  var Backbone = win.Backbone, templates = Voluble.Templater;
  templates.preCache('chatParticipant');  

  Voluble.ChatParticipantsSingleView = Backbone.View.extend({
    'tagName': "li",
    'initialize': function () {
      this.model.bind("change", this.render, this);
      this.model.bind("destroy", this.close, this);
    },
    'render': function () {
      var self = this;
      var model = this.model.toJSON();
      templates.render('chatParticipant', function (template) {
        $(self.el).attr('id',model.id);
        $(self.el).html(template({
          'user': model
        }));
      });
      return this;
    },
    'close': function () {
      $(this.el).unbind();
      $(this.el).remove();
    }
  });
})(this);
