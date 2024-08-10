
let arr1=[1,2,3,4,5,6]


function rotateArr(arr,k)
{
    let size= arr.length;

    if(k > size)
    {
        k= k % size;
    }

    // let rotation_arr=arr.splice(size-k,size);

    // console.log(rotation_arr);

    //  arr.unshift(...rotation_arr);
    //  return arr;

    reversearr(arr,0,arr.length-1);
    reversearr(arr,0,k-1);
    reversearr(arr,k,arr.length-1);
}

let arr2=rotateArr(arr1,4);
console.log(arr2);


function reversearr(arr,left,right){

    while(left < right)
    {
        let temp=arr[left];
        arr[left]=arr[right];
        arr[right]=temp;

        left++;
        right--;
    }

    console.log(arr);
    return arr;

}