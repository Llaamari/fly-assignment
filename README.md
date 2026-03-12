# Fly.io Assignment – Node.js sovellus

Tässä tehtävässä toteutin yksinkertaisen Node.js Express -sovelluksen ja julkaisin sen Fly.io pilvipalveluun. Tehtävän tarkoituksena oli harjoitella sovelluksen julkaisemista PaaS (Platform as a Service) -ympäristöön.

## Projektin kuvaus

Sovellus on yksinkertainen verkkopalvelin, joka palauttaa selaimelle HTML-sivun. Sovellus on toteutettu Node.js:llä ja Express-kirjastolla.

Sovellus on julkaistu internetiin Fly.io-palvelun avulla Docker-konttina.

## Käytetyt teknologiat

- Node.js
- Express
- Docker
- Fly.io (PaaS)

## Projektin rakenne
```
server.js # Sovelluksen pääkoodi
package.json # Node.js projektin asetukset ja riippuvuudet
package-lock.json # Riippuvuuksien tarkat versiot
Dockerfile # Kontin buildaus Fly.io:lle
fly.toml # Fly.io konfiguraatio
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
   http://localhost:3000


## Sovelluksen julkaisu Fly.io:hon

Sovellus julkaistiin Fly.io CLI -työkalun avulla.

Projektikansiossa suoritettiin komennot:
```bash
fly launch
fly deploy
```

Näiden komentojen avulla Fly.io loi sovellukselle konfiguraation ja julkaisi sen pilvipalveluun.

## Julkaistu sovellus

Sovellus on saatavilla internetissä osoitteessa:<br>
https://laura-fly-assignment.fly.dev/