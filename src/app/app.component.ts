import { Component, OnDestroy } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { KlickenService } from './cps/klicken.service';
import { ReaktionService } from './reaktionszeit/reaktion.service';
import { TestService } from './typespeed/test.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, UiCoreModule, HeaderComponent, RouterOutlet]
})
export class AppComponent {
  constructor(private klicken: KlickenService, private reaktion: ReaktionService, private test: TestService){
  }

  ngOnDestroy(){
    this.klicken.buttonInhalt.unsubscribe();
    this.klicken.resultat.unsubscribe();
    this.reaktion.feldInhalt.unsubscribe();
    this.reaktion.zeiten.unsubscribe();
    this.reaktion.knopfInhalt.unsubscribe();
    this.reaktion.minDelay.unsubscribe();
    this.reaktion.randDelay.unsubscribe();
    this.reaktion.reihen.unsubscribe();
    this.reaktion.spalten.unsubscribe();
    this.test.klasse.unsubscribe();
    this.test.arrayAendern.unsubscribe();
    this.test.index.unsubscribe();
    this.test.fertig.unsubscribe();
    this.test.zeit.unsubscribe();
  }
}
