export class DetailsPage {
    constructor(templateFunction, renderHandler, navigate, setupsService, authService) {
        this.templateFunction = templateFunction;
        this.renderHandler = renderHandler;
        this.navigate = navigate;
        this.setupsService = setupsService;
        this.authService = authService;
        this.showView = this._showView.bind(this);
    }

    async _showView(ctx){
        let id = ctx.params.id
        let setUp = await this.setupsService.get(id);
        let userId = this.authService.getUserId();
        console.log(userId);
        let isCreator = setUp._ownerId === userId;
        console.log(setUp);
        let template = this.templateFunction(setUp, isCreator);
        this.renderHandler(template);
    }
}