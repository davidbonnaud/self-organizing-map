class Quicksort {
    constructor(str){
        this.steps = 0;
        this.curStep = 0;
        this.curArr = str;
        this.finished = false;
    }

    iterate() {
        console.log(this.curArr);
        if(this.finished){
            return drawAlgoLetters("Done: " + this.steps);
        }

        this.curStep++;
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
        let i = left;
        let j = right;
        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            if (i <= j) {
                this.swap(arr, i, j); //sawpping two elements
                i++;
                j--;
                this.steps++;
            }
        }
        return i;
    }
    
    quickSort(arr, left, right) {
        let index;
        if (arr.length > 1) {
            index = this.partition(arr, left, right); //index returned from partition
            if(this.curStep > this.steps){
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