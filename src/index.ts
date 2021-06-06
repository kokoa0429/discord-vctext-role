import { Client } from "discord.js"
// ts yoke
let config =  require("../config/config.json")

console.log("hi2")

const client = new Client()

client.on("voiceStateUpdate", (oldM, newM) => {
    let newUserChannel = newM.channelID;
    let oldUserChannel = oldM.channelID;

    if (newUserChannel === config.voiceRoomId) {
        newM.member?.roles.add(config.roleId);
        console.log("Join" + newUserChannel);
    }
    else if (oldUserChannel === config.voiceRoomId && newUserChannel !== config.voiceRoomId) {
        oldM.member?.roles.remove(config.roleId);
        console.log("Left");
    }
})

client.login(config.token)
