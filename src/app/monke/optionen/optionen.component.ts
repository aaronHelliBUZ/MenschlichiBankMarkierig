import { Component, OnInit } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OptionenService } from '../optionen.service';

@Component({
  selector: 'app-optionen',
  imports: [UiCoreModule, CommonModule, ReactiveFormsModule],
  templateUrl: './optionen.component.html',
  styleUrl: './optionen.component.css'
})
export class OptionenComponent {
  optionen?: FormGroup

  constructor(private optionenService: OptionenService){
  }

  submit(){
    this.optionenService.runden.next(this.optionen?.value.runden);
    this.optionenService.nummer.next(this.optionen?.value.startNummer);
  }

  ngOnInit(){
    this.optionen = new FormGroup({
      'startNummer': new FormControl(4, Validators.required),
      'runden': new FormControl(2, Validators.required)
    })
  }
}
