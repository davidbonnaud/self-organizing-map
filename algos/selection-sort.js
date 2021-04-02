class Selectsort {
    constructor(){
        this.curStep = 1;
        this.curArr = [];
        this.finished = false;
    }

    selectionSort(arr) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            let min = i;
            for (let j = i + 1; j < len; j++) {
                if (arr[min] > arr[j]) {
                    min = j;
                }
            }
            if (min !== i) {
                let tmp = arr[i];
                arr[i] = arr[min];
                arr[min] = tmp;
                this.curStep++;
                drawAlgoChars(arr, this.curStep, 375);
            }
        }
        this.finished = true;
        return arr;
    }
    
}