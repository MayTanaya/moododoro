// ==========================================
// MOODODORO - CORE LOGIC
// ==========================================

// --- State Variables ---
let currentMode = 'focus'; // focus, sweet-break, long-break
let timerInterval = null;
let timeLeft = 25 * 60; // in seconds
let isRunning = false;

// Mode durations in minutes
const DURATIONS = {
    'focus': 25,
    'sweet-break': 5,
    'long-break': 15
};

// Mode display texts
const MODE_TEXTS = {
    'focus': 'focus gently',
    'sweet-break': 'sweet little break',
    'long-break': 'long cozy rest'
};

// --- DOM Elements ---
// Timer Elements
const timerDisplay = document.getElementById('timerDisplay');
const timerStatus = document.getElementById('timerStatus');
const modeBtns = document.querySelectorAll('.mode-btn');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

// Form Elements
const noteForm = document.getElementById('noteForm');
const sessionTargetInput = document.getElementById('sessionTarget');
const currentMoodInput = document.getElementById('currentMood');
const tinyTodoInput = document.getElementById('tinyTodo');
const littleReflectionInput = document.getElementById('littleReflection');

// Board Elements
const boardGrid = document.getElementById('boardGrid');
const emptyState = document.getElementById('emptyState');
const clearAllBtn = document.getElementById('clearAllBtn');

// --- Initialization ---
function init() {
    updateTimerDisplay();
    loadNotes();
    setupEventListeners();
}

// --- Timer Functions ---
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    
    timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
    document.title = `${formattedMinutes}:${formattedSeconds} - Moododoro`;
}

function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            completeSession();
        }
    }, 1000);
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timerInterval);
}

function resetTimer() {
    pauseTimer();
    timeLeft = DURATIONS[currentMode] * 60;
    updateTimerDisplay();
}

function completeSession() {
    pauseTimer();
    // Play a gentle alert or show wording
    setTimeout(() => {
        alert("Your focus session is complete. Take a soft little break. ♡");
    }, 100);
}

function switchMode(mode) {
    currentMode = mode;
    
    // Update active button
    modeBtns.forEach(btn => {
        if(btn.dataset.mode === mode) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update status text
    timerStatus.textContent = `current session: ${MODE_TEXTS[mode]}`;

    // Reset timer to new mode
    resetTimer();
}

// --- Notes & LocalStorage Functions ---
function getNotes() {
    const notesStr = localStorage.getItem('moododoroNotes');
    if (notesStr) {
        return JSON.parse(notesStr);
    }
    return [];
}

function saveNotes(notes) {
    localStorage.setItem('moododoroNotes', JSON.stringify(notes));
}

function addNote(e) {
    e.preventDefault();
    
    const newNote = {
        id: Date.now().toString(),
        target: sessionTargetInput.value.trim(),
        mood: currentMoodInput.value,
        todo: tinyTodoInput.value.trim(),
        reflection: littleReflectionInput.value.trim(),
        date: new Date().toLocaleDateString()
    };

    const notes = getNotes();
    notes.unshift(newNote); // Add to the beginning
    saveNotes(notes);
    
    // Reset form
    noteForm.reset();
    
    // Re-render board
    loadNotes();
}

function deleteNote(id) {
    let notes = getNotes();
    notes = notes.filter(note => note.id !== id);
    saveNotes(notes);
    loadNotes();
}

function clearAllNotes() {
    const notes = getNotes();
    if (notes.length === 0) return;

    if (confirm("Are you sure you want to clear your cozy board?")) {
        localStorage.removeItem('moododoroNotes');
        loadNotes();
    }
}

function loadNotes() {
    const notes = getNotes();
    
    boardGrid.innerHTML = '';
    
    if (notes.length === 0) {
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
        
        notes.forEach(note => {
            const card = document.createElement('div');
            card.className = 'note-card fade-in';
            card.innerHTML = `
                <div class="note-header">
                    <span class="note-mood">${note.mood}</span>
                    <button class="delete-btn" onclick="deleteNote('${note.id}')" title="Delete Note">✕</button>
                </div>
                <h4 class="note-target">${note.target}</h4>
                
                ${note.todo ? `
                <div class="note-section">
                    <div class="note-section-title">Tiny To-do</div>
                    <div class="note-text">${note.todo}</div>
                </div>
                ` : ''}

                ${note.reflection ? `
                <div class="note-section">
                    <div class="note-section-title">Little Reflection</div>
                    <div class="note-text">${note.reflection}</div>
                </div>
                ` : ''}
            `;
            boardGrid.appendChild(card);
        });
    }
}

// --- Event Listeners ---
function setupEventListeners() {
    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);

    modeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchMode(e.target.dataset.mode);
        });
    });

    noteForm.addEventListener('submit', addNote);
    clearAllBtn.addEventListener('click', clearAllNotes);
}

// Run app
init();
