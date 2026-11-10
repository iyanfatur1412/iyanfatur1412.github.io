const clickSound = new Audio();
clickSound.volume = 0.4;

function playSaoSound(src) {
    clickSound.src = src;
    clickSound.currentTime = 0;
    clickSound.play().catch(error => {
        console.log("Audio play blocked or waiting for user interaction:", error);
    });
}

// Fungsi saat tombol Connect diklik
function startSystem() {
    playSaoSound("assets/sao-log-in-screen2.mp3");
    const startBtn = document.getElementById('start-btn');
    const loaderContainer = document.getElementById('loader-container');
    const loadingBar = document.getElementById('loading-bar');
    const loadingText = document.getElementById('loading-text');
    const openingCard = document.getElementById('opening-card');
    const openingTitle = document.getElementById('opening-title');
    const openingSubtitle = document.getElementById('opening-subtitle');

    // Sembunyikan tombol, tampilkan progress bar, aktifkan efek glow SAO
    startBtn.classList.add('hidden');
    loaderContainer.classList.remove('hidden');
    openingCard.classList.add('sao-login-active');
    openingTitle.innerHTML = `<span class="text-white animate-pulse">CONNECTING...</span>`;
    openingSubtitle.innerText = "ESTABLISHING FULL-DIVE CONNECTION";

    let progress = 0;
    const duration = 5000; // Durasi penuh 5 detik
    const intervalTime = 50; // Update setiap 50ms
    const increment = 100 / (duration / intervalTime);

    const loadingInterval = setInterval(() => {
        progress += increment;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            loadingBar.style.width = '100%';
            loadingText.innerText = "LINK START SUCCESSFUL!";

            // Masuk ke halaman utama setelah loader penuh
            setTimeout(() => {
                const opening = document.getElementById('sao-opening');
                opening.style.opacity = '0';
                setTimeout(() => {
                    opening.style.display = 'none';
                }, 800);
            }, 500);
        } else {
            loadingBar.style.width = progress + '%';
            loadingText.innerText = `CONNECTING TO AINCRAD... ${Math.floor(progress)}%`;
        }
    }, intervalTime);
}

const menuTitle = document.getElementById('menu-title');
const menuBody = document.getElementById('menu-body');

function openMenu(type) {
    playSaoSound("assets/sao_sfx.mp3");

    if (type === 'status') {
        menuTitle.innerText = "> PLAYER PROFILE & BIO";
        menuBody.innerHTML = `
                    <p class="text-slate-200">Pernah bekerja di bidang percetakan sebagai Customer Service, juga sebagai Operator Printing Stiker Mimaki serta DTF. Tertarik juga pada bidang pemrograman, dan sedang mempelajarinya.</p>
                    <div class="grid grid-cols-2 gap-2 pt-2 text-[11px] md:text-xs">
                        <div class="p-2 bg-blue-500/10 border border-sao-blue/30">⚔️ **Strength:** Design Grafis</div>
                        <div class="p-2 bg-blue-500/10 border border-sao-blue/30">🛡️ **Experience:** CV. Maxprint (3-year)</div>
                        <div class="p-2 bg-blue-500/10 border border-sao-blue/30">📍 **Location:** Garut (ID)</div>
                        <div class="p-2 bg-blue-500/10 border border-sao-blue/30">✨ **Specialty:** Multipotentialite</div>
                    </div>
                `;
    } else if (type === 'skills') {
        menuTitle.innerText = "> EQUIPPED SKILL SLOTS";
        menuBody.innerHTML = `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] md:text-xs">
                        <div class="p-2.5 bg-blue-500/10 border border-sao-blue/40">
                            <span class="text-sao-blue font-bold">[EX-SKILL] CorelDRAW</span>
                            <p class="text-slate-300 mt-1">Familiar dengan Software CorelDRAW</p>
                        </div>
                        <div class="p-2.5 bg-blue-500/10 border border-sao-blue/40">
                            <span class="text-sao-blue font-bold">[EX-SKILL] Adobe Photosop</span>
                            <p class="text-slate-300 mt-1">Intermediate dalam penggunan Software ini.</p>
                        </div>
                        <div class="p-2.5 bg-blue-500/10 border border-sao-blue/40">
                            <span class="text-sao-blue font-bold">[EX-SKILL] Mimaki & Raster Link</span>
                            <p class="text-slate-300 mt-1">Pernah bekerja sebagai Operator Mesin cetak Stiker, dan tahu dalam Maintenance Mesin sehari-hari</p>
                        </div>
                        <div class="p-2.5 bg-blue-500/10 border border-sao-blue/40">
                            <span class="text-sao-blue font-bold">[EX-SKILL] DTF Machine</span>
                            <p class="text-slate-300 mt-1">Pernah bekerja sebagai Operator Mesin cetak DTF, dan tahu dalam Maintenance Mesin sehari-hari</p>
                        </div>
                        <div class="p-2.5 bg-blue-500/10 border border-sao-blue/40">
                            <span class="text-sao-blue font-bold">[EX-SKILL] Soft Skill</span>
                            <p class="text-slate-300 mt-1">Mampu untuk berkomunikasi dengan konsumen, Memanejemen waktu serta tugas yang terlebih dahulu untuk didahulukan</p>
                        </div>
                    </div>
                `;
    } else if (type === 'inventory') {
        menuTitle.innerText = "> INVENTORY / COMPLETED QUESTS";
        menuBody.innerHTML = `
                    <div class="space-y-2 text-[11px] md:text-xs">
                        <div class="p-2.5 bg-blue-500/10 border border-sao-blue/40 flex justify-between items-center">
                            <div>
                                <span class="text-sao-blue font-bold">Item #: Gallery My Design Grafis</span>
                                <p class="text-slate-300">Kumpulan berbagai desain yang telah saya buat</p>
                            </div>
                            <a href="https://iyanfatur1412.github.io/my-project" class="px-2 py-1 bg-green-500/20 hover:bg-green-200/20 text-green-400 border border-green-500 text-[10px]">VISIT</a>
                        </div>
                        <div class="p-2.5 bg-blue-500/10 border border-sao-blue/40 flex justify-between items-center">
                            <div>
                                <span class="text-sao-blue font-bold">Item #1: Chat App Realtime</span>
                                <p class="text-slate-300">Aplikasi Chatting secara Realtime menggunakan Socket IO dan Node JS</p>
                            </div>
                            <a href="https://chat-app-production-a087.up.railway.app/" class="px-2 py-1 bg-green-500/20 hover:bg-green-200/20 text-green-400 border border-green-500 text-[10px]">VISIT</a>
                        </div>
                        <div class="p-2.5 bg-blue-500/10 border border-sao-blue/40 flex justify-between items-center">
                            <div>
                                <span class="text-sao-blue font-bold">Item #2: Zenplayers</span>
                                <p class="text-slate-300">Aplikasi Music Player mengunakan Full Vanilla Javascript, fitur music masih terbatas.</p>
                            </div>
                            <a href="https://iyanfatur1412.github.io/zenplayers/" class="px-2 py-1 bg-green-500/20 hover:bg-green-200/20 text-green-400 border border-green-500 text-[10px]">VISIT</a>
                        </div>
                        <div class="p-2.5 bg-blue-500/10 border border-sao-blue/40 flex justify-between items-center">
                            <div>
                                <span class="text-sao-blue font-bold">Item #3: Movie Search</span>
                                <p class="text-slate-300">Aplikasi Search Film dengan bantuan API dari OMDB, dibuat menggunakan Vanilla Javascript</p>
                            </div>
                            <a href="https://movie-search-omdb-iota.vercel.app/" class="px-2 py-1 bg-green-500/20 hover:bg-green-200/20 text-green-400 border border-green-500 text-[10px]">VISIT</a>
                        </div>
                        <div class="p-2.5 bg-blue-500/10 border border-sao-blue/40 flex justify-between items-center">
                            <div>
                                <span class="text-sao-blue font-bold">Item #4: Game Suwit</span>
                                <p class="text-slate-300">Game Suwit melawan Komputer dibuat menggunakan Vanilla Javascript</p>
                            </div>
                            <a href="https://iyanfatur1412.github.io/game-suwit/" class="px-2 py-1 bg-green-500/20 hover:bg-green-200/20 text-green-400 border border-green-500 text-[10px]">VISIT</a>
                        </div>
                        <div class="p-2.5 bg-blue-500/10 border border-sao-blue/40 flex justify-between items-center">
                            <div>
                                <span class="text-sao-blue font-bold">Item #5: Hero Image</span>
                                <p class="text-slate-300">Aplikasi Memilih Character anime seperti game galge</p>
                            </div>
                            <a href="https://iyanfatur1412.github.io/hero-list/hero.html" class="px-2 py-1 bg-green-500/20 hover:bg-green-200/20 text-green-400 border border-green-500 text-[10px]">VISIT</a>
                        </div>
                    </div>
                `;
    } else if (type === 'message') {
        menuTitle.innerText = "> SECURE TRANSMISSION (CONTACT)";
        menuBody.innerHTML = `
                    <div class="w-50 text-center">
                        <a href="">
                            <button type="submit" class="px-5 py-2 bg-blue-500/30 hover:bg-blue-500/60 border border-sao-blue font-bold text-sao-blue uppercase tracking-wider transition">Contact Me</button>
                        </a>
                    </div>
                `;
    }
}
