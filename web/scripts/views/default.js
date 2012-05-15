define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){

    var DefaultView = Backbone.View.extend({
        el: $('.well'),

        render: function() {
            this.$el.html('Hello.');
        }
    });

    return new DefaultView();
});