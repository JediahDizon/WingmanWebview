import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* 3RD PARTY LIBRARY IMPORTS */
import { AgmCoreModule } from 'angular2-google-maps/core';
import { LaddaModule } from 'angular2-ladda';

/* COMPONENT IMPORTS */
import { AppComponent } from './app.component';
import { MapComponent } from './webview/map/map.component';
import { SearchComponent } from './webview/search/search.component';
import { WebviewComponent } from './webview/webview.component';
import 'hammerjs';
import 'hammer-timejs';

@NgModule({
	declarations: [
		AppComponent,
		MapComponent,
		SearchComponent,
		WebviewComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyA1nulCnFQd4aTgAERCWMUrhDitdkCO7Nc'
		}),
		LaddaModule.forRoot({
			style: "expand-right",
            spinnerColor: "#CCC"
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
