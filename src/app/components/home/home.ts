import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Header } from '../header/header';


@Component({
  selector: 'app-home',
  imports: [CommonModule, Header],
  templateUrl: './home.html',
  styleUrl: './home.css' 
})
export class Home{
  @Input() currentPage: string = ''; // Declares an input property
  @Output() execAudioHover = new EventEmitter<any>();
  @Output() execAudioSelected = new EventEmitter<any>();
  @Output() newCurrentPage = new EventEmitter<any>();


  callAudioHover(){
     this.execAudioHover.emit();
  }
  callAudioSelected(){
     this.execAudioSelected.emit();
    this.newCurrentPage.emit('start');
  }

  constructor( private titlePage: Title){
    this.titlePage.setTitle("Against W.All | AWA - Welcome.");
  }
}
