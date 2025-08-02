// Modal functionality for Live Preview
const livePreviewBtn = document.querySelector('.live-preview');
const modal = document.getElementById('previewModal');
const closeBtn = document.querySelector('.close-btn');

livePreviewBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Add hover effect with cursor animation for product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--cursor-x', `${x}px`);
        card.style.setProperty('--cursor-y', `${y}px`);
    });
    card.addEventListener('mouseleave', () => {
        card.style.removeProperty('--cursor-x');
        card.style.removeProperty('--cursor-y');
    });
});

//NavBar:

  $(document).ready(function () {
    function toggleSidebar() {
      $(".sidebar").toggleClass("open");
      $(".btn-toggle").toggleClass("hide");
    }

    $(".btn-toggle").on("click", toggleSidebar);
    $(".close-sidebar").on("click", toggleSidebar);

    $(document).keyup(function (e) {
      if (e.key === "Escape") {
        $(".sidebar").removeClass("open");
        $(".btn-toggle").removeClass("hide");
      }
    });
  });


class RealisticRippleEffect {
    constructor() {
        this.canvas = document.getElementById('rippleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.ripples = [];
        this.maxRipples = 80;
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        this.setupListeners();
        this.animate();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    setupListeners() {
        let lastX = 0, lastY = 0;
        document.addEventListener('mousemove', (e) => {
            const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
            if (dist > 12) {
                this.spawnRipples(e.clientX, e.clientY, 2);
                lastX = e.clientX;
                lastY = e.clientY;
            }
        });

        document.addEventListener('click', (e) => {
            this.spawnRipples(e.clientX, e.clientY, 6);
        });
    }

    spawnRipples(x, y, count = 3) {
        for (let i = 0; i < count; i++) {
            const delay = i * 80;
            setTimeout(() => this.addRipple(x, y, 40 + Math.random() * 30), delay);
        }
    }

    addRipple(x, y, maxRadius = 60) {
        if (this.ripples.length >= this.maxRipples) this.ripples.shift();
        this.ripples.push({
            x, y,
            radius: 0,
            maxRadius,
            alpha: 1,
            lineWidth: 1.2 + Math.random() * 1.2,
            speed: 1 + Math.random(),
            phase: Math.random() * Math.PI * 2
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ripples = this.ripples.filter(r => {
            r.radius += r.speed;
            r.alpha *= 0.97; // exponential fade
            if (r.alpha <= 0.01) return false;

            // Add ripple distortion
            const pulse = Math.sin(r.radius * 0.15 + r.phase) * 0.5;

            // Outer ring
            this.ctx.beginPath();
            this.ctx.arc(r.x, r.y, r.radius + pulse, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(173, 216, 230, ${r.alpha * 0.6})`;
            this.ctx.lineWidth = r.lineWidth + 0.3;
            this.ctx.stroke();

            // Inner glow
            this.ctx.beginPath();
            this.ctx.arc(r.x, r.y, r.radius * 0.5, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(255, 255, 255, ${r.alpha * 0.3})`;
            this.ctx.lineWidth = 0.8;
            this.ctx.stroke();

            return true;
        });

        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new RealisticRippleEffect();
});


