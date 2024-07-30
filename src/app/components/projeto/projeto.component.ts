import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projeto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projeto.component.html',
  styleUrl: './projeto.component.css'
})
export class ProjetoComponent {

  @Input() imgUrls: string[] = [];
  @Input() sobreprojeto:string = '';
  @Input() gifUrl: string = '';
  @Input() gitUrl: string = '';
  @Input() url: string = '';

  @Input() customClass: string = ''; 
}
