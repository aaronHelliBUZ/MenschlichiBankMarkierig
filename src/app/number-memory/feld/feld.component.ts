import { Component, OnInit } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { NummerService } from '../nummer.service';

@Component({
  selector: 'app-feld',
  imports: [UiCoreModule, CommonModule],
  templateUrl: './feld.component.html',
  styleUrl: './feld.component.css'
})
export class FeldComponent {
  randomZahlString: string = '';
  durchlauf?: number;
  disabled: boolean = true;

  constructor(private nummer: NummerService){
  }

  randomZahl(){
    this.disabled = true;
    this.randomZahlString ='';
    this.durchlauf!++;
    for(let i = 0; i < this.durchlauf!; i++){
      this.randomZahlString += Math.round(Math.random() * 9)
    }
    console.log(this.durchlauf)
    this.nummer.durchlauf.next(this.durchlauf!)
    setTimeout(() => {
      this.nummer.disabled.next(false)
      this.nummer.zahl = this.randomZahlString;
    }, 5000)
  }

  ngOnInit(){
    this.durchlauf = 0;
    this.randomZahl();

    this.nummer.disabled.subscribe(
      data => this.disabled = data
    )

    this.nummer.neu.subscribe(
      data => {
        this.durchlauf = 0;
        this.randomZahl();
      }
    )

    this.nummer.weiter.subscribe(
      data => this.randomZahl()
    )
  }
}
