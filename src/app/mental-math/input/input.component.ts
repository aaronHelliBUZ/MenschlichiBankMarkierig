import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UiCoreModule, BadgeSize, BadgeType } from '@buhler/ui-core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-input',
  imports: [UiCoreModule, CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  badgeType: BadgeType = BadgeType.Primary;
  badgeSize: BadgeSize = BadgeSize.Normal;
  rechnung?: string;
  rechnungenCounter: number = 0;
  rekord: number = 0;
  rekordZeit: number = 0;
  operatoren: Array<string> = ['+', '-', '*', '/'];
  loesung?: number;
  zeit: number = 30;
  startZeit: number = 30;
  abgelaufen = false;
  input?: FormGroup; 
  plusMax1: number = 100;
  plusMin1: number = 1;
  plusMax2: number = 100;
  plusMin2: number = 1;
  minusMax1: number = 200;
  minusMin1: number = 1;
  minusMax2: number = 100;
  minusMin2: number = 1;
  multiplikationMax1: number = 10;
  multiplikationMin1: number = 3;
  multiplikationMax2: number = 10;
  multiplikationMin2: number = 3;
  divisionMax1: number = 200;
  divisionMin1: number = 2;
  divisionMax2: number = 20;
  divisionMin2: number = 2;

  constructor(private mathService: MathService){
  }

  rechnungGenerieren() {
    let zahl1: number;
    let zahl2: number;
    let operator: string = this.operatoren[Math.trunc(Math.random() * this.operatoren.length)];

    switch (operator) {
      case '+':
        zahl1 = Math.trunc(Math.random() * this.plusMax1 + this.plusMin1);
        zahl2 = Math.trunc(Math.random() * this.plusMax2 + this.plusMin2);
        this.loesung = zahl1 + zahl2;
        break;
      case '-':
        zahl1 = Math.trunc(Math.random() * this.minusMax1 + this.minusMin1);
        zahl2 = Math.trunc(Math.random() * this.minusMax2 + this.minusMin2);
        this.loesung = zahl1 - zahl2;
        break;
      case '*':
        zahl1 = Math.trunc(Math.random() * this.multiplikationMax1 + this.multiplikationMin1);
        zahl2 = Math.trunc(Math.random() * this.multiplikationMax2 + this.multiplikationMin2);
        this.loesung = zahl1 * zahl2;
        break;
      case '/':
        let restNull: boolean = false;
        while (!restNull) {
          zahl1 = Math.trunc(Math.random() * this.divisionMax1 + this.divisionMin1);
          zahl2 = Math.trunc(Math.random() * this.divisionMax2 + this.divisionMin2);
          if (zahl1 % zahl2 === 0 && zahl1 !== zahl2) {
            restNull = true;
          }else{
            zahl1 = Math.trunc(Math.random() * this.divisionMax1 + this.divisionMin1);
            zahl2 = Math.trunc(Math.random() * this.divisionMax2 + this.divisionMin2); 
          }
        }
        this.loesung = zahl1! / zahl2!;
        break;
    }
    this.rechnung = `${zahl1!} ${operator} ${zahl2!}`;
  }

  submit(){
    if(this.input?.value.zahl == this.loesung && !this.abgelaufen){
      this.rechnungenCounter++;
      if(this.rekord < this.rechnungenCounter){
        this.rekord = this.rechnungenCounter;
      }
      this.rechnungGenerieren();
      this.input?.reset();
    }
  }

  timer(){
    if(this.zeit == 0){
      this.rechnung = 'Zeit abgelaufen';
      this.abgelaufen = true;
      if(this.rekordZeit < this.rechnungenCounter / (this.startZeit / 60)){
        this.rekordZeit = this.rechnungenCounter / (this.startZeit / 60);
      }
    }else{
      setTimeout(() =>{
        this.zeit--;
        this.timer();
      }, 1000)
    }
  }

  reset(){
    this.rechnungenCounter = 0;
    this.zeit = this.startZeit;
    this.abgelaufen = false;
    this.rechnungGenerieren();
  }
  
  round(zahl: number): number {
    return Math.round(zahl);
  }

  ngOnInit(){
    setTimeout(() => {
      const wrappers = document.getElementsByClassName('bui-label-wrapper bui-flex bui-flex-row-reverse');
      const wrapper = wrappers.item(0);
      wrapper!.remove();
    });
    
    this.input = new FormGroup({
      'zahl': new FormControl()
    });

    this.mathService.zeit.subscribe({
      next: (value) => {
        this.startZeit = value;
      }
    });

    this.mathService.operatoren.subscribe(
      value => {
        console.log(value);
        this.operatoren = value;
      }
    )

    this.mathService.plusMax1.subscribe(
      value => {
        this.plusMax1 = value;
      }
    );
    this.mathService.plusMin1.subscribe(
      value => {
        this.plusMin1 = value;
      }
    );
    this.mathService.plusMax2.subscribe(
      value => {
        this.plusMax2 = value;
      }
    );
    this.mathService.plusMin2.subscribe(
      value => {
        this.plusMin2 = value;
      }
    );

    this.mathService.minusMax1.subscribe(
      value => {
        this.minusMax1 = value;
      }
    );
    this.mathService.minusMin1.subscribe(
      value => {
        this.minusMin1 = value;
      }
    );
    this.mathService.minusMax2.subscribe(
      value => {
        this.minusMax2 = value;
      }
    );
    this.mathService.minusMin2.subscribe(
      value => {
        this.minusMin2 = value;
      }
    );

    this.mathService.multiplikationMax1.subscribe(
      value => {
        this.multiplikationMax1 = value;
      }
    );
    this.mathService.multiplikationMin1.subscribe(
      value => {
        this.multiplikationMin1 = value;
      }
    );
    this.mathService.multiplikationMax2.subscribe(
      value => {
        this.multiplikationMax2 = value;
      }
    );
    this.mathService.multiplikationMin2.subscribe(
      value => {
        this.multiplikationMin2 = value;
      }
    );

    this.mathService.divisionMax1.subscribe(
      value => {
        this.divisionMax1 = value;
      }
    );
    this.mathService.divisionMin1.subscribe(
      value => {
        this.divisionMin1 = value;
      }
    );
    this.mathService.divisionMax2.subscribe(
      value => {
        this.divisionMax2 = value;
      }
    );
    this.mathService.divisionMin2.subscribe(
      value => {
        if(value == 0){
          value = 1;
        }
        this.divisionMin2 = value;
        this.reset();
      }
    );

    this.rechnungGenerieren();
    this.timer();
  }
}
