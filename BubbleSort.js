const arr = [1,10,50,40,90,1,225,2,222]

function BubbleSort (arr){
    let swapped = false
    do  {
        swapped = false
        for (let i = 0; i<arr.length ;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
                swapped = true
                console.log(arr[i])
            }
        }
    }while(swapped)
}

BubbleSort(arr)
console.log(arr)