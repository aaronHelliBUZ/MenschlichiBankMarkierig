import { Component, OnInit } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NummerService } from '../nummer.service';

@Component({
  selector: 'app-optionen',
  imports: [UiCoreModule, CommonModule, ReactiveFormsModule],
  templateUrl: './optionen.component.html',
  styleUrl: './optionen.component.css'
})
export class OptionenComponent {
  optionen?: FormGroup;

  constructor(private nummer: NummerService){
  }

  submit(){
    this.nummer.zeit.next(this.optionen?.value.zeit)
  }

  ngOnInit(){
    this.optionen = new FormGroup({
      'zeit': new FormControl(5)
    })
  }
}
