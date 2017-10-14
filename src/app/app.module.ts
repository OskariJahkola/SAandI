// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import the NgModule for each component you want to use:
import { MatButtonModule, MatCheckboxModule, MatListModule, MatToolbarModule, MatTabsModule, MatIconModule } from '@angular/material';
// Components
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { FrontPageComponent } from './front-page/front-page.component';
// Services

@NgModule({
	declarations: [
		AppComponent,
		InfoComponent,
		FrontPageComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatListModule,
		MatToolbarModule,
		MatTabsModule,
		MatIconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
