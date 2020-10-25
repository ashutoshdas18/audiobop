const axios = require('axios')
class hello{
    constructor(singer,song){
        this.singer=singer;
        this.song=song;
    }
   async getLyricss(){
    try{
        const data=await axios.get(`https://www.azlyrics.com/lyrics/${this.singer}/${this.song}.html`,{ headers: { 'User-Agent': 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/86.0.4240.111' }  } );
        this.dataElement=data.data;
        this.lyrics=this.dataElement.split('<div>')[1].split('</div>')[0];

    }
    catch(error){
        this.lyrics=error;
    }
   }
}

module.exports.hello=hello;
