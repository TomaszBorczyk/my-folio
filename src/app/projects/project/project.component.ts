import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
    selector: 'project',
    templateUrl: 'project.component.html',
    styleUrls: ['project.component.scss', 'project.media.component.scss']
})
export class ProjectComponent implements OnInit {
    @Input()
        project: Object;

    constructor() {  }

  ngOnInit() {}
}
