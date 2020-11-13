import { Component, OnInit } from '@angular/core';
import { Club } from '../dto/club.dto';
import { ClubService } from '../services/club.service';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private clubService: ClubService) { }

  ngOnInit(): void {
    this.clubService.getAllClubs().subscribe(this.myObserver);
  }

  private myObserver = {
    next: theseClubs => this.setClubs(theseClubs),
    error: err => console.error(err)
  };

  private setClubs(theseClubs: any) {
    this.clubs = theseClubs;
  }
  public clubs: Club[];
}
