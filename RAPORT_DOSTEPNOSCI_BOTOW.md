# Raport: Dostępność dla botów OpenAI/GPTBot i konfiguracja Shoppera

## Data analizy: $(date)

---

## 1. ✅ Sprawdzenie pliku robots.txt

**Status: BRAK BLOKAD DLA GPTBot**

Plik `public/robots.txt` zawiera:
```
User-agent: *
Disallow:
```

**Wnioski:**
- ✅ **NIE MA** blokady dla GPTBot/OpenAI
- ✅ Wszystkie boty mają dostęp do całej strony (Disallow jest puste)
- ✅ Plik robots.txt jest poprawnie skonfigurowany

**Rekomendacja:** 
- Plik jest OK, nie wymaga zmian
- Jeśli chcesz wyraźnie zezwolić GPTBot, możesz dodać:
```
User-agent: GPTBot
Allow: /

User-agent: *
Disallow:
```

---

## 2. ⚠️ Firewall / Cloudflare / Zabezpieczenia

**Status: NIE MOŻNA ZWERYFIKOWAĆ W KODZIE**

**Analiza:**
- ❌ W kodzie źródłowym **NIE ZNALEZIONO** konfiguracji Cloudflare
- ❌ W kodzie źródłowym **NIE ZNALEZIONO** konfiguracji firewall
- ❌ W kodzie źródłowym **NIE ZNALEZIONO** plików `.htaccess`, `netlify.toml`, `vercel.json`

**Wnioski:**
- To jest aplikacja React (Create React App)
- Zabezpieczenia typu Cloudflare/firewall są konfigurowane **po stronie hostingu/serwera**, nie w kodzie
- Konfiguracja może być w panelu hostingu (np. Netlify, Vercel, cPanel, itp.)

**Rekomendacje do sprawdzenia po stronie hostingu:**

### Jeśli używasz Cloudflare:
1. Zaloguj się do panelu Cloudflare
2. Przejdź do **Security** → **WAF** (Web Application Firewall)
3. Sprawdź reguły blokujące boty
4. Upewnij się, że **GPTBot** i **ChatGPT-User** nie są zablokowane
5. W **Security** → **Bots** sprawdź ustawienia

### Jeśli używasz innego hostingu:
1. Sprawdź panel administracyjny hostingu
2. Szukaj sekcji: **Security**, **Firewall**, **Bot Protection**
3. Upewnij się, że boty OpenAI nie są na liście zablokowanych

### Test dostępności:
Możesz przetestować, czy boty OpenAI mają dostęp, używając:
```bash
curl -A "GPTBot" https://www.studiofigurastablowice.pl/robots.txt
curl -A "ChatGPT-User" https://www.studiofigurastablowice.pl/
```

---

## 3. ❓ Konfiguracja Shoppera / Poddomeny

**Status: NIE ZNALEZIONO W KODZIE**

**Analiza:**
- ❌ W kodzie **NIE ZNALEZIONO** konfiguracji Shoppera
- ❌ W kodzie **NIE ZNALEZIONO** konfiguracji poddomeny
- ❌ W kodzie **NIE ZNALEZIONO** plików konfiguracyjnych DNS

**Wnioski:**
- Konfiguracja Shoppera i poddomeny jest zwykle wykonywana:
  - W panelu DNS (u dostawcy domeny)
  - W panelu Shoppera
  - W konfiguracji hostingu/CDN

**Rekomendacje:**

### Konfiguracja poddomeny dla Shoppera:

1. **W panelu DNS (u dostawcy domeny):**
   - Dodaj rekord CNAME dla poddomeny (np. `sklep.studiofigurastablowice.pl`)
   - Wskaż na domenę dostarczoną przez Shoppera

2. **W panelu Shoppera:**
   - Skonfiguruj domenę niestandardową
   - Dodaj poddomenę jako domenę sklepu
   - Zweryfikuj domenę (zwykle przez dodanie rekordu TXT w DNS)

3. **W konfiguracji hostingu (jeśli dotyczy):**
   - Dodaj poddomenę jako alias domeny
   - Skonfiguruj przekierowania jeśli potrzebne

**Przykładowa konfiguracja DNS:**
```
Typ: CNAME
Nazwa: sklep (lub shop, store, etc.)
Wartość: [domena dostarczona przez Shoppera]
TTL: 3600
```

---

## 4. 📋 Podsumowanie i działania do wykonania

### ✅ Co jest OK:
- [x] Plik robots.txt nie blokuje GPTBot
- [x] Kod źródłowy nie zawiera blokad dla botów

### ⚠️ Co wymaga sprawdzenia (po stronie hostingu/DNS):
- [ ] Sprawdzenie konfiguracji Cloudflare/firewall w panelu hostingu
- [ ] Weryfikacja, czy boty OpenAI nie są zablokowane
- [ ] Konfiguracja poddomeny dla Shoppera w panelu DNS
- [ ] Konfiguracja domeny niestandardowej w panelu Shoppera

### 📝 Dodatkowe informacje:

**Aktualna domena:** `www.studiofigurastablowice.pl` (z `public/index.html`)

**Struktura projektu:**
- Aplikacja React (Create React App)
- Hosting: nieokreślony w kodzie (sprawdź w panelu hostingu)
- Brak plików konfiguracyjnych hostingu w repozytorium

---

## 5. 🔧 Opcjonalne ulepszenia

### Możesz dodać do robots.txt wyraźne zezwolenie dla GPTBot:

```txt
# https://www.robotstxt.org/robotstxt.html

# Explicitly allow GPTBot
User-agent: GPTBot
Allow: /

# Explicitly allow ChatGPT-User
User-agent: ChatGPT-User
Allow: /

# Default rules for all other bots
User-agent: *
Disallow:
```

### Możesz dodać meta tag w index.html (opcjonalnie):

```html
<meta name="robots" content="index, follow">
```

---

**Uwaga:** Większość konfiguracji związanych z zabezpieczeniami i DNS jest wykonywana po stronie hostingu/DNS, nie w kodzie źródłowym. Powyższe rekomendacje wymagają dostępu do paneli administracyjnych.

