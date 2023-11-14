const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const input$$ = document.querySelector('[data-function="toFilterStreamers"]');
input$$.addEventListener('inpu', showStreamers);

function showStreamers () {
    const inputValue = this.value;
    const filterStreamers = streamers.filter(function(streamer) {
        return streamer.name.includes(inputValue);
    });
    console.log(filterStreamers);
}