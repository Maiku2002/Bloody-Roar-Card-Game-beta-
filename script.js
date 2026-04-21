const emojis = { "Piedra": "👊", "Papel": "✋", "Tijeras": "✌️" };
const tiposRotacion = ["Piedra", "Papel", "Tijeras"];
const personajes = [
    { id: 0, n: "YUGO", img: "yugo", estado: 0, bloqueado: false, tHum: "Piedra", tBst1: "Piedra", sHum: {a:4, d:3, v:3, hp:10, eb:0}, sBst1: {a:7, d:6, v:7, hp:5}, h: "+2 A al siguiente relevo propio.", s: "Sinergia con Gado y Nagi: +3 Ataque.", p1: "Si el rival es Papel: +1 Defensa propia.", sinergiaEfecto: { esCompleja: true, conIds: [3, 22], mejoras: [{ stat: "a", bono: 3 },]}},
    { id: 1, n: "ALICE", img: "alice", estado: 0, bloqueado: false, tHum: "Tijeras", tBst1: "Tijeras", sHum: {a:2, d:2, v:5, hp:10, eb:0}, sBst1: {a:5, d:5, v:8, hp:4}, h: "Si rival es Piedra/Tijeras, no recibes daño recoil.", s: "Sinergia con Yugo y Kenji: +3 Velocidad.", p1: "Inmunidad a la reducción de Velocidad.", sinergiaEfecto: { esCompleja: true, conIds: [0, 10], mejoras: [{ stat: "v", bono: 3 }]}},
    { id: 2, n: "LONG", img: "long", estado: 0, bloqueado: false, tHum: "Piedra", tBst1: "Piedra", sHum: {a:5, d:2, v:4, hp:10, eb:0}, sBst1: {a:8, d:5, v:6, hp:4}, h: "Si el rival es Tijeras, +1 A propia.", s: "Sinergia con Uriko y Shina: +4 Ataque.", p1: "Si el rival es Tijeras: -2 Defensa rival.", sinergiaEfecto: { esCompleja: true, conIds: [9, 13], mejoras: [{ stat: "a", bono: 4 }, ]}},
    { id: 3, n: "GADO", img: "gado", estado: 0, bloqueado: false, tHum: "Piedra", tBst1: "Papel", sHum: {a:4, d:5, v:2, hp:10, eb:0}, sBst1: {a:7, d:8, v:5, hp:6}, h: "Coste relevo rival +1 EB y -1 A rival.", s: "Sinergia con Shina y Jenny: +2 Ataque y +2 Defensa.", p1: "Si el rival es Piedra: +1 Ataque propio.", sinergiaEfecto: { esCompleja: true, conIds: [13, 14], mejoras: [{ stat: "a", bono: 2 }, { stat: "d", bono: 2 }]}},
    { id: 4, n: "BAKURYU I", img: "bakuryu1", estado: 0, bloqueado: false, tHum: "Tijeras", tBst1: "Tijeras", sHum: {a:3, d:2, v:5, hp:10, eb:0}, sBst1: {a:6, d:5, v:8, hp:4}, h: "Relevo automático y el aliado gana +1 V.", s: "Sinergia con Kohryu y Hans: +4 Velocidad.", p1: "Si el rival es Papel: Ignora defensa rival (0 D).", sinergiaEfecto: { esCompleja: true, conIds: [5, 17], mejoras: [{ stat: "v", bono: 4 }]}},
    { id: 5, n: "HANS", img: "hans", estado: 0, bloqueado: false, tHum: "Tijeras", tBst1: "Piedra", sHum: {a:4, d:1, v:5, hp:10, eb:0}, sBst1: {a:7, d:5, v:7, hp:5}, h: "Si HP propio > rival: -2 D y -1 A rival.", s: "Sinergia con Bakuryu I y Long: +2 Ataque y +2 Velocidad.", p1: "Si Velocidad propia > rival: +1 Ataque propio.", sinergiaEfecto: { esCompleja: true, conIds: [2, 4], mejoras: [{ stat: "a", bono: 2 }, { stat: "v", bono: 2 }]}},
    { id: 6, n: "MITSUKO", img: "mitsuko", estado: 0, bloqueado: false, tHum: "Papel", tBst1: "Piedra", sHum: {a:5, d:4, v:1, hp:10, eb:0}, sBst1: {a:6, d:8, v:4, hp:7}, h: "Gana +2 A a costa de perder -2 HP.", s: "Sinergia con Uriko I y Alice: +4 Puntos de Vida.", p1: "Si el rival es Papel: Ignora el bono de Ataque rival.", sinergiaEfecto: { esCompleja: true, conIds: [1, 8], mejoras: [{ stat: "hp", bono: 4 },]}},
    { id: 7, n: "GREG", img: "greg", estado: 0, bloqueado: false, tHum: "Papel", tBst1: "Papel", sHum: {a:3, d:6, v:1, hp:10, eb:0}, sBst1: {a:7, d:7, v:5, hp:7}, h: "Coste relevo rival +1 EB y -1 V rival.", s: "Sinergia con Yugo y Fang: +3 Ataque y +1 Defensa.", p1: "Si Ataque propio > rival: +1 Ataque propio.", sinergiaEfecto: { esCompleja: true, conIds: [0, 21], mejoras: [{ stat: "a", bono: 3 }, { stat: "d", bono: 1 }]}},
    { id: 8, n: "URIKO I", img: "uriko1", estado: 0, bloqueado: false, tHum: "Piedra", tBst1: "Tijeras", tBst2: "Piedra", sHum: {a:6, d:3, v:2, hp:10, eb:0}, sBst1: {a:6, d:5, v:8, hp:4}, sBst2: {a:8, d:7, v:5, hp:8}, h: "Intercambia tus puntos de EB con los del rival.", s: "Sinergia con Yugo y Uranus: +3 Velocidad y +2 Puntos de Vida.", p1: "Si el rival es Papel: +2 Velocidad propia.", p2: "Si tus stats A y D son iguales a las del rival: -2 HP al rival.", sinergiaEfecto: { esCompleja: true, conIds: [0, 18], mejoras: [{ stat: "v", bono: 3 }, { stat: "hp", bono: 2 }]}},
    { id: 9, n: "URIKO", img: "uriko2", estado: 0, bloqueado: false, tHum: "Tijeras", tBst1: "Tijeras", sHum: {a:1, d:2, v:6, hp:10, eb:0}, sBst1: {a:5, d:5, v:8, hp:4}, h: "Reduce a la mitad el daño recibido este turno.", s: "Sinergia con Kenji y Mana: +4 Velocidad.", p1: "Si el Ataque rival >= 7: +2 Velocidad propia.", sinergiaEfecto: { esCompleja: true, conIds: [10, 25], mejoras: [{ stat: "v", bono: 4 }]}},
    { id: 10, n: "KENJI", img: "kenji", estado: 0, bloqueado: false, tHum: "Tijeras", tBst1: "Tijeras", sHum: {a:3, d:3, v:6, hp:10, eb:0}, sBst1: {a:6, d:6, v:8, hp:5}, h: "Evita el daño realizando un relevo automático.", s: "Sinergia con Yugo y Uriko: +1 Ataque y +3 Velocidad.", p1: "Si el daño recibido es > 10: Se reduce a la mitad.", sinergiaEfecto: { esCompleja: true, conIds: [0, 9], mejoras: [{ stat: "a", bono: 1 }, { stat: "v", bono: 3 }]}},
    { id: 11, n: "BUSUZIMA", img: "busuzima", estado: 0, bloqueado: false, tHum: "Papel", tBst1: "Papel", sHum: {a:3, d:5, v:3, hp:10, eb:0}, sBst1: {a:5, d:7, v:7, hp:6}, h: "Reduce en -2 el stat más alto del rival.", s: "Sinergia con Stun y Shenlong: +4 Defensa.", p1: "Al ser golpeado: Cambia su tipo al del rival que atacó.", sinergiaEfecto: { esCompleja: true, conIds: [12, 15], mejoras: [{ stat: "d", bono: 4 },]}},
    { id: 12, n: "STUN", img: "stun", estado: 0, bloqueado: false, tHum: "Papel", tBst1: "Piedra", sHum: {a:4, d:5, v:2, hp:10, eb:0}, sBst1: {a:6, d:8, v:5, hp:7}, h: "Rival pierde -1 HP por cada EB que posea.", s: "Sinergia con Busuzima y Jenny: +2 Defensa y +2 Puntos de Vida.", p1: "Si el rival es Papel: Le quitas -1 HP.", sinergiaEfecto: { esCompleja: true, conIds: [11, 14], mejoras: [{ stat: "d", bono: 2 }, { stat: "hp", bono: 2 }]}},
    { id: 13, n: "SHINA", img: "shina", estado: 0, bloqueado: false, tHum: "Piedra", tBst1: "Tijeras", sHum: {a:5, d:3, v:4, hp:10, eb:0}, sBst1: {a:7, d:6, v:7, hp:5}, h: "Si rival es Tijeras ignora su defensa.", s: "Sinergia con Gado y Cronos: +3 Ataque y +1 Velocidad.", p1: "Si el rival es Papel: +2 Ataque propio.", sinergiaEfecto: { esCompleja: true, conIds: [3, 19], mejoras: [{ stat: "a", bono: 3 }, { stat: "v", bono: 1 }]}},
    { id: 14, n: "JENNY", img: "jenny", estado: 0, bloqueado: false, tHum: "Tijeras", tBst1: "Tijeras", sHum: {a:3, d:2, v:5, hp:10, eb:0}, sBst1: {a:6, d:5, v:8, hp:4}, h: "Recupera para ti el daño infligido al rival.", s: "Sinergia con Gado y Stun: +4 Velocidad.", p1: "Ignora las subidas de estadística de Defensa rival.", sinergiaEfecto: { esCompleja: true, conIds: [3, 12], mejoras: [ { stat: "v", bono: 4 }]}},
    { id: 15, n: "SHENLONG", img: "shenlong", estado: 0, bloqueado: false, tHum: "Piedra", tBst1: "Piedra", sHum: {a:6, d:2, v:4, hp:10, eb:0}, sBst1: {a:8, d:6, v:6, hp:5}, h: "Si el rival está transformado: +2 A propio.", s: "Sinergia con Long y Busuzima: +4 Ataque.", p1: "Si el rival hace un relevo: El que entra recibe -2 HP.", sinergiaEfecto: { esCompleja: true, conIds: [2, 11], mejoras: [{ stat: "a", bono: 4 },]}},
    { id: 16, n: "XION", img: "xion", estado: 0, bloqueado: false, tHum: "Tijeras", tBst1: "Piedra", sHum: {a:5, d:3, v:5, hp:10, eb:0}, sBst1: {a:8, d:5, v:7, hp:5}, h: "El daño recoil del rival se duplica.", s: "Sinergia con Nagi y Long: +3 Ataque y +1 Defensa.", p1: "Si rival es Tijeras: Resta -1 a una stat rival (a elegir).", sinergiaEfecto: { esCompleja: true, conIds: [2, 22], mejoras: [{ stat: "a", bono: 3 }, { stat: "d", bono: 1 }]}},
    { id: 17, n: "KOHRYU", img: "kohryu", estado: 0, bloqueado: false, tHum: "Tijeras", tBst1: "Papel", sHum: {a:4, d:4, v:5, hp:10, eb:0}, sBst1: {a:6, d:8, v:6, hp:6}, h: "Copia y reemplaza el stat más alto del rival.", s: "Sinergia con Bakuryu I y Kenji: +2 Ataque y +2 Defensa.", p1: "Ignora los efectos de las Ultimates (BD) rivales.", sinergiaEfecto: { esCompleja: true, conIds: [4, 10], mejoras: [{ stat: "a", bono: 2 }, { stat: "d", bono: 2 }]}},
    { id: 18, n: "URANUS", img: "uranus", estado: 0, bloqueado: false, tHum: "Tijeras", tBst1: "Piedra", sHum: {a:6, d:1, v:6, hp:10, eb:0}, sBst1: {a:8, d:7, v:7, hp:8}, h: "Anula defensa rival y suma su recoil al ataque.", s: "Sinergia con Uriko I y Cronos: +2 Ataque y +2 Defensa.", p1: "Ignora Tipos: Siempre ganas +1 Ataque propio y -1 al rival.", sinergiaEfecto: { esCompleja: true, conIds: [8, 19], mejoras: [{ stat: "a", bono: 2 }, { stat: "d", bono: 2 }]}},
    { id: 19, n: "CRONOS", img: "cronos", estado: 0, bloqueado: false, tHum: "Papel", tBst1: "Papel", tBst2: "Piedra", sHum: {a:3, d:5, v:4, hp:10, eb:0}, sBst1: {a:5, d:6, v:7, hp:5}, sBst2: {a:8, d:5, v:8, hp:6}, h: "El daño recoil recibido regresa al rival.", s: "Sinergia con Uranus y Ganesha: +1 Defensa y +3 Velocidad.", p1: "Ignora subidas de stat del rival.", p2: "Si rival es Tijeras: El daño recoil cura tu propia HP.", sinergiaEfecto: { esCompleja: true, conIds: [18, 20], mejoras: [{ stat: "v", bono: 3 }, { stat: "d", bono: 1 }]}},
    { id: 20, n: "GANESHA", img: "ganesha", estado: 0, bloqueado: false, tHum: "Papel", tBst1: "Papel", sHum: {a:5, d:6, v:1, hp:10, eb:0}, sBst1: {a:7, d:8, v:4, hp:7}, h: "Expulsa al rival (relevo) y baja su EB a 0.", s: "Sinergia con Cronos y Shina: +2 Defensa y +2 Puntos de Vida.", p1: "Si la Velocidad rival es mayor: +2 Defensa propia.", sinergiaEfecto: { esCompleja: true, conIds: [13, 19], mejoras: [{ stat: "d", bono: 2 }, { stat: "hp", bono: 2 }]}},
    { id: 21, n: "FANG", img: "fang", estado: 0, bloqueado: false, tHum: "Piedra", tBst1: "Piedra", sHum: {a:5, d:2, v:5, hp:10, eb:0}, sBst1: {a:8, d:5, v:7, hp:5}, h: "Si HP rival > propio: +2 A para el jugador.", s: "Sinergia con Yugo y Cronos: +3 Ataque y +1 Velocidad.", p1: "Si el rival es Papel: +1 Ataque propio.", sinergiaEfecto: { esCompleja: true, conIds: [0, 19], mejoras: [{ stat: "a", bono: 3 }, { stat: "v", bono: 1 }]}},
    { id: 22, n: "NAGI", img: "nagi", estado: 0, bloqueado: false, tHum: "Papel", tBst1: "Tijeras", sHum: {a:3, d:4, v:4, hp:10, eb:0}, sBst1: {a:6, d:6, v:8, hp:6}, h: "Si el rival es Piedra ignora su defensa.", s: "Sinergia con Xion y Mana: +2 Ataque y +2 Puntos de Vida.", p1: "Si eres atacado: -1 Ataque al rival.", sinergiaEfecto: { esCompleja: true, conIds: [16, 25], mejoras: [{ stat: "a", bono: 2 }, { stat: "hp", bono: 2 }]}},
    { id: 23, n: "REIJI", img: "reiji", estado: 0, bloqueado: false, tHum: "Piedra", tBst1: "Piedra", sHum: {a:4, d:3, v:4, hp:10, eb:0}, sBst1: {a:7, d:5, v:8, hp:4}, h: "-2 V rival y anula su habilidad por toda la partida.", s: "Sinergia con Yugo y Nagi: +1 Ataque y +3 Velocidad.", p1: "Si el rival es Tijeras: Anulas su Defensa.", sinergiaEfecto: { esCompleja: true, conIds: [0, 22], mejoras: [{ stat: "a", bono: 1 }, { stat: "v", bono: 3 }]}},
    { id: 24, n: "RYOHO", img: "ryoho", estado: 0, bloqueado: false, tHum: "Papel", tBst1: "Papel", sHum: {a:4, d:6, v:2, hp:10, eb:0}, sBst1: {a:8, d:8, v:4, hp:8}, h: "Baja -2 D y -1 V al rival activo.", s: "Sinergia con Mana y Uranus: +4 Ataque.", p1: "Protección: Solo puede recibir daño de transformaciones.", sinergiaEfecto: { esCompleja: true, conIds: [18, 25], mejoras: [{ stat: "a", bono: 4 },]}},
    { id: 25, n: "MANA", img: "mana", estado: 0, bloqueado: false, tHum: "Tijeras", tBst1: "Papel", sHum: {a:1, d:1, v:6, hp:10, eb:0}, sBst1: {a:5, d:7, v:7, hp:6}, h: "Transformación automática a mitad de vida de bestia.", s: "Sinergia con Ryoho y Xion: +4 Puntos de Vida.", p1: "Si el rival es Piedra: Un aliado tuyo recibe +1 HP.", sinergiaEfecto: { esCompleja: true, conIds: [24, 16], mejoras: [{ stat: "hp", bono: 4 },]}},
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
        
        // --- LÓGICA DE VISIBILIDAD Y BLOQUEO ---
        const esBestia = p.estado !== 0;
        
        const switchDisabled = (!esMio || p.bloqueado) ? 'disabled' : '';
        const opacidadBloqueo = p.bloqueado ? 'opacity: 0.3; filter: grayscale(1);' : '';

        const textoPasiva = (p.estado === 2 && p.p2) ? p.p2 : p.p1;

        // --- AJUSTE ESPECIAL PERSONAJE 25 ---
        // Para todos: habilidad activa si es humano y tiene 2 EB.
        // Pero si es el ID 25 y está bloqueado, no puede usarla.
        let puedeUsarHabilidad = esMio && p.estado === 0 && p.sHum.eb >= 2;
        if (p.id === 25 && p.bloqueado) {
            puedeUsarHabilidad = false;
        }
        
        const claseHabilidad = puedeUsarHabilidad ? 'habilidad-activa' : '';
        const clickHabilidad = puedeUsarHabilidad ? `onclick="usarHabilidad(${p.id})"` : '';

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

            if (p.estado === 0 && esActivo && p.sinergiaEfecto) {
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

        let contenidoInferiorHtml = '';

        if (!esBestia) {
            contenidoInferiorHtml = `
                <div class="text-box ${claseHabilidad}" ${clickHabilidad}>
                    <div class="text-box-label">Habilidad ${puedeUsarHabilidad ? '🔥' : ''}</div>
                    <div class="text-box-content">${p.h || 'Sin habilidad definida.'}</div>
                </div>
                <div class="text-box">
                    <div class="text-box-label">Sinergia</div>
                    <div class="text-box-content">${p.s || 'Sin sinergia definida.'}</div>
                </div>`;
        } else {
            contenidoInferiorHtml = `
                <div class="text-box" style="border-color: var(--trans1); background: rgba(245, 158, 11, 0.1);">
                    <div class="text-box-label" style="color: var(--trans1);">PASIVA (ACTIVA)</div>
                    <div class="text-box-content">${textoPasiva || 'Sin pasiva definida.'}</div>
                </div>
                <div class="text-box ultimate-box" onclick="usarUltimate(${p.id})" style="border-style: dashed; cursor: pointer;">
                    <div class="text-box-label">BEAST DRIVE ⚡</div>
                    <div class="text-box-content">¡LISTA PARA USAR!</div>
                </div>`;
        }

        card.innerHTML = `
            <div class="card-header">
                <div class="card-title-row">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <button class="btn-activo-o ${ctrlClass}" style="background: ${esActivo ? 'var(--success)' : '#475569'};" onclick="setActivo(${p.id})">O</button>
                        <span class="card-name">${p.n} ${p.bloqueado ? '🚫' : ''}</span>
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
                    <div class="switches-group" style="${opacidadBloqueo}">
                        <div class="switch-container"><span>B1</span><label class="switch s1"><input type="checkbox" ${p.estado===1?'checked':''} ${switchDisabled} onchange="toggleState(${p.id},1)"><span class="slider"></span></label></div>
                        ${p.tBst2 ? `<div class="switch-container"><span>B2</span><label class="switch s2"><input type="checkbox" ${p.estado===2?'checked':''} ${switchDisabled} onchange="toggleState(${p.id},2)"><span class="slider"></span></label></div>` : ''}
                    </div>
                </div>
            </div>
            <div class="card-photo-container">
                <img src="${fotoUrl}" onerror="this.src='https://via.placeholder.com/300x160/334155/ffffff?text=${p.n}'" alt="${p.n}" class="card-photo">
                <div class="photo-overlay"></div>
            </div>
            <div class="card-stats-row">${statsHtml}</div>
            <div class="card-text-sections">${contenidoInferiorHtml}</div>`;

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

// Función para manejar la transformación
function toggleState(id, nuevoEstado) {
    const p = personajes.find(pers => pers.id === id);
    
    // REGLA: Si está bloqueado por usar Ultimate, no puede transformarse
    if (p.bloqueado) {
        alert(`${p.n} no puede transformarse: ¡La forma Bestia está sellada!`);
        renderDashboard();
        return;
    }

    // Si el usuario intenta activar una transformación (estando en humano)
    if (p.estado === 0 && (nuevoEstado === 1 || nuevoEstado === 2)) {
        if (p.sHum.eb < 5) {
            alert("Necesitas 5 EB para transformarte.");
            renderDashboard();
            return;
        } else {
            // REGLA: Al transformarse, los 5 EB bajan a 0
            p.sHum.eb = 0;
        }
    }

    // Cambiar estado (si ya es 1 y pulsa 1, vuelve a 0)
    p.estado = (p.estado === nuevoEstado) ? 0 : nuevoEstado;
    
    renderDashboard();
}

// Función para la Ultimate
function usarUltimate(id) {
    const p = personajes.find(pers => pers.id === id);

    if (confirm(`¿Usar Ultimate de ${p.n}? Esto sellará su forma Bestia por el resto del combate.`)) {
        console.log(`Ejecutando Ultimate de ${p.n}...`);
        
        // REGLA: Bloquear transformaciones para siempre
        p.bloqueado = true;
        
        // Al usar la Ultimate, el personaje vuelve a forma humana forzosamente
        p.estado = 0;
        
        alert(`¡${p.n} ha usado su Ultimate! Sus transformaciones han sido bloqueadas.`);
        renderDashboard();
    }
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

function usarHabilidad(id) {
    const p = personajes.find(x => x.id === id);
    
    // Doble verificación de seguridad
    if (elegidos.includes(id) && p.sHum.eb >= 2) {
        p.sHum.eb -= 2; // Restar los 2 EB
        
        // Ejecutamos el efecto según el personaje
        procesarEfectosComplejos(p);
        
        // Forzamos actualización visual y sincronización
        renderDashboard();
    }
}

function procesarEfectosComplejos(p) {
    console.log(`Activando habilidad de ${p.n}`);
    
    const rivalActivo = personajes.find(x => x.id === rivalActivoId);
    const misAliados = personajes.filter(x => elegidos.includes(x.id) && x.id !== p.id);
    const misStats = (p.estado === 1) ? p.sBst1 : (p.estado === 2 ? p.sBst2 : p.sHum);

    switch(p.id) {
        case 0: // YUGO: +2 A al siguiente relevo propio
            alert("Efecto: El siguiente aliado en entrar tendrá +2 de Ataque.");
            // Nota: Este efecto se aplica manualmente al cambiar de personaje o anotándolo.
            break;

        case 1: // ALICE: Si rival es Piedra/Tijeras, no recibe recoil
            alert("Habilidad Alice: Protegida contra daño extra (Recoil) contra Piedra o Tijeras.");
            break;

        case 2: // LONG: Si rival es Tijeras, +1 A (propio)
            if (rivalActivo) {
                let tipoR = (rivalActivo.estado === 0) ? rivalActivo.tHum : rivalActivo.tBst1;
                if (tipoR === "Tijeras") misStats.a += 1;
            }
            break;

        case 3: // GADO: Coste relevo rival +1 EB y -1 A (rival)
            if (rivalActivo) {
                alert("Gado: El rival ahora debe pagar +1 EB para relevar.");
                let rStats = (rivalActivo.estado === 1) ? rivalActivo.sBst1 : rivalActivo.sHum;
                rStats.a = Math.max(0, rStats.a - 1);
            }
            break;

        case 4: // BAKURYU I: Relevo automático y aliado +1 V
            alert("Bakuryu: Realiza un relevo. El aliado que entre gana +1 Velocidad.");
            break;

        case 5: // HANS: Si HP propio > HP rival: -2 D y -1 A (rival)
            if (rivalActivo) {
                let rStats = (rivalActivo.estado === 1) ? rivalActivo.sBst1 : rivalActivo.sHum;
                if (misStats.hp > rStats.hp) {
                    rStats.d = Math.max(0, rStats.d - 2);
                    rStats.a = Math.max(0, rStats.a - 1);
                }
            }
            break;

        case 6: // MITSUKO: -2 HP para +2 A
            misStats.hp = Math.max(1, misStats.hp - 2);
            misStats.a = Math.min(20, misStats.a + 2);
            break;

        case 7: // GREG: Coste relevo rival +1 EB y -1 V (rival)
            if (rivalActivo) {
                alert("Greg: El rival ahora debe pagar +1 EB para relevar.");
                let rStats = (rivalActivo.estado === 1) ? rivalActivo.sBst1 : rivalActivo.sHum;
                rStats.v = Math.max(0, rStats.v - 1);
            }
            break;

        case 8: // URIKO I: Intercambia EB con el rival
            if (rivalActivo) {
                let miEB = p.sHum.eb; // p.sHum.eb ya fue restado -2 antes de entrar aquí
                p.sHum.eb = rivalActivo.sHum.eb;
                rivalActivo.sHum.eb = miEB;
                alert(`¡Energía intercambiada! Ahora tienes ${p.sHum.eb} EB.`);
            }
            break;

        case 9: // URIKO: Reduce a la mitad el daño recibido
            alert("Habilidad Uriko: El daño recibido este turno se reduce a la mitad.");
            break;

        case 10: // KENJI: Evita daño con relevo automático
            alert("Kenji: Evita el ataque y cambia por un aliado.");
            break;

        case 11: // BUSUZIMA: Reduce stat dominante rival en -2
            if (rivalActivo) {
                let rStats = (rivalActivo.estado === 1) ? rivalActivo.sBst1 : rivalActivo.sHum;
                alert("Busuzima: Reduce en -2 la estadística más alta del rival.");
                // El jugador debe aplicar manualmente el -2 a la stat mayor en la pantalla del rival.
            }
            break;

        case 12: // STUN: Rival pierde -1 HP por cada 1 EB que posea
            if (rivalActivo) {
                let dano = rivalActivo.sHum.eb;
                let rStats = (rivalActivo.estado === 1) ? rivalActivo.sBst1 : rivalActivo.sHum;
                rStats.hp = Math.max(1, rStats.hp - dano);
                alert(`Stun: El rival pierde ${dano} de HP.`);
            }
            break;

        case 13: // SHINA: Si rival es Tijeras ignora defensa (0 D)
            if (rivalActivo) {
                let tipoR = (rivalActivo.estado === 0) ? rivalActivo.tHum : rivalActivo.tBst1;
                if (tipoR === "Tijeras") alert("Shina: Ignoras la defensa rival hasta que reciba daño.");
            }
            break;

        case 14: // JENNY: Recupera daño infligido
            alert("Jenny: El daño que hagas este turno sanará tu HP.");
            break;

        case 15: // SHENLONG: Si rival está transformado +2 A
            if (rivalActivo && rivalActivo.estado !== 0) {
                misStats.a += 2;
            }
            break;

        case 16: // XION: Recoil rival se duplica
            alert("Xion: El daño de retroceso (recoil) del rival se duplicará.");
            break;

        case 17: // KOHRYU: Copia stat más alto del rival
            if (rivalActivo) {
                alert("Kohryu: Elige la estadística más alta del rival y reemplaza la tuya.");
                // El jugador debe editar manualmente su stat para igualarla a la del rival.
            }
            break;

        case 18: // URANUS: Anula defensa rival (0) + suma recoil rival
            alert("Uranus: Defensa rival reducida a 0. Sumarás el recoil del rival a tu daño.");
            break;

        case 19: // CRONOS: Daño recoil regresa al rival
            alert("Cronos: El daño de recoil que recibas será devuelto al rival.");
            break;

        case 20: // GANESHA: Expulsa rival (relevo forzado) y EB rival a 0
            if (rivalActivo) {
                rivalActivo.sHum.eb = 0;
                alert("Ganesha: El rival activo es expulsado y pierde todo su EB.");
            }
            break;

        case 21: // FANG: Si HP rival > HP propia, +2 A
            if (rivalActivo) {
                let rStats = (rivalActivo.estado === 1) ? rivalActivo.sBst1 : rivalActivo.sHum;
                if (rStats.hp > misStats.hp) misStats.a += 2;
            }
            break;

        case 22: // NAGI: Si rival es Piedra ignora defensa
            if (rivalActivo) {
                let tipoR = (rivalActivo.estado === 0) ? rivalActivo.tHum : rivalActivo.tBst1;
                if (tipoR === "Piedra") alert("Nagi: Ignoras la defensa rival.");
            }
            break;

        case 23: // REIJI: -2 V rival y anula habilidad rival definitiva
            if (rivalActivo) {
                let rStats = (rivalActivo.estado === 1) ? rivalActivo.sBst1 : rivalActivo.sHum;
                rStats.v = Math.max(0, rStats.v - 2);
                alert("Reiji: Habilidad del rival anulada por el resto de la partida.");
            }
            break;

        case 24: // RYOHO: -2 D y -1 V para el rival
            if (rivalActivo) {
                let rStats = (rivalActivo.estado === 1) ? rivalActivo.sBst1 : rivalActivo.sHum;
                rStats.d = Math.max(0, rStats.d - 2);
                rStats.v = Math.max(0, rStats.v - 1);
            }
            break;

        case 25: // MANA: Transformación automática con mitad de vida bestia
            p.estado = 1; // Transformación automática a B1
            p.sBst1.hp = Math.floor(p.sBst1.hp / 2);
            alert("Mana: ¡Transformación forzada a mitad de HP!");
            break;
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