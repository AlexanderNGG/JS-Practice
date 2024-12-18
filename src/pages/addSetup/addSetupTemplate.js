import { html } from "../../../node_modules/lit-html/lit-html.js";

export const addSetupTemplate = (addSolutionHandler) => html`
<section id="create">
  <div class="form">
    <img class="border" src="../images/banner.webp" alt="banner" />
    <h2>Add Setup</h2>
    <form class="create-form">
      <input type="text" name="setup-name" id="setup-name" placeholder="Setup Name" />
      <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
      <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
      <textarea id="parts-used" name="parts-used" placeholder="Parts" rows="2" cols="10"></textarea>
      <button type="submit">Add setup</button>
    </form>
  </div>
</section>
`;