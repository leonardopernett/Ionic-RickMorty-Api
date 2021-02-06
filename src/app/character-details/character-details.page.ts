import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Character } from '../interface/character.interface';
@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {
  character:Character;
  constructor(
    private activateRouter: ActivatedRoute,
    private http:HttpClient
    ) { }

  ngOnInit() {
   
    if(this.activateRouter.snapshot.params){
      const {id} = this.activateRouter.snapshot.params
      this.http.get(`${environment.api}/${id}`).subscribe(
      (res:any)=>{
          this.character= res     
        }
      )
    }

  }

}
