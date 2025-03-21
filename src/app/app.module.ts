import { NgModule, Renderer2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'; 
import {MatCheckboxModule} from '@angular/material/checkbox';// Importiere MatFormFieldModule
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PwresetComponent } from './pwreset/pwreset.component';
import { TemplateComponent } from './template/template.component';
import { SummaryComponent } from './summary/summary.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LegalsComponent } from './legals/legals.component';
import { BoardComponent } from './board/board.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';

import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TaskComponent } from './task/task.component';
import { TaskForViewComponent } from './task-for-view/task-for-view.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoaderComponent } from './loader/loader.component';
import { AboutComponent } from './about/about.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({ declarations: [
        AppComponent,
        StartscreenComponent,
        LoginComponent,
        SignUpComponent,
        PwresetComponent,
        TemplateComponent,
        SummaryComponent,
        AddtaskComponent,
        ContactsComponent,
        LegalsComponent,
        BoardComponent,
        EditContactComponent,
        AddContactComponent,
        TaskComponent,
        TaskForViewComponent,
        LoaderComponent,
        AboutComponent,
        ResetPasswordComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatCheckboxModule,
        FormsModule,
        MatSelectModule,
        MatDatepickerModule,
        MatSnackBarModule,
        MatNativeDateModule,
        DragDropModule,
        MatProgressBarModule], providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
