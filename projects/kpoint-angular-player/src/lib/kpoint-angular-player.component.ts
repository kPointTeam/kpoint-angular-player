import { Component, ElementRef, Input, AfterViewInit, OnInit } from '@angular/core';
declare const window: any;
declare var JSON: any;

@Component({
  selector: 'kpoint-player',
  template: `
  <div *ngIf= "packageId; else elseBlock"
      [attr.data-hostname]="domain" 
      [attr.data-videoid]="videoId"
      [attr.data-embedid]="packageId"
      [attr.data-personalized-str]="personalizedStr"
      [style.height]="height"
      [style.width]="width"
      [attr.data-samesite]="samesite === 'false' ? 'false' : 'true'"
    >
  </div>

 <ng-template #elseBlock>
    <div
      [attr.data-video-host]="domain" 
      [attr.data-kvideo-id]="videoId"
      [attr.data-video-params]="getStringifiedParams(videoParams)"
      [attr.data-widgets-config]="getStringifiedParams(widgetsConfig)"
      [attr.data-personalized-str]="personalizedStr"
      [style.height]="height"
      [style.width]="width"
      [attr.data-samesite]="samesite === 'false' ? 'false' : 'true'"
    >
    </div>
  </ng-template>
  `,
  styles: [
  ]
})

export class KpointAngularPlayerComponent {
  @Input()
  domain!: string;
  @Input()
  videoId!: string;
  @Input()
  playerId!: string;
  @Input()
  videoParams!: object;
  @Input()
  widgetsConfig!: object;
  @Input()
  width!: string;
  @Input()
  height!: string;
  @Input()
  samesite!: string;
  @Input()
  packageId!: string;
  @Input()
  personalizedStr!: String;
  @Input()
  onStateChange!: (args: any) => void;
  @Input()
  onTimeupdate!: (args: any) => void;
  @Input()
  onError!: (args: any) => void;
  @Input()
  onload!: (args: any) => void;
  private kPlayer: any;
  audioTracksLoaded: any;

  constructor(private elementRef: ElementRef) {
    
  }

  ngAfterViewInit(): void {
    let domainSuffix = this.packageId ? "videofront-embed" : "videofront-vega";
    let script = document.getElementById('videofront-vega')as HTMLScriptElement;
    if (script != null) {
      document.body.removeChild(script);
    }
    script = document.createElement('script');
    if(this.samesite === "false") {
      script.src = `https://assets.kpoint.com/orca/media/embed/${domainSuffix}.js`;
    }
    else {
      script.src = `https://${this.domain}/assets/orca/media/embed/${domainSuffix}.js`;
    }
    script.id = 'videofront-vega';
    script.async = true;
    document.body.appendChild(script);
    const setKPlayer = (Player: any) => {
      this.kPlayer = Player;
      if (this.kPlayer) {
        if (this.onTimeupdate) {
          this.kPlayer.addEventListener(this.kPlayer.events.timeUpdate, this.onTimeupdate);
        }
        if (this.onStateChange) {
          this.kPlayer.addEventListener(this.kPlayer.events.onStateChange, this.onStateChange);
        }
        if (this.onError) {
          this.kPlayer.addEventListener(this.kPlayer.events.error, this.onError);
        }
        if (this.onload) {
          this.kPlayer.addEventListener(this.kPlayer.events.loaded, this.onload);
        }
        this.kPlayer.addEventListener(this.kPlayer.events.audioTracksLoaded, this.onAudioTracksLoaded);
      }
    };
    window.onkPointPlayerReadyForExt = (player: any) => setKPlayer(player);
  }

  getStringifiedParams(params:any) {
    return JSON.stringify(params);
  }

  public onAudioTracksLoaded = (data: any): void => {
    console.log("Audio tracks loaded: ", data);
  }

  public getDuration(): any {
    return this.kPlayer.getDuration()
  }

  public getPlayState():any {
    return this.kPlayer.getPlayState()
  }

  public getCurrentTime():any {
    return this.kPlayer.getCurrentTime()
  }

  public mute():void {
    this.kPlayer.mute()
  }

  public unmute():void {
    this.kPlayer.unmute()
  }

  public playVideo():void {
    this.kPlayer.playVideo()
  }

  public replayVideo():void {
    this.kPlayer.replayVideo()
  }

  public pauseVideo():void {
    this.kPlayer.pauseVideo()
  }

  public getPlayerInfo():void {
    return this.kPlayer.info;
  }

  public seekTo(time: any): void{
    this.kPlayer.seekTo(time);
  }

  public setAudio(langCode: any): void{
    this.kPlayer.setAudio(langCode);
  }

  public setId(): string {
    return this.kPlayer.id;
  }
}
