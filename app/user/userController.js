(function(){
    angular.module('angularKT')
        .controller('userController',[userController]);
    function userController()
    {
        var ref = this;
        ref.model = {};
        ref.countries = [{
            name : "India",
            shortname : "IN"
        }, {
            name : "United States",
            shortname : "US"
        }]
        ref.submit = function()
        {
            //send to the server
        }
        ref.calculateAge = function()
        {
            var birthday = ref.model.dob;
            var ageDifMs = Date.now() - birthday.getTime();
            var ageDate = new Date(ageDifMs);
            var age = Math.abs(ageDate.getUTCFullYear() - 1970);
            ref.model.age = age;
        }
    }
})();