import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { CardComponent } from './shared/card/card.component';
// import { NewTaskComponent } from './tasks/new-task/new-task.component';
// import { TaskComponent } from './tasks/task/task.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
  ],
  imports: [BrowserModule, SharedModule, TasksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
