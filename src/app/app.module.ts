// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NguiMapModule} from '@ngui/map';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ReactiveFormsModule } from '@angular/forms';
// Import the NgModule for each component you want to use:
import { 	MatButtonModule, MatCheckboxModule, MatListModule, MatToolbarModule,
					MatTabsModule, MatIconModule, MatInputModule, MatSnackBarModule,
					MatExpansionModule, MatDatepickerModule } from '@angular/material';
// Components
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { GmapComponent} from './gmap/gmap.component';
import { GeolocationService } from './services/geolocation.service';
import { environment } from '../environments/environment';
import { AddEventComponent } from './add-event/add-event.component';

// Services

@NgModule({
	declarations: [
		AppComponent,
		InfoComponent,
		FrontPageComponent,
		GmapComponent,
		AddEventComponent
	],
	imports: [
		NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAI368OuKSOMpfH9xNYwdnpe6HGUI_-VVg'}),
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatListModule,
		MatToolbarModule,
		MatTabsModule,
		MatIconModule,
		MatInputModule,
		MatSnackBarModule,
		MatExpansionModule,
		ReactiveFormsModule
	],
	providers: [GeolocationService],
	bootstrap: [AppComponent]
})
export class AppModule { }
