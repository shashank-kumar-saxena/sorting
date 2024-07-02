class InsertionSort {
    arr= [4,2,6,4,44,4,8,4,32,4,2,23,8]
    constructor() {
        this.sort();
        this.display();
    }
    sort() {
        for(let i=1;i<this.arr.length;i++) {
            let key = this.arr[i];
            let j=i-1;
            while(j>=0 && this.arr[j]>key) {
                this.arr[j+1] = this.arr[j];
                j--;
            }
            this.arr[j+1] = key;
        }
    }
    display() {
        console.log(this.arr);
    }
}

(()=>{
    new InsertionSort();
})()