import { Component, OnInit } from '@angular/core';

import { TicTacToeService } from './shared';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  constructor(private ticTacToeService: TicTacToeService) { }

  ngOnInit(): void {
    this.ticTacToeService.initialize();
  }

  get showStart(): boolean {
    return this.ticTacToeService.showStart;
  }

  get showBoard(): boolean {
    return this.ticTacToeService.showBoard;
  }
  
  get showEnd(): boolean {
    return this.ticTacToeService.showEnd;
  }

  get startGame(): void {
    return this.ticTacToeService.startGame();
  }


}
