// Bubble Sort

// biggest value placed on the top

const arr = [100,12,92,10,24,56,34]


function sortByBubbleSort(arr){

    for(let i = 0; i < arr.length -1;i++)
    {

        for(j=0; j < arr.length;j++)
        {
            if(arr[j]>arr[j+1])
            {
                temp = arr[j+1]
                arr[j+1] = arr[j];
                arr[j]= temp;
            }
        }
    }

    return arr;

}

const sortedArr = sortByBubbleSort(arr)
console.log(`Sorted Array ${sortedArr}`)