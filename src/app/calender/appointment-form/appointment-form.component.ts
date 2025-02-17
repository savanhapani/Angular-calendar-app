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
      date: ["", Validators.required],
      title: ['', Validators.required]
    });
  }
  get f()
  {
      return this.form.controls;
  }
  public getFormGroup(): FormGroup {
      return this.form;
  }
  onSubmit() {
    if (this.form.valid) {
      const { date, title } = this.form.value;
      this.appointmentAdded.emit({ date: new Date(date), title });
      this.form.reset();
    }
  }
}
