        // Отримуємо елементи
        const headers = [document.getElementById('header-1'), document.getElementById('header-2')];
        const footers = [document.getElementById('footer-1'), document.getElementById('footer-2')];
        const countdownElement = document.getElementById('countdown');

        let currentIndex = 0; // Поточний індекс
        let countdown = 90; // Таймер зворотного відліку

        // Функція для перемикання хедерів і футерів
        function switchHeaderFooter() {
            // Ховаємо всі хедери і футери
            headers.forEach(header => header.classList.add('hidden'));
            footers.forEach(footer => footer.classList.add('hidden'));

            // Відображаємо наступний хедер і футер
            currentIndex = (currentIndex + 1) % headers.length;
            headers[currentIndex].classList.remove('hidden');
            footers[currentIndex].classList.remove('hidden');
        }

        // Функція для оновлення таймера
        function updateTimer() {
            countdown--;
            countdownElement.textContent = countdown;

            if (countdown === 0) {
                countdown = 90; // Скидаємо таймер
                switchHeaderFooter(); // Перемикаємо хедер і футер
            }
        }

        // Запускаємо таймер, який оновлюється кожну секунду
        setInterval(updateTimer, 1000);
