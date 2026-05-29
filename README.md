# 💧 HydroMine — Mine Hydrology Tool

Aplikasi analisis hidrologi tambang berbasis web — dapat digunakan langsung di browser tanpa instalasi.

## 🚀 Deploy ke GitHub Pages

### Langkah:

1. **Buat repository baru** di GitHub (misal: `HydroMine`)

2. **Upload file berikut ke ROOT repository:**
   ```
   index.html    ← file utama (HARUS di root)
   .nojekyll     ← mencegah Jekyll processing
   README.md
   ```
   > ⚠️ Upload langsung ke root, jangan dalam subfolder

3. **Aktifkan GitHub Pages:**
   - Settings → Pages
   - Source: `main` branch, folder `/ (root)`
   - Save → tunggu 1–2 menit

4. Akses: `https://<username>.github.io/HydroMine/`

---

## ✨ Fitur

| Modul | Deskripsi |
|---|---|
| 🌧️ Rainfall Analysis | Analisis curah hujan, distribusi statistik, CH rancangan |
| 🌊 Runoff Contact Water | Hitung limpasan per catchment area |
| 💨 Evaporation Analysis | Laju evaporasi Irving Langmuir |
| 🏔️ Groundwater | Kontribusi air tanah per catchment |
| 🔀 Flow Diagram | Diagram alir neraca air |
| ♻️ Sediment Pond | Desain kolam pengendap |
| 💧 Retention Pond | Desain kolam retensi |
| 📋 Rekap Akhir | Ringkasan seluruh hasil analisis |
| 📄 Output Laporan | Export ke Excel (.xlsx) dan Word (.docx) |

## 📄 Lisensi
© 2024 HydroMine. All rights reserved.
