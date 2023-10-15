import { Component } from '@angular/core';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  constructor(public templateService: TemplateService){
  }
  
}