
document.addEventListener('DOMContentLoaded', function() {
    // Rest of your code...
    const canvas = document.getElementById('bg');
    const ctx = canvas.getContext('2d');
    let width, height;
    let mouseX = -1000, mouseY = -1000;
    const radius = 300;
    let hue = 0; // Start from a purple hue (around 260-280 degrees)

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        console.log('Canvas size set to:', canvas.width, canvas.height);
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    // Create digits randomly
    const digits = [];
    const numDigits = 800;
    for (let i = 0; i < numDigits; i++) {
    digits.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        baseAlpha: Math.random() * 0.03 + 0.02,
        char: Math.random() < 0.5 ? '0' : '1'
    });
    }

    canvas.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    });

    function animate() {
    ctx.clearRect(0, 0, width, height);

    // Gradually shift the hue
    hue += 0.05; // slow change
    if (hue > 360) hue = 0; // loop back (260-280 keeps it purplish)

    // Set dynamic background color
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);

    ctx.font = "18px monospace";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let d of digits) {
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < 0) d.x = width;
        if (d.x > width) d.x = 0;
        if (d.y < 0) d.y = height;
        if (d.y > height) d.y = 0;

        const dx = d.x - mouseX;
        const dy = d.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let dynamicAlpha = 0;
        if (dist < radius) {
        dynamicAlpha = 1 - dist / radius; // Gradually fading effect
        }

        let finalAlpha = Math.min(d.baseAlpha + dynamicAlpha, 1);

        if (finalAlpha > 0) {
        ctx.save();
        ctx.shadowColor = "rgba(169, 169, 169, 0.7)";
        ctx.shadowBlur = 15;
        ctx.fillStyle = `rgba(200, 200, 200, ${finalAlpha})`;
        ctx.globalAlpha = finalAlpha;
        ctx.fillText(d.char, d.x, d.y);
        ctx.restore();
        }
    }

    requestAnimationFrame(animate);
    }
    animate();

  });
  
