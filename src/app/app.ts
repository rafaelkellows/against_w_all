import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Actions } from './components/button/actions/actions';
import { Home } from './components/home/home';
import { Start } from './components/start/start';
import { Quantity } from './components/players/quantity/quantity';
import { Identity } from './components/players/identity/identity';

@Component({
  selector: 'app-root',
  imports: [ Home, Start, Quantity, Identity, Actions],
  template: `
  <main>

      @switch (currentPage) {
        @case ('home') {
          <app-home [currentPage]="currentPage" [intPlayers]="intPlayers" (newCurrentPage)="changePage($event)" (execAudioHover)="audioHover()" (execAudioSelected)="audioSelected()"></app-home>
        }
        @case ('start') {
          <app-start [currentPage]="currentPage" [intPlayers]="intPlayers" (newCurrentPage)="changePage($event)" (execAudioHover)="audioHover()" (execAudioSelected)="audioSelected()"></app-start>
        }
        @case ('quantity') {
          <app-actions class="w-full"></app-actions>
          <app-quantity [currentPage]="currentPage" [intPlayers]="intPlayers" (newIntPlayers)="changePlayers($event)" [maxJogadores]="maxJogadores" (newCurrentPage)="changePage($event)" (execAudioHover)="audioHover()" (execAudioSelected)="audioSelected()"></app-quantity>
        }
        @case ('identity') {
          <app-actions class="w-full"></app-actions>
          <app-identity [players_name]="players_name" [currentPage]="currentPage" [maxJogadores]="maxJogadores" [intPlayers]="intPlayers" (newItemEvent)="pushToArray($event)" (newIntPlayers)="changePlayers($event)" (newCurrentPage)="changePage($event)" (execAudioHover)="audioHover()"  (execAudioSelected)="audioSelected()"></app-identity>
        }
        @default {
          <app-home></app-home>
        }
      }
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('awa_game');
  currentPage:string = 'home';
  maxJogadores:number = 5;
  meusJogadores = 0; // Many Players
  intPlayers:number = 0;
  players_name:string[] = []; // 'Rafael Kellows','Renato Nasc.'
  
  changePage(data: any){
    this.currentPage = data;
    if(data == 'start'){
      this.audioBackground();
    }
  }

  changePlayers(data: any){
    this.intPlayers = data;
    
  }

  pushToArray(item: any) {
   
    // console.log( 'this.meusJogadores = ' + this.meusJogadores )
    // console.log( 'this.players_name = ' + this.players_name + this.players_name.length )
    if(!this.players_name.length && this.players_name.length < this.meusJogadores){
      // alert('Vou adicionar ' + item[0] + ' item ' + this.players_name.length + ' - ' + this.meusJogadores);
      this.players_name.push(item[0]); // Push the received item into the array
    }else{
      
      if(!this.players_name[item[1]]){
        // alert('Vou adicionar ' + item[0] + '' + this.players_name.length + ' - ' + this.meusJogadores);
        this.players_name.push(item[0]);
      }else{
        // alert('Vou mudar item ' + this.players_name[item[1]] + ' por ' + item[0])
        this.players_name[item[1]] = item[0];
      }
    }
    // this.myNumber = Math.floor(this.catGameItens.length / this.meusJogadores);
    console.log( 'this.players_name = ' + this.players_name + this.players_name.length )
    
  }

  audioHover() {
    const audioHover = new Audio();
    audioHover.src = '../../audios/hover_button.mp3';
    audioHover.load(); // Optional: Preloads the audio
    audioHover.play();
  }

  audioSelected() {
    const audioSelected = new Audio();
    audioSelected.src = '../../audios/selected_button.mp3';
    audioSelected.load(); // Optional: Preloads the audio
    audioSelected.play();    
  }

  audioBackground() {
    const audioBackground = new Audio();
    audioBackground.src = '../../audios/cinematic_action.mp3';
    audioBackground.load(); // Optional: Preloads the audio
    audioBackground.volume = 0.3;
    audioBackground.loop;
    audioBackground.play();
  }

}
