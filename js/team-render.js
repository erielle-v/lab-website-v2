/* SVG ICONS */
const ICONS = {
  email: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>`,
  twitter: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>`,
  astar: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm-1 14.93V16h2v.93A8.02 8.02 0 0 1 4 9h1a7 7 0 0 0 6 6.93zM5.46 7A8.01 8.01 0 0 1 13 4.07V5h-2v-.93A6.98 6.98 0 0 0 6.35 7H5.46zm12.08 0h-.89A6.98 6.98 0 0 0 13 4.07V5h2v-.93A8.01 8.01 0 0 1 19 9h-1a7 7 0 0 0-.46-2zm.46 4h1a8.02 8.02 0 0 1-8 7.93V17h2v.93A7 7 0 0 0 19 11h-1z"/>
  </svg>`,
  github: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>`,
};

/* HELPERS */
function photoOrPlaceholder(src, alt, cssClass, placeholderClass) {
  if (src) {
    return `<img class="${cssClass}" src="${src}" alt="${alt}" loading="lazy">`;
  }
  return `<div class="${placeholderClass}">👤</div>`;
}

/* RENDER PI */
function renderPI() {
  const root = document.getElementById("pi-root");
  if (!root || typeof piData === "undefined") return;

  const p = piData;

  const photoHTML = photoOrPlaceholder(
    p.photo, p.name,
    "pi-photo", "pi-photo-placeholder"
  );

  const emailLink = p.email
    ? `<a class="pi-link" href="mailto:${p.email}">${ICONS.email} ${p.email}</a>`
    : "";
  const twitterLink = p.twitter
    ? `<a class="pi-link" href="${p.twitter}" target="_blank" rel="noopener noreferrer">${ICONS.twitter} Twitter / X</a>`
    : "";
  const astarLink = p.astar
    ? `<a class="pi-link" href="${p.astar}" target="_blank" rel="noopener noreferrer">${ICONS.astar} A*STAR Profile</a>`
    : "";
  const titleHTML = p.astar
    ? `<a class="pi-title-link" href="${p.astar}" target="_blank" rel="noopener noreferrer">${p.title}</a>`
    : `<span>${p.title}</span>`;

  root.innerHTML = `
  <div class="pi-card">
    <div class="pi-top">
      <div class="pi-photo-wrap">${photoHTML}</div>
      <div class="pi-info">
        <h2 class="pi-name">${p.name}</h2>
        <p class="pi-title">${titleHTML}</p>
        ${p.blurb ? `<p class="pi-blurb">${p.blurb}</p>` : ""}
      </div>
    </div>
    <div class="pi-links">
      ${emailLink}
      ${twitterLink}
      ${astarLink}
    </div>
  </div>
`;
}

/* RENDER LAB MEMBERS */
function renderGroups() {
  const root = document.getElementById("team-root");
  if (!root || typeof teamGroups === "undefined") return;

  teamGroups.forEach(group => {
    const section = document.createElement("div");
    section.className = "team-group";

    const memberCards = group.members.map(m => {
      const photoHTML = photoOrPlaceholder(
        m.photo, m.name,
        "member-photo", "member-photo-placeholder"
      );
      const githubLink = m.github
        ? `<a class="member-github" href="${m.github}" target="_blank" rel="noopener noreferrer">${ICONS.github} GitHub</a>`
        : "";

      return `
        <div class="member-card">
          <div class="member-photo-wrap">${photoHTML}</div>
          <div class="member-info">
            <p class="member-name">${m.name}</p>
            <p class="member-title">${m.title}</p>
            ${githubLink}
          </div>
        </div>
      `;
    }).join("");

    section.innerHTML = `
      <p class="team-group-title">${group.title}</p>
      <div class="member-grid">${memberCards}</div>
    `;

    root.appendChild(section);
  });
}

renderPI();
renderGroups();