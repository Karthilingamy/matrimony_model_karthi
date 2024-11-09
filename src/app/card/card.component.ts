import { animate, keyframes, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as kf from './keyframes';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
    ])
  ]
})
export class CardComponent {


  public usersurl = 'assets/profiles.json'
  public users :any;

  public index = 0;
  @Input()
  parentSubject!: Subject<any>;



  animationState!: string;
  showExtraInfo: boolean = false;
  constructor(private http: HttpClient) {


    
   }

  ngOnInit() {
   this.getData().subscribe((res:any)=>{
this.users = res
   })

    this.parentSubject.subscribe(event => {
      this.startAnimation(event)
    });
  }
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.usersurl);
  }

  startAnimation(state:any) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState(state:any) {
    this.animationState = '';
    this.index++;
  }


  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }

  toggleExtraInfo() {
    this.showExtraInfo = !this.showExtraInfo;
  }
}
