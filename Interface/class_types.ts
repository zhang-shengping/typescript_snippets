interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface{
    currentTime: Date;
    constructor(h: number, m: number){};
}

interface ClockInterface1 {
    currentTime: Date;
    setTime(d: Date);
}

class Clock1 implements ClockInterface1{
    currentTime: Date;

    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

// interface can not set constructor
interface ClockConstructor {
    new (hour: number, minute: number);
}

class Clock2 implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) { }
}