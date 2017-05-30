import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  @Output() serverCreated= new EventEmitter <{serverName: string, serverContent: string}>();

  @Output() blueprintCreated= new EventEmitter <{serverName: string, serverContent: string}>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
