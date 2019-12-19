import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './box/box.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule ],
  declarations: [BoxComponent, HeaderComponent, FooterComponent, MainComponent],
  exports: [BoxComponent, HeaderComponent, FooterComponent, MainComponent]
})
export class UiModule {}
