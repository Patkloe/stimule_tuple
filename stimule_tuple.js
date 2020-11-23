var dict3 = { 1:"{}",2:"()",3:"[]"};
function couple(x,y){
  var val = x+y;
  var getkeys = Object.keys(dict3);
  for(var i of getkeys){
    if(dict3[i] === val){
       return true;
    }
    else{
       return false;
    }
  }
}
couple("{","}");
/*couple("[","}");
couple("(","}");
couple("[","]");
couple("(",")");*/

// version new
function open(c){
 var dict = { 1:"{", 2:"[", 3:"("};
 var getkeys = Object.keys(dict);
 var temp = c;
 for(var j of getkeys){
    if(dict[j] === temp){
     //alert("trouve" + " " + c);
     return true;
    }
   /* else{
     //alert("trouve" + " " + c);
     return false;
    }*/
 }
}// end open
function couple(x,y){
  var dict3 = { 1:"{}",2:"()",3:"[]"};
  var val = x+y;
  var getkeys = Object.keys(dict3);
  for(var i of getkeys){
    if(dict3[i] === val){
       return true;
    }
    /*else{
       return false;
    }*/
  }
}// end couple
/*var test = "]}([";
for(var x = 0; x < test.length; x++)
open(test[x]);*/
var voir = "[";
var rep = open(voir);
console.log(rep);
var cpl = couple("[","]");
console.log(cpl);
function isBalance(s){
  if(open(s)){
    return true;
  }
  else{
   return false;
  }
}
isBalance("]");
