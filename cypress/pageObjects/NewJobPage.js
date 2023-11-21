import MultiConfigProjectConfigurePage from "../pageObjects/MultiConfigProjectConfigurePage";
import FreestyleProjectConfigurePage from "../pageObjects/FreestyleProjectConfigurePage";
import PipelineProjectConfigurePage from "../pageObjects/PipelineProjectConfigurePage";
import FolderConfigurePage from "../pageObjects/FolderConfigurePage"
class NewJobPage {
    getInputNameField = () => cy.get('input#name');
    getMultiConfigTypeOfProjectBtn = () => cy.get('li.hudson_matrix_MatrixProject');
    getOKButton = () => cy.get('#ok-button');
    getPipelineTypeofProjectBtn = () => cy.get('li[tabindex="0"]').contains('Pipeline').click();
    getFreestyleTypeOfProjectBtn = () => cy.get('.hudson_model_FreeStyleProject');
    getTypeOfProjectLabels = () => cy.get(".label");
    getFolderBtn = () => cy.get(".com_cloudbees_hudson_plugins_folder_Folder");
    
    fillInputNameField(nameProject) {
        this.getInputNameField().should('be.visible').type(nameProject);

        return this;
    }

    clickMultiConfigTypeOfProjectBtn() {
        this.getMultiConfigTypeOfProjectBtn().click();

        return this;
    }

    clickOKButton() {
        this.getOKButton().сlick();

        return new MultiConfigProjectConfigurePage();
    }

    PipelineTypeofProjectBtn() {
        this.getPipelineTypeofProjectBtn().click();

        return this;
    }

    clickOKButtonPipeline() {
        this.getOKButton().click();

        return new PipelineProjectConfigurePage();
    }



    clickFreestyleTypeOfProjectBtn() {
        this.getFreestyleTypeOfProjectBtn().click();

        return this;
    }
    
    clickOKButtonFreestyle() {
        this.getOKButton().click();

        return new FreestyleProjectConfigurePage();
    }
    
    collectTypeOfProjectLabels(){
        this.getTypeOfProjectLabels().as("labelName");

        return this;
    }

    clickFolderBtn(){
        this.getFolderBtn().click();

        return this;
    }

    clickOKButtonFolder(){
        this.getOKButton().click();

        return new FolderConfigurePage();
    }
 
}
export default NewJobPage;