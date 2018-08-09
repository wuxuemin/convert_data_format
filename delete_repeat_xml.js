var mycars = new Array()
var leng= 9;
leng += 1;
for (var index=0;index<leng;index++){
  mycars[index]= new Array();
}
var flag=0;
mycars[0][0]= "";
mycars[0][1]= "";
mycars[0][0]= "tc_1";
mycars[0][1]= "tc_2";

mycars[1][0]= "";
mycars[1][1]= "";
mycars[1][0]= "tc_1";
mycars[1][1]= "tc_2";
alert(mycars[0].length);
alert(mycars[1].length);
var str_str="tc_3";

for(var i=0;i<mycars[0].length;i++){
    if(str_str==mycars[0][i]){
           flag=1;
           break;
}
}
if(flag==0){
var changdu=mycars[0].length;
mycars[0][changdu]=str_str;
}
flag=0;
alert(mycars[0].length);
alert(mycars[0]);
