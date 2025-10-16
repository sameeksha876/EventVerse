const eventsDiv = document.getElementById('events');

fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(events => {
        events.forEach(event => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p>${event.city} | ${new Date(event.event_date).toLocaleString()}</p>
            `;
            eventsDiv.appendChild(div);
        });
    })
    .catch(err => console.error(err));
