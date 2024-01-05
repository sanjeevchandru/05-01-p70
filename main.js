document.write("34. to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive."+"<br>");
function test34(x,y){
    if((x>=40 && x<=60)&&(y>=40 && y<=60)){
        if(x>y){
            return x;
        }
        return y;
    }
    return "Numbers don't fit in range ";
}
document.write("The numbers are :40,50 ,Ans: "+test34(40,50)+"<br><br>");