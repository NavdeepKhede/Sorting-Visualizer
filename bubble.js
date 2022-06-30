/*
    *****************************
    DONE BY : NAVDEEP KHEDE
    E-MAIL  : nayankhede@fmail.com
    *****************************
*/

function Bubble()
{
    var i, j, temp;
    var n = ar_size;
    c_delay = 0;
    for(i=0; i<n-1;i++)
    {
        for(j=0; j<n-i-1; j++)
        {
            div_update(divs[j], div_sizes[j], "yellow");
            if(div_sizes[j] > div_sizes[j+1])
            {
                div_update(divs[j], div_sizes[j], "red");
                div_update(divs[j+1], div_sizes[j+1], "red");
                
                temp = div_sizes[j];
                div_sizes[j] = div_sizes[j+1];
                div_sizes[j+1] = temp;
                
                div_update(divs[j], div_sizes[j], "red");
                div_update(divs[j+1], div_sizes[j+1], "red");
            }
            div_update(divs[j], div_sizes[j], "blue");
        }
        div_update(divs[j], div_sizes[j], "green");
    }
    div_update(divs[0], div_sizes[0], "green");

    enable_buttons();
}

/*
    *****************************
    DONE BY : NAVDEEP KHEDE
    E-MAIL  : nayankhede@fmail.com
    *****************************
*/