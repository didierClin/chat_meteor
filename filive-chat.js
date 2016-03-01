Messages = new Mongo.Collection('messages');

if (Meteor.isClient) {
  // counter starts at 0
  // Session.setDefault('counter', 0);

  Template.messages.helpers({
    messages: function () {
      // return Messages.find({message: 'Hello World2!'});
      return Messages.find({});
    }
  });

  Template.messages.events({
    'keypress textarea': function(e, instance) {
      if (e.keyCode == 13) { // enter key pressed
        var value = instance.find('textarea').value;
        instance.find('textarea').value = '';

        Messages.insert({
          message: value,
          timestamp: new Date(),
          // user: Meteor.user_id()
        });
      }
    }

  })

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
