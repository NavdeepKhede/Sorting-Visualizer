/*
    *****************************
    DONE BY : NAVDEEP KHEDE
    E-MAIL  : nayankhede@fmail.com
    *****************************
*/


function Quick()
{
    c_delay=0;

    quickSort(0,ar_size-1);

    enable_buttons();
}

function quickPartition(s, e)
{
    var i = s + 1;
    var piv = div_sizes[s] ;//make the first element as pivot element.
    div_update(divs[s],div_sizes[s],"yellow");//Color update

        for(var j =s + 1; j <= e ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[ j ] < piv)
            {
                div_update(divs[j],div_sizes[j],"yellow");//Color update

                div_update(divs[i],div_sizes[i],"red");//Color update
                div_update(divs[j],div_sizes[j],"red");//Color update

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                div_update(divs[i],div_sizes[i],"red");//Height update
                div_update(divs[j],div_sizes[j],"red");//Height update

                div_update(divs[i],div_sizes[i],"blue");//Height update
                div_update(divs[j],div_sizes[j],"blue");//Height update

                i += 1;
            }
    }
    div_update(divs[s],div_sizes[s],"red");//Color update
    div_update(divs[i-1],div_sizes[i-1],"red");//Color update
    
    var temp=div_sizes[s];//put the pivot element in its proper place.
    div_sizes[s]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update(divs[s],div_sizes[s],"red");//Height update
    div_update(divs[i-1],div_sizes[i-1],"red");//Height update

    for(var t=s;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],"green");//Color update
    }

    return i-1;
    
    //return the position of the pivot
    // var pivot = div_sizes[s];
    // div_update(divs[s],div_sizes[s],"yellow");

    // while(s<=e)
    // {
    //     while(div_sizes[s]<pivot)
    //     {
    //         div_update(divs[s], div_sizes[s], "red");
    //         s++;
    //         div_update(divs[s], div_sizes[s], "blue");
    //     }
    //     div_update(divs[s], div_sizes[s], "red");
    //     while(div_sizes[e]>pivot)
    //     {
    //         div_update(divs[e], div_sizes[e], "red");
    //         e--;
    //         div_update(divs[e], div_sizes[e], "blue");
    //     }
    //     div_update(divs[e], div_sizes[e], "red");
    //     if(s<=e)
    //     {
    //         var temp = div_sizes[s];
    //         div_sizes[s] = div_sizes[e];
    //         div_sizes[e] = temp;
    //         div_update(divs[s], div_sizes[s], "red");
    //         div_update(divs[e], div_sizes[e], "red");
    //         s++;
    //         e--;
    //     }
    //     div_update(divs[s],div_sizes[s],"yellow");
    // }

    // for(var t=0; t<=s; t++)
    // {
    //     div_update(divs[t], div_sizes[t], "green");
    // }

    // return s;
}

function quickSort(s, e)
{
    if( s < e )
    {
        //stores the position of pivot element
        var piv_pos = quickPartition (s, e ) ;     
        quickSort (s, piv_pos -1);//sorts the left side of pivot.
        quickSort (piv_pos +1, e) ;//sorts the right side of pivot.
    }

    // if(ar_size>1)
    // {
    //     var pivPos = quickPartition(s, e);
    //     if(s<pivPos-1) quickSort(s, pivPos-1);
    //     if(pivPos<e) quickSort(pivPos, e);
    // }
}

/*
    *****************************
    DONE BY : NAVDEEP KHEDE
    E-MAIL  : nayankhede@fmail.com
    *****************************
*/