import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Club } from '../dto/club.dto';
import { ClubService } from '../services/club.service';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-home',
  styleUrls: ['club-profile.component.css'],
  templateUrl: './club-profile.component.html',
})
export class ClubProfileComponent implements OnInit {
  constructor(private clubService: ClubService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  club: Club = {
    id: '',
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
