import { Component, Input } from "@angular/core";

import { Task } from '../model/task';

@Component({ 
    moduleId: module.id,
    selector: 'app-card',
    templateUrl: 'templates/card.component.html',
    styleUrls: [ 'styles/card.component.css' ]
})

export class CardComponent { 
    @Input() task: Task;

    statusToggle() {
        this.task.completed = !this.task.completed;
    }
}