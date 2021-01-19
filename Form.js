class Form {

    constructor() {
        this.input = createInput("Please enter your time(IN HOURS)");
        this.information = createInput("Goal");
        this.button = createButton('SUBMIT');
    }
    display(){
        this.input.position(width/2, height/2);
        this.information.position(width/2, height/2+20);
        this.button.position(width/2,height/2+100);
        
        this.button.mousePressed(()=>{
            this.information.hide();
            this.input.hide();
        } )
    }
}
