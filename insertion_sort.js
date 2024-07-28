let arr=[15, 11, 13, 12, 5, 6 ]; 

for(let i=1;i<arr.length;i++)
{
    let key=arr[i];

    let j=i-1;

    while(j>=0 && arr[j]>key)
    {
        arr[j+1]=arr[j];
        j=j-1;
    }

    j=j+1;
    arr[j]=key;
}

console.log(arr);

