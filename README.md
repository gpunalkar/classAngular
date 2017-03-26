# classAngular
Angular JS Class Notes:

# Controllers
Contorller are use to setup the initial $scope of object & behevior of object.

Assigs the value to variable(property).

Do not use controlles for:

1. Manipulating the Dom.
    a. Contorller should contain only application (busisness) logic. 
    b. Putiing any presentation logic in cotroller affects its testability
    c. Angular Js had data bindings & directives for DOM manipulation. 
2. Formatting input
    a. Angular has form controlls for formattting inputs
3. Filtering output
    a. Angular JS had filters for fitering output
4. Share code / state across controllers (Service)
    a. Angular JS had services to share the code / state across controllers
5. Manage life cycle of other components
    a. Angular JS does it internally.(Angular JS intialize internally othe componets)

# Scope Inheritence
   $scope variable are shared to the nested controllers
   this variable ate not shared to the nested controllers

# Service
1. Service as Service
2. Factory as Service
3. Provider as Service

a. app.run - one time execute code
b. app.config - define the route 

http
http.get
http.post

some service retuns the functions or objects