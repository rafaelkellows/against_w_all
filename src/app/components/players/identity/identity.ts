import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Header } from '../../header/header';

@Component({
  selector: 'app-identity',
  imports: [CommonModule, Header],
  templateUrl: './identity.html',
  styleUrl: './identity.css'
})
export class Identity {
  @Input() currentPage: string = ''; // Declares an input property
  @Input() maxJogadores:number = 0;
  @Input() intPlayers:number = 0;
  @Output() execAudioHover = new EventEmitter<any>();
  @Output() execAudioSelected = new EventEmitter<any>();
  @Output() newCurrentPage = new EventEmitter<any>();
  
  @Input() players_name: string[] = [];
  @Output() newItemEvent = new EventEmitter();
  @Output() newItemID = new EventEmitter();

  callAudioHover(){
     this.execAudioHover.emit();
  }
  callAudioSelected(){
     this.execAudioSelected.emit();
  }

  constructor( private titlePage: Title){
    this.titlePage.setTitle("Against W.All | AWA - Names");
  }


  nextStep(): void {
    if(this.players_name.length === this.intPlayers){
      this.newCurrentPage.emit('categories');
    }else{
      console.log("no currIndentity selected", this.players_name);
      alert('No players selected');
    }
  }

  addItem(item: any, itemID:any) {
    // console.log(item,'itemID',itemID);
    this.newItemEvent.emit([item, itemID]); // Emit the item
    this.newItemID.emit([item, itemID]); // Emit the item
  }
  onInputChange(event: Event, inter: Number ) {
    const inputElement = event.target as HTMLInputElement;
    this.addItem(inputElement.value, inter)
    // if(this.players_name.length === this.intPlayers){

    // }
  }
}
