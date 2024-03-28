"use strict";
let Guest_list = ['Maheen ayaz', 'Razia ayaz', 'ayaz', ' MAAZ'];
// for(let i=0; i<Guest_list.length; i++){
// console.log(' Dfear Mr. ' + Guest_list[i] + ', \n\nit is my pleasure to invite you in our party.\n\nthank You!\n\n')
// } 
let absent_Guest = 'ayaz';
let new_Guest = ' JAAN';
Guest_list[0] = new_Guest;
// for(let i=0; i<Guest_list.length; i++){
//     console.log(' Dfear Mr. ' + Guest_list[i] + ', \n\nit is my pleasure to invite you in our party.\n\nthank You!\n\n')
//     } 
;
console.log(`Mr.${absent_Guest} is not coming to the party.`);
console.log('Good new! we Find big table so we are inviting 3 more guests.');
Guest_list.unshift(' SIR zia khan');
Guest_list.splice(2, 0, ' umer ');
Guest_list.push('ibrahim');
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log(' Dfear Mr. ' + Guest_list[i] + ', \n\nit is my pleasure to invite you in our party.\n\nthank You!\n\n');
}
console.log('\nsorry we can not arrange big table, only two people will be invited.');
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    console.log(`sorry Mr . ${remove_Guest}, you are not invited for dinner.`);
}
for (let i = 0; i < Guest_list.length; i++) {
    console.log(' Dfear Mr. ' + Guest_list[i] + ', \n\n you are still invite.\n\nthank You!\n\n');
}
Guest_list.splice(0, 2);
console.log(Guest_list);
