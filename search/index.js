require('dotenv').config();
const { google } = require('googleapis');

google.youtube('v3').playlistItems.list({
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    playlistId: 'PLv8g3HY3OAPgAvPY-ixoTfoTAMXb4GHl8',
    maxResults: 50,
}).then((response)=>{
    let {data} = response;
    let page = data.nextPageToken;
    data.items.forEach(item => {
        console.log(item.snippet.title)
        console.log(item.snippet.videoOwnerChannelTitle)
        console.log('---------------------------------------')
    });

}).catch((err)=> console.log(err));
// pageToken: 'EAAaBlBUOkNESQ',

google.youtube('v3').playlistItems.list({
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    pageToken: 'EAAaBlBUOkNESQ',
    playlistId: 'PLv8g3HY3OAPgAvPY-ixoTfoTAMXb4GHl8',
    maxResults: 50,
}).then((response)=>{
    let {data} = response;
    console.log(data);
    let page = data.nextPageToken;
    data.items.forEach(item => {
        console.log(item.snippet.title)
        console.log(item.snippet.videoOwnerChannelTitle)
        console.log('---------------------------------------')
    });

}).catch((err)=> console.log(err));