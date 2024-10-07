type Music = {
    name: string;
    author: string;
    duration: string;
    description: string;
    urlAudio: string;
    image: string;
}

export const musics: Music[] = [
    {
        name: "Careless Whisper",
        author: "George Michael",
        duration: "00:05:00",
        description: "George Michael - Careless Whisper",
        urlAudio: "audios/audio1.mp3",
        image: "images/imagemcw.jpg"
    },
    {
        name: "Monster",
        author: "Gabry Ponte",
        duration: "00:02:47",
        description: "LUMIX Gabry Ponte - Monster",
        urlAudio: "audios/audio2.mp3",
        image: "images/imagemmonster.jpg"
    },
    {
        name: "Maria",
        author: "Ricky Martin",
        duration: "00:04:07",
        description: "Ricky Martin - Maria",
        urlAudio: "audios/audio3.mp3",
        image: "images/imagemrm.jpg"
    }
]