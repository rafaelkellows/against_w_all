import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Actions } from './components/button/actions/actions';
import { Home } from './components/home/home';
import { Start } from './components/start/start';
import { Quantity } from './components/players/quantity/quantity';

@Component({
  selector: 'app-root',
  imports: [ Home, Start, Quantity, Actions],
  template: `
  <main>

      @switch (currentPage) {
        @case ('home') {
          <app-home [currentPage]="currentPage" (newCurrentPage)="changePage($event)" (execAudioHover)="audioHover()" (execAudioSelected)="audioSelected()"></app-home>
        }
        @case ('start') {
          <app-start [currentPage]="currentPage" (newCurrentPage)="changePage($event)" (execAudioHover)="audioHover()" (execAudioSelected)="audioSelected()"></app-start>
        }
        @case ('quantity') {
          <app-actions class="w-full"></app-actions>
          <app-quantity [currentPage]="currentPage" [maxJogadores]="maxJogadores" (newCurrentPage)="changePage($event)" (execAudioHover)="audioHover()"  (execAudioSelected)="audioSelected()"></app-quantity>
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

  changePage(data: any){
    this.currentPage = data;
    if(data == 'start'){
      this.audioBackground();
    }
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
