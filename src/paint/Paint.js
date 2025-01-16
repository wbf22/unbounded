import React, { useEffect, useLayoutEffect, useState } from 'react';
import './Paint.css';

const Paint = () => {
    const [lastUpdate, setLastUpdate] = useState(0);
    let pixels = [];
    let ctrl = false;
    let zoom = 8;
    let width = 960;
    let height = 540;

    useLayoutEffect(() => {
        

        // set scroll position of background to center on canvas
        const canvas = document.getElementById('paintCanvas');
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        const dims = getDefaultCanvasDimensions();
        width = dims.defaultWidth;
        height = dims.defaultHeight;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        
        window.scrollTo(40000 - windowWidth / 2 + width / 2, 40000 - windowHeight / 2 + height / 2);
        console.log('window:', windowWidth, windowHeight);

        let ctx = canvas.getContext('2d');
        ctx.fillRect(0, 0, 1, 1);

        // handle zoom events
        const handleKeyDown = (event) => {
            if ((event.ctrlKey && event.key === 'Control') || (event.metaKey && event.key === 'Meta')) {
                ctrl = true;
                // console.log('Ctrl detected');
            }
        };

        const handleKeyUp = (event) => {
            if (event.key === 'Control' || event.key === 'Meta') {
                ctrl = false;
                // console.log('Ctrl off');
            }
        };

        const handleScroll = (event) => {
            if (ctrl) {
                event.preventDefault(); // Prevent the default scroll action when holding control
                let scrollAmount = event.deltaY
                zoom += scrollAmount / 2000;
                if (zoom < 7) zoom = 7;
                if (zoom > 9) zoom = 9;
                let zoomFactor = 100 * 100 ** (zoom - 9);

                // modify canvas size
                const canvas = document.getElementById('paintCanvas');
                const dims = getDefaultCanvasDimensions();
                width = dims.defaultWidth * zoomFactor;
                height = dims.defaultHeight * zoomFactor;
                canvas.style.width = width + 'px';
                canvas.style.height = height + 'px';

                // modify canvas position (so zoom appears to center on mouse)
                let mouseX = event.clientX + window.scrollX;
                let mouseY = event.clientY + window.scrollY;


            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        window.addEventListener('wheel', handleScroll, { passive: false }); // passive false to allow preventDefault

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            window.removeEventListener('wheel', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once after the initial render
    
    function getDefaultCanvasDimensions() {
        
        let windowWidth = window.innerWidth;
        let defaultWidth = windowWidth * 0.6;
        let defaultHeight = defaultWidth * 1080 / 1920;
    
        return { defaultWidth, defaultHeight };
    }

    const handleMouseMove = (event) => {
        // let mouseX = event.clientX + window.scrollX;
        // let mouseY = event.clientY + window.scrollY;
        // console.log('Mouse:', mouseX, mouseY);
        // console.log('Scroll:', window.scrollX, window.scrollY);
    };

    const writeCanvas = () => {
        
        // get the canvas
        const canvas = document.getElementById('paintCanvas');
        const ctx = canvas.getContext('2d');

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        console.log(canvas.width, canvas.height);
        const data = imageData.data; // RGBA values

        // intialize pixels array if empty
        if (pixels.length == 0) {
            pixels = new Array(data.length).fill(255);
        }

        // write pixels to canvas
        data = pixels;

        ctx.putImageData(imageData, 0, 0); // Update the canvas with the modified pixel data

        setLastUpdate(Date.now());
    };

    return (
        <div id="paint-background" onMouseMove={handleMouseMove}>
            <canvas id="paintCanvas" width={1920} height={1080}></canvas>
        </div>
    );
}

export default Paint;