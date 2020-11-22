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
