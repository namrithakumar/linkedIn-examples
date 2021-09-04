import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-random-quote',
  templateUrl: './view-random-quote.component.html',
  styleUrls: ['./view-random-quote.component.css']
})
export class ViewRandomQuoteComponent implements OnInit {

  private quotes : String[] = [
    'Only I can change my life. No one can do it for me.',
    'Don\'t watch a clock, do what it does. Keep going.',
    'If you can dream it, you can do it.',
    'When something is important enough, you do it even if the odds are not in your favor',
    'With the new day comes new strength and new thoughts.',
    'Start where you are. Use what you have. Do what you can',
    'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.',
    'It always seems impossible until it\'s done.'
  ];

  public quote : String = this.quotes[0];

  constructor() { }

  ngOnInit(): void {
    this.quote = this.quotes[this.getRandomInt(this.quotes.length)];
  }

  private getRandomInt(max: number) : number {
    return Math.floor(Math.random() * max);
  }
}