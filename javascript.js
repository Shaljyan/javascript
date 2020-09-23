function rand(){
	return Math.floor(Math.random()*4)
	}
var j1=Math.floor(Math.random()*4);
 document.getElementById('div1').innerHTML=j1;

 var j2=Math.floor(Math.random()*4);
  document.getElementById('div2').innerHTML=j2;
  
  var j3=Math.floor(Math.random()*4);
   document.getElementById('div3').innerHTML=j3;

   var j4=Math.floor(Math.random()*4);
    document.getElementById('div4').innerHTML=j4;

    var j5=Math.floor(Math.random()*4);
     document.getElementById('div5').innerHTML=j5;

     var j6=Math.floor(Math.random()*4);
      document.getElementById('div6').innerHTML=j6;
  
      var j7=Math.floor(Math.random()*4);
       document.getElementById('div7').innerHTML=j7;
  
       var j8=Math.floor(Math.random()*4);
        document.getElementById('div8').innerHTML=j8;
  
        var j9=Math.floor(Math.random()*4);
         document.getElementById('div9').innerHTML=j9;
  

  
  function f1(){
   div1.innerHTML=rand()
    div2.innerHTML=rand()
     div3.innerHTML=rand()
      div4.innerHTML=rand()
       div5.innerHTML=rand()
      div6.innerHTML=rand()
     div7.innerHTML=rand()
    div8.innerHTML=rand()
   div9.innerHTML=rand()

  
  
   if (div1.innerHTML==div2.innerHTML){
  div1.style.background ="lime"
  }
   else{
   div1.style.background="blue"
   }
   
   
   if (div2.innerHTML==div3.innerHTML){
  div2.style.background="lime"
  }
   else{
   div2.style.background="blue"
   }
   
    if (div3.innerHTML==div1.innerHTML){
  div3.style.background="lime"
  }
   else{
   div3.style.background="blue"
   }
   
   
  
  if (div4.innerHTML==div5.innerHTML){
  div4.style.background="lime"
  }
   else{
   div4.style.background="red"
   }
   
   
  if (div5.innerHTML==div6.innerHTML){
  div5.style.background="lime"
  }
  else{
  div5.style.background="red"
  }
 
 
  if (div6.innerHTML==div4.innerHTML){
  div6.style.background="lime"
  }
  else{
  div6.style.background="red"
  }
  
  
  if (div7.innerHTML==div8.innerHTML){
  div7.style.background="lime"
  }
  else{
  div7.style.background="yellow"
  }
  
  
  if (div8.innerHTML==div9.innerHTML){
  div8.style.background="lime"
  }
  else{
  div8.style.background="yellow"
  }
  
  
  if (div9.innerHTML==div7.innerHTML){
  div9.style.background="lime"
  }
  else{
  div9.style.background="yellow"
  }
 
  
  
}
 