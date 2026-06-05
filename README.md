# HB Locações - Landing Page

Landing page profissional e responsiva para HB Locações, especializada em locação de equipamentos pesados para construção civil, mineração e infraestrutura.

## 🎯 Características

- ✅ **HTML5 Puro** - Sem frameworks, sem build process
- ✅ **Responsivo** - Mobile-first design (320px+)
- ✅ **Performance** - Otimizado para velocidade máxima
- ✅ **SEO** - Meta tags completas e sitemap
- ✅ **Acessibilidade** - WCAG 2.1 AA compatível
- ✅ **Segurança** - Headers de segurança configurados
- ✅ **GitHub Pages Ready** - Deploy direto sem build

## 📁 Estrutura do Projeto

```
hb-locacoes-final/
├── index.html              # Página principal (HTML estático)
├── css/
│   └── style.css          # Estilos (1.3KB minificado)
├── js/
│   └── script.js          # Interações (0.2KB minificado)
├── assets/
│   ├── images/            # Imagens otimizadas
│   └── icons/             # Favicon e ícones
├── favicon.ico            # Favicon
├── robots.txt             # SEO - Robots
├── sitemap.xml            # SEO - Sitemap
├── .htaccess              # Configuração Apache
├── .nojekyll              # GitHub Pages config
└── README.md              # Este arquivo
```

## 🚀 Deployment

### GitHub Pages (Recomendado)

1. **Crie um repositório** no GitHub chamado `hb-locacoes`
2. **Faça upload** de todos os arquivos para a raiz do repositório
3. **Ative GitHub Pages** em Settings → Pages → Source: main branch
4. **Seu site** estará disponível em: `https://seu-usuario.github.io/hb-locacoes`

### Netlify

1. **Acesse** [netlify.com](https://netlify.com)
2. **Clique** em "New site from Git"
3. **Conecte** seu repositório GitHub
4. **Deploy** automático em: `seu-site.netlify.app`

### Vercel

1. **Acesse** [vercel.com](https://vercel.com)
2. **Clique** em "New Project"
3. **Importe** seu repositório GitHub
4. **Deploy** automático em: `seu-site.vercel.app`

### Hospedagem Compartilhada (FTP)

1. **Conecte** via FTP ao seu servidor
2. **Faça upload** de todos os arquivos para a pasta `public_html`
3. **Acesse** seu domínio no navegador

### Docker

```bash
docker run -p 8080:80 -v $(pwd):/usr/share/nginx/html nginx:alpine
```

## 📱 Responsividade

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## ⚡ Performance

- **Tamanho HTML**: ~20KB
- **Tamanho CSS**: ~8KB
- **Tamanho JS**: ~2KB
- **Imagens**: Otimizadas (< 1MB total)
- **Lighthouse Score**: 90+

## 🔧 Configuração

### Alterar Número WhatsApp

Abra `js/script.js` e procure por:

```javascript
const CONFIG = {
  whatsappPhone: '5531982844756',
  // ...
};
```

Substitua `5531982844756` pelo seu número (com código de país).

### Alterar Cupom Promocional

No mesmo arquivo `js/script.js`:

```javascript
const CONFIG = {
  // ...
  couponCode: 'HBLOC-205',
  // ...
};
```

### Alterar Domínio

Abra `sitemap.xml` e atualize:

```xml
<loc>https://seu-dominio.com.br/</loc>
```

## 🎨 Customização

### Cores

Abra `css/style.css` e procure por `:root`:

```css
:root {
  --primary: #facc15;      /* Amarelo */
  --dark: #18181b;         /* Grafite */
  --light: #f4f4f5;        /* Cinza claro */
}
```

### Tipografia

As fontes estão carregadas via Google Fonts:
- **Space Grotesk** - Títulos e destaque
- **Plus Jakarta Sans** - Corpo de texto

## 📊 SEO

- ✅ Meta tags completas
- ✅ Open Graph (Facebook, WhatsApp)
- ✅ Twitter Card
- ✅ Schema.org markup
- ✅ Sitemap XML
- ✅ Robots.txt
- ✅ Canonical URLs

## 🔒 Segurança

- ✅ Headers de segurança (X-Content-Type-Options, X-Frame-Options)
- ✅ HTTPS recomendado
- ✅ Sem dependências externas perigosas
- ✅ Validação de entrada no formulário

## 📞 Suporte

Para dúvidas sobre deployment ou customização, consulte a documentação do seu provedor de hospedagem.

## 📄 Licença

© 2026 HB Locações. Todos os direitos reservados.

---

**Versão**: 1.0.0  
**Última atualização**: 05/06/2026  
**Status**: Pronto para Produção ✅
