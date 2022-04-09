### Solar-chan
A desktop companion representing an ESP-01 microcontroller powered by two solar cells and some super capacitors.

#### Desktop app

<img src="./desktop-app.gif"/>

#### Solar setup



### Stack
* Node http/socket server
* ElectronJS desktop app
* ESP-01 with WiFi/http

### Note about securty
The [Content-Security-Policy](https://stackoverflow.com/questions/43742261/is-it-unsafe-to-add-localhost-to-content-security-policy) in the Electron app is set to accept localhost/a certain local 192 IP address. If you want to use https you can remove that/set your server up to use https. For my use it's just a local thing.

### Font
[Silkscreen](https://www.dafont.com/silkscreen.font) by Jason Aleksandr Kottke