

let Guest_list :string[] = ['Maheen ayaz','Razia ayaz', 'ayaz',' MAAZ'];

// for(let i=0; i<Guest_list.length; i++){
// console.log(' Dfear Mr. ' + Guest_list[i] + ', \n\nit is my pleasure to invite you in our party.\n\nthank You!\n\n')
// } 

let absent_Guest:string = 'ayaz';

let new_Guest:string = ' JAAN';

Guest_list[0]= new_Guest ; 
// for(let i=0; i<Guest_list.length; i++){
//     console.log(' Dfear Mr. ' + Guest_list[i] + ', \n\nit is my pleasure to invite you in our party.\n\nthank You!\n\n')
//     } 
;
//     console.log(`Mr.${absent_Guest} is not coming to the party.`) ;
// console.log ('Good new! we Find big table so we are inviting 3 more guests.')
// yahan 3 guest add kiye han
Guest_list.unshift(' SIR zia khan' )
Guest_list.splice(2,0,' umer ');
Guest_list.push( 'ibrahim');
Guest_list[0]= new_Guest ; 
// yahan per meny 6 guest ke array ko print karwaya hn
for(let i=0; i<Guest_list.length; i++){
    console.log(' Dfear Mr. ' + Guest_list[i] + ', \n\nit is my pleasure to invite you in our party.\n\nthank You!\n\n')
    } 
     // sorry guest for not invited
    // console.log('\nsorry we can not arrange big table, only two people will be invited.');
    // yahan per meny guest remove kiye h 
while(Guest_list.length >2 ){
   
   let remove_Guest = Guest_list.pop( );
//    console.log( `sorry Mr . ${remove_Guest}, you are not invited for dinner.`);
}
//hamare bachy hoye 2 invited guest.
// for(let i=0; i<Guest_list.length; i++){
//     console.log(' Dfear Mr. ' + Guest_list[i] + ', \n\n you are still invite.\n\nthank You!\n\n')
//     } 
    // meny sarein guest array se remove kar diye
    Guest_list.splice(0,2,);
    console.log( Guest_list);

// ex 18
// print a masg indicating num of peo u r inviting to dinner 
 console.log(`total num of guest is :${Guest_list.length}` ) ;

 

