// app config

const main = document.getElementById("main");
let currentPage = '', playlist = [], playlistTrack = 0;

// gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

if (document.body.classList.contains('pg-home')) {
    currentPage = 'home';
    playlistTrack = 0;
    playlist = [];
    playlist.push(
        'b6k4OJ5aOOs', // CMA - Open Your Eyes (feat Alan Watts)
        '8D7342Nx1_s', // ELO - Tightrope
        'LnqXm8L5XcQ', // CMA - You're Free
        'XbXqnANTJCI', // CMA - Tomorrow's Another Day
        'Bjndmn6AH1E', // TRANSCENDENCE: Carl Sagan & Alan Watts & Mooji & Neil Degrasse Tyson
        '6oIUdpXkQXg', // It's Already Happening But People Don't See It - Alan Watts on What Is
        'olOMrEiXLZs', // Andreas B. - Floating (Full Version)
        //'yTsErjyRBXI', // BEYOND: Terence Mckenna & Sam Harris & Alan Watts & Sadhguru
        'HgFksUpXVYw' // CMA - Timeless
    );
}
if (document.body.classList.contains('pg-photography')) {
    currentPage = 'photography';
    playlistTrack = 0;
    playlist = [];
    playlist.push(
        'LnqXm8L5XcQ', // CMA - You're Free
        'XbXqnANTJCI', // CMA - Tomorrow's Another Day
        'HgFksUpXVYw' // CMA - Timeless
    );
}
if (document.body.classList.contains('pg-web')) {
    currentPage = 'web';
    playlistTrack = 0;
    playlist = [];
    playlist.push(
        '0uhwPOquByE' // Fil Far - CODING SESSION Music #22
    );
}
if (document.body.classList.contains('pg-design')) {
    currentPage = 'design';
    playlistTrack = 0;
    playlist = [];
    playlist.push(
        'olOMrEiXLZs' // Andreas B. - Floating
    );
}
if (document.body.classList.contains('pg-drawing')) {
    currentPage = 'drawing';
    playlistTrack = 0;
    playlist = [];
    playlist.push(
        'DFT6qm3oIjg' // Going Quantum - Hello? [Monstercat Release]
    );
}
if (document.body.classList.contains('pg-music')) {
    currentPage = 'music';
    playlistTrack = 0;
    playlist = [];
    playlist.push(
        '' // 
    );
}
if (document.body.classList.contains('pg-about')) {
    currentPage = 'about';
    playlistTrack = 0;
    playlist = [];
    playlist.push(
        'YHGu2Pv2kx8', // Dubba Johnny - Home
        'jdVsJWBKZQo', // CMA - Caught In Our thoughts
        'jldHW2xKBao' // Alan Watts ~ It's Just A Show | Wiara
    );
}


// Mobile Device Detection
// https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device
var isMobileDevice = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobileDevice = true;

    // Add 'isMobileDevice' CSS ClassName to body tag
    document.body.classList.add('isMobileDevice');

    // Hide buttons, keep task bar
    //https://stackoverflow.com/questions/11280826/html5-full-screen-web-apps-no-browser-bars
    //'<meta name="viewport" content="minimal-ui, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">'
    var meta = document.createElement('meta');
    meta.setAttribute('name', 'viewport');
    meta.setAttribute('content', 'minimal-ui, width=device-width, initial-scale=1');
    document.getElementsByTagName('head')[0].appendChild();

    // Intro handling for mobile
    document.querySelector("#go").remove();
    document.querySelector("#moon").classList.remove('hide');
    document.querySelector("#orb").classList.remove('hide');
    document.querySelector(".quote").classList.remove('hide');
    
    // Autostart tree intro animation
    tlAwaken.play(); 
}