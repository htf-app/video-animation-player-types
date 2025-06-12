// declare module 'video-animation-player';

declare module 'video-animation-player' {
  export default class Vap {
    constructor(options: any);
    play(options: any = null): any;
    pause(): any;
    destroy(): any;
    // Add more methods/events as needed
  }
}