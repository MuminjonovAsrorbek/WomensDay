# Womens Day Website (8-Mart)

Bu loyiha `React + Vite + Framer Motion` asosida tayyorlangan 8-Mart tabrik sahifasi.

## Asosiy oqim
1. Animated `WomensDayLoader` chiqadi.
2. Loader tugagach `WomensDayBloom` (tabrik matni) chiqadi.
3. `Sovg'ani Ochish` tugmasi bosilganda `Womens-day-surprise/love.html` sahifasi iframe orqali ochiladi.

## Texnologiyalar
- React 18
- Vite 5
- Framer Motion
- Nginx (Docker ichida static serve)
- Jenkins (CI/CD pipeline)

## Lokal ishga tushirish
```bash
npm install
npm run dev
```

Brauzer: `http://localhost:5173`

## Production build
```bash
npm run build
npm run preview
```

## Docker bilan ishga tushirish
### Image build
```bash
docker build -t womenday:latest .
```

### Container run
```bash
docker run -d --name womenday-container --restart unless-stopped -p 8088:80 womenday:latest
```

Brauzer: `http://localhost:5174`

> Eslatma: `5173` port band bo'lgani uchun deploy uchun `8088` ishlatilgan.

## Jenkins pipeline
Loyihada tayyor [Jenkinsfile](./Jenkinsfile) bor.

Pipeline bosqichlari:
1. Repo clone
2. Docker image build (`BUILD_NUMBER` bilan tag)
3. Eski containerni o'chirib, yangisini ishga tushirish

Muhim sozlamalar (Jenkinsfile ichida):
- `IMAGE_NAME = asrorbek/womenday:${env.BUILD_NUMBER}`
- `LATEST_IMAGE = asrorbek/womenday:latest`
- `CONTAINER_NAME = womenday-container`
- `HOST_PORT = 5174`
- `CONTAINER_PORT = 80`

Agar repo URL boshqacha bo'lsa, `Jenkinsfile` ichidagi `git url` ni o'zgartiring.

## Muhim fayllar
- [src/App.jsx](./src/App.jsx) - asosiy oqim (`loader -> bloom -> surprise`)
- [src/components/WomensDayLoader.jsx](./src/components/WomensDayLoader.jsx)
- [src/components/WomensDayBloom.jsx](./src/components/WomensDayBloom.jsx)
- [src/styles.css](./src/styles.css)
- [public/womens-day-surprise/love.html](./public/womens-day-surprise/love.html)
- [Dockerfile](./Dockerfile)
- [nginx.conf](./nginx.conf)
- [Jenkinsfile](./Jenkinsfile)

## Eslatma
`public/womens-day-surprise/` ichida faqat kerakli static fayllar qoldirilgan:
- `love.html`
- `css/`
- `js/`
- `img/`
