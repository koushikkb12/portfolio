const projects = [
  {
    title: "Qwen2.5-7B Fine-Tuning for Code Generation",
    year: "2026",
    status: "Built",
    category: "llm",
    accent: "#3ddbd9",
    summary:
      "Fine-tuned Qwen2.5-7B with LoRA on 122K code instructions, reaching 82.7% eval token accuracy with only 4.07% trainable parameters.",
    tools: ["Python", "Transformers", "PEFT", "TRL", "LoRA", "FlashAttention2"],
    link: "https://github.com/koushikkb12/finetuning_qwen2.5-tocode",
    linkLabel: "View repository ->",
  },
  {
    title: "GPT-2 (123.6M) Trained from Scratch",
    year: "2026",
    status: "Built",
    category: "llm",
    accent: "#ffc857",
    summary:
      "Implemented and trained a 124M GPT-2 from scratch in PyTorch, then fine-tuned for conversation on OASST1 after OpenWebText pre-training (~1.3B tokens).",
    tools: ["PyTorch", "OpenWebText", "OASST1", "FP16", "Hugging Face Hub"],
    link: "https://github.com/koushikkb12/gpt2-123.6m-paramfromscratch",
    linkLabel: "View repository ->",
  },
  {
    title: "mini-Wiki Next-Word Prediction Model",
    year: "2026",
    status: "Built",
    category: "llm",
    accent: "#a78bfa",
    summary:
      "Built a 110M GPT-2 style model from scratch on WikiText-103 for next-token prediction, achieving eval perplexity 32.3 after 3 epochs.",
    tools: ["PyTorch", "Transformers", "WikiText-103", "BPE Tokenizer", "AdamW"],
    link: "https://github.com/koushikkb12/mini-wiki",
    linkLabel: "View repository ->",
  },
  {
    title: "Subscription & Expense Tracker",
    year: "2025-2026",
    status: "Built",
    category: "platform",
    accent: "#d7ff5f",
    summary:
      "Cross-platform personal finance app to track subscriptions and recurring expenses with a shared product experience across web and mobile.",
    tools: ["Next.js", "Expo", "React Native", "TypeScript"],
  },
  {
    title: "Intelligent Health Records Platform (Final Year)",
    year: "2026",
    status: "Ongoing",
    category: "ongoing",
    accent: "#ff6b4a",
    summary:
      "Consent-driven digital health records platform with citizen-owned data, provider-side role-based access, audit trails, and secure medical file workflows.",
    tools: ["Next.js", "Expo", "Django", "DRF", "PostgreSQL", "AWS S3"],
  },
  {
    title: "Lecture Summarizer & Recipe Generator",
    year: "2025",
    status: "Built",
    category: "llm",
    accent: "#3ddbd9",
    summary:
      "AI application that summarizes lecture transcripts and notes with OpenAI GPT models, then extends the workflow into recipe generation from user-provided ingredients.",
    tools: ["Python", "OpenAI API", "Flask", "LangChain"],
  },
  {
    title: "EcoRewards Waste Collection Platform",
    year: "2024",
    status: "Built",
    category: "platform",
    accent: "#d7ff5f",
    summary:
      "Full-stack platform for sustainable waste disposal with user profiles, pickup scheduling, rewards dashboards, admin logistics, trend analysis, and reporting.",
    tools: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Car Damage Detection",
    year: "2023-2024",
    status: "Built",
    category: "vision",
    accent: "#ff6b4a",
    summary:
      "YOLO-based computer vision model trained to classify vehicle damage from images with dataset cleaning, annotation, and precision-recall evaluation.",
    tools: ["Python", "OpenCV", "TensorFlow", "YOLO"],
  },
  {
    title: "Swarm Drone Navigation",
    year: "2024",
    status: "Research",
    category: "rl",
    accent: "#ffc857",
    summary:
      "Reinforcement learning experiment for autonomous drone swarm navigation in dynamic environments using DQN, coordination logic, and reward optimization.",
    tools: ["Python", "PyTorch", "OpenAI Gym", "DQN"],
  },
  {
    title: "Healthcare Chatbot with RAG",
    year: "2025",
    status: "Ongoing",
    category: "ongoing",
    accent: "#a78bfa",
    summary:
      "Medical FAQ assistant using Retrieval-Augmented Generation, FAISS vector search, LangChain, and Flask to produce more grounded healthcare answers.",
    tools: ["Python", "FAISS", "LangChain", "Flask"],
  },
];

const projectGrid = document.querySelector("#project-grid");
const filterButtons = document.querySelectorAll(".filter-button");
const sceneCaption = document.querySelector("#scene-caption");
const projectCount = document.querySelector("#project-count");

if (projectCount) {
  projectCount.textContent = String(projects.length);
}

function renderProjects(filter = "all") {
  const visibleProjects = projects.filter((project) => {
    return filter === "all" || project.category === filter || project.status.toLowerCase() === filter;
  });

  projectGrid.innerHTML = visibleProjects
    .map((project, index) => {
      const projectHref = project.link || "#contact";
      const opensExternal = Boolean(project.link);
      const projectLinkLabel = project.linkLabel || (opensExternal ? "View project ->" : "Discuss this project ->");

      return `
        <article class="project-card" tabindex="0" data-project="${project.title}" data-index="${index}" style="--accent:${project.accent}">
          <div class="project-topline">
            <span>${project.status}</span>
            <span>${project.year}</span>
          </div>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="tag-row" aria-label="Tools used">
            ${project.tools.map((tool) => `<span>${tool}</span>`).join("")}
          </div>
          <a class="project-link" href="${projectHref}" ${opensExternal ? 'target="_blank" rel="noreferrer"' : ""}>${projectLinkLabel}</a>
        </article>
      `
    })
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProjects(button.dataset.filter);
  });
});

renderProjects();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll("[data-animate]").forEach((element) => observer.observe(element));

const canvas = document.querySelector("#hero-canvas");
const pointer = { x: 0, y: 0 };

window.addEventListener("pointermove", (event) => {
  pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
  pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
});

bootScene();

async function bootScene() {
  try {
    const THREE = await import("./vendor/three.module.js");
    initThreeScene(THREE);
  } catch (error) {
    initCanvasFallback();
    sceneCaption.textContent = "Interactive constellation running in fallback mode";
  }
}

function initThreeScene(THREE) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true,
    powerPreference: "high-performance",
  });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  const clock = new THREE.Clock();
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2(-10, -10);
  const satellites = [];

  camera.position.set(0, 0.5, 8.5);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.45, 2),
    new THREE.MeshBasicMaterial({
      color: 0x3ddbd9,
      wireframe: true,
      transparent: true,
      opacity: 0.78,
    })
  );
  scene.add(core);

  const inner = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.03, 1),
    new THREE.MeshBasicMaterial({
      color: 0xff6b4a,
      transparent: true,
      opacity: 0.1,
    })
  );
  scene.add(inner);

  const ringMaterials = [0x3ddbd9, 0xffc857, 0xd7ff5f].map(
    (color) =>
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.32,
        wireframe: true,
      })
  );

  const rings = ringMaterials.map((material, index) => {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.1 + index * 0.54, 0.008, 8, 160), material);
    ring.rotation.x = Math.PI / (2.4 + index * 0.4);
    ring.rotation.y = index * 0.65;
    scene.add(ring);
    return ring;
  });

  const particleCount = 900;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const palette = [
    new THREE.Color("#3ddbd9"),
    new THREE.Color("#ff6b4a"),
    new THREE.Color("#d7ff5f"),
    new THREE.Color("#ffc857"),
    new THREE.Color("#a78bfa"),
  ];

  for (let index = 0; index < particleCount; index += 1) {
    const radius = 2.2 + Math.random() * 4.6;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const i = index * 3;
    positions[i] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.72;
    positions[i + 2] = radius * Math.cos(phi);

    const color = palette[index % palette.length];
    colors[i] = color.r;
    colors[i + 1] = color.g;
    colors[i + 2] = color.b;
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const particles = new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({
      size: 0.026,
      vertexColors: true,
      transparent: true,
      opacity: 0.86,
    })
  );
  scene.add(particles);

  projects.forEach((project, index) => {
    const satellite = new THREE.Mesh(
      new THREE.SphereGeometry(0.11, 24, 24),
      new THREE.MeshBasicMaterial({ color: project.accent })
    );
    satellite.userData.project = project;
    satellite.userData.index = index;
    satellites.push(satellite);
    scene.add(satellite);
  });

  function resize() {
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }

  function highlightProject(title) {
    document.querySelectorAll(".project-card").forEach((card) => {
      card.classList.toggle("is-linked", card.dataset.project === title);
    });
  }

  canvas.addEventListener("pointermove", (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  });

  canvas.addEventListener("pointerleave", () => {
    mouse.set(-10, -10);
    highlightProject("");
  });

  canvas.addEventListener("click", () => {
    raycaster.setFromCamera(mouse, camera);
    const hit = raycaster.intersectObjects(satellites)[0];
    if (hit) {
      document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
    }
  });

  function animate() {
    const elapsed = clock.getElapsedTime();
    core.rotation.x = elapsed * 0.19 + pointer.y * 0.08;
    core.rotation.y = elapsed * 0.28 + pointer.x * 0.12;
    inner.rotation.y = -elapsed * 0.22;
    particles.rotation.y = elapsed * 0.03;
    particles.rotation.x = pointer.y * 0.045;

    rings.forEach((ring, index) => {
      ring.rotation.z = elapsed * (0.05 + index * 0.025);
      ring.rotation.x += 0.0015 * (index + 1);
    });

    satellites.forEach((satellite, index) => {
      const angle = elapsed * (0.34 + index * 0.045) + index * ((Math.PI * 2) / satellites.length);
      const radius = 2.35 + index * 0.28;
      satellite.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 1.16) * 0.92,
        Math.sin(angle) * radius * 0.58
      );
      satellite.scale.setScalar(1 + Math.sin(elapsed * 2 + index) * 0.14);
    });

    camera.position.x += (pointer.x * 0.7 - camera.position.x) * 0.035;
    camera.position.y += (-pointer.y * 0.45 + 0.5 - camera.position.y) * 0.035;
    camera.lookAt(0, 0, 0);

    raycaster.setFromCamera(mouse, camera);
    const hit = raycaster.intersectObjects(satellites)[0];
    if (hit) {
      const title = hit.object.userData.project.title;
      sceneCaption.textContent = `Orbit selected: ${title}`;
      highlightProject(title);
    } else if (sceneCaption.textContent.startsWith("Orbit selected")) {
      sceneCaption.textContent = "Move the pointer through the project orbits";
      highlightProject("");
    }

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  resize();
  animate();
  window.addEventListener("resize", resize);
  sceneCaption.textContent = "Move the pointer through the project orbits";
}

function initCanvasFallback() {
  const context = canvas.getContext("2d");
  const nodes = Array.from({ length: 90 }, (_, index) => ({
    x: Math.random(),
    y: Math.random(),
    z: Math.random() * 0.8 + 0.2,
    speed: 0.0006 + (index % 7) * 0.00012,
    color: ["#3ddbd9", "#ff6b4a", "#d7ff5f", "#ffc857", "#a78bfa"][index % 5],
  }));

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(canvas.clientWidth * ratio);
    canvas.height = Math.floor(canvas.clientHeight * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function frame(time) {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    context.clearRect(0, 0, width, height);

    nodes.forEach((node, index) => {
      node.x = (node.x + node.speed) % 1;
      const x = node.x * width + pointer.x * 22 * node.z;
      const y = node.y * height + pointer.y * 18 * node.z;
      const size = 1.4 + node.z * 3;

      context.beginPath();
      context.fillStyle = node.color;
      context.globalAlpha = 0.35 + node.z * 0.5;
      context.arc(x, y, size, 0, Math.PI * 2);
      context.fill();

      const other = nodes[(index + 13) % nodes.length];
      const ox = other.x * width;
      const oy = other.y * height;
      const distance = Math.hypot(x - ox, y - oy);
      if (distance < 170) {
        context.beginPath();
        context.strokeStyle = node.color;
        context.globalAlpha = 0.12;
        context.moveTo(x, y);
        context.lineTo(ox, oy);
        context.stroke();
      }
    });

    context.globalAlpha = 0.65;
    context.strokeStyle = "#3ddbd9";
    context.lineWidth = 1.2;
    context.beginPath();
    context.ellipse(width * 0.68, height * 0.46, 170, 72, time * 0.0003, 0, Math.PI * 2);
    context.stroke();
    context.beginPath();
    context.ellipse(width * 0.68, height * 0.46, 220, 96, -time * 0.0002, 0, Math.PI * 2);
    context.stroke();
    context.globalAlpha = 1;

    requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(frame);
}
