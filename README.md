# LogisticsCompanion
A react-native app from Klarx for supporting Logistics operations

## Prerequisites
* Nodejs (latest version).
* Python (latest version and add it to path).
* React Native command line interface.
* Android Studio [with AVD/Emulator] or 
* Connect Android mobile to PC with Development mode set to Android debug.

### Helper instructions
* Install React Native command line interface
  * npm install -g react-native-cli
* After installing Android Studio with AVD, install following for smooth running of react-native app
  * Install Intel HAXM installer package for your platform. For installation instruction refer below link.
    * https://software.intel.com/en-us/android/articles/installation-instructions-for-intel-hardware-accelerated-execution-manager-windows
  * Install Android 6.0 (Marshmellow) SDK IN Android Studio
    * Open SDK manager and tick mark following things
      * Google APIs
      * Intel x86 Atom System Image
      * Intel x86 Atom_64 System Image
      * Google APIs Intel x86 Atom_64 System Image
      * Android SDK Build-Tools 23.0.1
  * Set ANDROID_HOME = <android sdk path>

## How to run
* Clone the project: git clone https://github.com/MadhukarSP/LogisticsCompanion
* Start “android avd” through command prompt or through Android studio, run any of the emulator or even Genymotion emulator works.
* Navigate to the project folder: cd LogisticsCompanion
* Install node modules: npm install
* Run the command: react-native run-android
