# ContentRadar

ContentRadar es una herramienta de investigación y recopilación de contenido público multiplataforma para aprendizaje y análisis.

Soporta flujos de recopilación de contenido público en Xiaohongshu, Douyin, Kuaishou, Bilibili, Weibo, Baidu Tieba, Zhihu y datos de comentarios relacionados. El proyecto está destinado únicamente a aprendizaje, investigación, análisis de contenido y exploración personal.

Lea la licencia de aprendizaje no comercial en [LICENSE](LICENSE) antes de usarlo.

## Inicio Rápido

```bash
uv sync
uv run main.py --platform xhs --lt qrcode --type search
uv run main.py --help
```

WebUI:

```bash
uv run uvicorn api.main:app --port 8080 --reload
```

Luego abra:

```text
http://localhost:8080
```

## Alcance

- Recopilación por búsqueda de palabras clave
- Recopilación de detalles de publicaciones
- Recopilación de comentarios y subcomentarios
- Recopilación de páginas de creadores
- Caché de sesión de inicio de sesión
- Soporte de proxy
- Almacenamiento CSV / JSON / JSONL / Excel / SQLite / MySQL

## Licencia E Inspiración

Este proyecto está inspirado en [NanmiCoder/MediaCrawler](https://github.com/NanmiCoder/MediaCrawler) y se empaqueta y mantiene de forma independiente bajo los requisitos de la licencia original. El aviso de licencia original se conserva en [LICENSE](LICENSE).
