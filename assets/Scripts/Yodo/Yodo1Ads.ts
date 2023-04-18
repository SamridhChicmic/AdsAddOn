// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import {
  _decorator,
  Component,
  Node,
  debug,
  DebugMode,
  log,
  find,
  native,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass
export default class Yodo1Ads extends Component {
  // @property
  //text: string = 'hello';

  // LIFE-CYCLE CALLBACKS:

  private static _instance: Yodo1Ads = null;

  public static getInstance() {
    if (this._instance == null) this._instance = new Yodo1Ads();
    return this._instance;
  }

  public setCOPPA(isEnabled) {
    native.reflection.callStaticMethod(
      "com/cocos/game/AppActivity",
      "setCOPPA",
      "(Z)V",
      isEnabled
    );
  }

  public setGDPR(isEnabled) {
    native.reflection.callStaticMethod(
      "com/cocos/game/AppActivity",
      "setGDPR",
      "(Z)V",
      isEnabled
    );
  }

  public setCCPA(isEnabled) {
    native.reflection.callStaticMethod(
      "com/cocos/game/AppActivity",
      "setCCPA",
      "(Z)V",
      isEnabled
    );
  }

  public initializeMasSdk(appkey, isEnabled) {
    console.log("initial-------------->>>>>SDK");
    try {
      console.log("IN TRY ");
      native.reflection.callStaticMethod(
        "com/cocos/game/AppActivity",
        "initializeSdk",
        "(Ljava/lang/String;Z)V",
        appkey,
        isEnabled
      );
    } catch (e) {
      console.log("Error Occurs in Initalization ");
    }
  }

  public initializeInterstitialAds() {
    native.reflection.callStaticMethod(
      "com/cocos/game/AppActivity",
      "initializeInterstitialAds",
      "()V"
    );
  }

  public showInterstitialAds() {
    try {
      native.reflection.callStaticMethod(
        "com/cocos/game/AppActivity",
        "showInterstitialAds",
        "()V"
      );
    } catch (e) {
      console.log("ERROR IN SHOWINTERSTITIALADS");
    }
  }

  public initializeRewardAds() {
    native.reflection.callStaticMethod(
      "com/cocos/game/AppActivity",
      "initializeRewardAds",
      "()V"
    );
  }

  public showRewardAds() {
    native.reflection.callStaticMethod(
      "com/cocos/game/AppActivity",
      "showRewardAds",
      "()V"
    );
  }

  public loadBannerAds(size, horizontalAlignment, verticalAlignment) {
    native.reflection.callStaticMethod(
      "com/cocos/game/AppActivity",
      "loadBannerAds",
      "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V",
      size,
      horizontalAlignment,
      verticalAlignment
    );
  }

  public hideBannerAds() {
    native.reflection.callStaticMethod(
      "com/cocos/game/AppActivity",
      "hideBannerAds",
      "()V"
    );
  }

  public showBannerAds() {
    native.reflection.callStaticMethod(
      "com/cocos/game/AppActivity",
      "showBannerAds",
      "()V"
    );
  }

  //Interstitial Ad events

  public onInterstitialAdLoaded() {
    console.log("LOADED INTERSTITIAL AD ");
  }

  public onInterstitialAdFailedToLoad() {
    console.log("FAILED TO LOAD INTERSTITIAL AD ");
  }

  public onInterstitialAdOpened() {
    console.log("OPEN INTERSTITIAL AD ");

    console.log("OPEN INTERSTITIAL AD ", this.node.name);

   // console.log("OPEN INTERSTITIAL AD ", JSON.stringify(this.node));
  }

  public onInterstitialAdFailedToOpen() {
    console.log("FAILED TO OPEN INTERSTITIAL AD ");
  }

  public onInterstitialAdClosed() {
    console.log("CLOSED INTERSTITIAL AD ");
  }

  // Rewarded Ad events.

  public onRewardAdLoaded() {
    console.log("REWARD LOADED AD ");
  }

  public onRewardAdFailedToLoad() {
    console.log("REWARD FAILED AD ");
  }

  public onRewardAdOpened() {
    console.log("REWARD OPEN AD ");
  }

  public onRewardAdFailedToOpen() {
    console.log("REWARD FAILED TO OPEN AD ");
  }

  public onRewardAdClosed() {
    console.log("CLOSED REWARD AD ");
  }

  public onRewardAdEarned() {
    // Reward user here
    console.log("Yodo1 cocos reward user ======");
  }

  //Banner add events
  public onBannerAdLoaded() {
    console.log("LOAD BANNER AD ");
  }

  public onBannerAdFailedToLoad() {
    console.log("FAILED BANNER AD ");
  }

  public onBannerAdOpened() {
    console.log("OPENED BANNER AD ");
  }

  public onBannerAdFailedToOpen() {
    console.log("FAILED TO OPENED BANNER AD ");
  }

  public onBannerAdClosed() {
    console.log("CLOSED BANNER AD ");
  }
  ///----------------Passing Argument To Android

  // The JVM uses a compact way of storing method signatures, of which constructors are considered a special case.

  // For your example:

  // () indicates a method taking no arguments
  // V indicates that it returns nothing
  // The other parts of the scheme are:

  // B - byte
  // C - char
  // D - double
  // F - float
  // I - int
  // J - long
  // S - short
  // V - void
  // Z - boolean
  // [ - array of the thing following the bracket
  // L [class name] ; - instance of this class, with dots becoming slashes
  // ( [args] ) [return type] - method signature
  // For example:

  // public int foo(String bar, long[][] baz)
  // would become

  // (Ljava/lang/String;[[J)I
  //Sending 2 number
  public onPassArgument(num1: Number, num2: Number) {
    console.log("PARAMETER PASS");
    native.reflection.callStaticMethod(
      "com/cocos/game/AppActivity",
      "onPassArgument",
      "(II)V",
      num1,
      num2
    );
  }
  public argumentFromAndroid(num1: number, num2: number) {
    console.log("CALL FROM ANDROID", num1, num2);
  }
}
