import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contagem.component.html',
  styleUrl: './contagem.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SkillsComponent implements OnInit, OnDestroy {


  countdown = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  private targetDate: Date = new Date('2025-12-23T00:00:00');
  private intervalId: any;

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const target = this.targetDate.getTime();
    const timeDifference = target - now;

    if (timeDifference > 0) {
      this.countdown.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.countdown.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.countdown.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.countdown.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    } else {
      this.clearInterval();
    }
  }

  clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngOnDestroy(): void {
    this.clearInterval();
  }
}
