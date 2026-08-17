// sidebar.js - Reusable Black & White Sidebar Component

document.addEventListener("DOMContentLoaded", () => {
    const sidebarHTML = `
    <!-- Mobile Header with Toggle Button -->
    <div class="md:hidden flex items-center justify-between bg-black border-b border-zinc-800 p-4 text-white sticky top-0 z-50">
        <a href="index.html" class="font-bold tracking-wider text-lg">⚡ TOOLIFY</a>
        <button id="sidebar-toggle" class="p-2 border border-zinc-700 rounded text-sm hover:bg-zinc-900">
            ☰ Menu
        </button>
    </div>

    <!-- Sidebar Container -->
    <aside id="sidebar-menu" class="hidden md:flex flex-col fixed top-0 left-0 h-screen w-64 bg-zinc-950 border-r border-zinc-800 text-zinc-100 z-40 transition-all duration-200">
        
        <!-- Brand Header -->
        <div class="p-6 border-b border-zinc-800 flex items-center justify-between">
            <div>
                <a href="index.html" class="font-black text-xl tracking-widest text-white uppercase block">TOOLIFY</a>
                <span class="text-[10px] tracking-widest text-zinc-400 uppercase">Workspace Hub</span>
            </div>
        </div>

        <!-- Clock Widget -->
        <div class="px-6 py-4 border-b border-zinc-800/60 bg-zinc-900/40">
            <div class="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-1">Live Time</div>
            <div id="side-clock" class="font-mono text-xs text-zinc-200">--:--:--</div>
        </div>

        <!-- Links Navigation -->
        <div class="flex-1 overflow-y-auto px-4 py-4 space-y-1">
            <a href="index.html" class="nav-item flex items-center gap-3 px-3 py-2 rounded text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 transition">
                <span>🏠</span> Dashboard
            </a>

            <div class="pt-4 pb-2 px-3 text-[10px] font-bold tracking-wider uppercase text-zinc-500">
                Tools Directory
            </div>

            <a href="maps.html" class="nav-item flex items-center gap-3 px-3 py-2 rounded text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 transition">🗺️ Maps</a>
            <a href="weather.html" class="nav-item flex items-center gap-3 px-3 py-2 rounded text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 transition">☀️ Weather</a>
            <a href="notepad.html" class="nav-item flex items-center gap-3 px-3 py-2 rounded text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 transition">📄 Notepad</a>
            <a href="calculator.html" class="nav-item flex items-center gap-3 px-3 py-2 rounded text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 transition">🔢 Calculator</a>
            <a href="google-calendar.html" class="nav-item flex items-center gap-3 px-3 py-2 rounded text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 transition">📅 Calendar</a>
            <a href="para-editor.html" class="nav-item flex items-center gap-3 px-3 py-2 rounded text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 transition">✍️ Paragraph Editor</a>
            <a href="messaging.html" class="nav-item flex items-center gap-3 px-3 py-2 rounded text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 transition">💬 P2P Messaging</a>
            <a href="qr-maker.html" class="nav-item flex items-center gap-3 px-3 py-2 rounded text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 transition">🔍 QR Maker</a>
            <a href="unit-converter.html" class="nav-item flex items-center gap-3 px-3 py-2 rounded text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 transition">📏 Unit Converter</a>
            <a href="speech.html" class="nav-item flex items-center gap-3 px-3 py-2 rounded text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 transition">🗣️ Speech</a>
            <a href="pdf-maker.html" class="nav-item flex items-center gap-3 px-3 py-2 rounded text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 transition">📄 PDF Maker</a>
            <a href="password.html" class="nav-item flex items-center gap-3 px-3 py-2 rounded text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 transition">🔒 Password Generator</a>
            <a href="time.html" class="nav-item flex items-center gap-3 px-3 py-2 rounded text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 transition">🕓 Time & Clock</a>
        </div>

        <!-- Footer Footer -->
        <div class="p-4 border-t border-zinc-800 text-[11px] text-zinc-600 text-center font-mono">
            B&W Minimal Edition
        </div>
    </aside>
    `;

    // Inject Sidebar
    const placeholder = document.getElementById("sidebar") || document.body;
    if (document.getElementById("sidebar")) {
        placeholder.innerHTML = sidebarHTML;
    } else {
        document.body.insertAdjacentHTML("afterbegin", sidebarHTML);
    }

    // Live Clock
    const updateClock = () => {
        const clockEl = document.getElementById("side-clock");
        if (!clockEl) return;
        const now = new Date();
        clockEl.innerText = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) + ' | ' + now.toLocaleTimeString();
    };
    updateClock();
    setInterval(updateClock, 1000);

    // Mobile Menu Toggle
    const toggleBtn = document.getElementById("sidebar-toggle");
    const sidebar = document.getElementById("sidebar-menu");
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener("click", () => {
            sidebar.classList.toggle("hidden");
            sidebar.classList.toggle("w-full");
        });
    }

    // Highlight Active Link
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-item").forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("bg-white", "text-black", "font-bold");
            link.classList.remove("text-zinc-300", "text-zinc-400");
        }
    });
});