Android Ads Integration

note—> Before Going Forward go through the ads format
Download Yodo1Ads.ts file and add it to your project, then create a new Node and drop Yodo1Ads.ts script on it.

Create a button to initialize ads in cocos creator Scene
Add Script to Which Handle All Button Click Event
In Script Add this line first
import Yodo1Ads from "./Yodo1Ads";
On start function

start() {
Yodo1Ads.getInstance().initializeMasSdk("05OwESMwAR", true);
}

To initialize Yodo1Ads you need to call

Yodo1Ads.getInstance().initializeMasSdk("YourAppkey",true);

Where
Parameter 1: Appkey, you can find it in MAS dashboard when you add your game
To add game follow link https://developers.yodo1.com/ for SignUp
For Add Game https://developers.yodo1.com/docs/account-management/account-set-up/how-to-add-a-game-to-your-account/
Parameter 2 : PrivacyDialog, you need to set it to true to show built-in privacy dialog, otherwise to false.

Add Click Event to button which is for initializing ads—
initializeAdsAllType() {
console.log("LOAD InterstitialAds");
Yodo1Ads.getInstance().initializeInterstitialAds();

console.log("LOAD Rewards");

Yodo1Ads.getInstance().initializeRewardAds();
}

This code initialize the interstitalAds and Banner Ads

Add Button to Scene for Showing Ad (IntertitialAds)
Add click Event

showInterstitialAds() {
console.log("Show Interstitial Ads");
Yodo1Ads.getInstance().showInterstitialAds();
}

yodo1Ads.getInstance().ShowInterstitialAds() trigger event — in Yodo ts added previously

public showInterstitialAds() {
native.reflection.callStaticMethod(
"com/cocos/game/AppActivity",
"showInterstitialAds",
"()V"
);
}

Native call triggered for native call follow —-CALLING COCOS FUNCTIONS FROM IOS AND ANDROID -.docx

Build Android project fro cocos
Once the project is opened in Android Studio add the repositories to build.gradle project

                          allprojects {

repositories {
google()
jcenter()
mavenCentral()
maven { url 'https://android-sdk.is.com' } } }

Add the dependency in build.gradle app level(Module)
implementation 'com.yodo1.mas:google:4.8.5'
Add Multidex in the defaultConfig section in build.gradle app level(module)
multiDexEnabled true

Add the following lines in gradle.properties
android.useAndroidX=true
android.enableJetifier=true android.enableDexingArtifactTransform=false org.gradle.daemon=true
org.gradle.jvmargs=-Xmx2560m

Add your Admob ID
Add your AdMob ID to your app’s AndroidManifest.xml file.
Your Admob ID can be found under the “details” (Manage) of your app on MAS Dashboard.
Please replace YOUR_ADMOB_ID with your own Admob ID.
<meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="Your_Admob_ID"/>

Add Yodo1Ads.java file in the same directory as AppActivity.java

In AppActivity.java, add the following code.

public static void initializeSdk(String appKey,boolean isEnabled)
{ Yodo1Ads.initializeSdk(activity, appKey,isEnabled); }
public static void loadBannerAds(String size,String horizontal,String Vertical){ Yodo1Ads.loadBannerAds(size,horizontal,Vertical
public static void hideBannerAds(){ Yodo1Ads.hideBannerAds(); } ); }
public static void showBannerAds(){ Yodo1Ads.showBannerAds(); }
public static void initializeInterstitialAds() { Yodo1Ads.initializeInterstitialAds(); }
public static void showInterstitialAds() { Yodo1Ads.showInterstitialAds(); }
public static void initializeRewardAds() { Yodo1Ads.initializeRewardAds(); }
public static void showRewardAds() { Yodo1Ads.showRewardAds(); }
public static void setCOPPA(boolean isEnabled) { Yodo1Ads.setCOPPA(isEnabled); }
public static void setGDPR(boolean isEnabled) { Yodo1Ads.setGDPR(isEnabled); }
public static void setCCPA(boolean isEnabled) { Yodo1Ads.setCCPA(isEnabled); }

Create an AppActivity static object in AppActivty.java and make sure to set AppActivity to the current instance.

private static AppActivity activity;
