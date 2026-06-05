// HB Locações - Landing Page JavaScript
// Versão: 1.0.0 - Vanilla JavaScript

(function() {
  'use strict';

  // Configurações
  const CONFIG = {
    whatsappPhone: '5531982844756',
    whatsappMessage: 'Olá, vim pelo anúncio e gostaria de um orçamento para locação de máquinas. Possuo o cupom HBLOC-205',
    couponCode: 'HBLOC-205',
    toastDuration: 3000
  };

  // Inicialização
  function init() {
    setupScrollBehavior();
    setupMobileMenu();
  }

  // Setup Mobile Menu
  function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', function() {
        const isOpen = mobileMenu.style.display === 'flex';
        mobileMenu.style.display = isOpen ? 'none' : 'flex';
      });

      // Fechar menu ao clicar em um link
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
          mobileMenu.style.display = 'none';
        });
      });
    }
  }

  // Toggle Mobile Menu (função global)
  window.toggleMobileMenu = function() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
      const isOpen = mobileMenu.style.display === 'flex';
      mobileMenu.style.display = isOpen ? 'none' : 'flex';
    }
  };

  // Abrir WhatsApp
  window.openWhatsApp = function() {
    const encodedMessage = encodeURIComponent(CONFIG.whatsappMessage);
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Copiar Cupom
  window.copyCoupon = function() {
    navigator.clipboard.writeText(CONFIG.couponCode).then(() => {
      showToast('Cupom copiado com sucesso! Use no WhatsApp para obter seu desconto.', 'success');
    }).catch(() => {
      showToast('Erro ao copiar cupom. Tente novamente.', 'error');
    });
  };

  // Toast Notification
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
      font-family: 'Plus Jakarta Sans', sans-serif;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'slideOut 300ms ease-out';
      setTimeout(() => toast.remove(), 300);
    }, CONFIG.toastDuration);
  }

  // Scroll Behavior
  function setupScrollBehavior() {
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== 'javascript:void(0);') {
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

  // Injetar estilos de animação
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
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
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

})();
