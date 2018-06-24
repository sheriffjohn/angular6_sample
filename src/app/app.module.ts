import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { KomponentkartanModule } from 'vgr-komponentkartan';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { FormsComponent } from './forms/forms.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { ExampleComponent } from './example/example.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    FormsComponent,
    CardComponent,
    ListComponent,
    ExampleComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    KomponentkartanModule,
    RouterModule.forRoot([
      { path: 'start', component: StartComponent },
      { path: 'list', component: ListComponent },
      { path: 'card', component: CardComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'example', component: ExampleComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
