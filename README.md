# Fly.io Assignment – Node.js sovellus

Tässä tehtävässä toteutin yksinkertaisen Node.js Express -sovelluksen ja julkaisin sen Fly.io pilvipalveluun. Lisäksi projektiin lisättiin CI/CD-putki GitHub Actionsin avulla (Bundle G).

Tehtävän tarkoituksena oli harjoitella sovelluksen julkaisemista PaaS (Platform as a Service) -ympäristöön sekä automatisoida deploy-prosessi.

## Projektin kuvaus

Sovellus on yksinkertainen verkkopalvelin, joka palauttaa selaimelle HTML-sivun. Sovellus on toteutettu Node.js:llä ja Express-kirjastolla.

Sovellus on julkaistu internetiin Fly.io-palvelun avulla Docker-konttina.

Lisäksi sovellukseen lisättiin CI/CD-putki, jonka avulla uudet muutokset julkaistaan automaattisesti.

## Käytetyt teknologiat

- Node.js
- Express
- Docker
- Fly.io (PaaS)
- GitHub Actions (CI/CD)

## Projektin rakenne

```
server.js # Sovelluksen pääkoodi
package.json # Node.js projektin asetukset ja riippuvuudet
package-lock.json
Dockerfile # Kontin buildaus Fly.io:lle
fly.toml # Fly.io konfiguraatio
.github/workflows/fly-deploy.yml # CI/CD pipeline
```

## Sovelluksen ajaminen paikallisesti

1. Asenna riippuvuudet:
   ```bash
   npm install
   ```
2. Käynnistä sovellus:
   ```bash
   npm start
   ```
3. Avaa selaimessa:<br>
   http://localhost:3000/

## CI/CD (GitHub Actions + Fly.io)

Projektiin on toteutettu CI/CD-putki GitHub Actionsin avulla.

Kun koodia pusketaan `main`-haaraan:

1. GitHub Actions käynnistyy automaattisesti
2. Sovellus buildataan Dockerilla
3. Sovellus deployataan Fly.io:hon

Tämä mahdollistaa automaattisen julkaisemisen ilman manuaalisia komentoja.

## Sovelluksen julkaisu Fly.io:hon

Alkuperäinen julkaisu tehtiin Fly.io CLI:llä:
```bash
fly launch
fly deploy
```
Tämän jälkeen deploy on automatisoitu CI/CD-putken avulla.

## Julkaistu sovellus

Sovellus on saatavilla internetissä:

👉 https://laura-fly-assignment.fly.dev/

## Päivitykset

Sovellukseen lisättiin CI/CD-testinä serverin kellonaika, joka päivittyy jokaisessa deployssa. Tämä osoittaa, että uusi versio julkaistaan onnistuneesti.