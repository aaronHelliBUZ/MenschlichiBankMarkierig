import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UiCoreModule } from '@buhler/ui-core';
import { KlickenService } from '../klicken.service';

@Component({
  selector: 'app-optionen',
  imports: [UiCoreModule, CommonModule, ReactiveFormsModule],
  templateUrl: './optionen.component.html',
  styleUrl: './optionen.component.css'
})
export class OptionenComponent {
  optionen?: FormGroup;

  constructor(private klicken: KlickenService){
  }

  submit(){
    if(this.optionen?.value.laenge > 0){
      this.klicken.laenge = this.optionen?.value.laenge;
    }else{
      this.klicken.laenge = 10;
    }
    if(this.optionen?.value.pause >= 0){
      this.klicken.pause = this.optionen?.value.pause
    }else{
      this.klicken.pause = 5;
    }
  }

  ngOnInit(){
    this.optionen = new FormGroup({
      'laenge': new FormControl(10),
      'pause': new FormControl(5)
    })
  }
}
