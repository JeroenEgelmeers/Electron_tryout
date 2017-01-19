'use strict';

function homeController() { 
    var vm = this;
    const shell = require('electron').shell;
    vm.username = 'Jeroen Egelmeers'; // Retreive from service
    vm.startupPersonal  = startupPersonal;

    var child = require('child_process').execFile;

    function startupPersonal() {
        console.log('Opening browser..');
        shell.openExternal('http://www.jeroenegelmeers.nl/');
        shell.openExternal('http://stackoverflow.com/users/2712568/jeroene');
    }


    // Start applications by giving an executable path
    function startDesktopApplication(executablePath) {
        child(executablePath, function(err, data) {
            if(err){
                console.error(err);
            return;
            }
            console.log(data.toString());
        });
    }

}

angular.module('firstApp')
    .controller('homeController', homeController);