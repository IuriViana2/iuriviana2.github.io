//Definindo variáveis.
var Button = document.getElementById('definir');
var entrada = document.getElementById('dados');
var res = document.getElementById('Text');
var audio = new Audio('alarme-de-carro.mp3');

var h = document.getElementById('Hora').value;
var min = document.getElementById('Min').value;
var s = document.getElementById('Secon').value;

//Mudando .value do bottão definir a partir do evento de click.
document.getElementById('definir').addEventListener('click', function clicar(){
    if(Button.value == "Definir"){
        Button.value = "Começar"
        entrada.style.display = "block";
    }

    else if(Button.value == "Começar"){
        t = 0;
        h=  document.getElementById('Hora').value;
        min = document.getElementById('Min').value;
        s = document.getElementById('Secon').value;
        Button.value = "Pausar"
        entrada.style.display = "none"

        if(s<0||min<0||h<0){
            res.innerHTML = " Inválido!"
            Button.value = "Definir"
        }
    }
    else if(Button.value == "Pausar"){
        if(s>60||min>60||h>100){
            res.innerHTML = " Invalido!"
        }
        Button.value = "Reiniciar"
    }
    else if(Button.value == "Reiniciar"){
        Button.value = "Pausar"

    }
});

//Definindo evento que resetará o temporizador.
document.getElementById('zerar').addEventListener('click', function zerar(){

Button.value = "Definir"; //.value do Botão volta para definir, resetando o ciclo a cima.
entrada.style.display = "none";
res.innerText = "00:00:00"
});


function cro(){
    if(Button.value == "Pausar"){






    if(s==0&&min==0&&h==0){
        audio.play();
        Button.value = "Definir";
    }
    else if(s==0&&min==0&&h!=0){
    h--
    min=59;
    s=60;
    }
    else if(s==0){
        min--
        s=60
    }
        
        s--
        if(s==-1){
        s=0;
        }

    if(h==="" && min===""){
        h=0;
        min=0;
    }
    if(h===""){
        h=0;
    }
    if(min===""){
        min=0;
    }

        if(h<10&&min<10&&s<10){
            res.innerHTML = "0"+h+":"+"0"+min+":"+"0"+s;
        }
        else if(h<10&&min<10){
            res.innerHTML = "0"+h+":"+"0"+min+":"+s;
        }
        else if(h<10&&s<10){
            res.innerHTML = "0"+h+":"+min+":"+"0"+s;
        }
        else if(h<10){
            res.innerHTML = "0"+h+":"+min+":"+s;
        }
        else if(min<10&&s<10){
            res.innerHTML = h+":"+"0"+min+":"+"0"+s;
        }
        else if(min<10){
            res.innerHTML = h+":"+"0"+min+":"+s;
        }
        else if(s<10){
            res.innerHTML = h+":"+min+":"+"0"+s;
        }
        else{
            res.innerHTML = h+":"+min+":"+s;
        }
    }
}
setInterval(cro,1000);


