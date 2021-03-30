class Mergesort {
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
        this.curArr = this.mergeSort(this.curArr);
        return this.curArr;
    }

    merge(left, right) {
        let arr = []
        // Break out of loop if any one of the array gets empty
        while (left.length && right.length) {
            // Pick the smaller among the smallest element of left and right sub arrays 
            if (left[0] < right[0]) {
                arr.push(left.shift())  
            } else {
                arr.push(right.shift()) 
            }
        }
        
        // Concatenating the leftover elements
        // (in case we didn't go through the entire left or right array)
        return [ ...arr, ...left, ...right ]
    }
    
    mergeSort(array) {
      const half = array.length / 2
      
      // Base case or terminating case
      if(array.length < 2){
        return array 
      }
      
      const left = array.splice(0, half)
      return merge(mergeSort(left),mergeSort(array))
    }
    
}