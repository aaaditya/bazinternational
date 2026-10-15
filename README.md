# Baz International

Modern, lightweight freight-forwarding website for [baz-international.com](https://baz-international.com).

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4

## Customise content

Almost all copy, contact details, services, and image URLs live in one file:

```
src/content/site.ts
```

Update that file to change branding text, address, phone, email, service blurbs, or Unsplash image links without hunting through components.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Pages

| Route       | Purpose                                      |
| ----------- | -------------------------------------------- |
| `/`         | Home / hero, services overview, trust points |
| `/services` | Ocean, air, road/inland, customs             |
| `/about`    | Company story and approach                   |
| `/contact`  | Address, phone, email, enquiry form          |
