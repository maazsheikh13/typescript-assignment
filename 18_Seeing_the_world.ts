9
// store is array not in alphabet order
let place : string[] = [ 'italy', ' turky', 'neran', 'dubai', ' istanbul',] ;
// print your array in its original order
console.log('original' + place);
// print your array in alphabetical order without modifying the actual list
console.log( 'copy'+   [... place] .sort ());
// show that your array is still in its original without changing the order of the origical list
console.log (  'original'+ place);
// print your array is reverce alphabetical order without changing the order of the origal list.
console.log([... place] .sort ().reverse() );

// sshow that your arrray is still in its original order by printing it again
console.log (place);
// reverse the order of your list. printb the array to show thaat its order has changed
console.log(place.reverse());


console.log(place.reverse());
 

console.log(place.sort ());


console.log(place.sort ().reverse());