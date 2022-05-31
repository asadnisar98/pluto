import React, { useState, useEffect } from 'react';

function Main() {
    useEffect(() => {
        // Update the document title using the browser API
        var canvas = document.getElementById('space_box');
    var c = canvas.getContext('2d');
    
    var innerWidth = window.innerWidth,
        innerHeight = window.innerHeight,
        radius = 1,
        starsIndex = 0,
        stars = [],
        TWO_PI = Math.PI*2,
        centerX = innerWidth/2,
        centerY = innerHeight/2,
        focalLength = 1500,
        starRadius = null,
        starX = null,
        starY = null,
        numStars = 1000,
        mouse = {},
        starX_dir = 0,
        starY_dir = 0,
        x = 0,
        y = 0,
        z = 0;
    
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        
        
    // Move the stars with mouse pointer
    
    window.addEventListener('mousemove', function(e){
       mouse.x = e.x;
       mouse.y = e.y;
       
       if(mouse.x < centerX){
         starX_dir += 2;
       }else{
         starX_dir += -2;
       }
       
       if(mouse.y < centerY){
         starY_dir += 2;
       }else{
         starY_dir += -2;
       }
       
    });
    
    // Zoom in/out into the Space on mouse scroll
    canvas.addEventListener('mousewheel', function(e){
       if(e.deltaY < 0){
         focalLength *= 1.1;
       }else{
         focalLength /= 1.1;
       }
       
       if(focalLength >= innerWidth){
         focalLength = innerWidth - 20;
       }else if(focalLength < 100){
         focalLength = 100;
       }
       
    }, false);
    
        
    // Function for create new star
    
    function star(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.radius = radius;
        this.color = "#4D4C7D";
        starsIndex++;
        stars[starsIndex] = this;
        this.id = starsIndex;
        
        // Animate Stars
        this.update = function(){
          starX = (this.x - centerX) * (focalLength / this.z);
          starX += centerX;
          
          starY = (this.y - centerY) * (focalLength / this.z);
          starY += centerY;
          
          starRadius = radius * (focalLength / this.z);
          
          starX += starX_dir;
          starY += starY_dir;
          
          this.z += -10;
          
          if(this.z <= 0){
             this.z = parseInt(innerWidth);
          }
          
          this.draw();
        
        }
        
        // Function for draw star
        this.draw = function(){
            c.beginPath();
            c.arc(starX,starY,starRadius, TWO_PI, false);
            c.fillStyle = this.color;
            c.fill();
            c.closePath();
        }
        
    }	
    
    // X,Y,Z values
    var s;
    for(s = 0; s < numStars; s++){
        x = Math.random() * innerWidth;
        y = Math.random() * innerHeight;
        z = Math.random() * innerWidth;
        new star(x,y,z);
    }
    
    // Function for animate canvas objects
    function animate(){
        requestAnimationFrame(animate);
        c.fillStyle = "#E9D5CA";
        c.fillRect(0,0,innerWidth,innerHeight);
        
        for( var i in stars){
          stars[i].update();
        }
    }
    
    animate();
    
    
    
      }, []);
    return (
        <div>
              <main>
                <canvas id="space_box"></canvas>
                <div className="name_outter">
                    <h2 className="main_heading">Pluto</h2>
                    <h2 className="sub_heading">Currency of the Future!</h2>
                </div>
             </main>
        </div>
    )
}

export default Main
