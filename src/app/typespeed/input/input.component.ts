import { Component, OnInit } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { TestService } from '../test.service';

@Component({
  selector: 'app-input',
  imports: [UiCoreModule, CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  input?: FormGroup;
  angefangen: boolean = false;
  fertig: boolean = false;
  anschlaege: number = 0;
  fehler: number = 0;
  genauigkeit: number = 1;
  anschlaegeZehnMinuten: number = 0;
  startZeit?: number;
  zeit: number = 60;

  constructor(private test: TestService){
  }

  pruefen(){
    if(!this.angefangen){
      this.angefangen = true;
      this.startZeit = new Date().getTime() / 1000;
      setTimeout(() => {
        this.fertig = true;
      }, this.zeit * 1000)
    }
    if(!this.fertig){
      this.anschlaege++;
      const zeit = (new Date().getTime() / 1000) - this.startZeit!
      const faktor = 600 / zeit;
      this.anschlaegeZehnMinuten = Math.round(this.anschlaege * faktor);
    }else{
      this.anschlaegeZehnMinuten = this.anschlaege * (600 / this.zeit)
    }
    this.genauigkeit = (this.anschlaege - this.fehler) / this.anschlaege;
    this.test.pruefen(this.input!.value.text, this.fertig);
  }

  ngOnInit(){
    setTimeout(() => {
      const wrappers = document.getElementsByClassName('bui-label-wrapper bui-flex bui-flex-row-reverse');
      const wrapper = wrappers.item(0);
      const wrapperZwei = wrappers.item(1);
      wrapper!.remove();
      wrapperZwei!.remove();
    }, 0)

    this.input = new FormGroup({
      'text': new FormControl(null)
    })

    this.test.klasse.subscribe(
      data => {
        if(data === 'f' && !this.fertig){
          this.fehler++;
        }
      }
    )

    this.test.arrayAendern.subscribe(
      data => {
        this.input!.reset()
        this.fehler = 0;
        this.anschlaege = 0;
        this.angefangen = false;
        this.fertig = false;
        this.genauigkeit = 1
        this.anschlaegeZehnMinuten = 0;
      }
    )

    this.test.zeit.subscribe(
      data => this.zeit = data
    )
  }
}
