# Angular JS Class

# Angular JS Class Notes:

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
Custom componets include as service. All  are intianted by Angular by default 

1. Service as Service (Private set of function)
2. Factory as Service  (Private set of Object)
3. Provider as Service (Angular uses internally)

a. app.run - one time execute code
b. app.config - define the route, Provider inject in app.config (ex RouteProvider)
ex:
http
http.get 
http.post 

Some service retuns the functions or objects. Service we need just defined & that will called with inculde.
Service always retunrns the functionality. 

1. Angular Services are substute . that are wired together using dependency injections.
2. Services are used to organized & share code across the appp
3. Angular Service are 
   a. lessyly intitinal (when it is injected or component depends on it[cotroller directiv])
   b. Singleton -  each componant refer is single refrence of the service. 