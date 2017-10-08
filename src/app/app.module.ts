// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import the NgModule for each component you want to use:
import { MatButtonModule, MatCheckboxModule, MatListModule } from '@angular/material';

// Components
import { AppComponent } from './app.component';

// Services

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule, MatCheckboxModule, MatListModule // these are just examples
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
