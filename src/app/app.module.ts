import { FormsModule } from '@angular/forms';
import { FamilyService } from './family.service';
import routes from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SoonComponent } from './soon/soon.component';
import { ManageComponent } from './manage/manage.component';
import { PetService } from './pet.service';
import { PetComponent } from './manage/pet/pet.component';
import { FamilyComponent } from './manage/family/family.component';
import { FamilyEditorComponent } from './manage/family/family-editor/family-editor.component';
import { FamilyListComponent } from './manage/family/family-list/family-list.component';

@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		SoonComponent,
		ManageComponent,
		PetComponent,
		FamilyComponent,
		FamilyEditorComponent,
		FamilyListComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes, { enableTracing: true }),
		FormsModule
	],
	providers: [PetService, FamilyService],
	bootstrap: [AppComponent]
})
export class AppModule { }
