import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionenService {
  nummer = new Subject<number>();
  runden = new Subject<number>();
}
