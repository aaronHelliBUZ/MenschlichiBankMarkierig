import { Component, OnInit } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ZielenService } from '../zielen.service';

@Component({
  selector: 'app-optionen',
  imports: [UiCoreModule, CommonModule, ReactiveFormsModule],
  templateUrl: './optionen.component.html',
  styleUrl: './optionen.component.css'
})
export class OptionenComponent {
  optionen?: FormGroup

  constructor(private zielen: ZielenService){
  }

  submit(){
    this.zielen.zeit.next(this.optionen?.value.zeit);
    this.zielen.groesse.next(this.optionen?.value.groesse);
  }

  ngOnInit(){
    this.optionen = new FormGroup({
      'zeit': new FormControl(20, Validators.required),
      'groesse': new FormControl(45, Validators.required)
    })
  }
}
