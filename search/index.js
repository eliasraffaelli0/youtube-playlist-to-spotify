require('dotenv').config();
const { google } = require('googleapis');

google.youtube('v3').playlistItems.list({
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    playlistId: 'PLuSl8rFJUgCDlo-kMVZr1kAjA_RT12eg9',
    maxResults: 50,
}).then((response)=>{
    const {data} = response;
    data.items.forEach(item => {
        console.log(item.snippet.title)
    });
}).catch((err)=> console.log(err));