import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor() { }
"patientInformation": {
        "dob": "2010-05-20T12:33:52.119Z",
        "firstName": "CHRISTOPHER",
        "lastName": "LEWIS",
        "gender": "M",
        "note": "Some notes",
        "patientId": "PT9904"
    }
  ngOnInit(): void {
  }

}
