import { Component } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [UiCoreModule, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

}
