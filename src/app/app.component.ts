import { Component, OnDestroy } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { KlickenService } from './cps/klicken.service';
import { ReaktionService } from './reaktionszeit/reaktion.service';
import { TestService } from './typespeed/test.service';
import { NummerService } from './number-memory/nummer.service';
import { ZielenService } from './aim-trainer/zielen.service';
import { OptionenService } from './monke/optionen.service';
import { FeldService } from './one-fifty/feld.service';
import { MathService } from './mental-math/math.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, UiCoreModule, HeaderComponent, RouterOutlet]
})
export class AppComponent {
  constructor(private klicken: KlickenService, private reaktion: ReaktionService, private test: TestService, private nummer: NummerService, private zielen: ZielenService, private monkeOptionen: OptionenService, private feld: FeldService, private math: MathService){
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
    this.nummer.disabled.unsubscribe();
    this.nummer.neu.unsubscribe();
    this.nummer.weiter.unsubscribe();
    this.nummer.durchlauf.unsubscribe();
    this.zielen.groesse.unsubscribe();
    this.zielen.zeit.unsubscribe();
    this.monkeOptionen.nummer.unsubscribe();
    this.monkeOptionen.runden.unsubscribe();
    this.feld.felder.unsubscribe();
    this.math.plusMax1.unsubscribe();
    this.math.plusMin1.unsubscribe();
    this.math.plusMax2.unsubscribe();
    this.math.plusMin2.unsubscribe();
    this.math.minusMax1.unsubscribe();
    this.math.minusMin1.unsubscribe();
    this.math.minusMax2.unsubscribe();
    this.math.minusMin2.unsubscribe();
    this.math.multiplikationMax1.unsubscribe();
    this.math.multiplikationMin1.unsubscribe();
    this.math.multiplikationMax2.unsubscribe();
    this.math.multiplikationMin2.unsubscribe();
    this.math.divisionMax1.unsubscribe();
    this.math.divisionMin1.unsubscribe();
    this.math.divisionMax2.unsubscribe();
    this.math.divisionMin2.unsubscribe();
    this.math.zeit.unsubscribe();
    this.math.operatoren.unsubscribe();
  }
}
