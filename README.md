# Hydrosan (PWA)

Aplikasi analisis hidrologi tambang — bisa dipasang di HP dan berjalan offline setelah dibuka sekali.

## Pasang lewat GitHub Pages
1. Upload seluruh isi folder ini ke repo (root): `index.html`, `manifest.json`, `sw.js`, folder `icons/`.
2. Repo → Settings → Pages → Branch `main` / folder `/ (root)` → Save.
3. Buka `https://<username>.github.io/<repo>/` di HP.
4. Android (Chrome): menu ⋮ → **Install app**. iPhone (Safari): Bagikan → **Tambah ke Layar Utama**.

## Membuka file proyek (.hydromine)
- **Android (app terpasang lewat Chrome):** di WhatsApp/File Manager tekan lama file → **Bagikan** → pilih **Hydrosan**. Proyek langsung terbuka.
- **Windows/ChromeOS (app terpasang):** klik kanan file → **Open with → Hydrosan**.
- **iPhone:** iOS belum mendukung fitur ini untuk web app; simpan file ke Files lalu buka lewat tombol 📁 di app.
- Jika Hydrosan belum muncul di daftar Bagikan setelah update: hapus app dari HP lalu pasang ulang.

## Update versi
Ganti `index.html`, lalu naikkan `VER` di `sw.js` (mis. `hydrosan-v3`) agar HP mengambil versi baru.
