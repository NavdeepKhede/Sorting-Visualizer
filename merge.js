/*
    *****************************
    DONE BY : NAVDEEP KHEDE
    E-MAIL  : nayankhede@fmail.com
    *****************************
*/


function Merge()
{
    c_delay = 0;

    mergeSort(0, ar_size-1);

    enable_buttons();
}

function mergeIt(s, mid, e)
{
    var n1 = mid - s + 1;
    var n2 = e - mid;

    var arr =[];
    var L = new Array(n1);
    var R = new Array(n2);

    for(var i=0; i<n1; i++)
        L[i] = div_sizes[s+i];
    for(var i=0; i<n2; i++)
        R[i] = div_sizes[mid+1+i];

    var i=0, j=0, k=s; 
    while(i<n1 && j<n2)
    {
        if(L[i]<=R[j])
        {
            div_sizes[k]=L[i];
            div_update(divs[k], div_sizes[k], "red");
            i++;
        }
        else
        {
            div_sizes[k]=R[j];
            div_update(divs[k], div_sizes[k], "red");
            j++;
        }
        k++;
    } 
    
    while(i<n1)
    {
        div_sizes[k]= L[i];
        div_update(divs[k], div_sizes[k], "red");
        k++;
        i++;
    }

    while(j<n2)
    {
        div_sizes[k]= R[j];
        div_update(divs[k], div_sizes[k], "red");
        k++;
        j++;
    }

    for(var t=0; t<=e; t++)
    {
        div_update(divs[t], div_sizes[t], "green");
    }

}

function mergeSort(s, e)
{
    if(s<e)
    {
        var mid =  Math.floor(s + (e-s)/2) ;
        div_update(divs[mid],div_sizes[mid],"yellow");

        mergeSort(s, mid);
        mergeSort(mid+1, e);

        mergeIt(s, mid, e);
    }   
}


/*
    *****************************
    DONE BY : NAVDEEP KHEDE
    E-MAIL  : nayankhede@fmail.com
    *****************************
*/