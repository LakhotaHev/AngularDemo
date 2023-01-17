import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VersionChildComponent } from './version-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VersionTimerComponent } from './countdown-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionChildComponent,
    VersionParentComponent,
    VersionTimerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
