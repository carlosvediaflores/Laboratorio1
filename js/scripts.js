var arr = ["aba","aa","ad","vcd","aba"];
var lgth = 0;
var longest= [];

for(var i=0; i < arr.length; i++){
    if(arr[i].length > lgth){
        var lgth = arr[i].length;
        for(var j=0; j < arr.length; j++){
            if(arr[j].length==lgth){
                longest.push(arr[j]);
            }
        }           
        
    }      
}
var pro1=document.getElementById('resultado').innerHTML=longest;
