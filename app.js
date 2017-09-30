// create our angular module so we can inject firebase
angular.module('scheduleApp', ['firebase'])

//create our main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {
    // let's connect to firebase --> note: this is my firebase project you'll want to add your firebase link and then /days to the end
    var ref = new Firebase("https://my-first-project-8e440.firebaseio.com/days");
    var fb = $firebase(ref);
    
    // sync as object
    var syncObject = fb.$asObject();
    
    // three way data binding
    syncObject.$bindTo($scope, 'days');
});
  // function to set the default data
  $scope.reset = function() {    

    fb.$set({
      monday: {
        name: 'Monday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0100: [
              time: '9:00am',
              booked: false
          ]
          0110: {
            time: '11:00am',
            booked: false
          },
          0120: {
              time: '12:00pm',
              booked: false,
          }
        }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0100: [
              time: '9:00am',
              booked: false
          ]
          0110: {
            time: '11:00am',
            booked: false
          },
          0120: {
              time: '12:00pm',
              booked: false,
          }
        }
      }, 
    wednesday: {
        name: 'Wednesday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0100: [
              time: '9:00am',
              booked: false
          ]
          0110: {
            time: '11:00am',
            booked: false
          },
          0120: {
              time: '12:00pm',
              booked: false,
          }
        }
      },
      thursday: {
        name: 'Thursday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0100: [
              time: '9:00am',
              booked: false
          ]
          0110: {
            time: '11:00am',
            booked: false
          },
          0120: {
              time: '12:00pm',
              booked: false,
          }
        }
      }
    }); 

  };

});
