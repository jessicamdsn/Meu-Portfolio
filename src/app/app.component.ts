import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PgInicialComponent } from "./components/pg-inicial/pg-inicial.component";
import { GithubComponent } from "./components/github/github.component";
import { SkillsComponent } from './components/Contagem/contagem.component';
import { DivisaoComponent } from './components/divisao/divisao.component';
import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';
import { CarrosselComponent } from "./components/carrossel/carrossel.component";
import { ContatoComponent } from "./components/contato/contato.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PgInicialComponent,
    GithubComponent,
    SkillsComponent,
    DivisaoComponent,
    SobreMimComponent,
    CarrosselComponent,
    ContatoComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Meu-Portifolio';
}
