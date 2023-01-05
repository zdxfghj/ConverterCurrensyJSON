const inputRub= document.querySelector('#rub'),
      inputByn= document.querySelector('#byn'),
      inputUsd= document.querySelector('#usd');

   inputByn.addEventListener('input', ()=>{
      const request = new XMLHttpRequest();
      request.open("GET",'js/current.json','charset=utf-8');
      request.send();

      request.addEventListener("load",()=>{
         if(request.status === 200){
            console.log(request.response)
            const data = JSON.parse(request.response)
            inputUsd.value = (+inputByn.value / data.current.usd).toFixed(2);
            inputRub.value = ((+inputByn.value / data.current.rus)*1000).toFixed(2);
         }else{
            console.log("Error")
         }
      });
   });

   
