/*
    *****************************
    DONE BY : NAVDEEP KHEDE
    E-MAIL  : nayankhede@fmail.com
    *****************************
*/

function Insertion()
{
    c_delay = 0;
    let i, key, j, n=ar_size;
    for(i=1; i<n; i++)
    {
        div_update(divs[i], div_sizes[i], "yellow");
        key = div_sizes[i];
        j = i-1;
        while(j>=0 && div_sizes[j]>key)
        {
            div_update(divs[j], div_sizes[j], "red");
            div_update(divs[j+1], div_sizes[j+1], "red");
            div_sizes[j+1] = div_sizes[j];
            div_update(divs[j], div_sizes[j], "red");
            div_update(divs[j+1], div_sizes[j+1], "red");
            if(j==(i-1))
                div_update(divs[j+1], div_sizes[j+1], "yellow");
            else
                div_update(divs[j+1], div_sizes[j+1], "blue");
            j--; 
        }
    
        div_sizes[j+1] = key;
        
        for(let t = 0; t<i; t++)
        {
            div_update(divs[t], div_sizes[t], "green");
        }    
    }
    div_update(divs[i-1], div_sizes[i-1], "green");
    enable_buttons();
}

/*
    *****************************
    DONE BY : NAVDEEP KHEDE
    E-MAIL  : nayankhede@fmail.com
    *****************************
*/