const axios = require('axios')
const fs = require('fs');
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
        this.lyrics=error;
    }
   }
}

module.exports.hello=hello;
