import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Header } from '../header/header';
@Component({
  selector: 'app-start',
  imports: [Header],
  templateUrl: './start.html',
  styleUrl: './start.css'
})
export class Start {
  @Input() currentPage: string = ''; // Declares an input property
  @Output() execAudioHover = new EventEmitter<any>();
  @Output() execAudioSelected = new EventEmitter<any>();
  @Output() newCurrentPage = new EventEmitter<any>();


  callAudioHover(){
     this.execAudioHover.emit();
  }
  callAudioSelected(){
     this.execAudioSelected.emit();
     this.newCurrentPage.emit('quantity');
  }

  constructor( private titlePage: Title){
    this.titlePage.setTitle("Against W.All | AWA - Let's Play!");
  }

}
