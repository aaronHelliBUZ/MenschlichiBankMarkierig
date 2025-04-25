import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiCoreModule } from '@buhler/ui-core';
import { FeldService } from '../feld.service';

@Component({
  selector: 'app-optionen',
  imports: [UiCoreModule, ReactiveFormsModule],
  templateUrl: './optionen.component.html',
  styleUrl: './optionen.component.css'
})
export class OptionenComponent {
  optionen?: FormGroup;

  constructor(private feld: FeldService){
  }

  submit(){
    this.feld.felder.next(this.optionen?.value.felder);
  }

  ngOnInit(){
    this.optionen = new FormGroup({
      'felder': new FormControl(2, Validators.required),
    });
  }
}