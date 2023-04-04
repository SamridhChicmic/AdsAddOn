/****************************************************************************
Copyright (c) 2015-2016 Chukong Technologies Inc.
Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

http://www.cocos2d-x.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
****************************************************************************/
package com.cocos.game;

import android.os.Bundle;
import android.content.Intent;
import android.content.res.Configuration;
import android.util.Log;

import com.cocos.lib.CocosHelper;
import com.cocos.lib.CocosJavascriptJavaBridge;
import com.cocos.service.SDKWrapper;
import com.cocos.lib.CocosActivity;

public class AppActivity extends CocosActivity {
    private static AppActivity activity;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // DO OTHER INITIALIZATION BELOW
        SDKWrapper.shared().init(this);
         activity=this;
    }

    @Override
    protected void onResume() {
        super.onResume();
        SDKWrapper.shared().onResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
        SDKWrapper.shared().onPause();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        // Workaround in https://stackoverflow.com/questions/16283079/re-launch-of-activity-on-home-button-but-only-the-first-time/16447508
        if (!isTaskRoot()) {
            return;
        }
        SDKWrapper.shared().onDestroy();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        SDKWrapper.shared().onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        SDKWrapper.shared().onNewIntent(intent);
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        SDKWrapper.shared().onRestart();
    }

    @Override
    protected void onStop() {
        super.onStop();
        SDKWrapper.shared().onStop();
    }

    @Override
    public void onBackPressed() {
        SDKWrapper.shared().onBackPressed();
        super.onBackPressed();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        SDKWrapper.shared().onConfigurationChanged(newConfig);
        super.onConfigurationChanged(newConfig);
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        SDKWrapper.shared().onRestoreInstanceState(savedInstanceState);
        super.onRestoreInstanceState(savedInstanceState);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        SDKWrapper.shared().onSaveInstanceState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onStart() {
        SDKWrapper.shared().onStart();
        super.onStart();
    }

    @Override
    public void onLowMemory() {
        SDKWrapper.shared().onLowMemory();
        super.onLowMemory();
    }
    public static void initializeSdk(String appKey,boolean isEnabled)
    {
        Log.d("INITIALIZE---ADS",appKey);
        Yodo1Ads.initializeSdk(activity, appKey,isEnabled);
//        CocosHelper.runOnGameThread(new Runnable() {
//            @Override
//            public void run() {
//                Log.d("CLOSED",  " CLOSED ADS1-------------------------------------");
//                CocosJavascriptJavaBridge.evalString("cc.find('Yodo1').getComponent('Yodo1Ads').onRewardAdEarned()");
//                Log.d("CLOSED",  " CLOSED ADS2-------------------------------------");
//            }
//        });
    }

    public static void loadBannerAds(String size,String horizontal,String Vertical){
        Log.d("LOAD","LOAD BANNER FROM COCOS");
        Yodo1Ads.loadBannerAds(size,horizontal,Vertical);
    }

    public static void hideBannerAds(){
        Yodo1Ads.hideBannerAds();
    }

    public static void showBannerAds(){
        Log.d("INITIALIZE---ADS",  " SHOW BANNER CALL");
        Yodo1Ads.showBannerAds();
    }

    public static void initializeInterstitialAds()
    {
        Yodo1Ads.initializeInterstitialAds();
    }

    public static void showInterstitialAds()
    {

        Log.d("SHOW INTERSTITIAL","90000");
        Yodo1Ads.showInterstitialAds();
    }

    public static void initializeRewardAds()
    {
        Yodo1Ads.initializeRewardAds();
    }

    public static void showRewardAds()
    {
        Yodo1Ads.showRewardAds();
    }

    public static void setCOPPA(boolean isEnabled)
    {
        Yodo1Ads.setCOPPA(isEnabled);
    }

    public static void setGDPR(boolean isEnabled)
    {
        Yodo1Ads.setGDPR(isEnabled);
    }

    public static void setCCPA(boolean isEnabled) {
        Yodo1Ads.setCCPA(isEnabled);
    }
}
