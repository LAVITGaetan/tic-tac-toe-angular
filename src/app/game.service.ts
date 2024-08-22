import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  currentPlayer = signal('player_0')
  currentRound = signal('1')

  getCurrentPlayer() {
    return this.currentPlayer
  }

  getCurrentRound() {
    return this.currentRound
  }
  
  setCurrentPlayer(player: string) {
    this.currentPlayer.set(player)
  }
  
  setCurrentRound(round: string) {
    this.currentPlayer.set(round)
  }

}
