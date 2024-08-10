let arr1=[1,2,2,3,3,4,5,5,5,6];

function removeDuplicates(arr)
{
    let i=0;

    for(let j=1;j<arr.length;j++)
    {
        if(arr[i]!=arr[j])
        {
           i++;
           arr[i]=arr[j];
        }
        
    
    }
    i++;
    arr.splice(i,arr.length-1);
    return arr;
}

console.log(removeDuplicates(arr1));