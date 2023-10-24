$(document).ready(function(){
    $("#signup-form").validate({
        rules:{

        fname:{
            required:true,
            minlength:4,
            maxlength:6
        },
        sname:{
            required:true,
            minlength:4
        },
        emailAddress:{
            required:true,
            email:true
        },
        password:{
            required:true,
            minlength:8

        },
        day:{
            required:true
        },
        gender:{
            required:true
        }
        },
        messages:{
           // fname:"enter first name"
           fname:{ 
            required:"enter first name",
           minlength:"atleast 4 characters"
           
        },
        sname:{
            required:"enter sure name",
           //minlength:"atleast 4 characters"

        }
    },
    
    

        

       
    
    })
})