import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label-text',
  templateUrl: './label-text.component.html',
  styleUrls: ['./label-text.component.css']
})
export class LabelTextComponent implements OnInit {

  @Input() idCampo = '';
  @Input() textoLabel = '';

  constructor() { }

  ngOnInit(): void {
  }

}
