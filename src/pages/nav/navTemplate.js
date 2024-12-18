import { html } from "../../../node_modules/lit-html/lit-html.js";

export const navTemplate = (isLoggedIn, logoutHandler) => html`
<div>
    <a href="/solutions">Setup Showcases</a>
</div>

${isLoggedIn === true
    ? html`
        <div class="user">
          <a href="/addSetup">Add Setup</a>
          <a href="javascript:void(0)" @click=${logoutHandler}>Logout</a>
        </div>`
    : html`
        <div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`
}
`