# kpoint-angular-player
An Angular component for embeding KPOINT video in your Angular application.


### Usage
```bash
npm install kpoint-angular-player
```   
### Advance Embedding Template
```template
   <kpoint-player #player
      [domain]="'service.domain'"
      [videoId]="'gcc-id'"
      [height]="'360px'"
      [width]="'640px'"
      [videoParams]="{search: 'false', toc: 'false'}"
      [onStateChange]="onStateChange"
      [onTimeupdate]="onTimeupdate"
      [onload]="onload"
      [onError]="onError"
    >
    </kpoint-player>
```
### Dynamic Embedding Template

```template
   <kpoint-player #player
      [domain]="'service.domain'"
      [videoId]="'gcc-id'"
      [height]="'360px'"
      [width]="'640px'"
      [packageId]="'package-id'"
      [onStateChange]="onStateChange"
      [onTimeupdate]="onTimeupdate"
      [onload]="onload"
      [onError]="onError"
    >
    </kpoint-player>
```
## Input Properties

Input Properties | Description | Default
---- | ----------- | -------
`domain` | Host name of your kPoint server. Typically of the form acme.kpoint.com. | `""`
`videoId` | Id of the video to load. | `""`
`width` | Set the width of the player | `640px`
`height` | Set the height of the player | `360px`
`videoParams` | Set the player parameters | `{}`
`widgetsConfig` | Set the widgets configuration | `{}`
`packageId` | Id of interactivity package created for the video | `""`
`personalizedStr` | Base 64 encoded string of the personalized data | `""`

## Callback events

Callback events take a function that gets fired on various player events:

Events | Description
---- | -----------
`onLoad` | Called when media is loaded and ready to play.
`onError` | Called when an error occurs whilst attempting to play media
`onStateChange` | Called when playback state updates (-1: Not started yet, 0: Playback Over, 1:	Playing, 2:	Paused, 3: Buffering, 5: Replay)
`onTimeupdate` | called when playback time updates



Method | Description
---- | -----------
`playVideo` | Plays video from current position. or if video has not started, starts video from beginning.
`pauseVideo` | Pauses video at the current position.
`replayVideo` | Replays video from the beginning.
`getCurrentTime` |Returns current video position in milliseconds.
`getDuration` | Returns the duration of the video in milliseconds.
`getPlayerInfo` | Return the video information like kvtoken,video-hostname,etc.
`seekTo` | Jumps to specific point in video. Time argument in specified in milliseconds.
`setAudio` | Sets playback audio to specified language, available for the video (Language codes: 'hi': 'Hindi', 'en': 'English', 'mr': 'Marathi', 'te': 'Telgu'). For more follow ISO Language Code table.
`setVolume` | Set volume level to specified, input should be between 0 and 1.


## Example of how to use callback props and Instance methods to control the player
```template
import { Component, OnInit, ViewChild } from '@angular/core';
import { KpointAngularPlayerComponent } from 'kpoint-angular-player';

@Component({
  selector: 'app',
  template: `
    <button (click)="getVideoDuration()">Get Video Duration</button>
    <kpoint-player #player
      [domain]="'ktpl.kpoint.com'"
      [videoId]="'gcc-d9e8dbc3-5dfa-4f68-bf7a-97f25fb7632c'"
      [height]="'360px'"
      [width]="'640px'"
      [videoParams]="{search: 'false', toc: 'false'}"
      [onStateChange]="onStateChange"
      [onTimeupdate]="onTimeupdate"
      [onload]="onload"
      [onError]="onError"
    >
    </kpoint-player>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('player', { static: true }) player!: KpointAngularPlayerComponent;

  ngOnInit() {}

  onTimeupdate = (timeMs: number) => {
    console.log('Time update, new time: ' + parseFloat(timeMs).toFixed(2));
  }

  onStateChange = (evt: any) => {
    console.log('onStateChange: ' + evt.data);
  }

  onError = (evt: any) => {
    console.log('onError: ' + evt.data);
  }

  Onload = () => {
    console.log('Video loaded');
  }

  getVideoDuration() {
    console.log(this.player.getDuration());
  }

  getPlayerInfo() {
    console.log(this.player.getPlayerInfo());
  }
  
  setAudio(langCode: any){
    console.log(this.player.setAudio(langCode));
  }

}

```

## License
Angular is [MIT licensed](./LICENSE).