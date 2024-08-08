//findSecondlargetNum

function findSecondlarget(arr){

    // let unique_arr=Array.from(new Set(arr));
    // let sorted_arr=unique_arr.sort((a,b)=> a-b); //time complexity O(nlogn)

    // console.log(sorted_arr);
    // return sorted_arr[sorted_arr.length-2];


    let largest_num=-1; 
    let second_larget=-1;

    for(let x=0;x<arr.length;x++) //time complexity O(n)
    {
        if(arr[x]>largest_num)
        {
            second_larget=largest_num;
            largest_num=arr[x];
        }
        else if(arr[x]!=largest_num && arr[x]>second_larget)
        {
            second_larget=arr[x];
        }
    }

    return second_larget;

}

let num=findSecondlarget([-3,3,14,-2,35,37,30,37,-3,8]);
console.log(num);