import { Component, OnInit } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NummerService } from '../nummer.service';

@Component({
  selector: 'app-input',
  imports: [UiCoreModule, CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  input?: FormGroup;
  durchlauf: number = 1;
  rekord: number = 1;

  constructor(private nummer: NummerService){
  }

  submit(){
    console.log(this.input)
    if(!this.input?.get('zahl')?.disabled){
      this.nummer.pruefen(this.input?.value.zahl);
      this.input!.reset()
    }
  }

  ngOnInit(){
    this.input = new FormGroup({
      'zahl': new FormControl(null)
    })

    this.input.get('zahl')?.disable();
    
    setTimeout(() => {
      const wrappers = document.getElementsByClassName('bui-label-wrapper bui-flex bui-flex-row-reverse');
      const wrapper = wrappers.item(0);
      wrapper!.remove();
    }, 0)

    this.nummer.disabled.subscribe(
      data => {
        if(data){
          this.input?.get('zahl')?.disable();
        }else{
          this.input?.get('zahl')?.enable();
        }
      }
    )

    this.nummer.neu.subscribe(
      data => this.input?.get('zahl')?.disable()
    )

    this.nummer.weiter.subscribe(
      data => this.input?.get('zahl')?.disable()
    )

    this.nummer.durchlauf.subscribe(
      data => {
        this.durchlauf = data
        if(data - 1 > this.rekord){
          this.rekord = data - 1;
        }
      }
    )
  }
}
