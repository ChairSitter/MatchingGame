let first = 3;
let second = 2;
let third = 2;
let fourth = 4;
let fifth = 5;
let sixth = 2;
let seventh = 3;
let eighth = 2;

if((first === (third || fourth)) && (first === (fifth || sixth)) && (first === (seventh || eighth))){
    console.log(true);
} else if ((second === (third || fourth)) && (second === (fifth || sixth)) && (second === (seventh || eighth))){
    console.log(true);
} else {
    console.log(false);
}


