class Quicksort {
    constructor(str){
        this.steps = 0;
        this.curStep = 1;
        this.curArr = str;
        this.finished = false;
    }

    iterate() {
        console.log(this.curArr);
        if(this.finished){
            return drawAlgoLetters("Done: " + this.steps);
        }

        
        this.curArr = this.quickSort(this.curArr, 0, this.curArr.length - 1);
        return this.curArr;
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
        let index;
        if (arr.length > 1) {
            index = this.partition(arr, left, right); //index returned from partition
            if(this.curStep){
                if (left < index - 1) { //more elements on the left side of the pivot
                    this.quickSort(arr, left, index - 1);
                }
                if (index < right) { //more elements on the right side of the pivot
                    this.quickSort(arr, index, right);
                }
            }
        }
        return arr;
    }
}