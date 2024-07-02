


document.addEventListener('DOMContentLoaded', () => {
    
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString();
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
    }

    
    function updateDay() {
        const now = new Date();
        const options = { weekday: 'long' };
        const currentDay = new Intl.DateTimeFormat('en-US', options).format(now);
        document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
    }

    
    updateTime();
    updateDay();
    setInterval(updateTime, 60000);
});
