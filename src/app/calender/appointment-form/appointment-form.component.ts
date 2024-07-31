import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.scss'
})
export class AppointmentFormComponent {
  form: FormGroup;

  @Output() appointmentAdded = new EventEmitter<{ date: Date; title: string }>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      date: [null, Validators.required],
      title: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { date, title } = this.form.value;
      this.appointmentAdded.emit({ date: new Date(date), title });
      this.form.reset();
    }
  }
}
