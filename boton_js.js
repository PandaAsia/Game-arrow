const btn_up =  document.getElementById("BTN_Arriba"),
      btn_rigth = document.getElementById("BTN_Derecha"),
      btn_left = document.getElementById("BTN_Izquierda"),
      btn_down = document.getElementById("BTN_Abajo");
const flecha_img = document.getElementById("flecha_color");

var random_number=Math.floor(Math.random()*4);
var random_flecha_temp=0;
var Intentos=0;

function random_flecha1(){
    try{
        if(Intentos>=30){
            console.log("se termino");
        }else if(random_flecha_temp==random_number){
            random_number=Math.floor(Math.random()*4);
            random_flecha1();
        }else{
            switch(random_number){
                case 0:
                    flecha_img.style.transform="rotate(-90deg)";
                    break;
                case 1:
                    flecha_img.style.transform="rotate(0deg)";
                    break;
                case 2:
                    flecha_img.style.transform="rotate(180deg)";
                    break;
                case 3:
                    flecha_img.style.transform="rotate(90deg)";
                    break;
            }
            random_flecha_temp=random_number;
            Intentos++;
        }
    }catch(error){
        console.error(error);
    }
}
random_flecha1();

function random_flecha2(){
    try{
        console.log("miua");
    }catch(error){
        console.log(error);
    }
}

btn_up.onclick=function(){
    if(random_number==0){
        console.log("correcto");
    }else{
        console.log("Incorrecto");
    }
    random_flecha1();
    console.log(random_number);
}

btn_rigth.onclick=function(){
    if(random_number==1){
        console.log("correcto");
    }else{
        console.log("Incorrecto");
    }
    random_flecha1();
    console.log(random_number);
}

btn_left.onclick=function(){
    if(random_number==2){
        console.log("correcto");
    }else{
        console.log("Incorrecto");
    }
    random_flecha1();
    console.log(random_number);
}

btn_down.onclick=function(){
    if(random_number==3){
        console.log("correcto");
    }else{
        console.log("Incorrecto");
    }
    random_flecha1();
    console.log(random_number);
}