<script>
(() => {
    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 🔥 IMAGEM DA HYENA
    const hyenaImg = new Image();
    hyenaImg.src = "assets/images/cabeca.png";

    // 🔥 CONFIGURAÇÃO DAS PARTÍCULAS
    const PARTICLE_COUNT = 60; // não aumenta muito!
    let particles = [];

    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 20 + 10,
            speedY: Math.random() * 1 + 0.5,
            speedX: Math.random() * 1 - 0.5,
            opacity: Math.random() * 0.2 + 0.1
        };
    }

    function init() {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(createParticle());
        }
    }

    function update() {
        particles.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;

            if (p.y > canvas.height) {
                p.y = -20;
                p.x = Math.random() * canvas.width;
            }
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            ctx.globalAlpha = p.opacity;
            ctx.drawImage(hyenaImg, p.x, p.y, p.size, p.size);
        });

        ctx.globalAlpha = 1;
    }

    function animate() {
        update();
        draw();
        requestAnimationFrame(animate);
    }

    hyenaImg.onload = () => {
        init();
        animate();
    };
})();
</script>