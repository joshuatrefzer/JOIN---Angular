import { Component, OnDestroy, OnInit } from '@angular/core';
import { TemplateService } from '../services/template.service';
import { TaskService } from '../services/task.service';
import { PoupService } from '../services/poup.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {

  constructor(
    public templateService: TemplateService,
    public taskService: TaskService,
    public popupService: PoupService,
    
    ) { }


  ngOnInit(): void {
    this.templateService.board = true;
    this.taskService.getTasks();

  }


  ngOnDestroy(): void {
    this.templateService.board = false;

  }


  addTaskPopup(status:string) {
    this.popupService.behindPopupContainer = true;
    this.popupService.addTaskPopup = true;
  }

}
