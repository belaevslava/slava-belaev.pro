import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { DomSanitizer } from '@angular/platform-browser';

import {
  MatToolbarModule,
  MatDialogModule,
  MatSidenavModule,
  MatIconModule,
  MatTooltipModule,
  MatDividerModule,
  MatCardModule,
  MatListModule,
  MatButtonModule, 
  MatCheckboxModule
} from '@angular/material';
import {MatIconRegistry} from '@angular/material';

import { GalleryModule } from  '@ngx-gallery/core';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    MatToolbarModule,
    MatDialogModule,
    MatSidenavModule,
    MatTooltipModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,

    GalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'github',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/GitHub.svg'));
    iconRegistry.addSvgIcon(
        'linked-in',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/LinkedIn.svg'));
    iconRegistry.addSvgIcon(
        'upwork',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Upwork.svg'));
    iconRegistry.addSvgIcon(
            'telegram',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Telegram.svg'));
  }
}
