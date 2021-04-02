class Quicksort {
    constructor(){
        this.curStep = 1;
        this.curArr = [];
        this.finished = false;
    }

    swap(arr, leftPtr, rightPtr){
        let temp = arr[leftPtr];
        arr[leftPtr] = arr[rightPtr];
        arr[rightPtr] = temp;
    }

    partition(arr, left, right) {
        let pivot   = arr[Math.floor((right + left) / 2)];
        let first = left;
        let second = right;

        while (first <= second) {
            while (arr[first] < pivot) {
                first++;
            }
            while (arr[second] > pivot) {
                second--;
            }
            if (first <= second) {
                this.swap(arr, first, second);
                first++;
                second--;
                this.curStep++;
                drawAlgoChars(arr,this.curStep, 0);
            }
        }
        return first;
    }
    
    quickSort(arr, left, right) {
        this.curArr = arr;
        let index;
        if (this.curArr.length > 1) {
            index = this.partition(this.curArr, left, right); //index returned from partition
            if(this.curStep){
                if (left < index - 1) { //more elements on the left side of the pivot
                    this.quickSort(this.curArr, left, index - 1);
                }
                if (index < right) { //more elements on the right side of the pivot
                    this.quickSort(this.curArr, index, right);
                }
            }
        }
        this.finished = true;
        return this.curArr;
    }
}