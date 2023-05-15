import { Component, ElementRef, ViewChild } from '@angular/core';
import {KpointAngularPlayerComponent} from 'kpoint-angular-player'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('player', { static: true })
  player!: KpointAngularPlayerComponent;
  @ViewChild("load", { static: true })
  load!: ElementRef;
  @ViewChild("state", { static: true })
  state!: ElementRef;
  @ViewChild("time", { static: true })
  time!: ElementRef;
  @ViewChild("error", { static: true })
  error!: ElementRef;

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    
  }
  
  getcurrentTime() {
    console.log(this.player.getCurrentTime());
  }

  seekTo(time: any) {
    this.player.seekTo(time);
  }

  replayVideo() {
    this.player.replayVideo();
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  muteVideo() {
    this.player.mute();
  }

  unmuteVideo() {
    this.player.unmute();
  }

  getVideoDuration() {
    console.log(this.player.getDuration());
  }
  getPlayerInfo() {
    console.log(this.player.getPlayerInfo());
  }

  getPlayerState() {
    console.log(this.player.getPlayState());
  }

  onStateChange = (evt: any) => {
    console.log('onStateChange: ' + evt.data);
    this.state.nativeElement.innerHTML = "STATE"+ evt.data;
  }

  onTimeupdate = (timeMs: any) => {
    console.log('Time update, new time: ' + parseFloat(timeMs).toFixed(2)); 
    this.time.nativeElement.innerHTML = "Time: "+ parseFloat(timeMs).toFixed(2);
  }

  onError = (evt: any) => {
    console.log('onError: ' + evt);
    this.error.nativeElement.innerHTML = "ERROR OCCURED";
  }

  onload = () => {
    console.log('Video loaded');
    this.load.nativeElement.innerHTML = "PLAYER LOADED";
  }
}
