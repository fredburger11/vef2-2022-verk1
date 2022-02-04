import stats from 'stats-lite';

export function findVariance(input) {
    return stats.variance(input).toFixed(2);
}

export function findMax(input) { 
    

    var arr = input;
    
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

export function findMean(input) {
    return stats.mean(input).toFixed(2);
}

export function findMedian(input) {
    return stats.median(input).toFixed(2);
}

export function findMin(input) {
    var arr = input;
    var min = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

export function findstdev(input) {
    return stats.stdev(input).toFixed(4);
}

export function findSum(input) {
    return stats.sum(input).toFixed(2);
}

export function findRange(input) {
    return (findMax(input) - findMin(input)).toFixed(2);
}