

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

      ///// Other way

      var users = {
        'Students': [ 
            {first_name:  'Michael', last_name : 'Jordan'},
            {first_name : 'John', last_name : 'Rosales'},
            {first_name : 'Mark', last_name : 'Guillen'},
            {first_name : 'KB', last_name : 'Tonel'}
         ],
        'Instructors': [
            {first_name : 'Michael', last_name : 'Choi'},
            {first_name : 'Martin', last_name : 'Puryear'}
         ]
        }
       function printThings(){
         for (var group in users) {
           console.log(group)
           for (var i = 0; i < users[group].length; i++) { //users["students"] -> users.students
             var fullname = users[group][i].first_name + users[group].last_name
             console.log(`${i} - ${users[group][i].first_name} ${users[group][i].last_name} - ${fullname.length}`)
           }
         }
       }
       printThings();