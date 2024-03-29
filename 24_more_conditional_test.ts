//test 1
console.log ("equality test with strings: ", "apple" === "apple" );
//test2
console.log ("inequality test with strings: ", ("apple" as string) != "orange" );
  //test 3 
  console.log ("lower case function test: ", "HELLOW". toLocaleLowerCase()  === "hellow");
  //test 4
  console.log("equality test with number:",26===26 );
  //test 5
  console.log("inequality test with number:",(26 as number)!=35 );
//test5
  console.log("greater than test:" , 10>5);
  //
  console.log("greater than test:" , 10>=5);
  //test 6
  console.log("less than test:" , 5<10);                 
  //test 7
  console.log("less than test  ",5<=10 );
  //test using and or
  console.log("and operator test:", 5===5 && 10>5);
  // using or
  console.log("or operator test:", 5===5 || false);
// test whether an item is in a array
const fruits :string[] =[ 'pear','grap','guava'];
console.log('testing "apple"is not in array:',  !fruits.includes('apple') );
