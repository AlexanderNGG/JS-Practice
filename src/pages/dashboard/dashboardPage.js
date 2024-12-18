export class DashboardPage {
    constructor(templateFunction, renderHandler, setupsService) {
        this.templateFunction = templateFunction;
        this.renderHandler = renderHandler;
        this.setupsService = setupsService;
        this.showView = this._showView.bind(this);
    }

    async _showView(){
        let setups = await this.setupsService.getAll();
        console.log(setups);
        let template = this.templateFunction(setups);
        this.renderHandler(template);
    }
}