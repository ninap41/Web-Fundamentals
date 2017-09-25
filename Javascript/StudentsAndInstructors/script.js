

    //STUDENTS and instructors//

    var studentandteachers = function() {
      
      var users = { //<<<<Object
        'Students': [ {firstname:  'Michael', lastname : 'Jordan'},
                      {firstname : 'John', lastname : 'Rosales'},
                      {firstname : 'Mark', lastname : 'Guillen'},
                      {firstname : 'KB', lastname : 'Tonel'}],
        'Instructors': [
                      {first_name : 'Michael', last_name : 'Choi'},
                      {first_name : 'Martin', last_name : 'Puryear'}
                     ]
           
      }
        for (var Students in users){
          console.log (users[Students]);
        }
        for (var Instructors in users){
          console.log (users[Students]);
        }
      }
      var test = studentandteachers();
      console.log(test);