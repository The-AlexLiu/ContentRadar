# ContentRadar

ContentRadar is a multi-platform public content research and crawling toolkit for learning and analysis.

It supports public content collection workflows across Xiaohongshu, Douyin, Kuaishou, Bilibili, Weibo, Baidu Tieba, Zhihu, and related comment data. The project is intended for research, learning, content analysis, and personal workflow exploration only.

Please read the non-commercial learning license in [LICENSE](LICENSE) before use.

## Quick Start

```bash
uv sync
uv run main.py --platform xhs --lt qrcode --type search
uv run main.py --help
```

WebUI:

```bash
uv run uvicorn api.main:app --port 8080 --reload
```

Then open:

```text
http://localhost:8080
```

## Scope

- Keyword search collection
- Post detail collection
- Comment and sub-comment collection
- Creator homepage collection
- Login state cache
- Proxy pool support
- CSV / JSON / JSONL / Excel / SQLite / MySQL storage

## License And Inspiration

This project is inspired by [NanmiCoder/MediaCrawler](https://github.com/NanmiCoder/MediaCrawler) and is packaged and maintained independently under the original license requirements. The original license notice is retained in [LICENSE](LICENSE).
