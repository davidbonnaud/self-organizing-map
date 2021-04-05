class Mergesort {
    constructor(){
        this.curStep = 1;
        this.curArr = [];
        this.finished = false;
    }

    merge(arr1, arr2){
        let sorted = [];
      
        while (arr1.length && arr2.length) {
          if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
          else sorted.push(arr2.shift());
        };
        
        sorted = sorted.concat(arr1.slice().concat(arr2.slice()));
        this.curStep++;
        //console.log(sorted);
        drawAlgoChars(sorted, this.curStep, 175);
        return sorted;
      };

    mergeSort(arr){
        if (arr.length <= 1) return arr;
        let mid = Math.floor(arr.length / 2),
            left = this.mergeSort(arr.slice(0, mid)),
            right = this.mergeSort(arr.slice(mid));
        
        this.finished = true;
        return this.merge(left, right);
      };
    
}