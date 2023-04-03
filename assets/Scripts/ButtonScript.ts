import { _decorator, Component, Node } from "cc";
import Yodo1Ads from "./Yodo/Yodo1Ads";
const { ccclass, property } = _decorator;

@ccclass("ButtonScript")
export class ButtonScript extends Component {
  start() {
    Yodo1Ads.getInstance().initializeMasSdk("05OwESMwAR", true);

    //Yodo1Ads.getInstance().setCOPPA(false);
    Yodo1Ads.getInstance().setCOPPA(false);
    // //Yodo1Ads.getInstance().setGDPR(true);
    Yodo1Ads.getInstance().setGDPR(true);
    // //If the user gives consent, then set CCPA to false, otherwise to true.
    Yodo1Ads.getInstance().setCCPA(false);

    //
  }
  initializeAdsAllType() {
    console.log("LOAD InterstitialAds");
    Yodo1Ads.getInstance().initializeInterstitialAds();

    console.log("LOAD Rewards");
    Yodo1Ads.getInstance().initializeRewardAds();
  }

  showBannerAds() {
    // console.log("Show Banner Ads");
    // Yodo1Ads.getInstance().showBannerAds();
    console.log("LOAD BANNER and show");
    Yodo1Ads.getInstance().loadBannerAds("Banner", "RIGHT", "TOP");
  }
  showInterstitialAds() {
    console.log("Show Interstitial Ads");
    Yodo1Ads.getInstance().showInterstitialAds();
  }
  showRewardAds() {
    console.log("Show Rewards Ads");
    Yodo1Ads.getInstance().showRewardAds();
  }
  update(deltaTime: number) {}
}
