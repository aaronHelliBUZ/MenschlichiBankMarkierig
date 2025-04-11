import { Component, OnInit } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { HttpService } from './http.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-text',
  imports: [CommonModule, UiCoreModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  methoden?: any;
  randomCodeText: string | null = '';
  randomCodeTextArray: Array<string> = [];
  klassenArray: Array<string> = [];
  index?: number;
  fertig: boolean = false;
  zeit: number = 60;

  constructor(private http: HttpService, private test: TestService){
  }

  randomCode(modus: string){
    if(modus === 'normal'){
      for(let i = 0; i < (this.zeit); i++){
        const randomZahl: number = Math.round(Math.random() * 100);
        this.randomCodeText += this.methoden[randomZahl].word + ' ';
      }
    }else{
      for(let i = 0; i < (this.zeit / 3); i++){
        const randomZahl: number = Math.round(Math.random() * 62);
        this.randomCodeText += this.methoden[randomZahl].code + ' ';
      }
    }
    this.randomCodeTextArray = this.randomCodeText!.split('');
    this.methoden = null;
    this.randomCodeText = '';

    for(let i = 0; i < this.randomCodeTextArray.length; i++){
      this.klassenArray.push('d');
    }

    this.test.randomArray = this.randomCodeTextArray;
  }

  ngOnInit(){
    this.http.getDataTS().subscribe(
      data => {
        this.methoden = data
        this.randomCode('TypeScript');
      }
    );

    this.test.index.subscribe(
      data => this.index = data
    )
    this.test.klasse.subscribe(
      data => this.klassenArray[this.index!] = data
    )

    this.test.fertig.subscribe(
      data => this.fertig = data
    )

    this.test.arrayAendern.subscribe(
      data => {
        if(data == 'normal'){
          this.http.getDataNormal().subscribe(
            data => {
              this.methoden = data;
              this.randomCode('normal')
            }
          )
        }else{
          this.http.getDataTS().subscribe(
            data => {
              this.methoden = data;
              this.randomCode('TypeScript')
            }
          )
        }
      }
    )

    this.test.zeit.subscribe(
      data => this.zeit = data
    )
  }
}
