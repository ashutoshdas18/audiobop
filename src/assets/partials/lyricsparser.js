const axios = require('axios')

// const fs=require('fs');
const fs = require('fs');

// ;(async function lyrics(){
//     const data=await axios('https://www.azlyrics.com/lyrics/popsmoke/dior.html');
//     const dataMain=data.data;
//     const dataArray=dataMain.split("<div>");
//     console.log(dataArray[1].split("</div>")[0]);
// })()


class hello{
    constructor(singer,song){
        this.singer=singer;
        this.song=song;
    }
   async getLyricss(){
    try{
        const data=await axios(`https://www.azlyrics.com/lyrics/${this.singer}/${this.song}.html`);
        this.dataElement=data.data;
        this.lyrics=this.dataElement.split('<div>')[1].split('</div>')[0];

    }
    catch(error){
        console.log('error')
    }
   }
}

module.exports.hello=hello;
