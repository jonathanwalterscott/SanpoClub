import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Club } from "../dto/club.dto";

@Injectable({
  providedIn: 'root'
})

export class ClubService {
  constructor(private http: HttpClient) {
  }

  public addClub(club: Club): Observable<Club> {
    return this.http.post<Club>('https://localhost:44322/api/club/add', club);
  }

  public getClub(clubId: string): Observable<Club> {
    return this.http.get<Club>('https://localhost:44322/api/club/' + clubId);
  }

  public getAllClubs(): Observable<Club[]> {
    return this.http.get<Club[]>('https://localhost:44322/api/club');
  }

}
