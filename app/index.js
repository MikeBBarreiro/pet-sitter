var Pet = require('./models/pet');

var p1 = new Pet('fredrick', 7, 'male', 'camel');
var p2 = new Pet('lassy', 4, 'female', 'bee');

p1.walk();
p1.eat();
p1.sleep();

while(!p2.iszombie){
  console.log(p2);
  p1.attack(p2);
  break;
};
console.log('the winnder is', p1);
console.log('The lozer is', p2);

