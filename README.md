# BSGroups
A mobile app for the groups of Compa in Mexico.

# Setup and Configuration
### Clone project
Use: git clone ...
This will create the folder "BSGroups" and its content

### Install dependencies
*npm install*

### Install Chocolatey
If your pc is not prepared to build android apps, using chocolatey is the fastest way to go

Windows: Open cmd with admin privileges.

Run the following command:
```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```
### Follow the Nativescript Advance Setup
The jdk and Android SDK are installed using chocolatey as suggested here: 
https://docs.nativescript.org/start/ns-setup-win

### Install nativescript CLI
```
npm i -g nativescript
```
Checkout status:
```
tns doctor
```
