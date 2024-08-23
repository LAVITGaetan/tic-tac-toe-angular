import { Component, Input, signal } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input() playerData: any
  constructor(private gameService: GameService) { }
  player_0Score = signal(0)
  player_1Score = signal(0)
  ngOnInit() {
    this.player_0Score = this.gameService.getPlayer0Score()
    this.player_1Score = this.gameService.getPlayer1Score()
  }
}
