const sumLargestNumbers = function(data) {
  let num1 = 0;
  let num2 = 0;
  let array1 = [];
    for(let i = 0; i < data.length; i++){
      if(data[i] > num1){
        num1 = data[i]
        array1[0] = num1
      }
    }
    for(let j = 0; j < data.length; j++){
      if((data[j] < array1[0]) && (data[j] > num2)){
        num2 = data[j];
        array1[1] = num2;
      } 
    }return (array1[0] + array1[1]);
  };
  
  console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); 