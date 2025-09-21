const coin = document.getElementById('coin');
const tossBtn = document.getElementById('toss-button');
const result = document.querySelector('.result');

coin.insertAdjacentElement('afterend', result);
tossBtn.addEventListener('click', () => {
    tossBtn.disabled = true;
    tossCoin();
});

function tossCoin() {
    const randomNum = Math.random();
    const faceCoin = randomNum < 0.5 ? 'Heads' : 'Tails';
    const imageUrl = faceCoin === 'Heads' ? 'https://media.geeksforgeeks.org/wp-content/uploads/20231016151817/heads.png': 'https://media.geeksforgeeks.org/wp-content/uploads/20231016151806/tails.png';

    coin.classList.add('flip');
    setTimeout(() => {
        coin.innerHTML =  `<img src="${imageUrl}" alt="${faceCoin}">`;
        coin.classList.remove('flip');
        setTimeout(() => {
            result.textContent = `Result: ${faceCoin}`;
            result.style.opacity = 1;
            tossBtn.disabled = false;
        }, 500);
    }, 1000);
}