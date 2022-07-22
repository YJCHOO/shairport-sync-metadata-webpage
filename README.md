# shairport-sync-metadata-webpage
![Webpage Screenshot](https://github.com/YJCHOO/shairport-sync-metadata-webpage/blob/main/shairport-sync%20metadata%20webpage%20screenshot.png)
A webpage to display the song metadata received from shairport-sync over MQTT.

## Prerequisite
- MQTT Broker
- Using Shairport-sync
- Enable MQTT feature in Shairport-sync configuration file.

## Setup
Edit this constant variables in metadata-mqtt.js: <br/>
HOST -> MQTT Broker IP address. <br/>
PORT -> MQTT Broker port. <br/>
MQTT_BASE_TOPIC -> MQTT topic that set in the Shairport-sync configuration file.<br/>


