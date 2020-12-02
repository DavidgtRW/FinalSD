import { Component, OnInit } from '@angular/core';
import { Revista } from 'src/model/revista';

@Component({
  selector: 'app-revistas',
  templateUrl: './revistas.component.html',
  styleUrls: ['./revistas.component.css']
})
export class RevistasComponent implements OnInit {

  revistasList: Revista [] = [
    new Revista('1', 'revista1', 3, 3),
    new Revista('2', 'revista2', 4, 4),
    new Revista('3', 'revista3', 2, 2),
    new Revista('4', 'revista4', 1, 1)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  prb(){
    
  }

}
