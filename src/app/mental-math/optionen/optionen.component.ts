import { Component, OnInit } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MathService } from '../math.service';

@Component({
  selector: 'app-optionen',
  imports: [UiCoreModule, CommonModule, ReactiveFormsModule],
  templateUrl: './optionen.component.html',
  styleUrl: './optionen.component.css'
})
export class OptionenComponent {
  optionen?: FormGroup;

  constructor(private math: MathService){
  }

  submit(){
    this.math.zeit.next(this.optionen?.value.zeit);
    this.math.plusMax1.next(this.optionen?.value.plusMax1);
    this.math.plusMin1.next(this.optionen?.value.plusMin1);
    this.math.plusMax2.next(this.optionen?.value.plusMax2);
    this.math.plusMin2.next(this.optionen?.value.plusMin2);
    this.math.minusMax1.next(this.optionen?.value.minusMax1);
    this.math.minusMin1.next(this.optionen?.value.minusMin1);
    this.math.minusMax2.next(this.optionen?.value.minusMax2);
    this.math.minusMin2.next(this.optionen?.value.minusMin2);
    this.math.multiplikationMax1.next(this.optionen?.value.malMax1);
    this.math.multiplikationMin1.next(this.optionen?.value.malMin1);
    this.math.multiplikationMax2.next(this.optionen?.value.malMax2);
    this.math.multiplikationMin2.next(this.optionen?.value.malMin2);
    this.math.divisionMax1.next(this.optionen?.value.geteiltMax1);
    this.math.divisionMin1.next(this.optionen?.value.geteiltMin1);
    this.math.divisionMax2.next(this.optionen?.value.geteiltMax2);
    this.math.divisionMin2.next(this.optionen?.value.geteiltMin2);
    let operatoren: Array<string> = [];
    if(this.optionen?.value.plus == 'checked'){
      operatoren.push('+');
    }
    if(this.optionen?.value.minus == 'checked'){
      operatoren.push('-');
    }
    if(this.optionen?.value.mal == 'checked'){
      operatoren.push('*');
    }
    if(this.optionen?.value.geteilt == 'checked'){
      operatoren.push('/');
    }
    this.math.operatoren.next(operatoren);
  }

  ngOnInit(){
    this.optionen = new FormGroup({
      'plus': new FormControl('checked'),
      'minus': new FormControl('checked'),
      'mal': new FormControl('checked'),
      'geteilt': new FormControl('checked'),
      'zeit': new FormControl(30, Validators.required),
      'plusMax1': new FormControl(100, Validators.required),
      'plusMin1': new FormControl(1, Validators.required),
      'plusMax2': new FormControl(100, Validators.required),
      'plusMin2': new FormControl(1, Validators.required),
      'minusMax1': new FormControl(200, Validators.required),
      'minusMin1': new FormControl(1, Validators.required),
      'minusMax2': new FormControl(100, Validators.required),
      'minusMin2': new FormControl(1, Validators.required),
      'malMax1': new FormControl(10, Validators.required),
      'malMin1': new FormControl(3, Validators.required),
      'malMax2': new FormControl(10, Validators.required),
      'malMin2': new FormControl(3, Validators.required),
      'geteiltMax1': new FormControl(200, Validators.required),
      'geteiltMin1': new FormControl(2, Validators.required),
      'geteiltMax2': new FormControl(20, Validators.required),
      'geteiltMin2': new FormControl(2, Validators.required),
    })
  }
}
