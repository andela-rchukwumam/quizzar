/*-----------------------------------------------------------------------------
Quiz Application created To test Javascript programming knowledge
Program written by Ruth Chukwumam For the Andela bootcamp class!
*/
    //the first code will be the timer code for each question. 
    function Countdown (){
        this.start_time = "30:00";
        this.target_id = "#timer";
        this.name = "timer";
    }
    //calling the tick function every second

    Countdown.prototype.init = function (){
        this.reset();
        setInterval(this.name +'.tick()', 1000);
    }
    //parsing out the start time

    Countdown.prototype.reset = function () {
        time = this.start_time.split(":");
        this.minutes = parseInt(time[0]);
        this.seconds = parseInt(time[1]); //parseInt takes the string and converts to an integer
        this.update_target();
    }

    Countdown.prototype.tick = function () {
        if(this.seconds > 0 || this.minutes > 0){
            if(this.seconds == 0){ //if seconds is equals to zero, decrement the minute and reset the second to 59.
                this.minutes = this.minutes - 1;
                this.seconds = 59;
            }
            else{
                this.seconds = this.seconds - 1; //decrementing the seconds.
            }
            
        }
        this.update_target();
    }
    Countdown.prototype.update_target = function (){
        //cloning the values
        seconds = this.seconds;
        if(seconds < 10) seconds = "0" + seconds;
        $(this.target_id).val(this.minutes + ":" + seconds) //attaching a zero to single values.
    }
// End of the Countdown Program.