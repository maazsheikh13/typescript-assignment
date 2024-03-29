let megicion :string[]=['harry potter','hermione granger',' ron wesley',' albus dumbledore'];
function copyArray(arr:string[]){
  return [...arr]
}





function make_great (megicionArray: string[]){
for(let i=0; i<megicionArray.length; i++){
   megicionArray[i] =  ' the great '  +  megicionArray[i]
}
}



function show_magicions(megicion :string[]){
    megicion.forEach(element => {
    console.log(element);    
    });
}
const copyMagicionArray = copyArray(megicion);
make_great(copyMagicionArray);
console.log('\n\nthis is my original aaray')
show_magicions(megicion)
console.log(' \n\nthis is my modified copy of the aray')
show_magicions(copyMagicionArray);