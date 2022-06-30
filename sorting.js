/*
    *****************************
    DONE BY : NAVDEEP KHEDE
    E-MAIL  : nayankhede@fmail.com
    *****************************
*/

var delay_time = 1000/(Math.floor(ar_size/10));
var c_delay = 0;
var speed_inp = 0;

for(let i=0; i<speed.length;i++)
{
    speed[i].addEventListener("click", speedModule);
}

function speedModule()
{
    speed_inp = this.value;
    delay_time = 10000/(Math.floor(ar_size/10)*speed_inp);
}

function div_update(cont, height, color)
{
    window.setTimeout(function(){
        cont.style = "margin: 0%"+ margin_size + "%; width:" + (100/ar_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + "; border-radius:0px 0px 15px 15px;  transition: 0.6s all ease-in-out;";
    } , c_delay+=delay_time);
    
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0; i<butts_algos.length; i++)
        {
            butts_algos[i].disabled = false;
            gen_ar.disabled = false;
            inp_as.disabled = false;
        }
    }, c_delay+=delay_time);
}

/*
    *****************************
    DONE BY : NAVDEEP KHEDE
    E-MAIL  : nayankhede@fmail.com
    *****************************
*/