# Moododoro

## Deskripsi Singkat
Moododoro adalah aplikasi Pomodoro Mood Board dengan konsep soft pink journaling aesthetic yang membantu pengguna menjalankan sesi fokus dan mencatat mood, target, todo, serta refleksi dalam bentuk card. Aplikasi ini dirancang sebagai "soft focus space" untuk meningkatkan produktivitas dengan cara yang lembut dan nyaman.

## Fitur Aplikasi
- **Pomodoro Timer**: Mode Focus Time (25m), Sweet Break (5m), dan Long Cozy Break (15m).
- **Timer Controls**: Start, pause, dan reset timer.
- **Focus Note Form**: Formulir untuk mencatat target sesi, tiny to-do, dan refleksi.
- **Mood Dropdown**: Beragam pilihan mood aesthetic (seperti Calm, Dreamy, Cozy).
- **Mood Board Card**: Catatan ditampilkan sebagai card cantik seperti sticky note.
- **Delete Note**: Hapus catatan individual dari board.
- **Clear All Notes**: Hapus semua catatan sekaligus.
- **LocalStorage**: Semua catatan tersimpan secara lokal dan tidak hilang saat refresh.
- **Responsive Design**: Nyaman digunakan di desktop, tablet, maupun mobile.
- **Backend (Versi Node.js)**: Menyediakan Endpoint `/health` dan `/api/sample-notes`.

## Struktur Folder Project

```text
moododoro-deployment/
├── html-version/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── node-version/
│   ├── package.json
│   ├── server.js
│   └── public/
│       ├── index.html
│       ├── style.css
│       └── script.js
│
├── docs/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

## Cara Menjalankan Aplikasi

### Versi HTML Statis
1. Buka folder `html-version/`.
2. Klik ganda file `index.html` untuk membukanya langsung di browser pilihan Anda.

### Versi Node.js
1. Pastikan Anda telah menginstal Node.js.
2. Buka terminal atau command prompt, navigasi ke folder `node-version/`:
   ```bash
   cd node-version
   ```
3. Instal dependencies yang dibutuhkan (Express):
   ```bash
   npm install
   ```
4. Jalankan aplikasi:
   ```bash
   npm start
   ```
5. Buka browser dan akses alamat:
   **http://localhost:3000**

## Endpoint Node.js
Untuk versi Node.js, berikut adalah endpoint yang tersedia:
- `GET /` : Menampilkan halaman utama Moododoro.
- `GET /health` : Mengembalikan status kesehatan server dalam bentuk JSON.
- `GET /api/sample-notes` : Mengembalikan contoh data focus note dalam format JSON.

## Rencana Deployment
Project ini dibuat untuk memenuhi tugas praktikum deployment. Rencana deployment adalah sebagai berikut:
- **Node.js ke Vercel**: Versi `node-version` akan dideploy ke Vercel sebagai aplikasi Node/Express.
- **HTML ke Netlify**: Versi `html-version` akan dideploy ke Netlify sebagai static site.
- **HTML (folder docs) ke GitHub Pages**: Folder `docs` akan digunakan untuk host aplikasi via GitHub Pages (Deploy from branch main/docs folder).

## Link Deployment
*(Bagian ini akan diisi setelah aplikasi berhasil dideploy)*
- **Vercel**: [Link Vercel]
- **Netlify**: [Link Netlify]
- **GitHub Pages**: [Link GitHub Pages]
- **Custom Domain**: [Link Custom Domain]

## Pengujian Performa

| Provider | Test 1 | Test 2 | Test 3 | Test 4 | Test 5 | Average Total Time | Average TTFB |
|----------|--------|--------|--------|--------|--------|--------------------|--------------|
| Vercel   |        |        |        |        |        |                    |              |
| Netlify  |        |        |        |        |        |                    |              |
| GitHub   |        |        |        |        |        |                    |              |

## Evaluasi Provider

| Kriteria | Vercel | Netlify | GitHub Pages |
|----------|--------|---------|--------------|
| Kemudahan setup | | | |
| Kecepatan deploy | | | |
| CI/CD & Git | | | |
| Fitur free tier | | | |
| Dokumentasi | | | |
| Cocok untuk prototyping | | | |
