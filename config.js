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

global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1BUU2lDRXhJdEUxTU5CSHYvQ2E4dWhMK2pmNDlzazZwQnhJOGlhMUxsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDI4WWhpU0R3VGJtc3JjNGpjaXdBeUJkelV4NFQ1MFZDWXVadlQ5OWYxST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRDQwa3BVdzZGSHBELzFjWk1rWGVsTmhiOWxrNERlLzNFS0hQbUlmTGw0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Tk5OUGd2eVlWTks1ZWxKVXUvdmh3OVFtYThUcXhXVmxzaU9TeG96SkhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtLSTQ3eXE5S1ZmbXBRTlZVQVNFNnQreDZ3bEpKai95bXRqcm91QmN3WGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndjT3Y4dzRuOXZpREl4Z08xeEdBZ0hEYzB0VjhoU3JYQUEzREU0Nytmenc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU9IQ2VhNS9TZDFyWndWN0pUeWRJaXkvN21mNVFKY29JMVRPenp0Qm9sZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienJEa2IwVnpSbFBSQXpSNnNsRDFBdy9vUXNVT2c2WGRMaklFTDFPOHczMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImErL1JLT0xZaXZoanZHcTlkNTd0WE9temRmRjJBY3l4ODVtZ092MlF3Y1ltTlIvRjkzcWFVdTQxbDRESThOZFJiVnpKbFZDbVlBNHhFM3FTam5McWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiIzR2J3eWUxKytVd1NleEZPbWU3S0JiZ1BwKy90QUE5bGNWRTJiS1pBTElFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlZjItbGxzNVNuUzRzQTh5ZFJiSWNRIiwicGhvbmVJZCI6IjMzZGU0Yjc2LTE5ZjEtNDY1MS1hNjk0LTU1ZDRkMTJjZWFiNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTHpkNkN1dWY5NUZDRXI1Y0JHOC9PbUk4bGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzQ2WUhwYkVURHI4UTgra1hrazJ5UGpGRUV3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkY1MzRTNjNOIiwibWUiOnsiaWQiOiIyNzYxNTA0NTU3MjoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6InNpcmN5bGVlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQK0NnTWtERUpTem43MEdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzMGl4YkpTT3RUS3ZKbE1JMm9FNzFhUnlvRjJZWXF3L29jYTh4cmRLTFJjPSIsImFjY291bnRTaWduYXR1cmUiOiJTUmlwb1NhQTEwd3FlRmp5d1JBOFRZSW02NGoxakFIbmRsMEZwSnY3alh6WTc3MmpaN3luYmdXZlptNWpERVBhS2lyM2JpRTlOd3RZVWhHeFE5VWZDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicDA3YmlKdnBqY0FWb3M1dnpaaGN3OGtYaTBSdVlBZDkwM3owNUVaeTJMcUtqN2VyQThZN3pzOE53cUVXdUc5bFJEb1krV0NQTWZjaXFmZG96Y2h3aFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzYxNTA0NTU3MjoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJOSXNXeVVqclV5cnlaVENOcUJPOVdrY3FCZG1HS3NQNkhHdk1hM1NpMFgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzkwNTM0NzQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUGdqIn0="

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
