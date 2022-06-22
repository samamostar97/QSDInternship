import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-side-buttons',
  templateUrl: './side-buttons.component.html',
  styleUrls: ['./side-buttons.component.css']
})
export class SideButtonsComponent implements OnInit {

  @Output() tabId = new EventEmitter<string>();
  @Input() selected='';
  selectedChild=String(this.tabId);
  constructor() { }

  ngOnInit(): void {
    this.tabChange(String(this.selected));
  }
  tabChange(value:string) {
    this.tabId.emit(value);
    this.selectedChild=value;
  }
  checkColor(value:any)
  {
    return this.selectedChild==value;
  }

}
