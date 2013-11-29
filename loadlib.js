var loadlib = function(){
  this.libs = {
    "jquery" : {
      "latest" : {
        "js" : ["ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"]
      },
      "2.0" : {
        "js" : ["ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"]
      },
      "1.10" : {
        "js" : ["ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"]
      },
      "1.9" : {
        "js" : ["ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"]
      },
      "1.8" : {
        "js" : ["ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"]
      },
      "1.7" : {
        "js" : ["ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"]
      },
      "1.6" : {
        "js" : ["ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"]
      }
    },
    "bootstrap" : {
      "latest" : {
        "js" : ["netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"],
        "css" : ["netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css"]
      },
      "3.0" :{
        "js" : ["netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"],
        "css" : ["netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css"]
      },
      "2.3" : {
        "js" : ["netdna.bootstrapcdn.com/bootstrap/2.3.1/js/bootstrap.min.js"],
        "css" : ["netdna.bootstrapcdn.com/bootstrap/2.3.1/css/bootstrap.min.css"]
      },
      "2.2" : {
        "js" : ["netdna.bootstrapcdn.com/bootstrap/2.2.2/js/bootstrap.min.js"],
        "css" : ["netdna.bootstrapcdn.com/bootstrap/2.2.2/css/bootstrap.min.css"]
      },
      "2.1" : {
        "js" : ["netdna.bootstrapcdn.com/twitter-bootstrap/2.1.1/js/bootstrap.min.js"],
        "css" : ["netdna.bootstrapcdn.com/twitter-bootstrap/2.1.1/css/bootstrap.min.css"]
      },
      "2.0" : {
        "js" : ["netdna.bootstrapcdn.com/twitter-bootstrap/2.0.4/js/bootstrap.min.js"],
        "css" : ["netdna.bootstrapcdn.com/twitter-bootstrap/2.0.4/css/bootstrap.min.css"]
      }
    }
  };
  this.load = function(libname,libver){
    this.loadfile = this.libs;
    this.requestCheck = 1;

    if(typeof libname == "undefined"){
      return console.log("load fail");
    }
    if(typeof libver == "undefined"){
      for(this.x in this.libs){
        if(this.x == libname){ this.requestCheck = 0; }
      }
      if(this.requestCheck == 0){
        libver = "latest";
      }else{
        return console.log("load fail");
      }
    }else{
      for(this.y in this.libs[libname]){
        if(this.y == libver){ this.requestCheck = 0; }
      }
      if(this.requestCheck == 0){
      }else{
        return console.log("load fail");
      }
    }

    if(typeof this.libs[libname][libver].js != "undefined"){
      for(this.z = 0; this.z < this.libs[libname][libver].js.length; this.z++){
        this.elements = document.createElement("script");
        this.elements.setAttribute("type", "text/javascript");
        this.elements.setAttribute("src", "http://"+this.libs[libname][libver].js[this.z]);
        document.getElementsByTagName("head")[0].appendChild(this.elements);
      }
    }
    if(typeof this.libs[libname][libver].css != "undefined"){
      for(this.z = 0; this.z < this.libs[libname][libver].css.length; this.z++){
        this.elements = document.createElement("link");
        this.elements.setAttribute("rel", "stylesheet");
        this.elements.setAttribute("type", "text/css");
        this.elements.setAttribute("src", "http://"+this.libs[libname][libver].js[this.z]);
        document.getElementsByTagName("head")[0].appendChild(this.elements);
      }
    }
  };
};
