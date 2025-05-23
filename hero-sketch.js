let heroSketch = function(p) {
    let lines = [];
    const numLines = 100;
    const lineSpeed = 0.7;
    const interactionRadius = 150;
    const accentColorWhite = [255, 255, 255];

    let canvasContainer;

    p.setup = function() {
        console.log("p5.js sketch setup is running"); // Added for debugging
        canvasContainer = document.getElementById('heroCanvasContainer');
         if (!canvasContainer) { console.error("P5 canvas container not found!"); return; }
        let canvas = p.createCanvas(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
        canvas.parent('heroCanvasContainer');
        canvas.id('p5HeroCanvas');
        for (let i = 0; i < numLines; i++) { lines.push(new AnimatedLine()); }
    };

    p.draw = function() {
        p.clear();
        lines.forEach(line => { line.update(); line.display(); });
    };

    p.windowResized = function() {
        if (canvasContainer) {
            p.resizeCanvas(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
            lines = [];
            for (let i = 0; i < numLines; i++) { lines.push(new AnimatedLine()); }
        }
    }

    class AnimatedLine {
        constructor() {
            this.startPos = p.createVector(p.random(p.width), p.random(p.height));
            this.endPos = this.startPos.copy();
            this.angle = p.random(p.TWO_PI);
            this.maxLength = p.random(40, 180);
            this.currentLength = 0;
            this.growing = true;
            this.opacity = p.random(30, 120);
            this.strokeWeight = p.random(0.3, 1.2);
            this.currentStrokeWeight = this.strokeWeight;
            this.currentOpacity = this.opacity;
        }

        update() {
            let mouseVec = p.createVector(p.mouseX, p.mouseY);
            // Adjust mouseX and mouseY based on nav width if nav is not overlaid
            if (document.body.classList.contains('nav-open-for-p5')) { // A conceptual class
                 mouseVec.x -= parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-width'));
            }

            let distToMouseStart = p5.Vector.dist(this.startPos, mouseVec);
            let distToMouseEnd = p5.Vector.dist(this.endPos, mouseVec);
            let influenceRadius = interactionRadius;

            if (distToMouseStart < influenceRadius || distToMouseEnd < influenceRadius) {
                let combinedDist = (distToMouseStart + distToMouseEnd) / 2;
                let repelFactor = (influenceRadius - combinedDist) * 0.025;
                if (distToMouseStart < influenceRadius) {
                    let repelForceStart = p5.Vector.sub(this.startPos, mouseVec);
                    repelForceStart.setMag(repelFactor); this.startPos.add(repelForceStart);
                }
                if (distToMouseEnd < influenceRadius) {
                    let repelForceEnd = p5.Vector.sub(this.endPos, mouseVec);
                    repelForceEnd.setMag(repelFactor); this.endPos.add(repelForceEnd);
                }
                this.currentStrokeWeight = this.strokeWeight * 1.3 > 2 ? 2 : this.strokeWeight * 1.3;
                this.currentOpacity = this.opacity * 1.4 > 200 ? 200 : this.opacity * 1.4;
            } else {
                this.currentStrokeWeight = this.strokeWeight; this.currentOpacity = this.opacity;
            }

            if (this.growing) {
                this.currentLength += lineSpeed * 1.5;
                if (this.currentLength >= this.maxLength) { this.currentLength = this.maxLength; this.growing = false; }
            } else {
                this.currentLength -= lineSpeed * 0.8;
                if (this.currentLength <= 0) {
                    this.startPos = p.createVector(p.random(p.width), p.random(p.height));
                    this.angle = p.random(p.TWO_PI); this.maxLength = p.random(40, 180);
                    this.currentLength = 0; this.growing = true;
                    this.opacity = p.random(30, 120); this.strokeWeight = p.random(0.3, 1.2);
                }
            }
            this.endPos.x = this.startPos.x + p.cos(this.angle) * this.currentLength;
            this.endPos.y = this.startPos.y + p.sin(this.angle) * this.currentLength;
            this.startPos.x += (p.noise(this.startPos.x*0.005, this.startPos.y*0.005, p.frameCount*0.0005)-0.5)*0.2;
            this.startPos.y += (p.noise(this.startPos.y*0.005, this.startPos.x*0.005, p.frameCount*0.0005)-0.5)*0.2;

            // Boundary checks (optional, can let them drift and reset)
            if (this.startPos.x < -this.maxLength) this.startPos.x = p.width + this.maxLength / 2;
            if (this.startPos.x > p.width + this.maxLength) this.startPos.x = -this.maxLength / 2;
            if (this.startPos.y < -this.maxLength) this.startPos.y = p.height + this.maxLength / 2;
            if (this.startPos.y > p.height + this.maxLength) this.startPos.y = -this.maxLength / 2;
        }
        display() {
            p.stroke(accentColorWhite[0], accentColorWhite[1], accentColorWhite[2], this.currentOpacity);
            p.strokeWeight(this.currentStrokeWeight);
            p.line(this.startPos.x, this.startPos.y, this.endPos.x, this.endPos.y);
        }
    }
};

new p5(heroSketch); // Initialize the p5.js sketch directly
