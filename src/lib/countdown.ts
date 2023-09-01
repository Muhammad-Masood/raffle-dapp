
export const Seconds =  60;
export const Minutes = 60;
export const Hours = 24;
export const Days = 3;

// localStorage.setItem("startTime",Seconds.toString());

export const timeConversion = (seconds:number) => {
    const secs = Math.floor(seconds%60);
    const mins = Math.floor((seconds%3600)/60);
    const hours = Math.floor((seconds%(3600*24))/3600);
    const days = Math.floor(seconds/(3600*24));
    return ({secs,mins,hours,days});
}



