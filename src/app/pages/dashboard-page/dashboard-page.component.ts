import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
  imports: [CommonModule]
})
export class DashboardPageComponent implements OnInit {
  catFact: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // for instantiate
    this.getNewCatFact();
  }

  getNewCatFact(): void {
    this.http.get<any>('https://catfact.ninja/fact').subscribe({
      next: (data) => {
        this.catFact = data.fact;
      },
      error: (err) => {
        console.error('Error fetching cat fact', err);
      }
    });
  }
}

