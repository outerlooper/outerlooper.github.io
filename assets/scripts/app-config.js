// app config

const main = document.getElementById("main");
let currentPage = '', playlist = [], playlistTrack = 0;

const worksPhotographyGrid = document.getElementById('photography-grid');
let worksPhotography = [];

// gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

if (document.body.classList.contains('pg-home')) {
    currentPage = 'home';
    playlistTrack = 0;
    playlist = [];
    playlist.push(
        'b6k4OJ5aOOs', // CMA - Open Your Eyes (feat Alan Watts)
        '8D7342Nx1_s', // ELO - Tightrope
        'Bjndmn6AH1E', // TRANSCENDENCE: Carl Sagan & Alan Watts & Mooji & Neil Degrasse Tyson
        'LnqXm8L5XcQ', // CMA - You're Free
        '6oIUdpXkQXg', // It's Already Happening But People Don't See It - Alan Watts on What Is
        'XbXqnANTJCI', // CMA - Tomorrow's Another Day
        'olOMrEiXLZs', // Andreas B. - Floating (Full Version)
        'yTsErjyRBXI', // BEYOND: Terence Mckenna & Sam Harris & Alan Watts & Sadhguru
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


