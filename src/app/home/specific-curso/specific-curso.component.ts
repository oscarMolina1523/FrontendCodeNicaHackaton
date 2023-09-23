import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specific-curso',
  templateUrl: './specific-curso.component.html',
  styleUrls: ['./specific-curso.component.css']
})
export class SpecificCursoComponent implements OnInit {
  panelOpenState=false;
  touchedOpenState=false;
  cursoUrl?:string;
  cursoDescription?:string;
  CursoVideo?:string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.cursoUrl = params['CursoUrl'];
      this.cursoDescription = params['CursoDescription'];
      this.CursoVideo=params['CursoVideoUrl'];

    });
  }
}
