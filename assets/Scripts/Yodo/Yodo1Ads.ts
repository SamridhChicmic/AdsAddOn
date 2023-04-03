// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node, debug, DebugMode, log, find,native } from 'cc';
const { ccclass, property, } = _decorator;



@ccclass
export default class Yodo1Ads extends Component {

   

   // @property
    //text: string = 'hello';
    
   
    // LIFE-CYCLE CALLBACKS:

    private static _instance:Yodo1Ads = null;

    public static getInstance(){
        if(this._instance==null) this._instance = new Yodo1Ads();
        return this._instance;
    }

    public setCOPPA (isEnabled)
    {
     native.reflection.callStaticMethod("com/cocos/game/AppActivity", "setCOPPA", "(Z)V",isEnabled);
    }

    public setGDPR (isEnabled)
    {
     native.reflection.callStaticMethod("com/cocos/game/AppActivity", "setGDPR", "(Z)V",isEnabled);
    }

    public setCCPA (isEnabled)
    {
     native.reflection.callStaticMethod("com/cocos/game/AppActivity", "setCCPA", "(Z)V",isEnabled);
    }


    public initializeMasSdk (appkey,isEnabled)
    {
       console.log("initial-------------->>>>>SDK")
       try{
        console.log("IN TRY ")
        native.reflection.callStaticMethod("com/cocos/game/AppActivity", "initializeSdk", "(Ljava/lang/String;Z)V",appkey,isEnabled);
       }catch(e){
        console.log("Error Occurs in Initalization ")
       }
   
    }

    public initializeInterstitialAds() 
    {
     native.reflection.callStaticMethod("com/cocos/game/AppActivity", "initializeInterstitialAds", '()V');

    }

    public showInterstitialAds() 
    {
    
    try{    native.reflection.callStaticMethod("com/cocos/game/AppActivity", "showInterstitialAds", '()V');}
    catch(e){
        console.log("ERROR IN SHOWINTERSTITIALADS")
    }

    }

    public initializeRewardAds() 
    {
     native.reflection.callStaticMethod("com/cocos/game/AppActivity", "initializeRewardAds", '()V');

    }

    public showRewardAds() 
    {
     native.reflection.callStaticMethod("com/cocos/game/AppActivity", "showRewardAds", '()V');

    }

    public loadBannerAds(size, horizontalAlignment, verticalAlignment) 
    {
     native.reflection.callStaticMethod("com/cocos/game/AppActivity", "loadBannerAds", '(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V',size,horizontalAlignment,verticalAlignment);

    }

    public hideBannerAds() 
    {
     native.reflection.callStaticMethod("com/cocos/game/AppActivity", "hideBannerAds", '()V');

    }

    public showBannerAds() 
    {
     native.reflection.callStaticMethod("com/cocos/game/AppActivity", "showBannerAds", '()V');

    }

    //Interstitial Ad events 

    public onInterstitialAdLoaded() {

    }

    public onInterstitialAdFailedToLoad() {
        
    }

    public onInterstitialAdOpened() {
       
    }

    
    public onInterstitialAdFailedToOpen() {
       
        
    }
   
    public onInterstitialAdClosed() {
        
        
    }

    // Rewarded Ad events. 

    public onRewardAdLoaded() {
        
    }

    
    public onRewardAdFailedToLoad() {
        
    }

   
    public  onRewardAdOpened() {
        

    }

    public onRewardAdFailedToOpen() {
      
    }

    public  onRewardAdClosed() {
       
    }

    public onRewardAdEarned() {
       // Reward user here
       log("Yodo1 cocos reward user ======");
       

    }

    //Banner add events
    public onBannerAdLoaded() {

    }

    public onBannerAdFailedToLoad() {

    }

    public onBannerAdOpened() {

    }

    public onBannerAdFailedToOpen() {

    }

    public onBannerAdClosed() {

    }


   

}
