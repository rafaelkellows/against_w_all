import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Header } from '../../header/header';
@Component({
  selector: 'app-quantity',
  imports: [CommonModule, Header],
  templateUrl: './quantity.html',
  styleUrl: './quantity.css'
})
export class Quantity {
  @Input() currentPage: string = ''; // Declares an input property
  @Input() maxJogadores:number = 0;
  @Output() execAudioHover = new EventEmitter<any>();
  @Output() execAudioSelected = new EventEmitter<any>();
  @Output() newCurrentPage = new EventEmitter<any>();


  callAudioHover(){
     this.execAudioHover.emit();
  }
  callAudioSelected(){
     this.execAudioSelected.emit();
  }

  constructor( private titlePage: Title){
    this.titlePage.setTitle("Against W.All | AWA - How many players will play?");
  }

}
