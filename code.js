//alert("yup");

var Model =  {};

Model.getLanding = function() {
    return {
        Heading: "Mishal Sanghvi"
        , Sections: ["Work", "Play"] 
    };
};

Model.getSection = function(name) {
    var sections = [];
    sections['work'] = {message: "this is work"};
    sections['play'] = {message: "this is play"};

    return sections[name];
};

var Controller = {};
Controller.RefreshLanding = function () {
    debugger;
    View.init();
    var landingModel = Model.getLanding();
    View.ShowLanding(landingModel);
};
Controller.showSection = function(name) {
    var section = Model.getSection(name);
    section.Name = name;
    View.ShowSection(section);
}

var View = {};
View.init = function (){
    $("#workMenuItem").click(Controller.showSection.bind(Controller, "work"));
    $("#playMenuItem").click(Controller.showSection.bind(Controller, "play"));
}

View.ShowSection = function(section) {
    $("#content").text(section.message);
};

View.ShowLanding = function(landingModel) {
    var heading = $("#header");
    heading.text(landingModel.Heading);
    
};


window.addEventListener("load", Controller.RefreshLanding);

// #sourceURL=code1.js