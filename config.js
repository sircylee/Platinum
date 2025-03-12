//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "jadewale71@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Jupiterbold05/Platinum-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/gvdQSvi.jpeg";
global.devs = "2348084644182";
global.sudo = process.env.SUDO || "2349071978357";
global.owner = process.env.OWNER_NUMBER || "2348084644182";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/gvdQSvi.jpeg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0FBeUVxdG9NanlzalFFOXI5YklZbFdzQkp4RWJBVHNNUW1EaDN5US9YWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmE5bVRrYTNFYmdJZFR3VDZDZDBKTUtMTEZRVmdQeVZxa1dFN3FRNWVSaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRkk3b1YvcGdocXAwTXdXQ1I0UVZXR2xQdWRtcXFlK2ZqMjBrdHo2ekgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKc1FzR1JPWXQxanIrcDZXbjJIT0xiZDM1WnFPZ3ZTckhaYzhMUDlKWmo0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlQZVQxYW5MWEIwTldGem5lWG1haW16MlVVenBjUWpzYjJjL2xtOXF4V2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im96TzVxdkZwSXFkVHZnTVQrSGpvQnlFQUoraUVyWGNIbWxXNVZ5alBMR289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ082YkI2ejRsemRUQ1pVVzJ0L2NuQzRCUVR5TFpJOE53ck5BUHoydExIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid01RU2pHTGpMakFEU00wWHFWaWM3dWQvek9VdVJXTnN2ZWJJV0UxMVlWVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRxMEVmeDIzY1pqY3lSRnBoNU5rYTJTdGR5aUx5VmlHcWd6eXRWNjZIWmJINXl3RG5rekcyRFBGZGFyMHUvTVFDRzdVTlE4NGkzemp4bU1sTlg3NEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTEsImFkdlNlY3JldEtleSI6Ik0rVWY2WG5xRWE3R01YTHlLUkFoandkQis1TkxCMmc1eWJhcUhtRktoRW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2ODgzMjEyOThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDlFQzkzQjQ3RkM4QTNCRjE4QjNDOEM1QzcxMTZGODgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0MTgxMDU4MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2ODgzMjEyOThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDFEMDEwNDAzNzdGNjdCRkQzNTRFRkVGOERBMUY0OUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0MTgxMDU4Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2ODgzMjEyOThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTkzMzkyMUEyNjY1ODQ4RDkzQjgyQkU0ODc4REFBQjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0MTgxMDU4M30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2ODgzMjEyOThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODBGODI3QUJGMzVDRkNBNTgyQUUwNjQ1MTA3NTE5NDcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0MTgxMDU4M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNEFTV1RQM0dUbFdKaGowY3VPSzl4ZyIsInBob25lSWQiOiI2MDc4OWRlMy1iZDZlLTQ4NjMtOWM1NS02ZDVhMjRhM2E0ZmUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTBhUkJaT2pIK0dUY1c1ck9XVE1SYUZsS1dJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imc0cSsvcVBkRUM3NjJhMVcya3JiV05xZ2xFbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1VkZLQjIzTCIsIm1lIjp7ImlkIjoiMjc2ODgzMjEyOTg6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJzaXJjeWxlZW9ic2Vzc2Vkd2l0aGhpc3RlZGR5YmVhciJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUG5QbktFRUVJZlh4NzRHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSkNnM1F0Vlh1SEFLbUNaL0x3L0QyWEZ3SFBIY0t2QkZGVmRNOUZwNVB6az0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRFkxWWsvZTh0b1VtejJmemdCQmt1ZDZEaENmRWVHVE90NVh6RkRTc25pTFJ4Z3VZT0ZFdWZMM3hxQytzdk1wSXNOU3FuZG1uQXlhRitEc09GbW5EQnc9PSIsImRldmljZVNpZ25hdHVyZSI6InYyMFlhTlZPalhLdXNjUmVaT0VxeVJ0d0tVYVNCRzhYa3VBKzV6STFrNXhYdU8yTVpRbWMwVVFEYXgrbXJKbW5vTitaZTdWMUR5S0hjc1J4NHlXNUR3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2ODgzMjEyOTg6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTUW9OMExWVjdod0NwZ21meThQdzlseGNCengzQ3J3UlJWWFRQUmFlVDg1In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQxODEwNTgwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFkTyJ9"

module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍™",
  author: process.env.PACK_AUTHER || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  packname: process.env.PACK_NAME || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  botname: process.env.BOT_NAME || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍",
  ownername: process.env.OWNER_NAME || "ᴀʙᴏᴠᴇ ᴀʟʟ ☠️👑🌍",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDGaxLsz6PLvHvONZPeGuLUaf6UR9yIonc",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "PLATINUM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
