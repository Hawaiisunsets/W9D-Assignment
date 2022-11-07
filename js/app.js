let userNames = [`user1`, `user2`, `user3`, `user4`, `user5`, `user6`, `user7`, `user8`, `user9`, `user10`];
let userAges = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];




let counter = 0;
while (counter < userAges.length){
    // userAges at least 18 years old
    if (userAges[counter] >= 18){
// display userNames
    console.log(userNames[counter]);
// counter +1 so it ends
    }
    counter = counter +1;
}
// counter ++ is the same as counter +1
for(let counter = 0; counter < userAges.length; counter++){
    if (userAges[counter] < 18){
    console.log(userNames[counter]);
    }
}