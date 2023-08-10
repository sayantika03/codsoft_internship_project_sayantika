let String="";
let buttons=document.querySelectorAll('button');
for (button of buttons){
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            String=eval(String);
            document.querySelector('input').value=String;
        }
        else if(e.target.innerHTML =='AC'){
            String="";
            document.querySelector('input').value=String;
        }
        else if(e.target.innerHTML=='DEL'){
            String=document.querySelector('input').value;
            String=String.substr(0,String.length-1);
            document.querySelector('input').value=String;

        }
        else{
            console.log(e.target)
            String=String +e.target.innerHTML;
            document.querySelector('input').value=String;
        }
    })
}