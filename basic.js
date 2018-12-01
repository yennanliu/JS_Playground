// define func 1 
function greet(name){
	console.log('hola welcome ! ' + ' ' + name + '!')
}

// define func 2 
function greet_full(first_name, last_name){
	console.log('nice to see u again !  ' + ' ' + first_name + '-' + last_name  + '!')
}

// define func 3  : return 
function sqaure(number){
	return number*number 
}

// define func 4  : if else 
function is_big(number){
	if (number > 10){
		console.log('this is a big number :  ' + number )
	}
	else{
		console.log('this is a small number :  ' + number )
	}
}


// call the func 
greet('Lin');
greet_full('Jeremy', 'Lin');
// 2 ways to get the func return value 
let x = sqaure(5); 
console.log(sqaure(5)); 
// call the 4 func 
is_big(100);
is_big(2);








