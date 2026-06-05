// HB Locações - Landing Page JavaScript
// Versão: 1.0.0 - Otimizada para Produção

(function() {
  'use strict';

  // Configurações
  const CONFIG = {
    whatsappPhone: '5531982844756',
    whatsappMessage: 'Olá, vim pelo anúncio e gostaria de um orçamento para locação de máquinas. Possuo o cupom HBLOC-205',
    couponCode: 'HBLOC-205',
    toastDuration: 3000
  };

  // Elementos do DOM
  let mobileMenuBtn = null;
  let mobileMenu = null;
  let copyCouponBtn = null;
  let ctaButtons = null;

  // Estado
  let state = {
    mobileMenuOpen: false,
    couponCopied: false
  };

  // Inicialização
  function init() {
    cacheDOM();
    bindEvents();
    setupScrollBehavior();
    setupLazyLoading();
  }

  // Cache de elementos do DOM
  function cacheDOM() {
    mobileMenuBtn = document.querySelector('[data-mobile-menu-btn]');
    mobileMenu = document.querySelector('[data-mobile-menu]');
    copyCouponBtn = document.querySelector('[data-copy-coupon]');
    ctaButtons = document.querySelectorAll('[data-cta-button]');
  }

  // Bind de eventos
  function bindEvents() {
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    if (copyCouponBtn) {
      copyCouponBtn.addEventListener('click', copyCoupon);
    }

    if (ctaButtons) {
      ctaButtons.forEach(btn => {
        btn.addEventListener('click', handleCTAClick);
      });
    }

    // Fechar menu mobile ao clicar em links
    document.addEventListener('click', function(e) {
      if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        if (state.mobileMenuOpen) {
          toggleMobileMenu();
        }
      }
    });
  }

  // Toggle menu mobile
  function toggleMobileMenu() {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    if (mobileMenu) {
      mobileMenu.style.display = state.mobileMenuOpen ? 'flex' : 'none';
    }
  }

  // Copiar cupom
  function copyCoupon() {
    navigator.clipboard.writeText(CONFIG.couponCode).then(() => {
      showToast('Cupom copiado com sucesso! Use no WhatsApp para obter seu desconto.', 'success');
      state.couponCopied = true;
      
      if (copyCouponBtn) {
        const originalText = copyCouponBtn.textContent;
        copyCouponBtn.textContent = '✓ Copiado!';
        setTimeout(() => {
          copyCouponBtn.textContent = originalText;
          state.couponCopied = false;
        }, CONFIG.toastDuration);
      }
    }).catch(() => {
      showToast('Erro ao copiar cupom. Tente novamente.', 'error');
    });
  }

  // Handle CTA Click
  function handleCTAClick(e) {
    e.preventDefault();
    openWhatsApp();
  }

  // Abrir WhatsApp
  function openWhatsApp() {
    const encodedMessage = encodeURIComponent(CONFIG.whatsappMessage);
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }

  // Toast notification
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: ${type === 'success' ? '#22c55e' : '#ef4444'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 4px;
      font-size: 0.875rem;
      z-index: 9999;
      animation: slideIn 300ms ease-out;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'slideOut 300ms ease-out';
      setTimeout(() => toast.remove(), 300);
    }, CONFIG.toastDuration);
  }

  // Scroll behavior
  function setupScrollBehavior() {
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    // Adicionar classe ao scroll
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    });
  }

  // Lazy loading de imagens
  function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  // Performance: Adicionar animações CSS
  function injectAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Iniciar quando DOM está pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Injetar estilos de animação
  injectAnimationStyles();

  // Expor função de WhatsApp globalmente para HTML
  window.openWhatsApp = openWhatsApp;
  window.copyCoupon = copyCoupon;

})();
