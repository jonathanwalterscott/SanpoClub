import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Club } from '../dto/club.dto';
import { ClubService } from '../services/club.service';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-home',
  styleUrls: ['home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private clubService: ClubService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  club: Club = {
    name: '',
    description: ''
  };
  name = new FormControl({ value: this.club.name, disabled: false }, Validators.required);
  description = new FormControl({ value: this.club.description, disabled: false }, Validators.required);

  clubFormBuilder = this.formBuilder.group({
    name: this.name,
    description: this.description
  });

  addClub(club:Club) {
    this.clubService.addClub(club).subscribe();
  }
}
