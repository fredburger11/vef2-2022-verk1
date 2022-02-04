import { findVariance, findMax, findMean, findMedian, findMin, findstdev, findSum, findRange } from "../src/calc";

describe('calc', () => {
    it('finds the variance out of numbers in an array', () => {
        
        const numbers = [ 1, 2, 3, 4, 5 ];
  
        //mean = 15/5 = 3
        //SS = (1-3)^2 + (2-3)^2 + (3-3)^2 + (4-3)^2 + (5-3)^2
        //SS = 4 + 1 + 0 + 1 + 4 = 10
        //variance = SS/(n) = 2.0
        
        const parsed = findVariance(numbers);

        const output = "2.00"

        expect(parsed).toBe(output);
      
    }); 

    it('finds the max number out of numbers in an array', () => {
        
        const numbers = [ 1, 2, 3, 4, 5 ];
  
        const parsed = findMax(numbers);

        const output = 5;

        expect(parsed).toBe(output);
      
    }); 

    it('finds the mean out of numbers in an array', () => {
        
        const numbers = [ 1, 2, 3, 4, 5 ];
  
        const parsed = findMean(numbers);

        // mean = 1 + 2 + 3 + 4 + 5 = 15/5 = 3
        const output = "3.00";

        expect(parsed).toBe(output);
      
    }); 

    it('finds the median out of numbers in an array', () => {
        
        const numbers = [ 1, 2, 3, 4, 5 ];
        const numbers2 = [ 1, 2, 3, 4, 5, 6 ];
  
        const parsed = findMedian(numbers);
        const parsed2 = findMedian(numbers2);

        // median = middle nr of a data set when numbers are in a row
        // When numbers are even then we add up the two middle numbers and divide by 2
        const output1 = "3.00";
        const output2 = "3.50"

        expect(parsed).toBe(output1);
        expect(parsed2).toBe(output2);
      
    }); 

    it('finds the smallest number out of numbers in an array', () => {
        
        const numbers = [ 1, 2, 3, 4, 5 ];
  
        const parsed = findMin(numbers);

        const output = 1;

        expect(parsed).toBe(output);
      
    }); 

    it('finds the standard deviation out of numbers in an array', () => {
        
        const numbers = [ 1, 2, 3, 4, 5 ];
  
        const parsed = findstdev(numbers);

        // stdev = sqrt(variance)
        // stdev = sqrt(2) = 1.4142

        const output = "1.4142"

        expect(parsed).toBe(output);
      
    }); 

    it('finds the sum of numbers in an array', () => {
        
        const numbers = [ 1, 2, 3, 4, 5 ];
  
        const parsed = findSum(numbers);

        // sum = 15
        const output = "15.00";

        expect(parsed).toBe(output);
      
    }); 

    it('finds the range out of numbers in an array', () => {
        
        const numbers = [ 1, 2, 3, 4, 5 ];
  
        const parsed = findRange(numbers);

        // MaxNumber - MinNumber = 5 - 1 = 4
        const output = "4.00";

        expect(parsed).toBe(output);
      
    }); 
  });