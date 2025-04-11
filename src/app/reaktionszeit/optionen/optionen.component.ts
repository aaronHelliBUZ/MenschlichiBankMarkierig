import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiCoreModule } from '@buhler/ui-core';
import { ReaktionService } from '../reaktion.service';

@Component({
  selector: 'app-optionen',
  imports: [UiCoreModule, ReactiveFormsModule],
  templateUrl: './optionen.component.html',
  styleUrl: './optionen.component.css'
})
export class OptionenComponent {
  optionen?: FormGroup;

  constructor(private reaktion: ReaktionService){
  }

  submit(){
    if(this.optionen?.value.minDelay <= 0 || this.optionen?.value.minDelay == null){
      this.reaktion.minDelay.next(1000)
    }else{
      this.reaktion.minDelay.next(this.optionen?.value.minDelay);
    }
    this.reaktion.randDelay.next(this.optionen?.value.randDelay);
    if(this.optionen?.value.reihen <= 0 || this.optionen?.value.reihen == null){
      this.reaktion.reihen.next(2);
    }else{
      this.reaktion.reihen.next(this.optionen?.value.reihen);
    }
    if(this.optionen?.value.spalten <= 0 || this.optionen?.value.spalten == null){
      this.reaktion.spalten.next(5);
    }else{
      this.reaktion.spalten.next(this.optionen?.value.spalten)
    }
  }

  ngOnInit(){
    this.optionen = new FormGroup({
      'minDelay': new FormControl(1000, Validators.required),
      'randDelay': new FormControl(1000),
      'reihen': new FormControl(2, Validators.required),
      'spalten': new FormControl(5, Validators.required)
    });
  }
}
