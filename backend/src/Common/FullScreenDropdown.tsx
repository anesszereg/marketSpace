import React from 'react';
import { Button } from 'react-bootstrap';

const FullScreenDropdown = () => {

    /*
    full screen
    */
    const toggleFullscreen = () => {
        let document: any = window.document;
        document.body.classList.add("fullscreen-enable");
    
        if (
          !document.fullscreenElement &&
          /* alternative standard method */ !document.mozFullScreenElement &&
          !document.webkitFullscreenElement
        ) {
          // current working methods
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
          }
        } else {
          if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        }
    
        // handle fullscreen exit
        const exitHandler = () => {
          if (
            !document.webkitIsFullScreen &&
            !document.mozFullScreen &&
            !document.msFullscreenElement
          )
            document.body.classList.remove("fullscreen-enable");
        };
        document.addEventListener("fullscreenchange", exitHandler);
        document.addEventListener("webkitfullscreenchange", exitHandler);
        document.addEventListener("mozfullscreenchange", exitHandler);
    };
    return (
        <React.Fragment>
            <div className="ms-1 header-item d-none d-sm-flex">
                <Button
                    onClick={toggleFullscreen}
                    type="button"
                    className="btn-icon btn-topbar btn-ghost-dark rounded-circle"
                >
                    <i className="bi bi-arrows-fullscreen fs-16"></i>
                </Button>
            </div>
        </React.Fragment>
    );
};

export default FullScreenDropdown;