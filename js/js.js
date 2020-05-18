var button = document.getElementById('Iniciar');
var res = document.getElementById('Text');
var h = 0;
var min = 0;
var s = 0;
var i =0;


function clicar(){
    if(button.value == "iniciar"){
        button.value = "pausar";
    }
    
    else if(button.value = "pausar"){
        button.value = "iniciar";

    }

}

function cro(){

    if(button.value == "pausar"){

            s++
            if(s<10){
                s= "0"+s;
            }
            if(s==60){
                min++;
                s=0;
            }
            if(min==60){
                h++;
                min=0;
            }
            if(h==24){
                h=0
                zerar();

    
            }
        
            if(min<10 && h<10){
            res.innerHTML = "0"+h+":"+"0"+min+":"+s
            }
            else if(min<10){
                res.innerHTML = h+":"+"0"+min+":"+s
                }
            else if(h<10){
                    res.innerHTML = "0"+h+":"+min+":"+s       
            }
        }
}
setInterval(cro,1000);

function Zero(){
    h = 0;
    min = 0;
    s = 0;
    
    button.value = "iniciar"
    res.innerHTML = "0"+h+":"+"0"+min+":"+"0"+s;
    }
    
    






