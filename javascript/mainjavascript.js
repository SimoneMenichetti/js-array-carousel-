// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito


// 1
    // creazione nuovo array per le img da inserire dinamicamente da js

    const ArrayImmaginiCarosello =
    ["./img/01.webp", "./img/02.webp","./img/03.webp","./img/04.webp","./img/05.webp",]


// 2
    // inizio ciclo for per estrapolazione degli elementi img