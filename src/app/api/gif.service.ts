import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export interface IGif{
	url: string,
	webp: string
}

@Injectable()
export class GifService {
    giphyApiUrl = 'http://api.giphy.com/v1/gifs/';
    giphyApiKey = 'dc6zaTOxFJmzC';
    giphyRating = 'pg';
    
    private gif: Promise<IGif>
    
    constructor(private _http: Http){
		
	}
    
    getRandomGif(searchString?: string): Promise<IGif> {
                
        var query = `${this.giphyApiUrl}random?api_key=${this.giphyApiKey}&rating=${this.giphyRating}`;
        if (searchString) {
            query += `&tag=${searchString}`;
        }
        var result = this._http.get(query)
            .map(response => {
                let res = response.json().data;
                let gif = {url: res.image_url, webp:res.webp}
                
                return <IGif>gif;
            })
            .toPromise()
            .catch(this.handleError);
        
        return result;
    }
    
    private handleError(error: Response){
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}