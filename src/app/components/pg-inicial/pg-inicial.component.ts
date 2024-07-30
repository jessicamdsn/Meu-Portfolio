import { Component } from '@angular/core';

@Component({
  selector: 'app-pg-inicial',
  standalone: true,
  imports: [],
  templateUrl: './pg-inicial.component.html',
  styleUrl: './pg-inicial.component.css'
})
export class PgInicialComponent {
  texts = "Hello world...";
  currentText = '';
  private currentIndex = 0;
  private typingSpeed = 100;
  private deletingSpeed = 50;
  private pauseDuration = 1000;
  private typingTimeout: any;
  private deletingTimeout: any;

  ngOnInit() {
    this.startAnimation();
  }

  typeText(text: string, callback: () => void) {
    let index = 0;
    this.currentText = '';
    const interval = setInterval(() => {
      this.currentText += text[index++];
      if (index >= text.length) {
        clearInterval(interval);
        this.typingTimeout = setTimeout(callback, this.pauseDuration);
      }
    }, this.typingSpeed);
  }

  deleteText(callback: () => void) {
    let index = this.currentText.length;
    const interval = setInterval(() => {
      this.currentText = this.currentText.slice(0, --index);
      if (index <= 0) {
        clearInterval(interval);
        this.deletingTimeout = setTimeout(callback, this.pauseDuration);
      }
    }, this.deletingSpeed);
  }

  startAnimation() {
    const next = () => {
      this.typeText(this.texts, () => {
        this.deleteText(() => {
          this.currentIndex = (this.currentIndex + 1) % this.texts.length;
          next();
        });
      });
    };
    next();
  }

  ngOnDestroy() {
    // Clear timeouts to avoid memory leaks
    clearTimeout(this.typingTimeout);
    clearTimeout(this.deletingTimeout);
  }
}
