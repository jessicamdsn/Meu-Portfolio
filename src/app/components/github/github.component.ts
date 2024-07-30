import { Component  } from '@angular/core';
import { ProjetoComponent } from '../projeto/projeto.component';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [ProjetoComponent],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css'
})
export class GithubComponent {
 
}
