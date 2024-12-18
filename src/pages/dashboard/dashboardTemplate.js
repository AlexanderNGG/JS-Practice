import { html } from "../../../node_modules/lit-html/lit-html.js";

export const dashboardTemplate = (setups) => html`
<h2>Setup Showcase</h2>
${(setups.length > 0)
  ? html`
<section id="setups">
    ${setups.map (s => setupTemplate(s))}
  </section>`
  : html`<h2 id="no-setup">No Setups Added.</h2>`
}
`;

let setupTemplate = (setUp) => html`
<div class="setup">
    <img src=${setUp.imageUrl} alt="example1" />
    <div class="setup-info">
    <h3 class="setup-name">${setUp.name}</h3>
    <p class="description">
        ${setUp.description}
    </p>
    <a class="details-btn" href="/details/${setUp._id}">Details</a> /* 
    </div>
</div>
`