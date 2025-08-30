import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-players',
  imports: [],
  templateUrl: './players.html',
  styleUrl: './players.css'
})
export class Players {
  @Input() currentPage: string = ''; // Declares an input property
  @Output() execAudioHover = new EventEmitter<any>();
  @Output() newCurrentPage = new EventEmitter<any>();
  
  // execAudioHover
}
