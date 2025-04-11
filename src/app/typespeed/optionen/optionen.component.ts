import { Component, OnInit } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TestService } from '../test.service';

@Component({
  selector: 'app-optionen',
  imports: [UiCoreModule, CommonModule, ReactiveFormsModule],
  templateUrl: './optionen.component.html',
  styleUrl: './optionen.component.css'
})
export class OptionenComponent {
  optionen?: FormGroup;

  constructor(private test: TestService){
  }

  submit(){
    this.test.modusAendern(this.optionen?.value.modus);
    this.test.zeitAendern(this.optionen?.value.zeit)
  }

  ngOnInit(){
    this.optionen = new FormGroup({
      'zeit': new FormControl(60),
      'modus': new FormControl('typeScript')
    })
  }
}
