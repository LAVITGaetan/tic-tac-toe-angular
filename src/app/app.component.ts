import { Component, signal } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private gameService: GameService) { }
  title = 'tic-tac-toe';
  currentPlayer = signal('')
  currentRound = signal(1)
  player1Data: any = 'Joueur 1'
  player2Data: any = 'Joueur 2'
  ngOnInit() {
    this.currentPlayer = this.gameService.getCurrentPlayer()
    this.currentRound = this.gameService.getCurrentRound()
  }
}
