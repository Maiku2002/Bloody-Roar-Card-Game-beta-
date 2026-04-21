const emojis = { "Piedra": "👊", "Papel": "✋", "Tijeras": "✌️" };
const tiposRotacion = ["Piedra", "Papel", "Tijeras"];

const personajes = [
    { id: 0, n: "YUGO", img: "yugo", estado: 0, tHum: "Piedra", tBst1: "Piedra", sHum: {a:4, d:3, v:3, hp:10, eb:0}, sBst1: {a:7, d:6, v:7, hp:5}, h: "Liderazgo: Aumenta el daño de aliados tipo Piedra.", s: "Sinergia con Gado y Nagi: +3 Ataque.", sinergiaEfecto: { esCompleja: true, conIds: [3, 22], mejoras: [{ stat: "a", bono: 3 },]}},
    { id: 1, n: "ALICE", img: "alice", estado: 0, tHum: "Tijeras", tBst1: "Tijeras", sHum: {a:2, d:2, v:5, hp:10, eb:0}, sBst1: {a:5, d:5, v:8, hp:4}, h: "Salto: Esquiva el primer ataque recibido.", s: "Sinergia con Yugo y Kenji: +3 Velocidad.", sinergiaEfecto: { esCompleja: true, conIds: [0, 10], mejoras: [{ stat: "v", bono: 3 }]}},
    { id: 2, n: "LONG", img: "long", estado: 0, tHum: "Piedra", tBst1: "Piedra", sHum: {a:5, d:2, v:4, hp:10, eb:0}, sBst1: {a:8, d:5, v:6, hp:4}, h: "Combo: Ataca dos veces si el rival es Papel.", s: "Sinergia con Uriko y Shina: +4 Ataque.", sinergiaEfecto: { esCompleja: true, conIds: [9, 13], mejoras: [{ stat: "a", bono: 4 }, ]}},
    { id: 3, n: "GADO", img: "gado", estado: 0, tHum: "Piedra", tBst1: "Papel", sHum: {a:4, d:5, v:2, hp:10, eb:0}, sBst1: {a:7, d:8, v:5, hp:6}, h: "Comandante: Reduce defensa rival global -1.", s: "Sinergia con Shina y Jenny: +2 Ataque y +2 Defensa.", sinergiaEfecto: { esCompleja: true, conIds: [13, 14], mejoras: [{ stat: "a", bono: 2 }, { stat: "d", bono: 2 }]}},
    { id: 4, n: "BAKURYU I", img: "bakuryu1", estado: 0, tHum: "Tijeras", tBst1: "Tijeras", sHum: {a:3, d:2, v:5, hp:10, eb:0}, sBst1: {a:6, d:5, v:8, hp:4}, h: "Humo: Reduce puntería rival.", s: "Sinergia con Kohryu y Hans: +4 Velocidad.", sinergiaEfecto: { esCompleja: true, conIds: [5, 17], mejoras: [{ stat: "v", bono: 4 }]}},
    { id: 5, n: "HANS", img: "hans", estado: 0, tHum: "Tijeras", tBst1: "Piedra", sHum: {a:4, d:1, v:5, hp:10, eb:0}, sBst1: {a:7, d:5, v:7, hp:5}, h: "Corte: Inflige sangrado (HP-1 por turno).", s: "Sinergia con Bakuryu I y Long: +2 Ataque y +2 Velocidad.", sinergiaEfecto: { esCompleja: true, conIds: [2, 4], mejoras: [{ stat: "a", bono: 2 }, { stat: "v", bono: 2 }]}},
    { id: 6, n: "MITSUKO", img: "mitsuko", estado: 0, tHum: "Papel", tBst1: "Piedra", sHum: {a:5, d:4, v:1, hp:10, eb:0}, sBst1: {a:6, d:8, v:4, hp:7}, h: "Agarre: El rival no puede cambiar el próximo turno.", s: "Sinergia con Uriko I y Alice: +4 Puntos de Vida.", sinergiaEfecto: { esCompleja: true, conIds: [1, 8], mejoras: [{ stat: "hp", bono: 4 },]}},
    { id: 7, n: "GREG", img: "greg", estado: 0, tHum: "Papel", tBst1: "Papel", sHum: {a:3, d:6, v:1, hp:10, eb:0}, sBst1: {a:7, d:7, v:5, hp:7}, h: "Abrazo: Aturde al rival si tiene menos HP.", s: "Sinergia con Yugo y Fang: +3 Ataque y +1 Defensa.", sinergiaEfecto: { esCompleja: true, conIds: [0, 21], mejoras: [{ stat: "a", bono: 3 }, { stat: "d", bono: 1 }]}},
    { id: 8, n: "URIKO I", img: "uriko1", estado: 0, tHum: "Piedra", tBst1: "Tijeras", tBst2: "Piedra", sHum: {a:6, d:3, v:2, hp:10, eb:0}, sBst1: {a:6, d:5, v:8, hp:4}, sBst2: {a:8, d:7, v:5, hp:8}, h: "Frenesí: Gana ataque por cada daño recibido.", s: "Sinergia con Yugo y Uranus: +3 Velocidad y +2 Puntos de Vida.", sinergiaEfecto: { esCompleja: true, conIds: [0, 18], mejoras: [{ stat: "v", bono: 3 }, { stat: "hp", bono: 2 }]}},
    { id: 9, n: "URIKO", img: "uriko2", estado: 0, tHum: "Tijeras", tBst1: "Tijeras", sHum: {a:1, d:2, v:6, hp:10, eb:0}, sBst1: {a:5, d:5, v:8, hp:4}, h: "Agilidad: Alta probabilidad de crítico.", s: "Sinergia con Kenji y Mana: +4 Velocidad.", sinergiaEfecto: { esCompleja: true, conIds: [10, 25], mejoras: [{ stat: "v", bono: 4 }]}},
    { id: 10, n: "KENJI", img: "kenji", estado: 0, tHum: "Tijeras", tBst1: "Tijeras", sHum: {a:3, d:3, v:6, hp:10, eb:0}, sBst1: {a:6, d:6, v:8, hp:5}, h: "Ninja: Puede atacar y transformarse el mismo turno.", s: "Sinergia con Yugo y Uriko: +1 Ataque y +3 Velocidad.", sinergiaEfecto: { esCompleja: true, conIds: [0, 9], mejoras: [{ stat: "a", bono: 1 }, { stat: "v", bono: 3 }]}},
    { id: 11, n: "BUSUZIMA", img: "busuzima", estado: 0, tHum: "Papel", tBst1: "Papel", sHum: {a:3, d:5, v:3, hp:10, eb:0}, sBst1: {a:5, d:7, v:7, hp:6}, h: "Camaleón: Puede cambiar su tipo elemental.", s: "Sinergia con Stun y Shenlong: +4 Defensa.", sinergiaEfecto: { esCompleja: true, conIds: [12, 15], mejoras: [{ stat: "d", bono: 4 },]}},
    { id: 12, n: "STUN", img: "stun", estado: 0, tHum: "Papel", tBst1: "Piedra", sHum: {a:4, d:5, v:2, hp:10, eb:0}, sBst1: {a:6, d:8, v:5, hp:7}, h: "Coraza: Ignora 1 de daño cada turno.", s: "Sinergia con Busuzima y Jenny: +2 Defensa y +2 Puntos de Vida.", sinergiaEfecto: { esCompleja: true, conIds: [11, 14], mejoras: [{ stat: "d", bono: 2 }, { stat: "hp", bono: 2 }]}},
    { id: 13, n: "SHINA", img: "shina", estado: 0, tHum: "Piedra", tBst1: "Tijeras", sHum: {a:5, d:3, v:4, hp:10, eb:0}, sBst1: {a:7, d:6, v:7, hp:5}, h: "Caza: +2 Ataque contra bestias transformadas.", s: "Sinergia con Gado y Cronos: +3 Ataque y +1 Velocidad.", sinergiaEfecto: { esCompleja: true, conIds: [3, 19], mejoras: [{ stat: "a", bono: 3 }, { stat: "v", bono: 1 }]}},
    { id: 14, n: "JENNY", img: "jenny", estado: 0, tHum: "Tijeras", tBst1: "Tijeras", sHum: {a:3, d:2, v:5, hp:10, eb:0}, sBst1: {a:6, d:5, v:8, hp:4}, h: "Vampirismo: Recupera 1 HP al dañar.", s: "Sinergia con Gado y Stun: +4 Velocidad.", sinergiaEfecto: { esCompleja: true, conIds: [3, 12], mejoras: [ { stat: "v", bono: 4 }]}},
    { id: 15, n: "SHENLONG", img: "shenlong", estado: 0, tHum: "Piedra", tBst1: "Piedra", sHum: {a:6, d:2, v:4, hp:10, eb:0}, sBst1: {a:8, d:6, v:6, hp:5}, h: "Poder Oscuro: Dobla su daño pero pierde 1 HP.", s: "Sinergia con Long y Busuzima: +4 Ataque.", sinergiaEfecto: { esCompleja: true, conIds: [2, 11], mejoras: [{ stat: "a", bono: 4 },]}},
    { id: 16, n: "XION", img: "xion", estado: 0, tHum: "Tijeras", tBst1: "Piedra", sHum: {a:5, d:3, v:5, hp:10, eb:0}, sBst1: {a:8, d:5, v:7, hp:5}, h: "Cuchillas: Ignora la defensa rival.", s: "Sinergia con Nagi y Long: +3 Ataque y +1 Defensa.", sinergiaEfecto: { esCompleja: true, conIds: [2, 22], mejoras: [{ stat: "a", bono: 3 }, { stat: "d", bono: 1 }]}},
    { id: 17, n: "KOHRYU", img: "kohryu", estado: 0, tHum: "Tijeras", tBst1: "Papel", sHum: {a:4, d:4, v:5, hp:10, eb:0}, sBst1: {a:6, d:8, v:6, hp:6}, h: "Acero: No puede ser aturdido.", s: "Sinergia con Bakuryu I y Kenji: +2 Ataque y +2 Defensa.", sinergiaEfecto: { esCompleja: true, conIds: [4, 10], mejoras: [{ stat: "a", bono: 2 }, { stat: "d", bono: 2 }]}},
    { id: 18, n: "URANUS", img: "uranus", estado: 0, tHum: "Tijeras", tBst1: "Piedra", sHum: {a:6, d:1, v:6, hp:10, eb:0}, sBst1: {a:8, d:7, v:7, hp:8}, h: "Dios: +1 en todas las stats cada 3 turnos.", s: "Sinergia con Uriko I y Cronos: +2 Ataque y +2 Defensa.", sinergiaEfecto: { esCompleja: true, conIds: [8, 19], mejoras: [{ stat: "a", bono: 2 }, { stat: "d", bono: 2 }]}},
    { id: 19, n: "CRONOS", img: "cronos", estado: 0, tHum: "Papel", tBst1: "Papel", tBst2: "Piedra", sHum: {a:3, d:5, v:4, hp:10, eb:0}, sBst1: {a:5, d:6, v:7, hp:5}, sBst2: {a:8, d:5, v:8, hp:6}, h: "Renacer: Vuelve a transformarse al morir una vez.", s: "Sinergia con Uranus y Ganesha: +1 Defensa y +3 Velocidad.", sinergiaEfecto: { esCompleja: true, conIds: [18, 20], mejoras: [{ stat: "v", bono: 3 }, { stat: "d", bono: 1 }]}},
    { id: 20, n: "GANESHA", img: "ganesha", estado: 0, tHum: "Papel", tBst1: "Papel", sHum: {a:5, d:6, v:1, hp:10, eb:0}, sBst1: {a:7, d:8, v:4, hp:7}, h: "Embestida: Empuja al rival (pierde turno).", s: "Sinergia con Cronos y Shina: +2 Defensa y +2 Puntos de Vida.", sinergiaEfecto: { esCompleja: true, conIds: [13, 19], mejoras: [{ stat: "d", bono: 2 }, { stat: "hp", bono: 2 }]}},
    { id: 21, n: "FANG", img: "fang", estado: 0, tHum: "Piedra", tBst1: "Piedra", sHum: {a:5, d:2, v:5, hp:10, eb:0}, sBst1: {a:8, d:5, v:7, hp:5}, h: "Colmillo: Probabilidad de crítico x2.", s: "Sinergia con Yugo y Cronos: +3 Ataque y +1 Velocidad.", sinergiaEfecto: { esCompleja: true, conIds: [0, 19], mejoras: [{ stat: "a", bono: 3 }, { stat: "v", bono: 1 }]}},
    { id: 22, n: "NAGI", img: "nagi", estado: 0, tHum: "Papel", tBst1: "Tijeras", sHum: {a:3, d:4, v:4, hp:10, eb:0}, sBst1: {a:6, d:6, v:8, hp:6}, h: "Curación: Recupera 2 HP a un aliado fuera de combate.", s: "Sinergia con Xion y Mana: +2 Ataque y +2 Puntos de Vida.", sinergiaEfecto: { esCompleja: true, conIds: [16, 25], mejoras: [{ stat: "a", bono: 2 }, { stat: "hp", bono: 2 }]}},
    { id: 23, n: "REIJI", img: "reiji", estado: 0, tHum: "Piedra", tBst1: "Piedra", sHum: {a:4, d:3, v:4, hp:10, eb:0}, sBst1: {a:7, d:5, v:8, hp:4}, h: "Cuervo: Vuela sobre ataques tipo Papel.", s: "Sinergia con Yugo y Nagi: +1 Ataque y +3 Velocidad.", sinergiaEfecto: { esCompleja: true, conIds: [0, 22], mejoras: [{ stat: "a", bono: 1 }, { stat: "v", bono: 3 }]}},
    { id: 24, n: "RYOHO", img: "ryoho", estado: 0, tHum: "Papel", tBst1: "Papel", sHum: {a:4, d:6, v:2, hp:10, eb:0}, sBst1: {a:8, d:8, v:4, hp:8}, h: "Dragón: Daño de área a todos los rivales.", s: "Sinergia con Mana y Uranus: +4 Ataque.", sinergiaEfecto: { esCompleja: true, conIds: [18, 25], mejoras: [{ stat: "a", bono: 4 },]}},
    { id: 25, n: "MANA", img: "mana", estado: 0, tHum: "Tijeras", tBst1: "Papel", sHum: {a:1, d:1, v:6, hp:10, eb:0}, sBst1: {a:5, d:7, v:7, hp:6}, h: "Sello: Anula la habilidad del rival activo.", s: "Sinergia con Ryoho y Xion: +4 Puntos de Vida.", sinergiaEfecto: { esCompleja: true, conIds: [24, 16], mejoras: [{ stat: "hp", bono: 4 },]}},
];

const baseData = JSON.parse(JSON.stringify(personajes));
let elegidos = [], rivalElegidos = [];
let peer = null, connection = null, myRole = "", turnOf = "HOST";
let iamReady = false, rivalIsReady = false, miActivoId = null, rivalActivoId = null;

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active-screen'));
    document.getElementById(id).classList.add('active-screen');
}

function exitToMenu() {
    if(connection) connection.close();
    resetGameState();
    showScreen('screen-menu');
}

function resetGameState() {
    elegidos = []; rivalElegidos = []; turnOf = "HOST"; iamReady = false; rivalIsReady = false; miActivoId = null; rivalActivoId = null;
    personajes.forEach((p, idx) => {
        p.estado = 0;
        p.sHum = {...baseData[idx].sHum};
        p.sBst1 = {...baseData[idx].sBst1};
        if(p.sBst2) p.sBst2 = {...baseData[idx].sBst2};
    });
    document.getElementById('dashboard').innerHTML = '';
    document.getElementById('lista-seleccion').innerHTML = '';
    if(document.getElementById('btn-connect')) { 
        document.getElementById('btn-connect').disabled = false; 
        document.getElementById('btn-connect').innerText = "CONECTAR AHORA"; 
    }
    document.getElementById('modal-confirm').style.display = 'none';
    document.getElementById('btn-si').disabled = false;
    document.getElementById('btn-si').innerText = "SÍ";
}

function initNet() {
    const id = Math.random().toString(36).substr(2, 6).toUpperCase();
    peer = new Peer(id);
    peer.on('open', id => document.getElementById('my-peer-id').innerText = id);
    peer.on('connection', conn => { myRole = "HOST"; setupConnection(conn); });
}

function copyID() {
    const id = document.getElementById('my-peer-id').innerText;
    if(id !== "GENERANDO...") { navigator.clipboard.writeText(id); alert("ID Copiado"); }
}

function connectToPeer() {
    const rid = document.getElementById('remote-id').value.toUpperCase().trim();
    if (rid.length < 4) return;
    document.getElementById('btn-connect').disabled = true;
    document.getElementById('btn-connect').innerText = "CONECTANDO...";
    myRole = "GUEST";
    setupConnection(peer.connect(rid));
}

function setupConnection(conn) {
    connection = conn;
    connection.on('open', () => { showScreen('screen-draft'); renderDraftList(); updateDraftUI(); });
    connection.on('data', data => {
        if (data.type === 'PICK') {
            rivalElegidos.push(data.id);
            turnOf = (turnOf === "HOST" ? "GUEST" : "HOST");
            renderDraftList(); updateDraftUI(); checkDraftEnd();
        }
        if (data.type === 'READY') {
            if (data.ok) { rivalIsReady = true; checkConsensus(); } 
            else { alert("El rival canceló."); resetGameState(); }
        }
        if (data.type === 'SYNC') {
            rivalElegidos = data.rivalIds;
            rivalActivoId = data.rivalActivoId;
            data.personajes.forEach(remoteP => {
                const localP = personajes.find(p => p.id === remoteP.id);
                if(localP) Object.assign(localP, remoteP);
            });
            renderDashboard(false);
        }
    });
}

function checkDraftEnd() {
    if (elegidos.length === 3 && rivalElegidos.length === 3) document.getElementById('modal-confirm').style.display = 'flex';
}

function sendReady(ok) {
    if (ok) {
        iamReady = true;
        document.getElementById('btn-si').disabled = true;
        document.getElementById('btn-si').innerText = "ESPERANDO...";
        connection.send({ type: 'READY', ok: true });
        checkConsensus();
    } else {
        connection.send({ type: 'READY', ok: false });
        resetGameState();
    }
}

function checkConsensus() {
    if (iamReady && rivalIsReady) {
        document.getElementById('modal-confirm').style.display = 'none';
        showScreen('screen-roster'); 
        renderRosterChips(); 
        renderDashboard();
    }
}

function renderDraftList() {
    const list = document.getElementById('lista-draft');
    list.innerHTML = '';
    personajes.forEach(p => {
        const isMine = elegidos.includes(p.id), isRival = rivalElegidos.includes(p.id);
        const chip = document.createElement('div');
        chip.className = `chip ${isMine ? 'active' : ''} ${isRival || isMine ? 'taken' : ''}`;
        chip.innerText = p.n;
        chip.onclick = () => {
            if (myRole !== turnOf || elegidos.length >= 3 || isMine || isRival) return;
            elegidos.push(p.id);
            connection.send({ type: 'PICK', id: p.id });
            turnOf = (turnOf === "HOST" ? "GUEST" : "HOST");
            renderDraftList(); updateDraftUI(); checkDraftEnd();
        };
        list.appendChild(chip);
    });
    document.getElementById('draft-count').innerText = elegidos.length;
}

function updateDraftUI() {
    const msg = document.getElementById('draft-turn-msg');
    const myTurn = (myRole === turnOf);
    msg.innerText = myTurn ? "TU TURNO" : "TURNO DEL RIVAL";
    msg.className = `turn-indicator ${myTurn ? 'my-turn' : 'rival-turn'}`;
}

function startPractice() {
    resetGameState();
    document.getElementById('roster-title').innerText = "SELECCIONA EQUIPO (PRÁCTICA)";
    renderRosterChips(true);
    showScreen('screen-roster');
}

function renderRosterChips(isPractice = false) {
    const list = document.getElementById('lista-seleccion');
    list.innerHTML = '';
    const source = isPractice ? personajes : personajes.filter(p => elegidos.includes(p.id) || rivalElegidos.includes(p.id));
    source.forEach(p => {
        const chip = document.createElement('div');
        chip.className = `chip ${elegidos.includes(p.id) ? 'active' : ''}`;
        chip.innerText = p.n;
        if (isPractice) {
            chip.onclick = () => {
                const idx = elegidos.indexOf(p.id);
                if (idx > -1) { if(miActivoId === p.id) miActivoId = null; elegidos.splice(idx, 1); }
                else if (elegidos.length < 3) elegidos.push(p.id);
                renderRosterChips(true); renderDashboard();
            };
        }
        list.appendChild(chip);
    });
}

function renderDashboard(shouldSync = true) {
    const dash = document.getElementById('dashboard');
    dash.innerHTML = '';
    
    let aMostrar = personajes.filter(p => elegidos.includes(p.id) || rivalElegidos.includes(p.id));
    aMostrar.sort((a, b) => {
        const aEsActivo = (a.id === miActivoId || a.id === rivalActivoId);
        const bEsActivo = (b.id === miActivoId || b.id === rivalActivoId);
        if (aEsActivo && !bEsActivo) return -1;
        if (!aEsActivo && bEsActivo) return 1;
        return 0;
    });
    
    const enCombateReal = (iamReady && rivalIsReady);

    aMostrar.forEach(p => {
        const esMio = elegidos.includes(p.id);
        const esActivo = esMio ? (p.id === miActivoId) : (p.id === rivalActivoId);
        const ctrlClass = esMio ? '' : 'btn-hidden';
        
        const fotoUrl = `img/${p.img}_${p.estado}.png`; 
        const card = document.createElement('div');
        const statusClass = p.estado === 1 ? 't1-active' : (p.estado === 2 ? 't2-active' : '');
        card.className = `mini-card-2l ${statusClass} ${esMio ? '' : 'rival-card'}`;
        if (esActivo) card.style.borderColor = "var(--success)";

        let curStats = (p.estado === 1) ? p.sBst1 : (p.estado === 2 ? p.sBst2 : p.sHum);
        let curTipo = (p.estado === 1) ? p.tBst1 : (p.estado === 2 ? p.tBst2 : p.tHum);
        const statsAVisualizar = ['a', 'd', 'v', 'hp'];
        if (p.estado === 0) statsAVisualizar.push('eb');

        const statsHtml = statsAVisualizar.map(s => {
            let valorFinal = curStats[s];
            let claseExtra = "";

            if (esActivo && p.sinergiaEfecto) {
                const equipoP = esMio ? elegidos : rivalElegidos;
                const idsRequeridos = p.sinergiaEfecto.conIds || [p.sinergiaEfecto.conId];
                const cumplido = idsRequeridos.every(id => equipoP.includes(id));

                if (cumplido) {
                    if (p.sinergiaEfecto.mejoras) {
                        const m = p.sinergiaEfecto.mejoras.find(mej => mej.stat === s);
                        if (m) { valorFinal += m.bono; claseExtra = "val-synergy"; }
                    } else if (p.sinergiaEfecto.stat === s) {
                        valorFinal += p.sinergiaEfecto.bono; claseExtra = "val-synergy";
                    }
                }
            }

            const isHP = (s === 'hp');
            const hpLow = (isHP && valorFinal <= 3) ? 'val-hp-low' : '';

            return `
                <div class="stat-box">
                    <span class="stat-label">${s.toUpperCase()}</span>
                    <div class="stat-value-row">
                        <button class="btn-ctrl ${ctrlClass}" onclick="mod(${p.id},'${s}',-1)">-</button>
                        <span class="val ${hpLow} ${claseExtra}">${valorFinal}</span>
                        <button class="btn-ctrl ${ctrlClass}" onclick="mod(${p.id},'${s}',1)">+</button>
                    </div>
                </div>`;
        }).join('');

        card.innerHTML = `
            <div class="card-header">
                <div class="card-title-row">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <button class="btn-activo-o ${ctrlClass}" style="background: ${esActivo ? 'var(--success)' : '#475569'};" onclick="setActivo(${p.id})">O</button>
                        <span class="card-name">${p.n}</span>
                    </div>
                    <div style="display:flex; gap:5px;">
                        <button class="btn-reset-card ${ctrlClass}" onclick="resetStats(${p.id})">Reset</button>
                        ${enCombateReal ? `<button class="btn-delete-card ${ctrlClass}" onclick="eliminarPersonaje(${p.id})">X</button>` : ''}
                    </div>
                </div>
                <div class="card-controls-row">
                    <div style="display:flex; align-items:center; gap:5px;">
                        <span class="tipo-btn" onclick="cambiarTipoBusuzima(${p.id})">${emojis[curTipo]}</span>
                        <span style="font-size:0.75rem;">${curTipo}</span>
                    </div>
                    <div class="switches-group">
                        <div class="switch-container"><span>B1</span><label class="switch s1"><input type="checkbox" ${p.estado===1?'checked':''} ${esMio?'':'disabled'} onchange="toggleState(${p.id},1)"><span class="slider"></span></label></div>
                        ${p.tBst2 ? `<div class="switch-container"><span>B2</span><label class="switch s2"><input type="checkbox" ${p.estado===2?'checked':''} ${esMio?'':'disabled'} onchange="toggleState(${p.id},2)"><span class="slider"></span></label></div>` : ''}
                    </div>
                </div>
            </div>
            <div class="card-photo-container">
                <img src="${fotoUrl}" onerror="this.src='https://via.placeholder.com/300x160/334155/ffffff?text=${p.n}'" alt="${p.n}" class="card-photo">
                <div class="photo-overlay"></div>
            </div>
            <div class="card-stats-row">${statsHtml}</div>
            <div class="card-text-sections">
                <div class="text-box"><div class="text-box-label">Habilidad</div><div class="text-box-content">${p.h || 'Sin habilidad definida.'}</div></div>
                <div class="text-box"><div class="text-box-label">Sinergia</div><div class="text-box-content">${p.s || 'Sin sinergia definida.'}</div></div>
            </div>`;
        dash.appendChild(card);
    });

    if (shouldSync && connection && connection.open) {
        connection.send({ 
            type: 'SYNC', 
            personajes: personajes.filter(p => elegidos.includes(p.id)), 
            rivalIds: elegidos, 
            rivalActivoId: miActivoId 
        });
    }
}

function setActivo(id) { 
    if(!elegidos.includes(id)) return;
    miActivoId = (miActivoId === id) ? null : id; 
    renderDashboard();
}

function toggleState(id, target) {
    const p = personajes.find(x => x.id === id);
    if (p.estado === 0) { p.sHum.eb = 0; }
    p.estado = (p.estado === target) ? 0 : target;
    renderDashboard();
}

function mod(id, stat, val) {
    const p = personajes.find(x => x.id === id);
    let target = (p.estado === 1) ? p.sBst1 : (p.estado === 2 ? p.sBst2 : p.sHum);
    const newVal = target[stat] + val;
    const limitMax = (stat === 'eb') ? 5 : 20;
    if (newVal >= 0 && newVal <= limitMax) { target[stat] = newVal; renderDashboard(); }
}

function resetStats(id) {
    const p = personajes.find(x => x.id === id);
    const b = baseData.find(x => x.id === id);
    if (p.estado === 1) Object.assign(p.sBst1, JSON.parse(JSON.stringify(b.sBst1)));
    else if (p.estado === 2) Object.assign(p.sBst2, JSON.parse(JSON.stringify(b.sBst2)));
    else Object.assign(p.sHum, JSON.parse(JSON.stringify(b.sHum)));
    renderDashboard();
}

function cambiarTipoBusuzima(id) {
    const p = personajes.find(x => x.id === id);
    if (p.n === "BUSUZIMA" && p.estado !== 0) {
        let k = p.estado === 1 ? 'tBst1' : 'tBst2';
        p[k] = tiposRotacion[(tiposRotacion.indexOf(p[k]) + 1) % tiposRotacion.length];
        renderDashboard();
    }
}

function eliminarPersonaje(id) {
    if(confirm("¿Eliminar de la partida?")) {
        const idx = elegidos.indexOf(id);
        if (idx > -1) { elegidos.splice(idx, 1); if(miActivoId === id) miActivoId = null; renderDashboard(); }
    }
}

function precargarImagenes() {
    personajes.forEach(p => {
        // Precarga imagen humana (estado 0)
        const imgHum = new Image();
        imgHum.src = `img/${p.img}_0.png`;

        // Precarga imagen bestia 1 (estado 1)
        const imgBst1 = new Image();
        imgBst1.src = `img/${p.img}_1.png`;

        // Precarga imagen bestia 2 si existe
        if (p.tBst2) {
            const imgBst2 = new Image();
            imgBst2.src = `img/${p.img}_2.png`;
        }
    });
    console.log("Iniciando precarga de imágenes...");
}

precargarImagenes();
initNet();