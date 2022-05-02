import {Component, OnInit} from '@angular/core';
import {MessageService} from "../../services/message.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-public', templateUrl: './public.component.html', styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
    // public location: Location;
    public isCollapsed = false;
    public childRoutePath !: string;

    // private listTitles !: any[];
    constructor(private location: Location, private router: Router, private activeRoute: ActivatedRoute, private messageService: MessageService) {
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.messageService.getMessage().subscribe(message => {
                console.log(message);
                this.childRoutePath = message;
            });
        }, 0);
        const $page = document.getElementsByClassName('full-page')[0];
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('full-page-background');
        imageContainer.style.backgroundImage = 'url(/assets/bg_image.png)';
        $page.appendChild(imageContainer);
        this.router.events.subscribe(() => {
            this.isCollapsed = false;
        });
    }

    collapse(): void {
        this.isCollapsed = !this.isCollapsed;
    }

}
