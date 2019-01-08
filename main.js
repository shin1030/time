
window.onload = function(){
    stratClick();
    stratCountDown();
    
}

function clock(){
    var x = document.getElementById('x');   
    var time =new Date(),
    hh = time.getHours(),
    mm = time.getMinutes(),
    ss = time.getSeconds();
    
    hh = checkTime(hh);
    mm = checkTime(mm);
    ss = checkTime(ss); 
    
    x.innerHTML = hh + ":" + mm + ":" + ss;
    
};

function checkTime(i){
    if (i<10){
        return "0"+i ;
    }else{
        return i;
    }
}

function stratCountDown() {
    //倒數5秒

    var number = 5;
    var y = document.getElementById('y');

    var count =function(){
        y.innerHTML =number;
        number--;
        if(number<0){
            clearInterval(start);
        }
    }
    var start = setInterval(count,1000);
}

function stratClick() {
    setInterval(clock,1000);
}

