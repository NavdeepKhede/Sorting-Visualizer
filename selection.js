/*
    *****************************
    DONE BY : NAVDEEP KHEDE
    E-MAIL  : nayankhede@fmail.com
    *****************************
*/

function Selection()
{
    c_delay = 0;
    var i, j, temp, min, n=ar_size;
    for(i=0; i<n-1; i++)
    {
        div_update(divs[i], div_sizes[i], "red");
        min = i;
        for(j=i+1; j<n; j++)
        {
            div_update(divs[j], div_sizes[j], "yellow");

            if(div_sizes[j]<div_sizes[min])
            {
                if(min!=i)
                {
                    div_update(divs[min], div_sizes[min], "blue");
                }
                min = j;
                div_update(divs[min], div_sizes[min], "red");
            }
            else
                div_update(divs[j], div_sizes[j], "blue");
        }

        if(min!=i)
            {
                temp = div_sizes[min];
                div_sizes[min] = div_sizes[i];
                div_sizes[i] = temp;

                div_update(divs[min], div_sizes[min], "red");
                div_update(divs[i], div_sizes[i], "red");
                div_update(divs[min], div_sizes[min], "blue");
            }
        div_update(divs[i], div_sizes[i], "green");
    }
    div_update(divs[i], div_sizes[i], "green");

    enable_buttons();
}

/*
    *****************************
    DONE BY : NAVDEEP KHEDE
    E-MAIL  : nayankhede@fmail.com
    *****************************
*/