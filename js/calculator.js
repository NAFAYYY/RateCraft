
/**
 * RateCraft - Freelance Pricing & Hourly Rate Calculator
 * 100% Client-Side Engine (Zero Server / Zero API Cost)
 */

(function () {
  'use strict';

  // State Management
  const currentRole = document.body.dataset.role || 'general';

  const rolePresets = {
    general: {
      starter: { salary: 45000, expenses: 6000, taxRate: 20, vacationWeeks: 3, sickDays: 7, hoursPerWeek: 40, billablePercent: 55, profitMargin: 15 },
      mid: { salary: 75000, expenses: 12000, taxRate: 25, vacationWeeks: 4, sickDays: 10, hoursPerWeek: 40, billablePercent: 60, profitMargin: 20 },
      senior: { salary: 125000, expenses: 20000, taxRate: 30, vacationWeeks: 6, sickDays: 12, hoursPerWeek: 35, billablePercent: 65, profitMargin: 25 },
      agency: { salary: 180000, expenses: 36000, taxRate: 35, vacationWeeks: 6, sickDays: 14, hoursPerWeek: 40, billablePercent: 70, profitMargin: 30 }
    },
    developer: {
      frontend: { salary: 75000, expenses: 12000, taxRate: 25, vacationWeeks: 4, sickDays: 10, hoursPerWeek: 40, billablePercent: 60, profitMargin: 20 },
      backend: { salary: 95000, expenses: 15000, taxRate: 28, vacationWeeks: 4, sickDays: 10, hoursPerWeek: 40, billablePercent: 60, profitMargin: 20 },
      fullstack: { salary: 120000, expenses: 18000, taxRate: 30, vacationWeeks: 5, sickDays: 12, hoursPerWeek: 38, billablePercent: 65, profitMargin: 25 },
      lead: { salary: 165000, expenses: 24000, taxRate: 33, vacationWeeks: 6, sickDays: 14, hoursPerWeek: 35, billablePercent: 65, profitMargin: 30 }
    },
    designer: {
      junior: { salary: 50000, expenses: 8000, taxRate: 22, vacationWeeks: 3, sickDays: 8, hoursPerWeek: 40, billablePercent: 55, profitMargin: 15 },
      uiux: { salary: 82000, expenses: 13000, taxRate: 26, vacationWeeks: 4, sickDays: 10, hoursPerWeek: 40, billablePercent: 60, profitMargin: 20 },
      senior: { salary: 115000, expenses: 17000, taxRate: 30, vacationWeeks: 5, sickDays: 12, hoursPerWeek: 36, billablePercent: 65, profitMargin: 25 },
      systems: { salary: 150000, expenses: 22000, taxRate: 32, vacationWeeks: 6, sickDays: 14, hoursPerWeek: 35, billablePercent: 65, profitMargin: 30 }
    },
    copywriter: {
      content: { salary: 48000, expenses: 6000, taxRate: 20, vacationWeeks: 3, sickDays: 8, hoursPerWeek: 40, billablePercent: 55, profitMargin: 15 },
      b2b: { salary: 72000, expenses: 9000, taxRate: 25, vacationWeeks: 4, sickDays: 10, hoursPerWeek: 40, billablePercent: 60, profitMargin: 20 },
      direct: { salary: 98000, expenses: 12000, taxRate: 28, vacationWeeks: 5, sickDays: 10, hoursPerWeek: 35, billablePercent: 60, profitMargin: 25 },
      strategist: { salary: 135000, expenses: 16000, taxRate: 30, vacationWeeks: 6, sickDays: 12, hoursPerWeek: 35, billablePercent: 65, profitMargin: 30 }
    },
    uk: {
      contractor: { salary: 65000, expenses: 8000, taxRate: 25, vacationWeeks: 5, sickDays: 8, hoursPerWeek: 40, billablePercent: 60, profitMargin: 20 },
      inside: { salary: 75000, expenses: 4000, taxRate: 35, vacationWeeks: 5, sickDays: 8, hoursPerWeek: 40, billablePercent: 65, profitMargin: 15 },
      outside: { salary: 95000, expenses: 12000, taxRate: 22, vacationWeeks: 6, sickDays: 10, hoursPerWeek: 40, billablePercent: 60, profitMargin: 25 },
      consultant: { salary: 130000, expenses: 16000, taxRate: 28, vacationWeeks: 6, sickDays: 10, hoursPerWeek: 35, billablePercent: 65, profitMargin: 30 }
    }
  };

  const defaultForRole = rolePresets[currentRole] ? (rolePresets[currentRole].contractor || rolePresets[currentRole].fullstack || rolePresets[currentRole].uiux || rolePresets[currentRole].b2b || rolePresets[currentRole].mid) : rolePresets.general.mid;

  const state = {
    currency: document.body.dataset.currency || (document.documentElement.lang === 'es' ? '€' : '$'),
    lang: document.documentElement.lang || 'en',
    salary: defaultForRole.salary,
    expenses: defaultForRole.expenses,
    taxRate: defaultForRole.taxRate,
    vacationWeeks: defaultForRole.vacationWeeks,
    sickDays: defaultForRole.sickDays,
    hoursPerWeek: defaultForRole.hoursPerWeek,
    billablePercent: defaultForRole.billablePercent,
    profitMargin: defaultForRole.profitMargin,
    projectHours: 30,
    projectBuffer: 15
  };

  // DOM Elements
  const elements = {
    // Inputs & Sliders
    salary: document.getElementById('input-salary'),
    salaryDisplay: document.getElementById('val-salary'),
    expenses: document.getElementById('input-expenses'),
    expensesDisplay: document.getElementById('val-expenses'),
    taxRate: document.getElementById('input-tax'),
    taxRateDisplay: document.getElementById('val-tax'),
    vacation: document.getElementById('input-vacation'),
    vacationDisplay: document.getElementById('val-vacation'),
    hoursPerWeek: document.getElementById('input-hours'),
    hoursDisplay: document.getElementById('val-hours'),
    billablePercent: document.getElementById('input-billable'),
    billableDisplay: document.getElementById('val-billable'),
    profitMargin: document.getElementById('input-profit'),
    profitDisplay: document.getElementById('val-profit'),
    currencySelect: document.getElementById('currency-select'),

    // Project Quote Inputs
    projectHours: document.getElementById('quote-hours'),
    projectHoursDisplay: document.getElementById('val-quote-hours'),
    projectBuffer: document.getElementById('quote-buffer'),
    projectBufferDisplay: document.getElementById('val-quote-buffer'),
    projectQuoteResult: document.getElementById('quote-total-price'),

    // Primary Results
    hourlyRate: document.getElementById('res-hourly-rate'),
    breakEvenRate: document.getElementById('res-breakeven-rate'),
    dayRate: document.getElementById('res-day-rate'),
    monthlyRetainer: document.getElementById('res-monthly-rate'),
    annualRevenue: document.getElementById('res-annual-revenue'),
    billableHoursTotal: document.getElementById('res-annual-hours'),

    // Breakdown Bar
    barIncome: document.getElementById('bar-income'),
    barTax: document.getElementById('bar-tax'),
    barExpenses: document.getElementById('bar-expenses'),
    barProfit: document.getElementById('bar-profit'),
    valIncomeBreakdown: document.getElementById('legend-income-val'),
    valTaxBreakdown: document.getElementById('legend-tax-val'),
    valExpensesBreakdown: document.getElementById('legend-expenses-val'),
    valProfitBreakdown: document.getElementById('legend-profit-val'),

    // Rate Card Elements
    rateCardTitle: document.getElementById('rc-currency-symbol'),
    rcHourly: document.getElementById('rc-hourly'),
    rcDay: document.getElementById('rc-day'),
    rcWeekly: document.getElementById('rc-weekly'),
    rcMonthly: document.getElementById('rc-monthly'),
    rcYearly: document.getElementById('rc-yearly')
  };

  // Formatting Helper
  function formatCurrency(amount) {
    const rounded = Math.round(amount);
    return state.currency + rounded.toLocaleString();
  }

  // Calculate All Metrics
  function calculate() {
    // 1. Time Calculations
    const totalWeeksInYear = 52;
    const workingWeeks = Math.max(1, totalWeeksInYear - state.vacationWeeks);
    const weeklyBillableHours = state.hoursPerWeek * (state.billablePercent / 100);
    const annualBillableHours = Math.max(10, Math.round(workingWeeks * weeklyBillableHours));

    // 2. Financial Calculations
    const targetTakeHome = state.salary;
    const annualExpenses = state.expenses;
    const taxDecimal = state.taxRate / 100;

    // Gross salary required before personal income tax
    // Formula: TakeHome = GrossSalary * (1 - TaxRate)  => GrossSalary = TakeHome / (1 - TaxRate)
    const effectiveGrossSalary = taxDecimal < 1 ? targetTakeHome / (1 - taxDecimal) : targetTakeHome * 2;
    const totalTaxes = effectiveGrossSalary - targetTakeHome;

    // Break-even total gross revenue (covers take-home, taxes, and operational expenses)
    const breakEvenRevenue = effectiveGrossSalary + annualExpenses;
    const breakEvenHourly = breakEvenRevenue / annualBillableHours;

    // Profit margin added for growth & reinvestment buffer
    const profitMarginDecimal = state.profitMargin / 100;
    const profitBuffer = breakEvenRevenue * profitMarginDecimal;
    const totalTargetRevenue = breakEvenRevenue + profitBuffer;

    // Final Rates
    const recommendedHourly = totalTargetRevenue / annualBillableHours;
    const dayRate = recommendedHourly * (state.hoursPerWeek / 5);
    const weeklyRetainer = recommendedHourly * weeklyBillableHours;
    const monthlyRetainer = totalTargetRevenue / 12;

    // Project Quote Calculation
    const baseProjectPrice = state.projectHours * recommendedHourly;
    const finalProjectQuote = baseProjectPrice * (1 + (state.projectBuffer / 100));

    // Update Output Displays
    if (elements.hourlyRate) elements.hourlyRate.textContent = formatCurrency(recommendedHourly);
    if (elements.breakEvenRate) elements.breakEvenRate.textContent = formatCurrency(breakEvenHourly);
    if (elements.dayRate) elements.dayRate.textContent = formatCurrency(dayRate);
    if (elements.monthlyRetainer) elements.monthlyRetainer.textContent = formatCurrency(monthlyRetainer);
    if (elements.annualRevenue) elements.annualRevenue.textContent = formatCurrency(totalTargetRevenue);
    if (elements.billableHoursTotal) elements.billableHoursTotal.textContent = annualBillableHours + ' hrs/yr';
    if (elements.projectQuoteResult) elements.projectQuoteResult.textContent = formatCurrency(finalProjectQuote);

    // Breakdown Visual Bar
    const pctIncome = (targetTakeHome / totalTargetRevenue) * 100;
    const pctTax = (totalTaxes / totalTargetRevenue) * 100;
    const pctExpenses = (annualExpenses / totalTargetRevenue) * 100;
    const pctProfit = (profitBuffer / totalTargetRevenue) * 100;

    if (elements.barIncome) elements.barIncome.style.width = `${pctIncome}%`;
    if (elements.barTax) elements.barTax.style.width = `${pctTax}%`;
    if (elements.barExpenses) elements.barExpenses.style.width = `${pctExpenses}%`;
    if (elements.barProfit) elements.barProfit.style.width = `${pctProfit}%`;

    if (elements.valIncomeBreakdown) elements.valIncomeBreakdown.textContent = `${formatCurrency(targetTakeHome)} (${Math.round(pctIncome)}%)`;
    if (elements.valTaxBreakdown) elements.valTaxBreakdown.textContent = `${formatCurrency(totalTaxes)} (${Math.round(pctTax)}%)`;
    if (elements.valExpensesBreakdown) elements.valExpensesBreakdown.textContent = `${formatCurrency(annualExpenses)} (${Math.round(pctExpenses)}%)`;
    if (elements.valProfitBreakdown) elements.valProfitBreakdown.textContent = `${formatCurrency(profitBuffer)} (${Math.round(pctProfit)}%)`;

    // Update Modal Rate Card Values
    const hrSuffix = state.lang === 'es' ? ' / hr' : ' / hr';
    const daySuffix = state.lang === 'es' ? ' / día' : ' / day';
    const wkSuffix = state.lang === 'es' ? (currentRole === 'developer' ? ' / sprint' : ' / sem') : (currentRole === 'developer' || currentRole === 'designer' ? ' / sprint' : ' / wk');
    const moSuffix = state.lang === 'es' ? ' / mes' : ' / mo';

    if (elements.rcHourly) elements.rcHourly.textContent = formatCurrency(recommendedHourly) + hrSuffix;
    if (elements.rcDay) elements.rcDay.textContent = formatCurrency(dayRate) + daySuffix;
    if (elements.rcWeekly) elements.rcWeekly.textContent = formatCurrency(weeklyRetainer) + wkSuffix;
    if (elements.rcMonthly) elements.rcMonthly.textContent = formatCurrency(monthlyRetainer) + moSuffix;
    if (elements.rcYearly) elements.rcYearly.textContent = formatCurrency(totalTargetRevenue) + (state.lang === 'es' ? ' / año' : ' / yr');
  }

  // Sync Input Elements with State
  function syncUIFromState() {
    if (elements.salary) elements.salary.value = state.salary;
    if (elements.salaryDisplay) elements.salaryDisplay.textContent = formatCurrency(state.salary);

    if (elements.expenses) elements.expenses.value = state.expenses;
    if (elements.expensesDisplay) elements.expensesDisplay.textContent = formatCurrency(state.expenses);

    if (elements.taxRate) elements.taxRate.value = state.taxRate;
    if (elements.taxRateDisplay) elements.taxRateDisplay.textContent = `${state.taxRate}%`;

    if (elements.vacation) elements.vacation.value = state.vacationWeeks;
    if (elements.vacationDisplay) elements.vacationDisplay.textContent = `${state.vacationWeeks} wks`;

    if (elements.hoursPerWeek) elements.hoursPerWeek.value = state.hoursPerWeek;
    if (elements.hoursDisplay) elements.hoursDisplay.textContent = `${state.hoursPerWeek} hrs`;

    if (elements.billablePercent) elements.billablePercent.value = state.billablePercent;
    if (elements.billableDisplay) elements.billableDisplay.textContent = `${state.billablePercent}%`;

    if (elements.profitMargin) elements.profitMargin.value = state.profitMargin;
    if (elements.profitDisplay) elements.profitDisplay.textContent = `${state.profitMargin}%`;

    if (elements.projectHours) elements.projectHours.value = state.projectHours;
    if (elements.projectHoursDisplay) elements.projectHoursDisplay.textContent = `${state.projectHours} hrs`;

    if (elements.projectBuffer) elements.projectBuffer.value = state.projectBuffer;
    if (elements.projectBufferDisplay) elements.projectBufferDisplay.textContent = `+${state.projectBuffer}%`;

    calculate();
  }

  // Generate clean shareable URL with parameters on demand
  function getShareableUrl() {
    const params = new URLSearchParams({
      cur: state.currency,
      sal: state.salary,
      exp: state.expenses,
      tax: state.taxRate,
      vac: state.vacationWeeks,
      hrs: state.hoursPerWeek,
      bil: state.billablePercent,
      prf: state.profitMargin
    });
    return window.location.origin + window.location.pathname + '#' + params.toString();
  }

  function loadFromUrlHash() {
    if (!window.location.hash || window.location.hash.length <= 1) return;
    try {
      const params = new URLSearchParams(window.location.hash.substring(1));
      if (params.has('cur')) state.currency = params.get('cur');
      if (params.has('sal')) state.salary = Number(params.get('sal'));
      if (params.has('exp')) state.expenses = Number(params.get('exp'));
      if (params.has('tax')) state.taxRate = Number(params.get('tax'));
      if (params.has('vac')) state.vacationWeeks = Number(params.get('vac'));
      if (params.has('hrs')) state.hoursPerWeek = Number(params.get('hrs'));
      if (params.has('bil')) state.billablePercent = Number(params.get('bil'));
      if (params.has('prf')) state.profitMargin = Number(params.get('prf'));

      if (elements.currencySelect) elements.currencySelect.value = state.currency;

      // Clean address bar so the URL remains short and uncluttered
      window.history.replaceState(null, '', window.location.pathname);
    } catch (e) {
      console.error('Failed to parse URL hash', e);
    }
  }

  // Toast Notification
  function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }

  // Event Listeners
  function attachListeners() {
    // Inputs
    const bindInput = (el, prop, displayEl, suffix = '', isCurrency = false) => {
      if (!el) return;
      el.addEventListener('input', (e) => {
        state[prop] = Number(e.target.value);
        if (displayEl) {
          displayEl.textContent = isCurrency ? formatCurrency(state[prop]) : `${state[prop]}${suffix}`;
        }
        calculate();
      });
    };

    bindInput(elements.salary, 'salary', elements.salaryDisplay, '', true);
    bindInput(elements.expenses, 'expenses', elements.expensesDisplay, '', true);
    bindInput(elements.taxRate, 'taxRate', elements.taxRateDisplay, '%');
    bindInput(elements.vacation, 'vacationWeeks', elements.vacationDisplay, ' wks');
    bindInput(elements.hoursPerWeek, 'hoursPerWeek', elements.hoursDisplay, ' hrs');
    bindInput(elements.billablePercent, 'billablePercent', elements.billableDisplay, '%');
    bindInput(elements.profitMargin, 'profitMargin', elements.profitDisplay, '%');

    bindInput(elements.projectHours, 'projectHours', elements.projectHoursDisplay, ' hrs');
    bindInput(elements.projectBuffer, 'projectBuffer', elements.projectBufferDisplay, '%');

    // Currency Switcher
    if (elements.currencySelect) {
      elements.currencySelect.addEventListener('change', (e) => {
        state.currency = e.target.value;
        syncUIFromState();
      });
    }

    // Presets
    document.querySelectorAll('.preset-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const presetKey = btn.dataset.preset;
        const activePresets = rolePresets[currentRole] || rolePresets.general;
        if (activePresets[presetKey]) {
          document.querySelectorAll('.preset-btn').forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          Object.assign(state, activePresets[presetKey]);
          syncUIFromState();
          showToast(state.lang === 'es' ? 'Preajuste aplicado con éxito' : 'Preset applied successfully');
        }
      });
    });

    // Share Button
    const shareBtn = document.getElementById('btn-share');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        const url = getShareableUrl();
        navigator.clipboard.writeText(url).then(() => {
          showToast(state.lang === 'es' ? '¡Enlace de cálculo copiado!' : 'Calculation link copied to clipboard!');
        });
      });
    }

    // Embed Modal
    const embedBtn = document.getElementById('btn-embed');
    const embedModal = document.getElementById('modal-embed');
    const closeEmbed = document.getElementById('close-embed');
    const copyEmbedBtn = document.getElementById('btn-copy-embed');

    if (embedBtn && embedModal) {
      embedBtn.addEventListener('click', () => embedModal.classList.add('active'));
    }
    if (closeEmbed && embedModal) {
      closeEmbed.addEventListener('click', () => embedModal.classList.remove('active'));
    }
    if (copyEmbedBtn) {
      copyEmbedBtn.addEventListener('click', () => {
        const code = document.getElementById('embed-code').textContent;
        navigator.clipboard.writeText(code).then(() => {
          showToast(state.lang === 'es' ? 'Código copiado al portapapeles' : 'Embed code copied to clipboard!');
        });
      });
    }

    // Direct High-Resolution Rate Card PNG Downloader
    function downloadRateCardImage() {
      const card = document.getElementById('printable-rate-card');
      if (!card) return;

      const scale = 2; // High-DPI Retina
      const width = 840;
      const height = 560;

      const canvas = document.createElement('canvas');
      canvas.width = width * scale;
      canvas.height = height * scale;
      const ctx = canvas.getContext('2d');
      ctx.scale(scale, scale);

      // Helper: Rounded Rectangle
      function drawRoundRect(x, y, w, h, radius, fill, stroke, strokeColor) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + w - radius, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
        ctx.lineTo(x + w, y + h - radius);
        ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
        ctx.lineTo(x + radius, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        if (fill) ctx.fill();
        if (stroke) {
          ctx.strokeStyle = strokeColor || '#1e293b';
          ctx.stroke();
        }
      }

      // Outer Background - Obsidian Slate
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#0a0f1d');
      bgGrad.addColorStop(1, '#0f172a');
      ctx.fillStyle = bgGrad;
      drawRoundRect(0, 0, width, height, 20, true, true, '#1e293b');

      // Subtle Emerald Ambient Glow at top right
      const glowGrad = ctx.createRadialGradient(width - 60, 40, 10, width - 60, 40, 260);
      glowGrad.addColorStop(0, 'rgba(16, 185, 129, 0.12)');
      glowGrad.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = glowGrad;
      drawRoundRect(0, 0, width, height, 20, true, false);

      // Brand Header Bar
      // Emerald Dot
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(44, 46, 6, 0, Math.PI * 2);
      ctx.fill();

      // Brand Logo Name
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('RateCraft', 60, 52);

      // Badge Pill at top right
      const badgeText = state.lang === 'es' ? 'TARIFARIO OFICIAL 2026' : 'OFFICIAL 2026 SCHEDULE';
      ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      const badgeWidth = ctx.measureText(badgeText).width + 20;
      ctx.fillStyle = '#1e293b';
      drawRoundRect(width - 44 - badgeWidth, 34, badgeWidth, 26, 6, true, true, '#334155');
      ctx.fillStyle = '#94a3b8';
      ctx.textAlign = 'center';
      ctx.fillText(badgeText, width - 44 - (badgeWidth / 2), 51);

      // Divider Line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(44, 74);
      ctx.lineTo(width - 44, 74);
      ctx.stroke();

      // Title
      const titleEl = card.querySelector('h3');
      const title = titleEl ? titleEl.textContent.trim() : 'Professional Rate Card';
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(title, 44, 116);

      // Subtitle
      const subtitleEl = card.querySelector('.card-subtitle');
      const subtitle = subtitleEl ? subtitleEl.textContent.trim() : 'Official Consulting & Commercial Rates • 2026';
      ctx.fillStyle = '#94a3b8';
      ctx.font = '500 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText(subtitle, 44, 140);

      // Table Rows
      const rows = card.querySelectorAll('.rate-card-table tr');
      let startY = 175;
      const rowHeight = 64;

      rows.forEach((tr, idx) => {
        const y = startY + (idx * rowHeight);
        const labelEl = tr.querySelector('td:first-child');
        const valEl = tr.querySelector('td.strong-val');

        let label = '';
        let subDesc = '';
        if (labelEl) {
          const labelSpan = labelEl.querySelector('.rate-label');
          const descSpan = labelEl.querySelector('.rate-desc');
          if (labelSpan) {
            label = labelSpan.textContent.trim();
          } else {
            const clone = labelEl.cloneNode(true);
            const d = clone.querySelector('.rate-desc');
            if (d) d.remove();
            label = clone.textContent.trim();
          }
          if (descSpan) subDesc = descSpan.textContent.trim();
        }
        const val = valEl ? valEl.textContent.trim() : '';

        // Row Card Background
        ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
        drawRoundRect(44, y, width - 88, 52, 10, true, true, 'rgba(255, 255, 255, 0.07)');

        // Label
        ctx.fillStyle = '#f1f5f9';
        ctx.font = '600 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(label, 62, y + (subDesc ? 24 : 31));

        // Optional Sub-description
        if (subDesc) {
          ctx.fillStyle = '#64748b';
          ctx.font = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
          ctx.fillText(subDesc, 62, y + 40);
        }

        // Value in Bright Emerald
        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(val, width - 64, y + 32);
      });

      // Bottom Divider
      const footerY = height - 60;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(44, footerY);
      ctx.lineTo(width - 44, footerY);
      ctx.stroke();

      // Disclaimer & Meta Footer
      ctx.fillStyle = '#64748b';
      ctx.font = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'left';
      const disclaimer = state.lang === 'es'
        ? '* Tarifas oficiales para servicios directos. Proyectos cerrados presupuestados por alcance.'
        : '* Standard commercial rates. Fixed deliverables & rush deadlines quoted separately.';
      ctx.fillText(disclaimer, 44, footerY + 30);

      ctx.textAlign = 'right';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('ratecraft.app • Ref: RC-2026-VAL', width - 44, footerY + 30);

      // Instant Direct Binary Blob Download
      const roleCapitalized = currentRole
        ? currentRole.charAt(0).toUpperCase() + currentRole.slice(1).toLowerCase()
        : 'Freelance';
      const filename = `RateCraft-${roleCapitalized}-RateCard-2026.png`;

      function triggerDownloadWithBlob(blob) {
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.style.display = 'none';
        link.href = blobUrl;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          if (link.parentNode) link.parentNode.removeChild(link);
          URL.revokeObjectURL(blobUrl);
        }, 1000);
        showToast(state.lang === 'es' ? '¡Tarjeta descargada con éxito!' : 'Rate card downloaded successfully!');
      }

      if (canvas.toBlob) {
        canvas.toBlob((blob) => {
          if (blob) {
            triggerDownloadWithBlob(blob);
          } else {
            fallbackDataUriToBlob();
          }
        }, 'image/png');
      } else {
        fallbackDataUriToBlob();
      }

      function fallbackDataUriToBlob() {
        try {
          const dataUrl = canvas.toDataURL('image/png');
          const byteString = atob(dataUrl.split(',')[1]);
          const ab = new ArrayBuffer(byteString.length);
          const ia = new Uint8Array(ab);
          for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }
          const blob = new Blob([ab], { type: 'image/png' });
          triggerDownloadWithBlob(blob);
        } catch (e) {
          console.error('Blob conversion failed', e);
        }
      }
    }

    // Rate Card Modal, Print & Direct Download
    function setupRateCardEvents() {
      const rateCardBtn = document.getElementById('btn-rate-card');
      const rateCardModal = document.getElementById('modal-rate-card');
      const closeRateCard = document.getElementById('close-rate-card');
      const printCardBtn = document.getElementById('btn-print-card');
      const downloadCardBtn = document.getElementById('btn-download-card');

      if (rateCardBtn && rateCardModal) {
        rateCardBtn.addEventListener('click', () => rateCardModal.classList.add('active'));
      }
      if (closeRateCard && rateCardModal) {
        closeRateCard.addEventListener('click', () => rateCardModal.classList.remove('active'));
      }
      if (printCardBtn) {
        printCardBtn.addEventListener('click', () => window.print());
      }
      if (downloadCardBtn) {
        downloadCardBtn.addEventListener('click', downloadRateCardImage);
      }
    }
    setupRateCardEvents();

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('active');
      });
    });

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach((modal) => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    });
  }

  // Initialization
  function init() {
    if (elements.currencySelect) {
      state.currency = elements.currencySelect.value;
    }
    if (state.lang === 'es' && (!window.location.hash || window.location.hash.length <= 1)) {
      state.salary = 45000;
      state.expenses = 8000;
      state.taxRate = 25;
    }
    loadFromUrlHash();
    attachListeners();
    syncUIFromState();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
