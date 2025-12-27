<template>
  <v-app>
    <div id="top"></div>
    <v-app-bar color="transparent" elevation="0" flat class="app-bar-transparent">
      <v-container class="d-flex align-center justify-space-between py-4">
        <a href="#top" class="brand-link d-flex align-center ga-3">
          <div class="logo-mark">
            <v-img :src="navLogo" alt="Logo Industries P&M" cover height="45" width="45" class="rounded-circle" />
          </div>
          <div>
            <div class="text-h6 font-weight-bold text-uppercase">Industries P&M</div>
            <div class="text-caption text-medium-emphasis">{{ t.brandTagline }}</div>
          </div>
        </a>
        <div class="d-none d-md-flex align-center ga-4">
          <v-btn
            v-for="link in navLinks"
            :key="link.href"
            variant="text"
            class="text-body-2"
            :href="link.href"
          >
            {{ link.label }}
          </v-btn>
          <v-btn color="primary" href="#contact">{{ t.nav.contact }}</v-btn>
          <div class="d-flex ga-2 ml-4">
            <v-btn
              :variant="lang === 'fr' ? 'flat' : 'text'"
              density="comfortable"
              size="small"
              @click="switchLang('fr')"
            >
              FR
            </v-btn>
            <v-btn
              :variant="lang === 'en' ? 'flat' : 'text'"
              density="comfortable"
              size="small"
              @click="switchLang('en')"
            >
              EN
            </v-btn>
          </div>
        </div>
        <v-app-bar-nav-icon
          class="d-md-none"
          color="primary"
          variant="text"
          @click.stop="navDrawer = true"
        />
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="navDrawer"
      location="right"
      temporary
      scrim
      width="320"
      class="mobile-drawer"
    >
      <v-sheet class="pa-4">
          <div class="d-flex align-center justify-space-between mb-4">
            <div class="d-flex align-center ga-3">
              <div class="logo-mark">
                <v-img :src="navLogo" alt="Logo Industries P&M" cover height="24" width="24" class="rounded-circle" />
              </div>
            <div>
              <div class="text-subtitle-1 font-weight-bold text-uppercase">Industries P&M</div>
              <div class="text-caption text-medium-emphasis">{{ t.brandTagline }}</div>
            </div>
          </div>
          <v-btn icon="mdi-close" variant="text" @click="navDrawer = false"></v-btn>
        </div>
        <v-divider class="mb-4"></v-divider>
        <v-list nav density="comfortable">
          <v-list-item
            v-for="link in navLinks"
            :key="link.href"
            :title="link.label"
            :href="link.href"
            @click="navDrawer = false"
          />
        </v-list>
        <v-btn block color="primary" class="mt-4" :href="'#contact'" @click="navDrawer = false">
          {{ t.nav.contact }}
        </v-btn>
        <v-divider class="my-4"></v-divider>
        <div class="d-flex ga-2">
          <v-btn
            block
            :variant="lang === 'fr' ? 'flat' : 'outlined'"
            density="comfortable"
            size="small"
            @click="switchLang('fr'); navDrawer = false"
          >
            Français
          </v-btn>
          <v-btn
            block
            :variant="lang === 'en' ? 'flat' : 'outlined'"
            density="comfortable"
            size="small"
            @click="switchLang('en'); navDrawer = false"
          >
            English
          </v-btn>
        </div>
      </v-sheet>
    </v-navigation-drawer>

    <v-main>
      <section class="hero">
        <v-parallax :src="heroBackground" height="720">
          <div class="hero-overlay">
            <v-container class="py-12">
              <v-row class="align-center">
                <v-col cols="12" md="7">
                  <v-chip class="pill mb-4" color="rgba(247,241,230,0.2)" prepend-icon="mdi-flash">
                    {{ t.hero.chip }}
                  </v-chip>
                  <div class="d-flex align-center ga-4 hero-title">

                    <h1 class="text-h3 text-md-h2 font-weight-bold mb-0">
                      {{ t.hero.title }}
                    </h1>
                  </div>
                  <p class="text-body-1 text-medium-emphasis mb-6">
                    {{ t.hero.body }}
                  </p>
                  <div class="d-flex ga-3 flex-wrap">
                    <v-btn color="primary" size="large" href="#contact" prepend-icon="mdi-calendar-clock">
                      {{ t.hero.ctaPrimary }}
                    </v-btn>
                    <v-btn variant="outlined" color="secondary" size="large" href="#strategie" prepend-icon="mdi-compass-outline">
                      {{ t.hero.ctaSecondary }}
                    </v-btn>
                  </div>
                  <div class="d-flex ga-3 mt-6 flex-wrap">
                    <v-chip
                      v-for="pill in t.hero.pills"
                      :key="pill"
                      class="pill"
                      color="rgba(247,241,230,0.2)"
                      prepend-icon="mdi-star-outline"
                    >
                      {{ pill }}
                    </v-chip>
                  </div>
                </v-col>
                <v-col cols="12" md="5">
                  <v-card class="angled-card pa-6" rounded="xl" elevation="12" style="position: relative;">
                    <div class="floating-badge rounded-pill px-3 py-2 text-body-2">
                      <v-icon size="18" color="secondary">mdi-shield-check</v-icon>
                      {{ t.hero.badge }}
                    </div>
                    <div class="mb-6">
                      <div class="text-h5 font-weight-bold mb-2">{{ t.hero.thesisTitle }}</div>
                      <div class="text-body-2 text-medium-emphasis">
                        {{ t.hero.thesisBody }}
                      </div>
                    </div>
                    <v-divider class="mb-4"></v-divider>
                    <v-row dense>
                      <v-col cols="12" class="d-flex align-center justify-space-between mb-3">
                        <div>
                          <div class="text-subtitle-2 font-weight-bold">{{ t.hero.startups.title }}</div>
                          <div class="text-caption text-medium-emphasis">{{ t.hero.startups.detail }}</div>
                        </div>
                        <v-chip color="primary" size="small" variant="flat">40%</v-chip>
                      </v-col>
                      <v-col cols="12" class="d-flex align-center justify-space-between mb-3">
                        <div>
                          <div class="text-subtitle-2 font-weight-bold">{{ t.hero.equities.title }}</div>
                          <div class="text-caption text-medium-emphasis">{{ t.hero.equities.detail }}</div>
                        </div>
                        <v-chip color="secondary" size="small" variant="flat">35%</v-chip>
                      </v-col>
                      <v-col cols="12" class="d-flex align-center justify-space-between">
                        <div>
                          <div class="text-subtitle-2 font-weight-bold">{{ t.hero.land.title }}</div>
                          <div class="text-caption text-medium-emphasis">{{ t.hero.land.detail }}</div>
                        </div>
                        <v-chip color="accent" size="small" variant="flat">25%</v-chip>
                      </v-col>
                    </v-row>
                    <v-divider class="my-4"></v-divider>
                    <div class="d-flex align-center ga-3">
                      <v-icon color="secondary">mdi-clock-check-outline</v-icon>
                      <div class="text-body-2 text-medium-emphasis">{{ t.hero.horizon }}</div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-parallax>
      </section>

      <section id="coups-de-coeur">
        <v-container class="py-12">
          <div class="d-flex align-center justify-space-between mb-6 flex-wrap ga-4">
            <div>
              <div class="text-overline text-medium-emphasis">{{ t.favorites.overline }}</div>
              <h2 class="text-h4 font-weight-bold mb-2">{{ t.favorites.title }}</h2>
              <div class="text-body-2 text-medium-emphasis">{{ t.favorites.subtitle }}</div>
              <div v-if="tickerStatus" class="text-caption text-medium-emphasis mt-2">{{ tickerStatus }}</div>
            </div>
          </div>
          <v-row>
            <v-col v-for="quote in liveTickers" :key="quote.symbol" cols="12" md="6">
              <v-card class="angled-card pa-5 h-100" rounded="xl" elevation="8">
                <div class="d-flex align-center justify-space-between mb-2">
                  <div>
                    <div class="text-h6 font-weight-bold">{{ quote.symbol }}</div>
                    <div class="text-caption text-medium-emphasis">{{ quote.name }} • {{ quote.exchange }}</div>
                  </div>
                  <v-chip :color="quote.change >= 0 ? 'primary' : 'error'" size="small" variant="flat">
                    {{ t.favorites.labels.change }} {{ quote.change >= 0 ? '+' : '' }}{{ quote.change.toFixed(2) }}
                  </v-chip>
                </div>
                <v-divider class="mb-3"></v-divider>
                <div class="d-flex align-center justify-space-between">
                  <div class="text-caption text-medium-emphasis">{{ t.favorites.labels.price }}</div>
                  <div class="text-h5 font-weight-bold">${{ quote.price.toFixed(2) }}</div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section id="strategie">
        <v-container class="py-12">
          <div class="d-flex align-center justify-space-between mb-6 flex-wrap ga-4">
            <div>
              <div class="text-overline text-medium-emphasis">{{ t.strategy.overline }}</div>
              <h2 class="text-h4 font-weight-bold">{{ t.strategy.title }}</h2>
            </div>
            <v-btn variant="outlined" color="accent" prepend-icon="mdi-download">
              {{ t.strategy.summaryCta }}
            </v-btn>
          </div>
          <v-row>
            <v-col v-for="card in t.strategy.cards" :key="card.title" cols="12" md="4">
              <v-card class="angled-card pa-5" rounded="xl" elevation="8">
                <v-icon :color="card.iconColor" size="32" class="mb-3">{{ card.icon }}</v-icon>
                <div class="text-h6 font-weight-bold mb-2">{{ card.title }}</div>
                <div class="text-body-2 text-medium-emphasis">
                  {{ card.detail }}
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section id="secteurs">
        <v-container class="py-12">
          <div class="text-overline text-medium-emphasis mb-2">{{ t.sectors.overline }}</div>
          <h2 class="text-h4 font-weight-bold mb-6">{{ t.sectors.title }}</h2>
          <v-row>
            <v-col v-for="item in t.sectors.items" :key="item.title" cols="12" md="4">
              <v-card class="angled-card pa-5 h-100" rounded="xl" elevation="6">
                <div class="d-flex align-center justify-space-between mb-3">
                  <div class="text-h6 font-weight-bold">{{ item.title }}</div>
                  <v-chip :color="item.tagColor" size="small" variant="flat">{{ item.tag }}</v-chip>
                </div>
                <div class="text-body-2 text-medium-emphasis mb-4">
                  {{ item.body }}
                </div>
                <v-divider class="mb-3"></v-divider>
                <div class="text-caption text-medium-emphasis">{{ item.heading }}</div>
                <ul class="text-body-2 text-medium-emphasis mb-0">
                  <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
                </ul>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section id="portefeuille">
        <v-container class="py-12">
          <div class="d-flex align-center justify-space-between mb-6 flex-wrap ga-4">
            <div>
              <div class="text-overline text-medium-emphasis">{{ t.portfolio.overline }}</div>
              <h2 class="text-h4 font-weight-bold">{{ t.portfolio.title }}</h2>
            </div>
            <v-chip color="rgba(247,241,230,0.2)" class="pill" prepend-icon="mdi-timer-sand">{{ t.portfolio.chip }}</v-chip>
          </div>
          <v-row>
            <v-col v-for="caseItem in cases" :key="caseItem.title" cols="12" md="4">
              <v-card class="angled-card pa-5 h-100" rounded="xl" elevation="6">
                <div class="d-flex align-center justify-space-between mb-3">
                  <div class="text-h6 font-weight-bold">{{ caseItem.title }}</div>
                  <v-chip :color="caseItem.color" size="small" variant="flat">{{ caseItem.tag }}</v-chip>
                </div>
                <div class="text-body-2 text-medium-emphasis mb-4">{{ caseItem.description }}</div>
                <v-divider class="mb-4"></v-divider>
                <div class="text-caption text-medium-emphasis mb-2">Impact</div>
                <div class="text-body-2">{{ caseItem.impact }}</div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section id="fondateurs">
        <v-container class="py-12">
          <div class="text-overline text-medium-emphasis mb-2">{{ t.founders.overline }}</div>
          <h2 class="text-h4 font-weight-bold mb-6">{{ t.founders.title }}</h2>
          <v-row>
            <v-col v-for="founder in founders" :key="founder.name" cols="12" md="6">
              <v-card class="angled-card pa-5 h-100" rounded="xl" elevation="6">
                <div class="d-flex align-center justify-space-between mb-3">
                  <div class="d-flex align-center ga-3">
                    <v-avatar color="rgba(247,241,230,0.08)" size="64">
                      <v-img v-if="founder.photo" :src="founder.photo" :alt="`Photo de ${founder.name}`" cover />
                      <span v-else class="text-h6 font-weight-bold">{{ founder.initials }}</span>
                    </v-avatar>
                    <div>
                      <div class="text-h6 font-weight-bold">{{ founder.name }}</div>
                      <div class="text-caption text-medium-emphasis">{{ founder.title }}</div>
                    </div>
                  </div>
                  <v-chip v-if="founder.focus" color="primary" size="small" variant="flat">{{ founder.focus }}</v-chip>
                </div>
                <div class="text-body-2 text-medium-emphasis mb-4">{{ founder.bio }}</div>
                <div class="d-flex ga-3 flex-wrap">
                  <v-chip
                    v-for="pill in founder.pills"
                    :key="pill"
                    class="pill"
                    color="rgba(247,241,230,0.2)"
                    size="small"
                  >
                    {{ pill }}
                  </v-chip>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section id="processus">
        <v-container class="py-12">
          <div class="text-overline text-medium-emphasis mb-2">{{ t.process.overline }}</div>
          <h2 class="text-h4 font-weight-bold mb-8">{{ t.process.title }}</h2>
          <v-row class="ga-4">
            <v-col v-for="step in process" :key="step.title" cols="12" md="3">
              <v-card class="angled-card pa-5 h-100" rounded="xl" elevation="6">
                <div class="d-flex align-center ga-3 mb-3">
                  <v-avatar size="32" color="rgba(247,241,230,0.1)">
                    <span class="font-weight-bold">{{ step.order }}</span>
                  </v-avatar>
                  <div class="text-subtitle-1 font-weight-bold">{{ step.title }}</div>
                </div>
                <div class="text-body-2 text-medium-emphasis">{{ step.detail }}</div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section id="contact">
        <v-container class="py-12">
          <v-card class="contact-bg pa-8" rounded="xl" elevation="8">
            <v-row class="align-center">
              <v-col cols="12" md="7">
                <div class="text-overline text-medium-emphasis">{{ t.contact.overline }}</div>
                <h2 class="text-h4 font-weight-bold mb-3">{{ t.contact.title }}</h2>
                <div class="text-body-2 text-medium-emphasis mb-6">
                  {{ t.contact.body }}
                </div>
                <div class="d-flex ga-3 flex-wrap">
                  <v-btn color="primary" prepend-icon="mdi-email-fast">{{ t.contact.emailLabel }}</v-btn>
                  <v-btn variant="outlined" color="secondary" prepend-icon="mdi-phone">{{ t.contact.phoneLabel }}</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="5">
                <v-card class="angled-card pa-5" rounded="xl" elevation="8">
                  <div class="text-subtitle-1 font-weight-bold mb-3">{{ t.contact.formTitle }}</div>
                  <v-text-field
                    v-model="contactForm.name"
                    :label="lang === 'fr' ? 'Nom' : 'Name'"
                    variant="outlined"
                    hide-details
                    density="comfortable"
                  ></v-text-field>
                  <v-text-field
                    v-model="contactForm.email"
                    :label="lang === 'fr' ? 'Courriel' : 'Email'"
                    variant="outlined"
                    hide-details
                    density="comfortable"
                    class="mt-3"
                  ></v-text-field>
                  <v-textarea
                    v-model="contactForm.message"
                    :label="lang === 'fr' ? 'Message' : 'Message'"
                    variant="outlined"
                    hide-details
                    rows="3"
                    density="comfortable"
                    class="mt-3"
                  ></v-textarea>
                  <v-btn block color="accent" class="mt-4" @click="submitContact" prepend-icon="mdi-send">
                    {{ lang === 'fr' ? 'Envoyer' : 'Send' }}
                  </v-btn>
                  <div class="text-caption text-medium-emphasis mt-2">{{ t.contact.messageNote }}</div>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </section>
    </v-main>

    <v-footer color="transparent" class="py-6">
      <v-container class="d-flex justify-space-between align-center flex-wrap ga-3">
        <div class="text-caption text-medium-emphasis">
          © {{ currentYear }} Industries P&M. {{ lang === 'fr' ? 'Jaguar par P&M.' : 'Jaguar by P&M.' }}
        </div>
        <div class="d-flex ga-4 align-center">
          <v-chip class="pill" color="rgba(247,241,230,0.2)" prepend-icon="mdi-map-marker">{{ t.footer.location }}</v-chip>
          <v-chip class="pill" color="rgba(247,241,230,0.2)" prepend-icon="mdi-shield-star">{{ t.footer.motto }}</v-chip>
        </div>
      </v-container>
    </v-footer>

    <v-snackbar v-model="snackbar" :timeout="3000" location="bottom right">
      {{ snackbarMessage }}
    </v-snackbar>
  </v-app>
</template>

<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import logo from './assets/Logo.png';
import navLogoAsset from './assets/Jaguar.png';
import patPhoto from './assets/Pat.png';
import martinPhoto from './assets/Martin.png';
import heroBackgroundAsset from './assets/Background.png';

const currentYear = computed(() => new Date().getFullYear());
const navLogo = navLogoAsset;

const translations = {
  fr: {
    brandTagline: 'Capital patient, portée Jaguar',
    nav: {
      strategy: 'Stratégie',
      sectors: 'Secteurs',
      founders: 'Fondateurs',
      contact: 'Planifier un échange',
    },
    favorites: {
      overline: 'Nos coups de coeur',
      title: 'Suivi en direct',
      subtitle: 'Cours en quasi temps réel (démo locale).',
      labels: { price: 'Cours', change: 'Var.' },
      tickers: [
        { symbol: 'BTQ.NE', name: 'BTQ', exchange: 'NEO', price: 12.45, change: 0.18 },
        { symbol: 'CLTE.CN', name: 'CLTE', exchange: 'NEO', price: 7.32, change: -0.05 },
        { symbol: 'QBTQ.CN', name: 'SuperQ Quantum Computing Inc.', exchange: 'CSE', price: 3.21, change: 0.04 },
      ],
    },
    hero: {
      chip: 'Investissements privés, capital public, actifs réels',
      title: "Bâtir du rendement durable avec l'instinct du jaguar.",
      badge: 'Portefeuille actif',
      body:
        'Industries P&M déploie un capital patient dans des startups audacieuses, des actions canadiennes résilientes et des terrains stratégiques. Nous combinons analyse fondamentale, discipline opérationnelle et flair terrain.',
      ctaPrimary: 'Planifier un échange',
      ctaSecondary: 'Découvrir notre thèse',
      pills: ['Diligence serrée', 'Croissance disciplinée', 'Ancrage canadien'],
      thesisTitle: 'Thèse P&M',
      thesisBody: 'Trois piliers : innovation opérée, stabilité des flux canadiens et valeur foncière long terme.',
      startups: { title: 'Startups ciblées', detail: 'Seed à Série A, alignement opérateur.' },
      equities: { title: 'Actions canadiennes', detail: 'Valeur + dividendes, gouvernance stricte.' },
      land: { title: 'Terrains stratégiques', detail: 'Corridors logistiques & urbains.' },
      horizon: 'Horizon de 5-10 ans, revues trimestrielles.',
    },
    strategy: {
      overline: "Cadre d'investissement",
      title: 'Notre méthode P&M',
      summaryCta: 'Résumé PDF (bientôt)',
      cards: [
        { iconColor: 'secondary', icon: 'mdi-radar', title: 'Veille ciblée', detail: 'Sourcing direct auprès des fondateurs, investisseurs canadiens et opérateurs de terrain.' },
        { iconColor: 'primary', icon: 'mdi-finance', title: 'Analyse fondamentale', detail: 'Modélisation prudente, scénarios stressés et suivi mensuel des métriques opératoires.' },
        { iconColor: 'accent', icon: 'mdi-handshake', title: 'Création de valeur', detail: 'Accès réseau, structuration de deals, soutien gouvernance et co-investissements.' },
      ],
    },
    sectors: {
      overline: "Axes d'investissement",
      title: 'Là où nous déployons le capital',
      items: [
        {
          title: 'Startups',
          tag: 'Venture',
          tagColor: 'primary',
          body: 'Produits B2B, climat et automation. Tickets flexibles, gouvernance active, accompagnement GTM.',
          heading: 'Exemples',
          bullets: ['Infra logicielle (observabilité, identité)', 'Énergie distribuée, stockage', 'Robots de terrain et capteurs industriels'],
        },
        {
          title: 'Actions canadiennes',
          tag: 'Public',
          tagColor: 'secondary',
          body: 'Valeur contrariante, dividendes croissants, entreprises à bilan discipliné.',
          heading: 'Filtres',
          bullets: ['Flux de trésorerie prévisibles', 'Management aligné et transparent', 'Positionnement durable sur le marché canadien'],
        },
        {
          title: 'Achat de terrain',
          tag: 'Actifs réels',
          tagColor: 'accent',
          body: 'Corridors logistiques, friches urbaines et zones de renouvellement à long terme.',
          heading: 'Approche',
          bullets: ['Due diligence locale et environnementale', 'Montage partenarial avec municipalités', 'Valorisation par plan directeur et usage mixte'],
        },
      ],
    },
    portfolio: {
      overline: 'Études de cas',
      title: 'Portefeuille en mouvement',
      chip: 'Mises à jour trimestrielles',
      cases: [
        {
          title: 'NorthPeak Robotics',
          tag: 'Venture',
          color: 'primary',
          description: 'Robots mobiles pour entrepôts nordiques, Série A.',
          impact: 'Cycle de production réduit de 18%, pipeline de distribution national.',
        },
        {
          title: 'Atlas Énergie',
          tag: 'Public',
          color: 'secondary',
          description: 'Producteur d’énergie hybride, dividendes croissants.',
          impact: 'Free cash-flow +22% YoY, gouvernance renforcée.',
        },
        {
          title: 'Corridor Est',
          tag: 'Foncier',
          color: 'accent',
          description: 'Acquisition de terrain logistique près d’un axe ferroviaire.',
          impact: 'Valorisation projetée x2 après plan directeur et partenariats.',
        },
      ],
    },
    founders: {
      overline: 'Équipe',
      title: 'Les propriétaires',
      items: [
        {
          name: 'Patrick Dumas',
          title: 'Cofondateur, Opérations',
          focus: 'Opérations',
          initials: 'PD',
          bio: 'Ancien opérateur industriel, Patrick pilote la due diligence et l’exécution opérationnelle.',
          photo: patPhoto,
          pills: ['Optimisation terrain', 'Gouvernance', 'Opérations'],
        },
        {
          name: 'Martin Ouimet',
          title: 'Cofondateur, Capital',
          focus: 'Capital',
          initials: 'MO',
          bio: 'Investisseur public/privé, Martin dirige l’allocation et la structuration financière.',
          photo: martinPhoto,
          pills: ['Analyse fondamentale', 'Stratégie capital', 'Relations LP'],
        },
      ],
    },
    process: {
      overline: 'Décision',
      title: 'Un processus clair',
      steps: [
        { order: '01', title: 'Pré-lecture', detail: 'Note de 2 pages reçue, premier échange de 30 minutes.' },
        { order: '02', title: 'Diligence', detail: 'Analyse modèle, références clients, revue ESG et gouvernance.' },
        { order: '03', title: 'Term sheet', detail: 'Structuration alignée opérateur : milestones et soutien actif.' },
        { order: '04', title: 'Suivi', detail: 'Tableaux de bord mensuels, revues trimestrielles, aide GTM.' },
      ],
    },
    contact: {
      overline: 'Contact',
      title: 'Prêt à discuter?',
      body: 'Présentez votre projet, un terrain ou une thèse publique. Nous répondons sous 48h.',
      emailLabel: 'contact@pm-industries.ca',
      phoneLabel: '+1 (514) 555-0199',
      formTitle: 'Envoyer une note rapide',
      messageNote: '*Démo : ce bouton montre un toast',
      toast: (name) => `Merci ${name || 'pour votre note'} ! Nous revenons vers vous rapidement.`,
    },
    footer: {
      location: 'Montréal, QC',
      motto: 'Rigueur & transparence',
    },
  },
  en: {
    brandTagline: 'Patient capital, jaguar reach',
    nav: {
      strategy: 'Strategy',
      sectors: 'Sectors',
      founders: 'Founders',
      contact: 'Book a call',
    },
    favorites: {
      overline: 'Our favorites',
      title: 'Live watchlist',
      subtitle: 'Prices in near real-time (local demo).',
      labels: { price: 'Price', change: 'Chg.' },
      tickers: [
        { symbol: 'BTQ.NE', name: 'BTQ', exchange: 'NEO', price: 12.45, change: 0.18 },
        { symbol: 'CLTE.CN', name: 'CLTE', exchange: 'CSE', price: 7.32, change: -0.05 },
        { symbol: 'QBTQ.CN', name: 'SuperQ Quantum Computing Inc.', exchange: 'CSE', price: 3.21, change: 0.04 },
      ],
    },
    hero: {
      chip: 'Private investments, public capital, real assets',
      title: 'Building durable returns with the jaguar instinct.',
      badge: 'Active portfolio',
      body:
        'Industries P&M deploys patient capital into bold startups, resilient Canadian equities, and strategic land. We pair fundamental analysis with operational discipline and on-the-ground insight.',
      ctaPrimary: 'Book a call',
      ctaSecondary: 'Explore our thesis',
      pills: ['Tight diligence', 'Disciplined growth', 'Canadian roots'],
      thesisTitle: 'P&M Thesis',
      thesisBody: 'Three pillars: operated innovation, stable Canadian cash flows, and long-term land value.',
      startups: { title: 'Targeted startups', detail: 'Seed to Series A with operator alignment.' },
      equities: { title: 'Canadian equities', detail: 'Value + dividends, strict governance.' },
      land: { title: 'Strategic land', detail: 'Logistics corridors & urban zones.' },
      horizon: '5–10 year horizon, quarterly reviews.',
    },
    strategy: {
      overline: 'Investment framework',
      title: 'The P&M method',
      summaryCta: 'One-pager (soon)',
      cards: [
        { iconColor: 'secondary', icon: 'mdi-radar', title: 'Focused sourcing', detail: 'Direct deal flow with founders, Canadian investors, and operators on the ground.' },
        { iconColor: 'primary', icon: 'mdi-finance', title: 'Fundamental analysis', detail: 'Prudent models, stress scenarios, and monthly operating metric follow-up.' },
        { iconColor: 'accent', icon: 'mdi-handshake', title: 'Value creation', detail: 'Network access, deal structuring, governance support, and co-investments.' },
      ],
    },
    sectors: {
      overline: 'Investment axes',
      title: 'Where we deploy capital',
      items: [
        {
          title: 'Startups',
          tag: 'Venture',
          tagColor: 'primary',
          body: 'B2B products, climate, and automation. Flexible tickets, active governance, GTM support.',
          heading: 'Examples',
          bullets: ['Software infra (observability, identity)', 'Distributed energy and storage', 'Field robotics and industrial sensors'],
        },
        {
          title: 'Canadian equities',
          tag: 'Public',
          tagColor: 'secondary',
          body: 'Contrarian value, rising dividends, disciplined balance sheets.',
          heading: 'Filters',
          bullets: ['Predictable cash flows', 'Aligned, transparent management', 'Durable position in the Canadian market'],
        },
        {
          title: 'Land acquisitions',
          tag: 'Real assets',
          tagColor: 'accent',
          body: 'Logistics corridors, urban brownfields, and long-term renewal zones.',
          heading: 'Approach',
          bullets: ['Local and environmental diligence', 'Partnership structures with municipalities', 'Value via master plan and mixed use'],
        },
      ],
    },
    portfolio: {
      overline: 'Case studies',
      title: 'Portfolio in motion',
      chip: 'Quarterly updates',
      cases: [
        {
          title: 'NorthPeak Robotics',
          tag: 'Venture',
          color: 'primary',
          description: 'Mobile robots for northern warehouses, Series A.',
          impact: 'Production cycle down 18%, national distribution pipeline.',
        },
        {
          title: 'Atlas Energy',
          tag: 'Public',
          color: 'secondary',
          description: 'Hybrid power producer with growing dividends.',
          impact: 'Free cash flow +22% YoY, strengthened governance.',
        },
        {
          title: 'Corridor East',
          tag: 'Real assets',
          color: 'accent',
          description: 'Logistics land acquisition near a rail corridor.',
          impact: 'Projected 2x value after master plan and partnerships.',
        },
      ],
    },
    founders: {
      overline: 'Team',
      title: 'The owners',
      items: [
        {
          name: 'Patrick Dumas',
          title: 'Co-founder, Operations',
          focus: 'Operations',
          initials: 'PD',
          bio: 'Former industrial operator; Patrick drives diligence and operational execution.',
          photo: patPhoto,
          pills: ['Field optimization', 'Governance', 'Operations'],
        },
        {
          name: 'Martin Ouimet',
          title: 'Co-founder, Capital',
          focus: 'Capital',
          initials: 'MO',
          bio: 'Public/private investor; Martin leads allocation and financial structuring.',
          photo: martinPhoto,
          pills: ['Fundamental analysis', 'Capital strategy', 'LP relations'],
        },
      ],
    },
    process: {
      overline: 'Decisions',
      title: 'A clear process',
      steps: [
        { order: '01', title: 'Pre-read', detail: 'Two-pager received, first 30-minute conversation.' },
        { order: '02', title: 'Diligence', detail: 'Model analysis, customer references, ESG and governance review.' },
        { order: '03', title: 'Term sheet', detail: 'Operator-aligned structure: milestones and active support.' },
        { order: '04', title: 'Follow-up', detail: 'Monthly dashboards, quarterly reviews, GTM help.' },
      ],
    },
    contact: {
      overline: 'Contact',
      title: 'Ready to talk?',
      body: 'Share your project, a land opportunity, or a public thesis. We respond within 48h.',
      emailLabel: 'contact@pm-industries.ca',
      phoneLabel: '+1 (514) 555-0199',
      formTitle: 'Send a quick note',
      messageNote: '*Demo: this button shows a toast',
      toast: (name) => `Thanks ${name || 'for your note'}! We’ll get back to you shortly.`,
    },
    footer: {
      location: 'Montreal, QC',
      motto: 'Rigor & transparency',
    },
  },
};

const lang = ref('fr');
const t = computed(() => translations[lang.value]);

const cases = computed(() => t.value.portfolio.cases);
const founders = computed(() => t.value.founders.items);
const process = computed(() => t.value.process.steps);
const navLinks = computed(() => [
  { label: t.value.nav.strategy, href: '#strategie' },
  { label: t.value.nav.sectors, href: '#secteurs' },
  { label: t.value.nav.founders, href: '#fondateurs' },
]);
const navDrawer = ref(false);
const liveTickers = ref(t.value.favorites.tickers.map((tk) => ({ ...tk })));
const tickerStatus = ref('');

const contactForm = ref({
  name: '',
  email: '',
  message: '',
});

const snackbar = ref(false);
const snackbarMessage = ref('');
const heroBackground = heroBackgroundAsset;
const switchLang = (value) => {
  lang.value = value;
};

const YAHOO_PROXY = import.meta.env.VITE_YAHOO_PROXY_URL || '/api/yahoo';
const useLiveApi = ref(true);
const LIVE_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes pour limiter les 429
const updateTickersFromTranslations = (next) => {
  liveTickers.value = next.favorites.tickers.map((tk, idx) => ({
    ...tk,
    price: liveTickers.value[idx]?.price ?? tk.price,
    change: liveTickers.value[idx]?.change ?? tk.change,
  }));
};

watch(t, (next) => {
  updateTickersFromTranslations(next);
});

let tickerTimer;
let hasFallenBack = false;
const jiggleQuotes = () => {
  liveTickers.value = liveTickers.value.map((tk) => {
    const delta = (Math.random() - 0.5) * 0.08;
    const nextPrice = Math.max(0, tk.price + delta);
    const change = nextPrice - tk.price;
    return { ...tk, price: Number(nextPrice.toFixed(2)), change: Number((tk.change + change).toFixed(2)) };
  });
};

const parseChange = (rawChange, rawPercent) => {
  if (typeof rawChange === 'number' && !Number.isNaN(rawChange)) return rawChange;
  if (typeof rawChange === 'string') {
    const n = Number(rawChange);
    if (!Number.isNaN(n)) return n;
  }
  if (typeof rawPercent === 'string' && rawPercent.endsWith('%')) {
    const pct = Number(rawPercent.replace('%', ''));
    if (!Number.isNaN(pct)) return pct / 100;
  }
  return 0;
};

const fetchQuotes = async () => {
  const symbols = liveTickers.value.map((tk) => tk.symbol).join(',');
  const baseUrl = YAHOO_PROXY && YAHOO_PROXY !== ''
    ? `${YAHOO_PROXY}${YAHOO_PROXY.includes('?') ? '&' : '?'}symbols=${encodeURIComponent(symbols)}`
    : `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${encodeURIComponent(symbols)}`;
  const targetUrl = baseUrl;
  try {
    const res = await fetch(targetUrl);
    const json = await res.json();
    const results = json.quoteResponse?.result;
    if (!results || !Array.isArray(results) || results.length === 0) {
      throw new Error('Réponse Yahoo vide ou invalide');
    }
    const updated = liveTickers.value.map((tk) => {
      const match = results.find((r) => r.symbol?.toUpperCase() === tk.symbol.toUpperCase());
      if (!match) return tk;
      const price = Number(match.regularMarketPrice);
      const changeVal = Number(match.regularMarketChange ?? 0);
      return {
        ...tk,
        price: Number.isNaN(price) ? tk.price : Number(price.toFixed(2)),
        change: Number.isNaN(changeVal) ? tk.change : Number(changeVal.toFixed(2)),
      };
    });
    liveTickers.value = updated;
    tickerStatus.value = '';
  } catch (err) {
    console.warn('Yahoo fetch failed', err);
    hasFallenBack = true;
    tickerStatus.value = YAHOO_PROXY
      ? 'Flux Yahoo indisponible (429 ou erreur proxy). Mode démo pour éviter le blocage.'
      : 'Flux Yahoo nécessite un proxy sans CORS (VITE_YAHOO_PROXY_URL ou /api/yahoo en dev). Mode démo.';
    useLiveApi.value = false;
  }
};

const startTickerLoop = () => {
  if (tickerTimer) clearInterval(tickerTimer);
  if (useLiveApi.value) {
    tickerStatus.value = '';
    fetchQuotes();
    tickerTimer = setInterval(fetchQuotes, LIVE_INTERVAL_MS);
  } else {
    tickerStatus.value = hasFallenBack
      ? 'Mode démo : flux marché indisponible, simulation locale.'
      : 'Mode démo local (ajoutez un proxy VITE_YAHOO_PROXY_URL pour activer Yahoo Finance).';
    tickerTimer = setInterval(jiggleQuotes, 5_000);
  }
};

onMounted(() => {
  startTickerLoop();
});

onBeforeUnmount(() => {
  if (tickerTimer) clearInterval(tickerTimer);
});

const submitContact = () => {
  const messageBuilder = t.value.contact.toast;
  snackbarMessage.value = messageBuilder(contactForm.value.name);
  snackbar.value = true;
};
</script>
