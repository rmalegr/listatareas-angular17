import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'listaTareasApp';

  listaTareas: string[] = [];
  nuevatarea: string = '';
  private _tareasServices = inject(TareasService);

  ngOnInit(): void {
    this.listaTareas = this._tareasServices.getTareas();
  }
}
