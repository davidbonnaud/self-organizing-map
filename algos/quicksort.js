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

    swap(items, leftIndex, rightIndex){
        let temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
        this.steps++;
    }

    partition(items, left, right) {
        let pivot   = items[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                this.swap(items, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }
    
    quickSort(items, left, right) {
        let index;
        if (items.length > 1 && this.curStep > this.steps) {
            index = this.partition(items, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                this.quickSort(items, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                this.quickSort(items, index, right);
            }
        }
        return items;
    }
}