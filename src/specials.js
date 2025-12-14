export function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active to current
            tab.classList.add('active');
            const targetId = tab.dataset.tab;
            document.getElementById(targetId).classList.add('active');
        });
    });
}

export function highlightCurrentDay() {
    const today = new Date().getDay(); // 0-6 (Sun-Sat)
    const dayRow = document.querySelector(`.day-row[data-day="${today}"]`);

    if (dayRow) {
        // Remove active from any existing (cleanup)
        document.querySelectorAll('.day-row').forEach(row => row.classList.remove('active'));
        // Add active to today
        dayRow.classList.add('active');
    }
}

if (window.location.pathname.endsWith('specials.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        initTabs();
        highlightCurrentDay();
    });
}
