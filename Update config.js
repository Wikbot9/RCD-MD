//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0xiQ3Fsd21pcFJwZFA2ZGhWQWE0bkJQNlFuL2ZaS2dOSVl4SGd4b2kxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVitnakozVFcvMDNMYXFMdGMvNGllajh3Tm5kZzU5eGNsTEVSdDI3QnNCRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtT1FqOWd6RU9SVTBMS0pRdC9oaE80OWFiY0dTWFgxaW5CYyt0bzhWZUdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzekJWQnl1b0NPd3RhUGZSMS95cExQNGJuT1JXYmt6cG9Sc1F2OUpTWEhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFKcktQK3BWMThzcDVRQkY3azFRUlBFR1pOYlpyVDIwRStrYjZxVXdaazA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdqbEJqWnk2eENDYjVrUGpIYnhpUmJqZHdvYlREM2RYTitaOG1LVUpuVGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0dsRjNSOFNOaTIvZlN2MS8yeGU2cEFLUjZFTTRHUG1IK0dPZ0ZlWlFucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWdDRkRFVTMxQVBVQ1hYdjVjZUZmOFVqVzAyeXhSb2ZGQzNmbndsQ1RTcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpQeVU4MVNQMGNnV1Y2ZjJKNFpjK1RIYjBLdWFIK2RNdmNwY015aEpzeE83eHR6Y3FSdEZncUdDcS8xMVJjaE84UXVaMDFvZUxQbUlmc0k4bmZ2d0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiJ0bk9jMkRxUlJqejJrZWQxOTRPU0UwbUdZY2NXUHBSQVRJcWN4KzdlZUNvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE4MDk0NzkyODA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFBMDUzRDI4NTU3MzIxMTE1NkRBNzE3NDU1QjZGMjEzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjc2NjMzOTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE4MDk0NzkyODA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjVGRkE5QkVCMjcwQjc5MENFRTc5MTRFOTBDMzg2MkJDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjc2NjMzOTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InVEcGgyNnBMU2Y2OWVOWTlnWndXd3ciLCJwaG9uZUlkIjoiMjFmZGZmZDctNTQxZC00ZjhmLWJmNDAtMmUyNTUxNjNhNmQwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJJSzBmV0tIVVFMYmtOZEFPbkRhVU5iUUpJST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxUWE3MTI0SnI5V3FQU3VCRkdTV25YVVkzQ3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRUpRRlQ5TDciLCJtZSI6eyJpZCI6IjE4MDk0NzkyODA2OjI0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ildpa2VuY3kifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00rcnY2OERFSlNhNkxjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBkY3FkSFAzN2ZPY2pRbVNSN3k4cktwcHkvaUx4aEZ1TVk1d1ViVHFnVVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZobFdPd1V1L1ArcmtYRnVuQ3F6Z1o3QThJdmNjMm1RWHovNFo4ZlZXL0FOcTB3QTMwUlNTenpzTzNnVnJEVEFnRk5MaTZwUC96TGxtZGFVUVpVV0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxdFp3WnVERzIwOHN1WHJxUnNCaU9uLzRaU2lrZUVhdGJlTitETllKRGVablNGbE1zUm1iMjVqT213SjQ0QmdVdDNxaXB4d3RKc0NwbHpOam00dVBEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE4MDk0NzkyODA2OjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlQzWEtuUno5KzN6bkkwSmtrZTh2S3lxYWN2NGk4WVJiakdPY0ZHMDZvRkUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc2NjMzOTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRGovIn0=;
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94789958225";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/3wrf9ccK/IMG-20240804-WA0000.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`RCD-MD`",
  author: process.env.PACK_AUTHER || "RCD-MD",
  packname: process.env.PACK_NAME || "RCD",
  botname: process.env.BOT_NAME || "RCD-MD",
  ownername: process.env.OWNER_NAME || "RCD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u/161";
global.website = process.env.GURL || "https://chat.whatsapp.com/Cry8eSzZqW27t9H8uOcRIR";
global.devs = "94789958225";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
