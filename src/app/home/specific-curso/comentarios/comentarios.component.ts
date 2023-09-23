import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  enabled = true;
  comments: string[] = [];
  newComment: string = '';
  commentItemClass: string = 'comment-item';

  ngOnInit(): void {
    this.comments = ['El pollo, mas si esta en el plato jjjj'
    , 'El conejo, mejor asado que en sopa'];
  }

  addComment(): void {
    if (this.newComment.trim() !== '') {
      this.comments.push(this.newComment);
      this.newComment = '';
    }
  }

}
