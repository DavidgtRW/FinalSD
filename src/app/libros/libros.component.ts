import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/model/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  librosList: Libro [] = [
    new Libro('1', 'libro1', 3, 3),
    new Libro('2', 'libro2', 4, 4),
    new Libro('3', 'libro3', 2, 2),
    new Libro('4', 'libro4', 1, 1)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  prb(){
    
  }

}
