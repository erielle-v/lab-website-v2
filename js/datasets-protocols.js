// ============================================================
//  DATASETS & PROTOCOLS RENDER SCRIPT
//  Reads datasetsData / protocolsData (from
//  datasets-protocols-data.js) and builds the page DOM.
//  To add content, edit the data file only — this script
//  should not need to change for routine updates.
// ============================================================

function renderLinks(links, linkClass) {
    return links.map(l =>
        `<a class="${linkClass}" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`
    ).join("");
}

function renderFreezeTable(resources) {
    const rows = resources.map(r => `
        <tr>
            <td>
                <span class="freeze-resource-name">${r.resource}</span>
                ${r.note ? `<span class="freeze-resource-note">${r.note}</span>` : ""}
            </td>
            <td>
                <div class="freeze-resource-links">
                    ${renderLinks(r.links, "freeze-link")}
                </div>
            </td>
        </tr>
    `).join("");

    return `
        <table class="freeze-table">
            <thead>
                <tr>
                    <th>Resource</th>
                    <th>Access</th>
                </tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
    `;
}

function renderDatasets(rootId, data) {
    const root = document.getElementById(rootId);
    if (!root) return;

    root.innerHTML = data.map(projectGroup => `
        <div class="project-group">
            <h3 class="project-group-header">${projectGroup.project}</h3>

            ${projectGroup.intro ? `
                <p class="project-intro">
                    ${projectGroup.intro}
                    ${projectGroup.introLink ? ` <a href="${projectGroup.introLink}" target="_blank" rel="noopener">View on CELLxGENE ↗</a>` : ""}
                </p>
            ` : ""}

            ${projectGroup.freezes.map(freeze => `
                <div class="freeze-card">
                    <h4 class="freeze-title">${freeze.name}</h4>
                    <p class="freeze-description">${freeze.description}</p>
                    <p class="freeze-citation">${freeze.citation}</p>
                    ${renderFreezeTable(freeze.resources)}
                </div>
            `).join("")}
        </div>
    `).join("");
}

function renderProtocols(rootId, data) {
    const root = document.getElementById(rootId);
    if (!root) return;

    // Group flat protocol list by project
    const grouped = {};
    data.forEach(p => {
        if (!grouped[p.project]) grouped[p.project] = [];
        grouped[p.project].push(p);
    });

    root.innerHTML = Object.entries(grouped).map(([project, protocols]) => `
        <div class="project-group">
            <h3 class="project-group-header">${project}</h3>
            <div class="protocol-list">
                ${protocols.map(p => `
                    <div class="protocol-entry">
                        <h4 class="protocol-title">${p.title}</h4>
                        <p class="protocol-description">${p.description}</p>
                        <a class="protocol-link" href="${p.link}" target="_blank" rel="noopener">View Protocol</a>
                    </div>
                `).join("")}
            </div>
        </div>
    `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    renderDatasets("datasets-root", datasetsData);
    renderProtocols("protocols-root", protocolsData);
});