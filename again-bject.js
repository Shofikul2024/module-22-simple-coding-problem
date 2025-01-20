const person ={
    name : 'shofiukl'  ,
    address : 'jamalpur'  ,
    
    }
    
    function createEmail ( info)  {
    
    const result =info.name +'@'  + info.address +'.com'
    
    return result 
    }
     console.log ( createEmail (person ))
    