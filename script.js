document.addEventListener('DOMContentLoaded', () => {
    // 1. typewriter
    const tw = document.querySelector('.typewriter');
    if (tw) {
        const text = tw.getAttribute('data-text') || tw.textContent;
        tw.textContent = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                tw.textContent += text.charAt(i);
                i++;
                setTimeout(type, 80);
            }
        }
        type();
    }

    // wykrywanie czy jestesmy w podfolderze (np. useful_things/) czy w glownym katalogu
    const inSubfolder =
        window.location.pathname.includes('/useful_things/') ||
        window.location.pathname.includes('/projects/');
    const dataPrefix = inSubfolder ? '../data/' : 'data/';

    // 2. home posts
    const homeBox = document.getElementById('home-posts-list');
    if (homeBox) {
        fetch(dataPrefix + 'posts.json')
            .then(res => res.json())
            .then(data => {
                homeBox.innerHTML = data.items
                    .map(
                        item => `
                    <div class="site-box">
                        <h3>${item.title.toLowerCase()}</h3>
                        <span class="post-date">${item.date || ''}</span>
                        <p>${item.desc.toLowerCase()}</p>
                    </div>
                `
                    )
                    .join('');
            })
            .catch(err => console.error(err));
    }

    // 3. useful things
    const usefulBox = document.getElementById('useful-things-list');
    if (usefulBox) {
        fetch(dataPrefix + 'links.json')
            .then(res => res.json())
            .then(data => {
                usefulBox.innerHTML = data.items
                    .map(item => {
                        const label = item.link_text
                            ? item.link_text.toLowerCase()
                            : item.url.replace(/^https?:\/\//, '').toLowerCase();
                        return `
                    <div class="site-box">
                        <h3>${item.title.toLowerCase()}</h3>
                        <p>${item.desc.toLowerCase()}</p>
                        <a href="${item.url}" target="_blank" rel="noopener">&gt; ${label}</a>
                    </div>
                `;
                    })
                    .join('');
            })
            .catch(err => console.error(err));
    }

    const projectsBox = document.getElementById('projects-list');
    if (projectsBox) {
        fetch(dataPrefix + 'projects.json')
            .then(res => res.json())
            .then(data => {
                projectsBox.innerHTML = data.items
                    .map(item => {
                        const label = item.link_text
                            ? item.link_text.toLowerCase()
                            : item.url
                              ? item.url.replace(/^https?:\/\//, '').toLowerCase()
                              : '';
                        return `
                    <div class="${item.is_wip ? 'site-box-wip' : 'site-box'}">
                        <h3>${item.title.toLowerCase()}</h3>
                        <p>${item.desc.toLowerCase()}</p>
                        ${item.is_wip ? `<span>&gt; ${label || 'not available yet'}</span>` : `<a href="${item.url}" target="_blank" rel="noopener">&gt; ${label}</a>`}
                    </div>
                `;
                    })
                    .join('');
            })
            .catch(err => console.error(err));
    }

    // 5. cool places
    const coolPlacesBox = document.getElementById('cool-places-list');
    if (coolPlacesBox) {
        fetch(dataPrefix + 'cool_places.json')
            .then(res => res.json())
            .then(data => {
                coolPlacesBox.innerHTML = data.items
                    .map(item => {
                        const label = item.link_text
                            ? item.link_text.toLowerCase()
                            : item.url.replace(/^https?:\/\//, '').toLowerCase();
                        return `
                    <div class="site-box">
                        <h3>${item.title.toLowerCase()}</h3>
                        <p>${item.desc.toLowerCase()}</p>
                        <a href="${item.url}" target="_blank" rel="noopener">&gt; ${label}</a>
                    </div>
                `;
                    })
                    .join('');
            })
            .catch(err => console.error(err));
    }
});
