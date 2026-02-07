# NORTRAX Auto - Landing Page Premium

## Problem Statement
Crear una landing page premium para NORTRAX Auto, plataforma de gestión vehicular e importación especializada en vehículos de alto valor ($500,000+ MXN).

## User Personas
1. **Compradores Premium**: Interesados en vehículos deportivos, eléctricos o ediciones especiales
2. **Importadores**: Personas que buscan importar vehículos con procesos legales claros
3. **Propietarios de vehículos premium**: Requieren nacionalización o regularización

## Core Requirements
- Hero section con CTAs claros
- Propuesta de valor diferenciada
- Grid de servicios (5 servicios)
- Showcase de vehículos seleccionados (Shelby, Tesla, Porsche)
- Proceso de trabajo (5 pasos)
- Formulario de contacto completo
- Footer profesional
- Diseño dark theme premium
- Tono sobrio, profesional, sin urgencia

## What's Been Implemented (February 2026)

### Frontend
- [x] Navbar con navegación suave y blur effect
- [x] Hero section full-screen con imagen de fondo premium
- [x] Sección "¿Qué es NORTRAX Auto?" con 3 cards de valor
- [x] Grid de 5 servicios con iconos
- [x] Showcase de 3 vehículos (Shelby GT500, Tesla Model S, Porsche 911)
- [x] Timeline de proceso de trabajo (5 pasos)
- [x] Sección "Por qué NORTRAX Auto" con 4 razones
- [x] Formulario de contacto completo con Select y validaciones
- [x] Footer minimalista
- [x] Animaciones CSS (fade-up, hover effects)
- [x] Responsive design
- [x] Dark theme premium (#030712 base)
- [x] Tipografía: Syne (headings) + Manrope (body)

### Backend
- [x] FastAPI con endpoint POST /api/contact
- [x] GET /api/contacts para listar consultas
- [x] Integración con MongoDB
- [x] CORS configurado

## Tech Stack
- Frontend: React, Tailwind CSS, Shadcn UI
- Backend: FastAPI, Motor (MongoDB async)
- Database: MongoDB

## Prioritized Backlog

### P0 (Critical)
- [x] Landing page completa

### P1 (Important)
- [ ] Email notifications al recibir consulta
- [ ] Admin dashboard para ver consultas
- [ ] Integración WhatsApp en CTAs

### P2 (Nice to have)
- [ ] Animaciones con Framer Motion
- [ ] Galería de vehículos dinámica desde DB
- [ ] Chat widget
- [ ] Multi-idioma (EN/ES)

## Next Tasks
1. Testing end-to-end con testing agent
2. Validar envío de formulario desde UI
3. Considerar integración de email
