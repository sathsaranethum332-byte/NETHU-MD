const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/sathsaranethum332-byte/NETHU-MD/blob/main/ChatGPT%20Image%20Mar%2029,%202026,%2012_53_26%20PM.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "🔥 *NETHUM-MD*\n📱 0741962754\n\nඔයාට ඕනේ service ekak nam msg ekak danna!",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
