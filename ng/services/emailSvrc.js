var app = angular.module('app');

app.service('emailSvrc',function($http) {
    
    this.sendEmail = function(name,email,message){
        
        return $http.post('api/email.php',{
            'name': name,
            'email': email,
            'message': message 
        });

    }
})