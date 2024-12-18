import page from "../node_modules/page/page.mjs";
import { createRenderHandler } from "./libs/renderer.js";
import { HomePage } from "./pages/home/homePage.js";
import { homeTemplate } from "./pages/home/homeTemplate.js";
import { loginTemplate } from "./pages/login/loginTemplate.js";
import { NavElement } from "./pages/nav/navElement.js";
import { navTemplate } from "./pages/nav/navTemplate.js";
import { AuthService } from "./services/authService.js";
import { LoginPage } from "./pages/login/loginPage.js";
import { RegisterPage } from "./pages/register/registerPage.js";
import { registerTemplate } from "./pages/register/registerTemplate.js";
import { SetupService } from "./services/setupsService.js";
import { DashboardPage } from "./pages/dashboard/dashboardPage.js";
import { dashboardTemplate } from "./pages/dashboard/dashboardTemplate.js";
import { AddSetupPage } from "./pages/addSetup/addSetupPage.js";
import { addSetupTemplate } from "./pages/addSetup/addSetupTemplate.js";
//import { DetailsPage } from "./pages/details/detailsPage.js";
//import { detailsTemplate } from "./pages/details/detailsTemplate.js";

let serverUrl = 'http://localhost:3030';

let mainElement = document.querySelector('#wrapper main')
let navDomElement = document.querySelector('#wrapper nav')

let mainRendererHandler = createRenderHandler(mainElement);
let navRenderHandler = createRenderHandler(navDomElement);

let authService = new AuthService(serverUrl);
let setupsService = new SetupService(serverUrl);

let homePage = new HomePage(homeTemplate, mainRendererHandler);
let navElement = new NavElement(navTemplate, navRenderHandler, page.show, authService);
let loginPage = new LoginPage(loginTemplate, mainRendererHandler, page.show, authService);
let registerPage = new RegisterPage(registerTemplate, mainRendererHandler, page.show, authService);
let dashboardPage = new DashboardPage(dashboardTemplate, mainRendererHandler, setupsService); 
let addSetupPage = new AddSetupPage(addSetupTemplate, mainRendererHandler, page.show, setupsService);
//let detailsPage = new DetailsPage(detailsTemplate, mainRendererHandler, page.show, setupsService, authService);

page(navElement.showView)
page('index.html', '/');

page('/', homePage.showView);
page('/login', loginPage.showView);
page('/register', registerPage.showView);
page('/setups', dashboardPage.showView);
page('/addSetup', addSetupPage.showView);
//page('/details/:id', detailsPage.showView);

page.start();