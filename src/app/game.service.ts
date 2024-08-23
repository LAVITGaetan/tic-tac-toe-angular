import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  currentPlayer = signal('player_0')
  currentRound = signal(1)
  player_0Score = signal(0)
  player_1Score = signal(0)

  getCurrentPlayer() {
    return this.currentPlayer
  }

  getCurrentRound() {
    return this.currentRound
  }

  getPlayer0Score() {
    return this.player_0Score
  }

  getPlayer1Score() {
    return this.player_1Score
  }
  
  setCurrentPlayer(player: string) {
    this.currentPlayer.set(player)
  }
  
  setCurrentRound(round: number) {
    this.currentRound.set(round)
  }

  updateRound() {
    this.currentRound.set(this.currentRound() + 1)
  }

  updatePlayer0Score() {
    this.player_0Score.set(this.player_0Score() + 1); 
  }
  updatePlayer1Score() {
    this.player_1Score.set(this.player_1Score() + 1);
  }
}
