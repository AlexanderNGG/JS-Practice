import { html } from "../../../node_modules/lit-html/lit-html.js";

export const detailsTemplate = (setUp, isCreator) => html`
<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="./images/setup1.webp" alt="example1" />
    <div>
      <p id="details-setup-name">Violet Sanctum</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="setup-description">
            ${setUp.description}
          </p>
          <p id="details-parts">
            ${setUp.parts}
          </p>
        </div>
      </div>
      <h3>Setup Likes:<span id="like">0</span></h3>

      <!--Edit and Delete are only for creator-->
      <div id="action-buttons">
        ${isCreator === true
          ? html`
        <a href="#" id="edit-btn">Edit</a>
        <a href="#" id="delete-btn">Delete</a>
        `
        : ''
        }

        <!--Bonus - Only for logged-in users ( not authors )-->
        <a href="#" id="like-btn">Like</a>
      </div>
    </div>
  </div>
</section>
`