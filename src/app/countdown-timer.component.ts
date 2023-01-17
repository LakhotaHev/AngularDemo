import { Component } from "@angular/core";

@Component ({
    selector: "app-version-timer",
    template:`
    <h2>Timer Component</h2>
    <button type="button" (click)="startCountdown()" [disabled]="isPaused !== true">Start Countdown</button>
    <button type="button" (click)="stopCountdown()">Stop Countdown</button>
    <button type="button" (click)="resetCountdown()">Reset Countdown</button>
    <p>{{ timerValue }}</p>
    <p>{{ timerText }}</p>
    `
})

export class VersionTimerComponent
{
  timerText: string;
  timerValue: number;
  intervalId: any;
  isPaused: boolean;

  constructor() {
    this.timerText = "Ready to countdown!";
    this.timerValue = 11;
    this.isPaused = true;
  }

  startCountdown() { 
          this.intervalId = setInterval(() => {
          this.timerText = `T-${this.timerValue - 1}`;
          this.timerValue--;
          this.isPaused = false;
          if (this.timerValue === 0) {
              this.timerText = "BLAST OFF!";
              clearInterval(this.intervalId);
          }
          if (this.timerValue < 0){
              this.resetCountdown();
          }
          }, 1000);
      }

  stopCountdown() {
    clearInterval(this.intervalId);
    this.timerText = `Holding at T-${this.timerValue}`;
    this.isPaused = true;
  }

  resetCountdown(){
      this.timerValue = 11;
      this.timerText = "Ready to countdown!";
      this.isPaused = true;
  }
}