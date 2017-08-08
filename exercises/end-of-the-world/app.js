

var sTime = new Date().getTime();
    var countDown = 20; // Number of seconds to count down from.        

    function UpdateCountDownTime() {
        var cTime = new Date().getTime();
        var diff = cTime - sTime;
        var timeStr = '';
        var seconds = countDown - Math.floor(diff / 1000);
        if (seconds >= 0) {
            var hours = Math.floor(seconds / 3600);
            var minutes = Math.floor( (seconds-(hours*3600)) / 60);
            seconds -= (hours*3600) + (minutes*60);
            if( hours < 10 ){
                timeStr = "0" + hours;
            }else{
                timeStr = hours;
            }
            if( minutes < 10 ){
                timeStr = timeStr + ":0" + minutes;
            }else{
                timeStr = timeStr + ":" + minutes;
            }
            if( seconds < 10){
                timeStr = timeStr + ":0" + seconds;
            }else{
                timeStr = timeStr + ":" + seconds;
            }
            document.getElementById("countDownTimer").innerHTML = timeStr;
        }else{
            document.getElementById("countDownTimer").style.display="none";
            clearInterval(counter);
        }
    }

UpdateCountDownTime();
    var counter = setInterval(UpdateCountDownTime, 500);