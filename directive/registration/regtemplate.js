(function(){
  'use strict';
  angular.module('adminApp')
    .directive('regDir',regdirective)
    .factory('adduserFactory', function(){
      let userlist;
      return {
        save: function(userList){
          console.log(userList);
          localStorage.setItem('userList', JSON.stringify(userList));
        },
        get: get
      }
      function get() {
        userlist= JSON.parse(localStorage.getItem('userList'));
        if(userlist) {
          return userlist;
        } else {
          return [];
        }
      }
    })
    regdirective.$inject=['adduserFactory', '$location','editDataFactory'];

    function  regdirective(adduserFactory, $location,editDataFactory){
      return {
        link:link,
        restrict: 'EA',
       templateUrl:'directive/registration/regtemplate.html'
    }
    function link(scope, element, attr){
      scope.userlist= adduserFactory.get();
        function init(){
      scope.userDetails= {
        name:"",
        mobile:"",
        gender:"",
        email:"",
        password:"",
        address:""
      }}
      let edit = editDataFactory.get('user');
      if(edit) {
        scope.userlist = edit.userlist;
        scope.userDetails = scope.userlist[edit.id];
      }
      scope.adduserSave = function(){

        if(!edit) {
          scope.userlist.push(scope.userDetails);
        }

        adduserFactory.save(scope.userlist);
          init();
        $location.path("/userhome");


      }

      scope.back= function (){
        $location.path("/userhome");

      }


    }
    };

    
})();
// var st = 1;
// function validation(input, val)
// {
//  if(val==true)
//     {
//       st *= 1;
//       console.log(val);
//       input.parentElement.setAttribute("class", "form-group has-success");
  
//     }
//   else {
//     st *= 0;
//       console.log(val);
//     input.parentElement.setAttribute("class", "form-group has-error");
//   }
// }
// function getName(){
//   var input= document.getElementById("name");
//   let str=input.value;
//   let reg=/^([a-zaA-Z]+)(\s+)([a-zA-Z]+)\b/;
//   var val=reg.test(str);
//   var result=str.match(reg);
//  validation(input, val);
//   return val;
  
// }
//  function getNumber(){
//   var input= document.getElementById("number");
//   let str=input.value;
//   let reg=/^[0-9]{10}\b/;
//   var val=reg.test(str);
//   var result=str.match(reg);
//  validation(input,val);
//     return val;
// }
//  function getEmail(){
//   var input= document.getElementById("email");
//   let str=input.value;
//   let reg=/^([a-z]+)[\.]?\w+@[a-z]+\.[a-z]{2,3}\b/;
//   var val=reg.test(str);
//   var result=str.match(reg);
//  validation(input,val);
//     return val;
// }
//  function getPassword(input= document.getElementById("pwd")){
//   // console.log(input);
//   let str=input.value;
//   let reg=/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@!*#$.%]).{6,20})/i;
//   // console.log(reg.test(str));
//   //  console.log(str.match(reg));
//   var val=reg.test(str);
//   var result=str.match(reg);
//   validation(input,val);
//    return str;
//  }
//  function confirmPassword(){
//    var val;
//    var res=getPassword();   
//   var input= document.getElementById("cnpwd");
//     let str=input.value;
//    // console.log(str);

//    if(res == str && (input.value !=""))
//   {
//     val = true;
//     getPassword(input);
//   }
//   else{
//     val = false;
//     validation(input,false);
//   }  
//     return val;
//  }



// document.getElementById("submit").addEventListener("click", function(event) {
//   event.preventDefault();
//   validateForm();
//   // address();
// })

// function address()
// { 
// var input = document.forms["form"]["address"];
//   console.log(input.value);
//     if (input.value == "") {
//         // alert("Adress must be filled out");
//     validation(input,false);
//         return false;
//     } else{
//     validation(input,true);
//       return true;
//   }
// }
// function validateForm(){  
//   // var form=document.getElementById("form");
//   var flag = true;
//   flag *= getName();
//   flag *= getNumber();
//   flag *= getEmail();
//   getPassword();
//   flag *= confirmPassword();
//    flag *= address();
//   console.log("falg : "+flag);
//   if(flag) {
//       $("#myModal").modal("show");
//   }
// }
