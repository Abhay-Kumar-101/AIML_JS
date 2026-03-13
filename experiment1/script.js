function calculateResult(){

const n=document.getElementById("subjects").value;
let i;
let total=0 ;
for (i=0;i<n;i++){

    let x=parseFloat(prompt("Enter the sunject no. "+(i+1)));
    total+=x;
}
let avg=total/n;
let grade = " ";
if (avg>90){
    grade='A+';
}else if(avg>75){
    grade='A';
}else if(avg>50){
    grade='B';
}else if(avg>40){
    grade='D';
}
if (avg<=40){
    grade=" failed";
}
let result=document.getElementById("result").innerHTML="Total Marks : "+total+"<br/>"+"Grade : "+grade

}