// Search Engine & Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const searchOpen = document.getElementById('searchOpen');
    const searchClose = document.getElementById('searchClose');
    const searchModal = document.getElementById('searchModal');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (searchOpen && searchModal) {
        searchOpen.addEventListener('click', () => searchModal.classList.add('active'));
        searchClose.addEventListener('click', () => searchModal.classList.remove('active'));
    }

    const mockData = [
        { title: 'Nitya Parayana Stotras', category: 'Stotras', link: 'stotras.html' },
        { title: 'Bhagavad Gita Guide', category: 'Articles', link: 'articles.html' },
        { title: 'Mindful Breathing', category: 'Meditation', link: 'meditation.html' },
        { title: 'Kids Vedic Stories', category: 'Kids', link: 'kids.html' }
    ];

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            searchResults.innerHTML = '';
            if (query.trim() === '') return;

            const filtered = mockData.filter(item => item.title.toLowerCase().includes(query));
            filtered.forEach(item => {
                const div = document.createElement('div');
                div.className = 'search-item';
                div.style.padding = '10px 0';
                div.innerHTML = `<a href="${item.link}" style="color: #fff;"><strong>${item.title}</strong> (${item.category})</a>`;
                searchResults.appendChild(div);
            });
        });
    }
});
