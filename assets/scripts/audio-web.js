// AUDIO: Web Page

// YouTube Audio Player
// Based on the YouTube Audio Embed by Sarmad Gardezi
// https://www.youtube.com/watch?v=-Jqz3GQWhJY


if (document.body.classList.contains('pg-web')) {

    function onYouTubeIframeAPIReady(){

        var wrapper = document.getElementById("youtube-audio");
        var controller = document.getElementById("audio-controller");
        var icon = document.getElementById("audio-controller-icon");
        //var status = document.getElementById("audio-controller-status");

        var controls = function(isPlaying){
            if (isPlaying) {
                // audio is playing, so a pause button if a player
                controller.className = "audio-on";
                icon.className = "fa fa-volume-up"; //fa fa-pause-circle"; // fa fa-headphones
                //status.innerHTML = "ON";
            } else {
                // audio is stopped, so a play button here if player
                controller.className = "audio-off";
                icon.className = "fa fa-volume-off";
                //status.innerHTML = "OFF";
            }
        };

        var container = document.createElement("div");
        container.setAttribute("id","youtube-player");
        if (wrapper) {
            wrapper.appendChild(container);
        }


        var player = new YT.Player("youtube-player",{
            height:"0",
            width:"0",
            videoId: 'b6k4OJ5aOOs', //wrapper.dataset.video, // moved to playlist below =)
            playerVars:{
                'autoplay': 0, //1, //wrapper.dataset.autoplay, // 1
                'loop': 0, //wrapper.dataset.loop, // 1
                // //'controls': 1, 
                // 'listType':'playlist',
                // //list: '<YOURPLAYLISTID>',
                // 'playlist':[
                //     'b6k4OJ5aOOs', // CMA - Open Your Eyes (Melodic Dubstep) feat Alan Watts
                //     'LnqXm8L5XcQ', // CMA - You're Free (Melodic Dubstep)
                //     'olOMrEiXLZs', // Andreas B. - Floating (Full Version)
                //     'TiCyGzuepoQ', // Morricone: Gabriel's Oboe & The Falls (Cello and Orchestra)
                //     'dDI8jLlc5WE' // Fil Far - Programming ▫️ Designing ▫️ Coding ▫️ Music
                // ]
            },
            events:{
                onReady:function(e){
                    player.setPlaybackQuality("small");
                    player.setVolume(88);
                    //controls(player.getPlayerState()!==YT.PlayerState.CUED);

                    ////player.playVideo(); // plays video
                    //---controller.click(); // clicks button + set icon
                    //---tlAwaken.play(); // start tree intro animation
                },
                onStateChange:function(e){
                    //e.data===YT.PlayerState.ENDED&&o(!1)
                    if (e.data===YT.PlayerState.ENDED) {
                        console.log('Song Ended ... Thanks, Alan.');
                    }
                }
            }
        })

        controller.onclick = function(e){
            e.preventDefault();
            player.getPlayerState() === YT.PlayerState.PLAYING || player.getPlayerState() === YT.PlayerState.BUFFERING ? (player.pauseVideo(),controls(!1)) : (player.playVideo(),controls(!0))
        };
    }
}