const axios = require('axios')
class hello{
    constructor(singer,song){
        this.singer=singer;
        this.song=song;
    }
   async getLyricss(){
    try{
        const data=await axios(`https://www.azlyrics.com/lyrics/${this.singer}/${this.song}.html`);
        this.test=data;
        this.dataElement=data.data;
        this.lyrics=this.dataElement.split('<div>')[1].split('</div>')[0];

    }
    catch(error){
        this.lyrics=error;
    }
   }
}

module.exports.hello=hello;
