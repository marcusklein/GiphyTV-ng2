import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GifService, IGif } from '../api';

@Component({
    moduleId: module.id,
    selector: 'tv',
    templateUrl: 'tv.component.html',
    styleUrls: ['tv.component.css'],
    providers: [ GifService ]
})

export class TVComponent implements OnInit {
    backgroundGif: IGif;
    searchTerm: string;
    private sub: any;
    
    constructor(private _gifService: GifService, private Router: Router, private route: ActivatedRoute) {
        
    }
    
    ngOnInit() {       
        this.sub = this.route.params.subscribe(params => {
            this.searchTerm = params['searchTerm'];
            
            if(!this.searchTerm) {
                this.searchTerm = "default";
            }
            
        });
                
        this._gifService.getRandomGif(this.searchTerm).then(gif => {
            this.backgroundGif = gif;
            this.loop();
        });
    }
    
    loop() {
        setInterval(() => {
            this.getBackgroundGif();
        }, 10000)
    }
    
    getBackgroundGif() {
        this._gifService.getRandomGif(this.searchTerm).then(gif => {
            this.backgroundGif = gif;
        });
    }
    
    replaceAll( str: string, search: string, replacement: string) {  
        return str.replace(new RegExp(search, 'g'), replacement);
    };
}

