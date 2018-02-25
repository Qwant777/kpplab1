const input1 = Math.floor(Math.random() * (9999 - 1000)) + 1000;
//console.log (input1);

while(buk!=4)
{ 
const readlineSync = require('readline-sync');

var input2 = readlineSync.question('Input   ');

var arr2 = input2.split('');

var put1 = input1.toString();

var arr1 = put1.split('');


var buk=0;


for(var i=0; i<4; i++)
{
   if(arr1[i]==arr2[i])
	{
  	buk++;  	
	}    
}
console.log('BULL '+buk);
var cow =0;

for(var k=0; k<4; k++)
{
	for(var n=0; n<4; n++)
		{
			if(arr1[k]==arr2[n])
				{
					cow++;
				}
		}
}
console.log('COW '+cow);




}
console.log('WIN')