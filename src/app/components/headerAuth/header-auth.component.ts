import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-auth',
  templateUrl: './header-auth.component.html',
  styleUrls: ['./header-auth.component.css']
})
export class HeaderAuthComponent implements OnInit {

  @Input()
  caminho: string

  constructor() { }

  ngOnInit(): void {
  }
}
