# shairport-sync-metadata-webpage
![Webpage Screenshot](https://github.com/YJCHOO/shairport-sync-metadata-webpage/blob/main/shairport-sync%20metadata%20webpage%20screenshot.png)
A webpage to display the song metadata received from shairport-sync over MQTT.

## Prerequisite
- MQTT Broker
- Using [Shairport-sync](https://github.com/mikebrady/shairport-sync)
- Enable [MQTT feature](https://github.com/mikebrady/shairport-sync/blob/development/MQTT.md) in Shairport-sync configuration file.

## Setup
Edit this constant variables in metadata-mqtt.js: <br/>
HOST -> MQTT Broker IP address. <br/>
PORT -> MQTT Broker port. <br/>
MQTT_BASE_TOPIC -> MQTT topic that set in the Shairport-sync configuration file.<br/>


## Dependencies
- Bootstrap 5.0
- [Eclipse Paho JavaScript Client](https://www.eclipse.org/paho/index.php?page=clients/js/index.php)
- [Eclipse Paho JavaScript Client] (https://www.eclipse.org/paho/index.php?page=clients/js/index.php)
