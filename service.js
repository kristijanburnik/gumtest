app.service('GUM',function(){
  
  return {
    test:function( contextIdentifier ){
      return getUserMedia(
        { audio:true, video:true }, 
        function(){ console.info("[getUserMedia callback] Success callback called in context", contextIdentifier); } , 
        function(){ console.info("[getUserMedia callback] Error callback called in context", contextIdentifier);  } 
       );
    
    }
  
  }

});
