
export function main(inputNumber) {

  const num = ['1','2','3','4','5','6','7','8','9']
  var arr = Array(6561).fill(0)      //3^8
  let sum = 0
   arr.map((val, index)=>{
    var operations = ternaryFormat(index);
    var equation = num[0].concat(operationGenerator(operations[0]), num[1],
      operationGenerator(operations[1]), num[2],
      operationGenerator(operations[2]), num[3],
      operationGenerator(operations[3]), num[4],
      operationGenerator(operations[4]), num[5],
      operationGenerator(operations[5]), num[6],
      operationGenerator(operations[6]), num[7],
      operationGenerator(operations[7]), num[8]
    );

    if(eval(equation)=== inputNumber){
      sum++;
      console.log(equation);
    }
  })

  console.log(sum)
}
function ternaryFormat(data,base=[0, 0, 0, 0, 0, 0, 0, 0],count = 7){

if((data/3 !== 0) && (count >= 0)){
    base[count] = Math.floor(data%3);
    data = data/3;
    return ternaryFormat(data,base,count-1)
  }else return base;
}

function operationGenerator(index){
  var operator = ['+', '-' ,''];
  return operator[index];
}
