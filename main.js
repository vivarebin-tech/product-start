// ── Theme toggle ──
const themeToggle = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ── Lotto generator ──
const generateBtn = document.getElementById('generate-btn');
const numberSpans = document.querySelectorAll('.number');

generateBtn.addEventListener('click', () => {
    const lottoNumbers = new Set();
    while (lottoNumbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        lottoNumbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(lottoNumbers).sort((a, b) => a - b);

    numberSpans.forEach((span, index) => {
        span.textContent = sortedNumbers[index];
        span.style.backgroundColor = getNumberColor(sortedNumbers[index]);
    });
});

function getNumberColor(number) {
    if (number <= 10) {
        return '#f9e45b'; // yellow
    } else if (number <= 20) {
        return '#87c0f5'; // blue
    } else if (number <= 30) {
        return '#f69c9f'; // red
    } else if (number <= 40) {
        return '#aaaaaa'; // gray
    } else {
        return '#b6d7a8'; // green
    }
}
