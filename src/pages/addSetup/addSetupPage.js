export class AddSetupPage {
    constructor(templateFunction, renderHandler, navigate, setupsService) {
        this.templateFunction = templateFunction;
        this.renderHandler = renderHandler;
        this.navigate = navigate;
        this.setupsService = setupsService;
        this.showView = this._showView.bind(this);
        this.addSetupHandler = this._addSetupHandler.bind(this);
    }

    _showView(){
        let template = this.templateFunction(this.addSetupHandler);
        this.renderHandler(template);
    }

    async _addSetupHandler(e) {
        e.preventDefault();
        console.log('Submit event triggered')
        let formData = new FormData(e.target);

        let name = formData.get('name');
        let imageUrl = formData.get('image-url');
        let description = formData.get('description');
        let parts = formData.get('parts');

        if(!name || !imageUrl || !description || !parts) {
            window.alert('Please fill in the fields');
            return;
        }
        
        let setUp = {
            name,
            imageUrl,
            description,
            parts
        }

        let result = await this.setupsService.addSetup(setUp);
        if(result) {
            this.navigate('/setups');
        }
    }
}