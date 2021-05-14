// YouTube Audio Player

// see: https://developers.google.com/youtube/iframe_api_reference
// see this: https://codepen.io/ahmed-wagdi/pen/xdWvBL

function onYouTubeIframeAPIReady(){

    var go = document.getElementById("go");
    var wrapper = document.getElementById("youtube-audio");
    var controller = document.getElementById("audio-controller");
    var icon = document.getElementById("audio-controller-icon");
    //var status = document.getElementById("audio-controller-status");

    const moon = document.querySelector("#moon"),
        orb = document.querySelector("#orb"),
        quote = document.querySelector(".quote");

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
        videoId: playlist[playlistTrack],
        playerVars:{
            'autoplay': 0,
            'loop': 0,
        },
        events:{
            onReady:function(e){
                player.setPlaybackQuality("small");
                player.unMute();
                player.setVolume(88);
                controller.classList.add('disable-user-control');

                //player.playVideo(); // plays video
                //controller.click(); // click button + play video + set icon

                // switch (currentPage) {
                //     case 'home':
                //         tlAwaken.play(); // start tree intro animation
                //         break;

                //     case 'about':
                //         tlAbout.play();
                //         break;
                // }
            },
            onStateChange:function(e){
                if (e.data===YT.PlayerState.ENDED) {
                    // Song Ended ... increase the playlistTrack and rock on!
                    playlistTrack++;
                    if (playlist.length < (playlistTrack+1)) {
                        playlistTrack = 0;
                    }
                    player.loadVideoById(playlist[playlistTrack], 0, "small");
                }
            }
        }
    })

    go.onclick = function(e){
        e.preventDefault();
        go.remove();
        player.playVideo(),controls(!0); // start audio
        moon.classList.remove('hide');
        orb.classList.remove('hide');
        quote.classList.remove('hide');
        tlAwaken.play(); // start tree intro animation
    };

    controller.onclick = function(e){
        e.preventDefault();
        if (!(this).classList.contains('disable-user-control')) {
            player.getPlayerState() === YT.PlayerState.PLAYING || player.getPlayerState() === YT.PlayerState.BUFFERING ? (player.pauseVideo(),controls(!1)) : (player.playVideo(),controls(!0))
        }
    };
}