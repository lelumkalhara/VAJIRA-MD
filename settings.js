const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=6kgFSISL#dD6_ByHF6MkSIp3l-eX6Qm0VMl2Mo_ZfcY3gtblr4SU' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94743877156' : process.env.OWNER_NUMBER,
N_JID: process.env.N_JID=== undefined ? '‌': process.env.N_JID,    
PREFIX: process.env.PREFIX || '.' ,
LOGO: process.env.LOGO || 'https://files.catbox.moe/6x6tfc.jpg' ,    
FOOTER: process.env.FOOTER || '🍂🖤𝗞𝗜𝗡𝗚 𝗔𝗡𝗝𝗔𝗡𝗔 𝗕𝗕𝗛 💦🥵🍂',
LIMIT_PLUGIN: process.env.LIMIT_PLUGIN || '15' ,    
PREMIUM_USERS: process.env.PREMIUM_USERS || '94743877156',    
LANG: process.env.LANG || 'en',    
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,   
MAX_SIZE: 500,
MODE: process.env.MODE === undefined ? '' : process.env.MODE,
ALIVE:  process.env.ALIVE  || '> VAJIRA MD'  ,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
JID: process.env.JID || "",
WACHLINK: process.env.WACHLINK || `https://whatsapp.com/channel/0029Vac3pnlBlHpXLrUBym3a`
};
