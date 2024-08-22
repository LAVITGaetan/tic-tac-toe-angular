import { Component, signal } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  currentWinner: string = ''
  round: number = 0

  gameCells: any = [
    {
      case: 0,
      isChecked: false,
      player: '',
    },
    {
      case: 1,
      isChecked: false,
      player: '',
    },
    {
      case: 2,
      isChecked: false,
      player: '',
    },
    {
      case: 3,
      isChecked: false,
      player: '',
    },
    {
      case: 4,
      isChecked: false,
      player: '',
    },
    {
      case: 5,
      isChecked: false,
      player: '',
    },
    {
      case: 6,
      isChecked: false,
      player: '',
    },
    {
      case: 7,
      isChecked: false,
      player: '',
    },
    {
      case: 8,
      isChecked: false,
      player: '',
    },
  ]

  player0Table: string[] = []
  player1Table: string[] = []

  constructor(private gameService: GameService) { }

  markItem(item: string) {
    let selectedCase = this.gameCells[item]
    if (!selectedCase.isChecked) {
      let currentPlayer = this.gameService.getCurrentPlayer()
      if (currentPlayer() === 'player_0') {
        this.player0Table.push(item.toString())
        this.gameService.setCurrentPlayer('player_1')
      } else {
        this.player1Table.push(item.toString())
        this.gameService.setCurrentPlayer('player_0')
      }
      selectedCase.player = currentPlayer()
      selectedCase.isChecked = true
      this.checkVictory(currentPlayer())
    }
  }

  checkVictory(currentPlayer: string) {
    let winningCombinations = [
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['0', '4', '8'],
      ['2', '4', '6']
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const combination = winningCombinations[i];
      if (this.player1Table.includes(combination[0])
        && this.player1Table.includes(combination[1])
        && this.player1Table.includes(combination[2])) {
        alert('winner 1')
        this.currentWinner = currentPlayer
        this.round += 1
      }
      if (this.player0Table.includes(combination[0])
        && this.player0Table.includes(combination[1])
        && this.player0Table.includes(combination[2])) {
        alert('winner 0')
        this.currentWinner = currentPlayer
        this.round += 1
      }
    }
  }
}
