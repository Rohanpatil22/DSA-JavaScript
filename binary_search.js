
let arr=[1, 3, 5, 7, 8, 9,11,13,17];

let search_val=13;

function findVal()
{
    let start=0
    let end=arr.length-1;
   

    while(start<=end)
    {
        let mid=Math.floor((start+end)/2);

        if(arr[mid]==search_val)
        {
            return 1;
        }
        else if(arr[mid]<search_val){

            start=mid+1;
        }
        else{
            end=mid-1;
        }

    }
 
    return 0;

    // for(let x=0;x<arr.length;x++)
    // {
    //     if(search_val==arr[x])
    //     {
    //         console.log(Date.now());
    //         return 1
    //     }
    // }
    // console.log(Date.now());
    // return 0;
}


let search_result=findVal();

console.log(search_result);