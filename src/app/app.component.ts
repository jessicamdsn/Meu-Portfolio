import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PgInicialComponent } from "./components/pg-inicial/pg-inicial.component";
import { GithubComponent } from "./components/github/github.component";
import { SkillsComponent } from './components/skills/skills.component';
import { DivisaoComponent } from './components/divisao/divisao.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PgInicialComponent, GithubComponent, SkillsComponent, DivisaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Meu-Portifolio';
}
