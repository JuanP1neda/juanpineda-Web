import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { inject } from '@vercel/analytics';

inject();

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  
}
