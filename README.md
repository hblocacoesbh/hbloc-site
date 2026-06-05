# HB Locações - Landing Page

Versão: 1.0.0  
Data: 2026-06-04  
Desenvolvido com: HTML5, CSS3, JavaScript Vanilla

## 📋 Descrição

Landing page institucional premium para HB Locações, especializada em locação de equipamentos para construção civil, mineração e infraestrutura pesada. Design brutalista industrial refinado com foco em conversão e SEO.

## 🎨 Design

- **Estilo**: Brutalismo Industrial Refinado
- **Paleta de Cores**: Amarelo Construção Ativo (#D4AF37), Grafite Asfalto (#151515), Cinza Concreto (#F8F8F8)
- **Tipografia**: Space Grotesk (Display), Plus Jakarta Sans (Body)
- **Responsividade**: Mobile-first, totalmente responsiva

## 📁 Estrutura de Arquivos

```
hb-locacoes-export/
├── index.html                 # Página principal
├── favicon.ico               # Favicon 32x32
├── robots.txt                # Configuração para buscadores
├── sitemap.xml               # Mapa do site para SEO
├── .htaccess                 # Configurações Apache
├── README.md                 # Este arquivo
├── css/
│   └── style.css            # Estilos minificados
├── js/
│   └── script.js            # JavaScript minificado
└── assets/
    ├── images/              # Imagens otimizadas
    │   ├── hero_machinery.jpg
    │   ├── escavadeira_grande.jpg
    │   ├── mini_escavadeira.jpg
    │   ├── mini_carregadeira.jpg
    │   ├── demolicao_mineracao.jpg
    │   └── hb_logo_optimized.png
    └── icons/               # Ícones e favicons
        ├── favicon-16.png
        ├── favicon-32.png
        ├── favicon-64.png
        └── favicon-128.png
```

## 🚀 Deployment

### GitHub Pages

1. Crie um repositório no GitHub: `hb-locacoes`
2. Faça upload de todos os arquivos
3. Vá para Settings → Pages
4. Selecione "Deploy from a branch"
5. Escolha branch `main` e pasta `/ (root)`
6. Seu site estará em: `https://seu-usuario.github.io/hb-locacoes`

### Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Conecte seu repositório GitHub
4. Deixe as configurações padrão
5. Clique em "Deploy site"

### Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe seu repositório GitHub
4. Deixe as configurações padrão
5. Clique em "Deploy"

### Hospedagem Compartilhada Tradicional

1. Faça upload de todos os arquivos via FTP
2. Coloque os arquivos na raiz pública (public_html ou www)
3. Certifique-se de que o arquivo `.htaccess` foi enviado
4. Acesse seu domínio

## 🔧 Configurações

### Alterar Número de WhatsApp

Edite o arquivo `js/script.js` e procure por:
```javascript
whatsappPhone: '5531982844756',
```

Substitua pelo seu número (formato: código país + DDD + número, sem caracteres especiais).

### Alterar Cupom Promocional

Edite o arquivo `js/script.js` e procure por:
```javascript
couponCode: 'HBLOC-205',
```

Substitua pelo seu cupom desejado.

### Alterar Domínio

Edite o arquivo `sitemap.xml` e substitua todas as ocorrências de `https://hb-locacoes.com.br` pelo seu domínio.

## 📊 Performance

- **Tamanho Total**: ~27 MB (com imagens otimizadas)
- **Imagens Otimizadas**: JPEG com qualidade 80, redimensionadas para 1200px máximo
- **CSS Minificado**: ~8 KB
- **JavaScript Minificado**: ~6 KB
- **Carregamento**: <2 segundos em conexão 4G

### Otimizações Implementadas

✅ Compressão GZIP  
✅ Cache de navegador (1 ano para imagens, 1 mês para CSS/JS)  
✅ Preload de imagens críticas  
✅ Lazy loading de imagens  
✅ Smooth scroll nativo  
✅ Headers de segurança  
✅ Minificação de CSS e JavaScript  

## ♿ Acessibilidade

- WCAG 2.1 AA compatível
- Contraste de cores verificado
- Navegação por teclado funcional
- Respeita `prefers-reduced-motion`
- Semântica HTML5 correta
- Alt text em todas as imagens

## 🔍 SEO

- ✅ Meta tags essenciais
- ✅ Open Graph para redes sociais
- ✅ Twitter Card
- ✅ Schema.org estruturado
- ✅ Sitemap XML
- ✅ robots.txt otimizado
- ✅ URLs amigáveis
- ✅ Headings hierárquicos

## 🌐 Compatibilidade

- ✅ Chrome/Edge (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android 5+)

## 📱 Responsividade

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large Desktop (1280px+)

## 🔐 Segurança

- X-UA-Compatible: IE=edge
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 📞 Suporte

Para dúvidas ou sugestões sobre o site, entre em contato via WhatsApp:
[Clique aqui para abrir WhatsApp](https://wa.me/5531982844756)

## 📄 Licença

© 2026 HB Locações. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para HB Locações**
