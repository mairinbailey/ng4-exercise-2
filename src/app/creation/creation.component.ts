import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  @Output() serverCreated= new EventEmitter <{serverName: string, serverContent: string}>();

  @Output() blueprintCreated= new EventEmitter <{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
