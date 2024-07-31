import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDragStart } from '@angular/cdk/drag-drop';
import { BehaviorSubject } from 'rxjs';

interface Appointment {
  date: Date;
  title: string;
  id: string;
}

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrl: './calendar-view.component.scss'
})
export class CalendarViewComponent implements OnInit {
  appointments: Appointment[] = [];
  appointmentsSubject = new BehaviorSubject<Appointment[]>([]);
  dragAppointment: Appointment | null = null;

  ngOnInit(): void {
    this.appointmentsSubject.subscribe(appointments => this.appointments = appointments);
  }

  addAppointment(appointment: { date: Date; title: string }) {
    const id = new Date().getTime().toString();
    this.appointmentsSubject.next([...this.appointments, { ...appointment, id }]);
  }

  deleteAppointment(id: string) {
    this.appointmentsSubject.next(this.appointments.filter(app => app.id !== id));
  }

  onDragStart(event: CdkDragStart, appointment: Appointment) {
    this.dragAppointment = appointment;
  }

  onDrop(event: CdkDragDrop<Appointment[]> | any) {
    if (this.dragAppointment) {
      const updatedAppointments = this.appointments.map(app => 
        app.id === this.dragAppointment?.id 
          ? { ...app, date: new Date(event.item.element.nativeElement.dataset.date) } 
          : app
      );
      this.appointmentsSubject.next(updatedAppointments);
      this.dragAppointment = null;
    }
  }
}
