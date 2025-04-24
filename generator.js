
function* generateNumbers() {
    console.log('Started generating numbers');
    yield 1;  
    yield 2;  
    yield 3;  
    console.log('Finished generating numbers');
  }
  
  
  const numGenerator = generateNumbers();
  
  
  console.log(numGenerator.next()); 
  console.log(numGenerator.next()); 
  console.log(numGenerator.next()); 
  console.log(numGenerator.next()); 
  