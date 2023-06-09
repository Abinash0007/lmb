const sentence = "I love you so much but I don't know how to tell you because I know you don't love me back </3".split(" ");
const displayArea = document.getElementById('sentence');

let wordIndex = 0;
let charIndex = 0;

// Create a cursor element
const cursor = document.createElement('span');
cursor.classList.add('cursor');
cursor.textContent = '|';

displayArea.innerHTML = ''; // Clear existing content
displayArea.appendChild(cursor);

const getRandomFontClass = () => {
    const fontClasses = ['font0', 'font1', 'font2', 'font3', 'font4'];
    const randomIndex = Math.floor(Math.random() * fontClasses.length);
    return fontClasses[randomIndex];
};

const typeNextCharacter = () => {
    let word = sentence[wordIndex];

    let span = document.createElement("span");
    span.classList.add(getRandomFontClass());

    if (charIndex === 0) {
        span.classList.add('firstLetter'); // Add a class to the first letter of each word
    }

    span.textContent = word[charIndex];
    displayArea.insertBefore(span, cursor);

    charIndex++;

    if (charIndex < word.length) {
        setTimeout(typeNextCharacter, 100 + Math.random() * 200); // Random delay to simulate human typing
    } else {
        let space = document.createElement('span');
        space.textContent = ' ';
        displayArea.insertBefore(space, cursor);

        if (wordIndex < sentence.length - 1) {
            wordIndex++;
            charIndex = 0;
            setTimeout(typeNextCharacter, 150); // Delay before starting next word
        }
    }
};

setTimeout(typeNextCharacter, 2000);  // Start after 2 seconds
