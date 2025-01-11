const {cmd , commands} = require('../command')
const config = require('../../settings')

cmd({
    on: "body"
  },    
  async (conn, mek, m, { from, body, isOwner }) => {
    if (body.toLowerCase() || text.toLowerCase()) {
              if (config.FAKE_RECORDING === 'true') {
                  //if (isOwner) return;        
                  await conn.sendPresenceUpdate('recording', from);
              }      
            }         
  });

cmd({
    on: "body"
  },    
  async (conn, mek, m, { from, body, isOwner }) => {
    if (body.toLowerCase() || text.toLowerCase()) {
              if (config.AUTO_TYPING === 'true') {
                  //if (isOwner) return;        
                  await conn.sendPresenceUpdate('composing', from);
              }      
            }         
  });  
