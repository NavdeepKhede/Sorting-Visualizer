/*
    *****************************
    DONE BY : NAVDEEP KHEDE
    E-MAIL  : nayankhede@fmail.com
    *****************************
*/

var butts_algos = document.querySelectorAll(".algos button");
var inp_as = document.getElementById("slider"), ar_size = inp_as.value;
var gen_ar = document.getElementById("array");
var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
var sizeLabel = document.querySelector(".range-slider_value");
var speed = document.querySelectorAll("#dot-slider input");


gen_ar.addEventListener("click",generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0; i<ar_size; i++)
    {
        div_sizes[i]=Math.floor(Math.random()*(100-5))+5;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color: #6B48FF; width:" + (100/ar_size-(1*margin_size)) + "%; height:" + (div_sizes[i]) + "%; display: inline-block; border-radius:0px 0px 15px 15px;  transition: 0.7s all ease-in-out;";
    }
}

function update_array_size()
{
    ar_size=inp_as.value;
    sizeLabel.innerHTML = "Length : " + ar_size;
    generate_array();
}

window.onload= update_array_size();

for(let i=0; i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click", runalgo);
}

function disable_buttons()
{
    for(var i=0; i<butts_algos.length;i++)
    {
        butts_algos[i].disabled = true;
        gen_ar.disabled = true;
        inp_as.disabled = true;
    }
}

function runalgo()
{
    disable_buttons();
    switch(this.innerHTML)
    {
        case "<b>Bubble Sort</b>": Bubble();
                            break;
        case "<b>Selection Sort</b>": Selection();
                            break;
        case "<b>Insertion Sort</b>": Insertion();
                            break;
        case "<b>Merge Sort</b>": Merge();
                            break;
        case "<b>Quick Sort</b>": Quick();
                            break;
    }
}



/*
    *****************************
    DONE BY : NAVDEEP KHEDE
    E-MAIL  : nayankhede@fmail.com
    *****************************
*/
