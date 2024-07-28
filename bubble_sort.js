let arr=[5,1,4,2,8,12,3,6,7,14,0];

for(let i=0;i<arr.length-1;i++)
{
    let check=false;
    for(j=0;j<arr.length-i-1;j++)
    {

        if(arr[j]>arr[j+1])
        {
            let temp=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;
            check=true;
        }

    }

    console.log(arr);
    if(!check)
    {
        return;
    }
}

console.log("final",arr);