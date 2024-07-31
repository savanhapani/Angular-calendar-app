import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentItemComponent } from './appointment-item/appointment-item.component';
import {  RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

const routes : Routes = [
  {
    path:"",
    component: CalendarViewComponent
  }
]

@NgModule({
  declarations: [CalendarViewComponent,AppointmentFormComponent,AppointmentItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonModule,
    DragDropModule,
    
    
  ],
  providers:[MatDatepickerModule]
})
export class CalenderModule { }
