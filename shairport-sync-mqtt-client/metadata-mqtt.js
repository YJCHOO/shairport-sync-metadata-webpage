'use strict';

const HOST =  "192.168.0.6";
const PORT =  8000;

const TOPIC_COVER = "shairport-sync/airplay2/adapter/cover";
const TOPIC_TITLE = "shairport-sync/airplay2/adapter/title";
const TOPIC_ARTIST = "shairport-sync/airplay2/adapter/artist";
const TOPIC_ALBUM = "shairport-sync/airplay2/adapter/album";

const QOS = 2;

const TOPICS = "shairport-sync/airplay2/adapter/#";

let clientID = "clientID-" + new Date().getTime();
    
let client = new Paho.MQTT.Client(HOST, Number(PORT), clientID);

client.onConnectLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

client.connect({
    onSuccess: onConnect
});

function onConnect() {
    
    client.subscribe(TOPIC_COVER, {qos: QOS});
    client.subscribe(TOPIC_TITLE, {qos: QOS});
    client.subscribe(TOPIC_ARTIST, {qos: QOS});
    client.subscribe(TOPIC_ALBUM, {qos: QOS});
    
    // client.subscribe(TOPICS, {qos: 2});
}

function onConnectionLost(responseObject) {
    let errStr = "Error: Connection lost.\n";
    if (responseObject.errorCode != 0) {
        errStr += "ERROR: " + responseObject.errorMessage;
    }
    console.log(errStr);
}

function onMessageArrived(message) {
    if (message.destinationName === TOPIC_TITLE) {
        document.getElementById("title").innerHTML = message.payloadString
    }

    if (message.destinationName === TOPIC_ARTIST) {
        document.getElementById("artist").innerHTML = message.payloadString
    }
    
    if (message.destinationName === TOPIC_ALBUM) {
        document.getElementById("album").innerHTML = message.payloadString
    }
    
    if (message.destinationName == TOPIC_COVER) {
        let imgType;
        if ((message.payloadBytes[0] == 0xFF) && (message.payloadBytes[1] == 0xD8)) {
            imgType = 'image/jpeg'
        } else {
            imgType = 'image/png'
        }
        let blob = new Blob( [ message.payloadBytes ], { type: imgType } );
        let imageUrl = URL.createObjectURL( blob );

        document.getElementById("cover").src = imageUrl;
    }
}

function startDisconnect() {
    client.disconnect();
    console.log("Disconnected.");
}
