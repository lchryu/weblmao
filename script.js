function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeLyric(text, delay) {
    const lyricsDiv = document.getElementById('lyrics');
    for (let i = 0; i < text.length; i++) {
        lyricsDiv.innerHTML += text[i];
        await sleep(delay);
    }
    lyricsDiv.innerHTML += '<br>';
}

async function main() {
    const lyric1 = "I'm gonna pack my things and leave you behind";
    const lyric2 = "This feeling's old and I know that I've made up my mind";
    const lyric3 = "I hope you feel what I felt when you shattered my soul";
    const lyric4 = "Cause you were cruel and I'm a fool so please let me go";
    const lyric5 = "But I love you so (please let me go)";
    const lyric6 = "I love you so (please let me go)";
    const lyric8 = "I love you sooooooo";
    
    await typeLyric(lyric1, 135);
    await typeLyric(lyric2, 100);
    await typeLyric(lyric3, 110);
    
    const lyricsDiv = document.getElementById('lyrics');
    for (let i = 0; i < lyric4.length; i++) {
        lyricsDiv.innerHTML += lyric4[i];
        if (i > 0 && lyric4[i - 1] === 's' && lyric4[i] === 'o') await sleep(300);
        await sleep(110);
    }
    lyricsDiv.innerHTML += '<br>';
    
    await sleep(1700);
    await typeLyric(lyric5, 150);
    await sleep(500);
    await typeLyric(lyric6, 170);
    await sleep(700);
    await typeLyric(lyric6, 170);
    await sleep(800);
    await typeLyric(lyric8, 150);
}

window.onload = main;
