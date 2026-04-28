# Koushik Babu A S Portfolio

Static portfolio site built from the resume draft in `ideas/KoushikBabuAS_resumedraft copy.pdf`.

The 3D scene uses the pinned local module in `vendor/three.module.js`, so it does not need a CDN at runtime.
The resume preview image is `assets/resume-preview.png`.

## Run locally

```bash
python3 -m http.server 5173
```

Open `http://127.0.0.1:5173`.

## Update projects

Edit the `projects` array at the top of `main.js`.

Each project supports:

- `title`
- `year`
- `status`
- `category`
- `accent`
- `summary`
- `tools`
- `link` (optional)
- `linkLabel` (optional)

Use `status: "Ongoing"` or `category: "ongoing"` for projects that should appear under the Ongoing filter.
# portfolio
