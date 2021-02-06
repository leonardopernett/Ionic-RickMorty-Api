import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {tap} from 'rxjs/operators'
@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
 characters= []
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCharacters()
  }

  getCharacters(){
    this.http.get<any>(environment.api).pipe(
      tap((res)=>{
          const {results} = res
          this.characters = results
        }
      )
    ).subscribe()
  }
}
