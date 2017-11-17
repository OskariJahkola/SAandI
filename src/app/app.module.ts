// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NguiMapModule} from '@ngui/map';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
// Import the NgModule for each component you want to use:
import { 	MatButtonModule, MatCheckboxModule, MatListModule, MatToolbarModule,
					MatTabsModule, MatIconModule, MatInputModule, MatSnackBarModule,
					MatExpansionModule, MatDatepickerModule, MatCardModule } from '@angular/material';
// Components
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { GmapComponent} from './gmap/gmap.component';
import { GeolocationService } from './services/geolocation.service';
import { environment } from '../environments/environment';
import { ServiceComponent } from './service/service.component';
import { Globals } from './globals.service';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { RequestsComponent } from './requests/requests.component';
import { WellnessServiceComponent } from './wellness-service/wellness-service.component';
import { CateringServiceComponent } from './catering-service/catering-service.component';
import { MusicServiceComponent } from './music-service/music-service.component';
import { LifeServiceComponent } from './life-service/life-service.component';
import { RegisterProviderComponent } from './register-provider/register-provider.component';
import { AboutBookitComponent } from './about-bookit/about-bookit.component';

// Services
@NgModule({
	declarations: [
		AppComponent,
		InfoComponent,
		FrontPageComponent,
		GmapComponent,
		ServiceComponent,
		ProvidersListComponent,
		RequestsComponent,
		WellnessServiceComponent,
		CateringServiceComponent,
		MusicServiceComponent,
		LifeServiceComponent,
		RegisterProviderComponent,
		AboutBookitComponent,
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
		ReactiveFormsModule,
		MatCardModule,
		CarouselModule.forRoot(),
	],
	providers: [GeolocationService, Globals],
	bootstrap: [AppComponent],
})
export class AppModule { }
