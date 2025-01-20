const person ={
    emailFirstName : 'islamshofi942'  ,
    lastName: 'gmail'  ,
    
    }
    
    function createEmail ( info)  {
    
    const result =info.emailFirstName +'@'  + info.lastName +'.com'
    
    return result 
    }
     console.log ( createEmail (person ))
    