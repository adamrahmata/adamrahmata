/* @ds-bundle: {"format":4,"namespace":"AlamEnergyDesignSystem_9cfe29","components":[{"name":"FeatureRow","sourcePath":"components/content/FeatureRow.jsx"},{"name":"HeroBanner","sourcePath":"components/content/HeroBanner.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"StatTile","sourcePath":"components/content/StatTile.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"LanguageSwitcher","sourcePath":"components/navigation/LanguageSwitcher.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"assets/data.js":"862a8599c6ac","components/content/FeatureRow.jsx":"7b9d61a830f5","components/content/HeroBanner.jsx":"7b3e02113f69","components/content/ProjectCard.jsx":"c1342c2a19c1","components/content/Quote.jsx":"328319ad848b","components/content/SectionHeading.jsx":"4e398f843535","components/content/StatTile.jsx":"7c0b773768ae","components/core/Badge.jsx":"94d553c7e5e7","components/core/Button.jsx":"34b8212c6a7a","components/core/Card.jsx":"8aa02fd3edff","components/core/Icon.jsx":"a523fb83b4ee","components/core/IconButton.jsx":"f4b5fbd20b13","components/core/Tag.jsx":"128ae7dd81dd","components/feedback/Alert.jsx":"8d7c4b30deaf","components/feedback/Dialog.jsx":"c993696487e2","components/feedback/Tooltip.jsx":"d7e2c7dc37c2","components/forms/Checkbox.jsx":"39a3b795b994","components/forms/Input.jsx":"2cb976be880e","components/forms/Radio.jsx":"6b7b10c9fc5b","components/forms/Select.jsx":"eaa9c573e6a4","components/forms/Switch.jsx":"cfbc3bc2c393","components/forms/Textarea.jsx":"fdf209559a93","components/forms/field.js":"04f7fb3dfc63","components/navigation/Breadcrumb.jsx":"4cd3148ce80a","components/navigation/LanguageSwitcher.jsx":"fd2d359f646a","components/navigation/NavBar.jsx":"6530fb8af868","components/navigation/Tabs.jsx":"7ced114aae2c","ui_kits/website/AboutScreen.jsx":"13407e7cb32c","ui_kits/website/Chrome.jsx":"0f3b0b812f04","ui_kits/website/ContactScreen.jsx":"5306dacd85a7","ui_kits/website/HomeScreen.jsx":"93593bc060ec","ui_kits/website/ProjectsScreen.jsx":"54e1999ede12","ui_kits/website/ServicesScreen.jsx":"ba2cebc1f5de","ui_kits/website/data.js":"3bfbf33ec85c"},"inlinedExternals":[],"unexposedExports":[{"name":"brandImages","sourcePath":"assets/data.js"},{"name":"hintStyle","sourcePath":"components/forms/field.js"},{"name":"labelStyle","sourcePath":"components/forms/field.js"},{"name":"projectsIndonesia","sourcePath":"assets/data.js"},{"name":"projectsInternational","sourcePath":"assets/data.js"},{"name":"shell","sourcePath":"components/forms/field.js"}]} */

(() => {

const __ds_ns = (window.AlamEnergyDesignSystem_9cfe29 = window.AlamEnergyDesignSystem_9cfe29 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/data.js
try { (() => {
// Brand imagery hotlinked from alamenergy.co.id — cross-origin download was blocked
// in this environment. Replace with local files in assets/img/ before production use.
const brandImages = {
  heroToba: 'https://alamenergy.co.id/wp-content/uploads/2023/03/crop-toba-lake-1-e1726556659278.png',
  serviceNoInvest: 'https://alamenergy.co.id/wp-content/uploads/2023/03/Service-Page-1.png',
  serviceQuality: 'https://alamenergy.co.id/wp-content/uploads/2023/03/4.-Service-Page-4-Revisi-7.png',
  serviceTrack: 'https://alamenergy.co.id/wp-content/uploads/2023/03/3.-Service-Page-3-Revisi-7.png',
  serviceJcm: 'https://alamenergy.co.id/wp-content/uploads/2023/03/Service-Page-4.png',
  jcmDiagram: 'https://alamenergy.co.id/wp-content/uploads/2023/03/Gambar2.png',
  projectsMap: 'https://alamenergy.co.id/wp-content/uploads/2023/03/Negara.png',
  projectsHero: 'https://alamenergy.co.id/wp-content/uploads/2023/01/B7-Deltamas-scaled.jpg'
};
const projectsIndonesia = [{
  name: 'Bintang Toedjoe Cikarang',
  capacity: '1.218 kWp',
  location: 'West Java',
  image: 'https://alamenergy.co.id/wp-content/uploads/2023/01/B7-Deltamas-scaled.jpg'
}, {
  name: 'Bintang Toedjoe Pulogadung',
  capacity: '463 kWp',
  location: 'Jakarta',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/B7-Pulogadung-b-scaled.jpg'
}, {
  name: 'Sampoerna Kayoe Tanon',
  capacity: '1.199 kWp',
  location: 'East Java',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/SK-Tanon-2-scaled.jpg'
}, {
  name: 'Sampoerna Kayoe Pundong',
  capacity: '540 kWp',
  location: 'East Java',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/SK-Pundong-2-scaled.jpg'
}, {
  name: 'Agung Automall Batam',
  capacity: '310 kWp',
  location: 'Batam',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/Agung-Batam.jpeg'
}, {
  name: 'Agung Automall Bali',
  capacity: '494 kWp',
  location: 'Bali',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/Agung-Bali-2-scaled.jpg'
}, {
  name: 'Anugrah Pharmindo Lestari',
  capacity: '813 kWp',
  location: 'West Java',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/APL-scaled.jpg'
}, {
  name: 'Steel Pipe Industry of Indonesia Unit IV',
  capacity: '309 kWp',
  location: 'East Java',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/SPINDO-IV-2-scaled.jpg'
}, {
  name: 'Steel Pipe Industry of Indonesia Unit VI',
  capacity: '657 kWp',
  location: 'East Java',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/SPINDO-VI-2-scaled.jpg'
}];
const projectsInternational = [{
  name: 'AMPAS',
  location: 'Thailand',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/AMPAS.png'
}, {
  name: 'NAMIKI',
  location: 'Japan',
  image: 'https://alamenergy.co.id/wp-content/uploads/2023/03/Namiki-Precision-（Thailand）Rooftop__40910945.jpg'
}, {
  name: 'TOP GLOVE PHASE 3.2',
  location: 'Malaysia',
  image: 'https://alamenergy.co.id/wp-content/uploads/2023/01/TOP-GLOVE-PHASE-3.2-MALAYSIA.jpg'
}, {
  name: 'HAU GIANG',
  location: 'Vietnam',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/hau-giang.png'
}, {
  name: 'CAPAO SECO',
  location: 'Brazil',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/CAPAO-SECO-1-BRAZIL.png'
}];
Object.assign(__ds_scope, { brandImages, projectsIndonesia, projectsInternational });
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/data.js", error: String((e && e.message) || e) }); }

// components/content/FeatureRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FeatureRow({
  image,
  title,
  children,
  reverse = false,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'center',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      order: reverse ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-media)',
      boxShadow: 'var(--shadow-md)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      order: reverse ? 1 : 2
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--text-h2)',
      lineHeight: 'var(--leading-snug)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-heading)',
      margin: '0 0 var(--space-4)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)'
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, action)));
}
Object.assign(__ds_scope, { FeatureRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureRow.jsx", error: String((e && e.message) || e) }); }

// components/content/HeroBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function HeroBanner({
  image,
  children,
  height = '560px',
  align = 'center',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
    style: {
      position: 'relative',
      minHeight: height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      overflow: 'hidden',
      ...style
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-hero)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: 'var(--space-16) var(--space-8)',
      maxWidth: 'var(--container-max)',
      width: '100%',
      textAlign: align,
      color: 'var(--white)'
    }
  }, children));
}
Object.assign(__ds_scope, { HeroBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/HeroBanner.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProjectCard({
  image,
  name,
  capacity,
  location,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: "#",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'block',
      textDecoration: 'none',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transition: 'box-shadow var(--dur-base) var(--ease-standard)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      background: 'var(--neutral-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'var(--transition-media)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--text-h4)',
      color: 'var(--text-heading)',
      margin: '0 0 var(--space-2)',
      lineHeight: 'var(--leading-snug)'
    }
  }, name), capacity && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--brand-primary)'
    }
  }, capacity), location && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-small)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-1)'
    }
  }, location)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Quote({
  children,
  attribution,
  tone = 'inverse',
  style,
  ...rest
}) {
  const inv = tone === 'inverse';
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      margin: 0,
      textAlign: 'center',
      maxWidth: '900px',
      marginInline: 'auto',
      ...style
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--text-display-2)',
      lineHeight: 'var(--leading-snug)',
      letterSpacing: 'var(--tracking-display)',
      color: inv ? 'var(--white)' : 'var(--text-heading)',
      textWrap: 'balance'
    }
  }, "\u201C", children, "\u201D"), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-6)',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-small)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      fontWeight: 'var(--weight-bold)',
      color: inv ? 'var(--blue-300)' : 'var(--text-muted)'
    }
  }, attribution));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  overline,
  title,
  lead,
  align = 'left',
  tone = 'default',
  style,
  ...rest
}) {
  const inv = tone === 'inverse';
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      textAlign: align,
      maxWidth: align === 'center' ? '760px' : 'none',
      margin: align === 'center' ? '0 auto var(--space-10)' : '0 0 var(--space-10)',
      ...style
    }
  }), overline && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-overline)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: inv ? 'var(--blue-300)' : 'var(--brand-secondary)',
      marginBottom: 'var(--space-3)'
    }
  }, overline), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--text-display-2)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-display)',
      color: inv ? 'var(--white)' : 'var(--text-heading)',
      margin: 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-lead)',
      lineHeight: 'var(--leading-relaxed)',
      color: inv ? 'var(--blue-200)' : 'var(--text-body)',
      marginTop: 'var(--space-4)',
      marginBottom: 0,
      textWrap: 'pretty'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatTile({
  value,
  unit,
  label,
  tone = 'default',
  style,
  ...rest
}) {
  const inv = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      padding: 'var(--space-6) 0',
      borderTop: '3px solid ' + (inv ? 'var(--blue-400)' : 'var(--brand-secondary)'),
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: '44px',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-display)',
      color: inv ? 'var(--white)' : 'var(--text-heading)'
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '20px',
      marginLeft: 6,
      color: inv ? 'var(--blue-300)' : 'var(--text-muted)'
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-small)',
      color: inv ? 'var(--blue-200)' : 'var(--text-muted)',
      marginTop: 'var(--space-3)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = {
  blue: ['var(--surface-brand-soft)', 'var(--blue-700)'],
  green: ['var(--surface-nature-soft)', 'var(--green-800)'],
  sun: ['var(--sun-200)', 'var(--sun-600)'],
  neutral: ['var(--neutral-100)', 'var(--neutral-700)'],
  solid: ['var(--brand-primary)', 'var(--white)']
};
function Badge({
  tone = 'blue',
  children,
  style,
  ...rest
}) {
  const [bg, fg] = T[tone] || T.blue;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-bold)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.4,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  elevation = 'sm',
  interactive = false,
  padding = 'var(--space-6)',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sh = {
    none: 'var(--shadow-none)',
    xs: 'var(--shadow-xs)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  }[elevation];
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      boxShadow: interactive && hover ? 'var(--shadow-md)' : sh,
      padding,
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-out)',
      transform: interactive && hover ? 'translateY(-3px)' : 'none',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = 'https://unpkg.com/lucide-static@0.454.0/icons/';
function Icon({
  name = 'arrow-right',
  size = 20,
  strokeWidth,
  color = 'currentColor',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      backgroundColor: color,
      WebkitMaskImage: `url(${BASE}${name}.svg)`,
      maskImage: `url(${BASE}${name}.svg)`,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  primary: {
    background: 'var(--brand-primary)',
    color: 'var(--text-inverse)',
    border: '1px solid var(--brand-primary)'
  },
  secondary: {
    background: 'var(--brand-secondary)',
    color: 'var(--text-inverse)',
    border: '1px solid var(--brand-secondary)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--brand-primary)',
    border: '1px solid var(--border-brand)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--brand-primary)',
    border: '1px solid transparent'
  },
  inverse: {
    background: 'var(--white)',
    color: 'var(--blue-700)',
    border: '1px solid var(--white)'
  }
};
const H = {
  primary: 'var(--brand-primary-hover)',
  secondary: 'var(--brand-secondary-hover)',
  outline: 'var(--surface-brand-soft)',
  ghost: 'var(--surface-brand-soft)',
  inverse: 'var(--blue-100)'
};
const S = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--text-caption)'
  },
  md: {
    padding: '12px 24px',
    fontSize: 'var(--text-small)'
  },
  lg: {
    padding: '16px 32px',
    fontSize: 'var(--text-body)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  iconAfter,
  iconBefore,
  fullWidth,
  disabled,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const base = V[variant] || V.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-text)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '.01em',
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      width: fullWidth ? '100%' : 'auto',
      transition: 'var(--transition-control), transform var(--dur-instant) var(--ease-standard)',
      transform: press && !disabled ? 'translateY(1px)' : 'none',
      ...base,
      ...S[size],
      ...(hover && !disabled ? {
        background: H[variant],
        ...(variant === 'outline' || variant === 'ghost' ? {
          color: 'var(--brand-primary-press)'
        } : {})
      } : {}),
      ...style
    }
  }), iconBefore && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconBefore,
    size: size === 'lg' ? 20 : 16
  }), children, iconAfter && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: size === 'lg' ? 20 : 16
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  name = 'x',
  label,
  variant = 'ghost',
  size = 40,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tone = variant === 'inverse';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-circle)',
      cursor: 'pointer',
      border: '1px solid ' + (variant === 'outline' ? 'var(--border-default)' : 'transparent'),
      background: hover ? tone ? 'rgba(255,255,255,.18)' : 'var(--surface-brand-soft)' : 'transparent',
      color: tone ? 'var(--white)' : 'var(--brand-primary)',
      transition: 'var(--transition-control)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: Math.round(size * 0.5)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  active = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-small)',
      fontWeight: 'var(--weight-semibold)',
      cursor: 'pointer',
      border: '1px solid ' + (active ? 'var(--brand-primary)' : 'var(--border-default)'),
      background: active ? 'var(--brand-primary)' : 'transparent',
      color: active ? 'var(--white)' : 'var(--text-body)',
      transition: 'var(--transition-control)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = {
  info: ['var(--surface-brand-soft)', 'var(--blue-700)', 'info'],
  success: ['var(--surface-nature-soft)', 'var(--green-800)', 'circle-check'],
  warning: ['var(--sun-200)', 'var(--sun-600)', 'triangle-alert'],
  danger: ['#FCE8E6', 'var(--danger)', 'circle-alert']
};
function Alert({
  tone = 'info',
  title,
  children,
  style,
  ...rest
}) {
  const [bg, fg, icon] = T[tone] || T.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      background: bg,
      color: fg,
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-4) var(--space-5)',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-small)',
      lineHeight: 'var(--leading-normal)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      marginBottom: 2
    }
  }, title), children));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  onClose,
  footer,
  width = '560px',
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      background: 'rgba(4,34,63,.55)',
      backdropFilter: 'blur(3px)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, rest, {
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-5) var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      flex: 1,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--text-h4)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    label: "Tutup",
    onClick: onClose,
    size: 40
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-small)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-6)',
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  children,
  style,
  ...rest
}) {
  const [on, setOn] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }), children, on && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      background: 'var(--surface-inverse)',
      color: 'var(--white)',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-caption)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      zIndex: 20
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-small)',
      color: 'var(--text-body)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (checked ? 'var(--brand-primary)' : 'var(--border-default)'),
      background: checked ? 'var(--brand-primary)' : 'var(--white)',
      transition: 'var(--transition-control)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "var(--white)"
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked = false,
  name,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-small)',
      color: 'var(--text-body)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-circle)',
      border: '1px solid ' + (checked ? 'var(--brand-primary)' : 'var(--border-default)'),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-circle)',
      background: checked ? 'var(--brand-primary)' : 'transparent'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  label,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-small)',
      color: 'var(--text-body)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 44,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--brand-secondary)' : 'var(--neutral-300)',
      position: 'relative',
      transition: 'background-color var(--dur-fast) var(--ease-standard)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 23 : 3,
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-circle)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--dur-fast) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/field.js
try { (() => {
const shell = (focus, invalid, disabled) => ({
  width: '100%',
  fontFamily: 'var(--font-text)',
  fontSize: 'var(--text-small)',
  color: 'var(--text-heading)',
  background: disabled ? 'var(--neutral-100)' : 'var(--white)',
  border: '1px solid ' + (invalid ? 'var(--danger)' : focus ? 'var(--brand-primary)' : 'var(--border-default)'),
  borderRadius: 'var(--radius-control)',
  padding: '12px 14px',
  outline: 'none',
  boxShadow: focus ? 'var(--ring-focus)' : 'none',
  transition: 'var(--transition-control)'
});
const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-text)',
  fontSize: 'var(--text-caption)',
  fontWeight: 'var(--weight-bold)',
  color: 'var(--text-heading)',
  marginBottom: 'var(--space-2)',
  letterSpacing: '.02em'
};
const hintStyle = invalid => ({
  fontSize: 'var(--text-caption)',
  color: invalid ? 'var(--danger)' : 'var(--text-muted)',
  marginTop: 'var(--space-2)'
});
Object.assign(__ds_scope, { shell, labelStyle, hintStyle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/field.js", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  invalid = false,
  disabled = false,
  required = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: __ds_scope.labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      ...__ds_scope.shell(focus, invalid, disabled),
      ...style
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: __ds_scope.hintStyle(invalid)
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: __ds_scope.labelStyle
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      ...__ds_scope.shell(focus, false, false),
      appearance: 'none',
      paddingRight: '40px',
      ...style
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      backgroundColor: 'var(--text-muted)'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  invalid = false,
  rows = 5,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: __ds_scope.labelStyle
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      ...__ds_scope.shell(focus, invalid, false),
      resize: 'vertical',
      lineHeight: 'var(--leading-normal)',
      ...style
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: __ds_scope.hintStyle(invalid)
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  tone = 'default',
  style,
  ...rest
}) {
  const inv = tone === 'inverse';
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb"
  }, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-caption)',
      color: inv ? 'var(--blue-200)' : 'var(--text-muted)',
      ...style
    }
  }), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 14,
    color: inv ? 'var(--blue-300)' : 'var(--neutral-400)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: i === items.length - 1 ? 'var(--weight-bold)' : 'var(--weight-regular)',
      color: i === items.length - 1 ? inv ? 'var(--white)' : 'var(--text-heading)' : 'inherit'
    }
  }, it))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LanguageSwitcher.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LANGS = [{
  code: 'en',
  label: 'EN'
}, {
  code: 'ja',
  label: 'JA'
}, {
  code: 'id',
  label: 'ID'
}];
function LanguageSwitcher({
  value = 'id',
  onChange,
  tone = 'default',
  style,
  ...rest
}) {
  const inv = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      ...style
    }
  }), LANGS.map(l => {
    const on = l.code === value;
    return /*#__PURE__*/React.createElement("button", {
      key: l.code,
      type: "button",
      onClick: () => onChange && onChange(l.code),
      style: {
        fontFamily: 'var(--font-text)',
        fontSize: 'var(--text-caption)',
        fontWeight: 'var(--weight-bold)',
        letterSpacing: '.06em',
        padding: '6px 10px',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        border: '1px solid ' + (on ? inv ? 'var(--white)' : 'var(--border-brand)' : 'transparent'),
        background: on ? inv ? 'rgba(255,255,255,.16)' : 'var(--surface-brand-soft)' : 'transparent',
        color: inv ? 'var(--white)' : on ? 'var(--brand-primary)' : 'var(--text-muted)',
        transition: 'var(--transition-control)'
      }
    }, l.label);
  }));
}
Object.assign(__ds_scope, { LanguageSwitcher });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LanguageSwitcher.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  brand,
  items = [],
  active,
  onNavigate,
  right,
  transparent = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      padding: 'var(--space-4) var(--space-8)',
      background: transparent ? 'transparent' : 'var(--white)',
      borderBottom: '1px solid ' + (transparent ? 'rgba(255,255,255,.25)' : 'var(--border-subtle)'),
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      flex: '0 0 auto'
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      marginLeft: 'auto'
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("a", {
      key: it.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it.id);
      },
      style: {
        fontFamily: 'var(--font-text)',
        fontSize: 'var(--text-small)',
        fontWeight: 'var(--weight-semibold)',
        textDecoration: 'none',
        paddingBottom: '2px',
        borderBottom: '2px solid ' + (on ? 'var(--brand-secondary)' : 'transparent'),
        color: transparent ? 'var(--white)' : on ? 'var(--text-heading)' : 'var(--text-body)',
        transition: 'var(--transition-control)'
      }
    }, it.label);
  }), right));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist"
  }, rest, {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }), items.map(it => {
    const on = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(it.id),
      style: {
        background: 'none',
        border: 'none',
        borderBottom: '3px solid ' + (on ? 'var(--brand-primary)' : 'transparent'),
        padding: '0 0 var(--space-4)',
        marginBottom: '-1px',
        cursor: 'pointer',
        fontFamily: 'var(--font-text)',
        fontSize: 'var(--text-body)',
        fontWeight: 'var(--weight-bold)',
        color: on ? 'var(--text-heading)' : 'var(--text-muted)',
        transition: 'var(--transition-control)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
const {
  HeroBanner,
  Breadcrumb,
  SectionHeading,
  Quote,
  Card,
  StatTile,
  Badge
} = window.AlamEnergyDesignSystem_9cfe29;
function AboutScreen() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroBanner, {
    image: brandImages.heroToba,
    height: "420px",
    align: "left"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    tone: "inverse",
    items: ['Beranda', 'Tentang Kami']
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: 'var(--white)',
      fontSize: 'var(--text-display-2)',
      margin: 'var(--space-5) 0 0',
      maxWidth: 820
    }
  }, "Kami bertindak demi planet biru"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--blue-100)',
      fontSize: 'var(--text-lead)',
      maxWidth: 680,
      marginTop: 'var(--space-4)'
    }
  }, "Kami menyediakan solusi terintegrasi netral karbon.")), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Tentang Kami",
    title: "Potensi Indonesia untuk dampak positif",
    style: {
      margin: 0
    },
    lead: "Kami sangat meyakini potensi Indonesia untuk menciptakan dampak positif dalam menjaga kelestarian dan mewariskan planet biru ini kepada generasi mendatang."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("p", null, "Alam Energy dikelola melalui kolaborasi antara lima pihak: Shizen Energy, Alamport, NiX, EBH, dan Kanematsu."), /*#__PURE__*/React.createElement("p", null, "Kami menyediakan energi bersih yang andal bagi pelanggan kami di Indonesia, mengatasi tantangan satu demi satu."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 'var(--space-5)'
    }
  }, ['Shizen Energy', 'Alamport', 'NiX', 'EBH', 'Kanematsu'].map(p => /*#__PURE__*/React.createElement(Badge, {
    key: p,
    tone: "neutral"
  }, p)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "inverse"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    attribution: "Visi Kami"
  }, "Masa depan yang lebih cerah bagi generasi mendatang dengan energi terbarukan."), /*#__PURE__*/React.createElement(Quote, {
    attribution: "Kepada Pelanggan Kami"
  }, "Bergerak bersama demi langit biru dan alam kita."))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: "2022",
    label: "Awal operasi di Indonesia"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "5",
    unit: "mitra",
    label: "Struktur kolaborasi"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "C&I",
    label: "Fokus sektor Komersial & Industri"
  }))));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  NavBar,
  LanguageSwitcher,
  Button,
  IconButton,
  Icon
} = window.AlamEnergyDesignSystem_9cfe29;
const NAV = [{
  id: 'tentang',
  label: 'Tentang Kami'
}, {
  id: 'layanan',
  label: 'Layanan'
}, {
  id: 'proyek',
  label: 'Proyek'
}, {
  id: 'berita',
  label: 'Berita & Media'
}, {
  id: 'kontak',
  label: 'Kontak'
}];
function Wordmark({
  tone = 'default'
}) {
  const inv = tone === 'inverse';
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      textDecoration: 'none',
      display: 'block',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 20,
      letterSpacing: '-.02em',
      color: inv ? 'var(--white)' : 'var(--blue-700)'
    }
  }, "ALAM ENERGY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 10,
      letterSpacing: '.06em',
      color: inv ? 'var(--blue-200)' : 'var(--text-muted)',
      marginTop: 2
    }
  }, "by Shizen Energy Group"));
}
function SiteHeader({
  active,
  go,
  lang,
  setLang,
  onContact
}) {
  return /*#__PURE__*/React.createElement(NavBar, {
    brand: /*#__PURE__*/React.createElement(Wordmark, null),
    items: NAV,
    active: active,
    onNavigate: go,
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        marginLeft: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      name: "linkedin",
      label: "LinkedIn",
      variant: "outline",
      size: 40
    }), /*#__PURE__*/React.createElement(LanguageSwitcher, {
      value: lang,
      onChange: setLang
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: onContact
    }, "Hubungi Kami")),
    style: {
      position: 'sticky',
      top: 0,
      padding: 'var(--space-4) var(--space-10)',
      boxShadow: 'var(--shadow-xs)'
    }
  });
}
function Section({
  children,
  tone = 'default',
  compact = false,
  style
}) {
  const bg = {
    default: 'var(--surface-page)',
    subtle: 'var(--surface-subtle)',
    inverse: 'var(--surface-inverse)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: (compact ? 'var(--space-16)' : 'var(--section-y)') + ' var(--space-10)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, children));
}
function SiteFooter({
  lang,
  setLang,
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--blue-900)',
      color: 'var(--blue-200)',
      padding: 'var(--space-16) var(--space-10) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    tone: "inverse"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--text-small)',
      lineHeight: 'var(--leading-relaxed)',
      maxWidth: 360
    }
  }, "Alam Energy by Shizen Energy Group (PT. ATW Alam Hijau). Kami bertindak demi planet biru dengan solusi terintegrasi netral karbon."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(LanguageSwitcher, {
    value: lang,
    onChange: setLang,
    tone: "inverse"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-overline)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: 'var(--blue-300)',
      marginBottom: 'var(--space-4)'
    }
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(n.id);
    },
    style: {
      color: 'var(--blue-200)',
      fontSize: 'var(--text-small)',
      textDecoration: 'none'
    }
  }, n.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-overline)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: 'var(--blue-300)',
      marginBottom: 'var(--space-4)'
    }
  }, "Grup"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--blue-200)',
      fontSize: 'var(--text-small)',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, "Shizen International ", /*#__PURE__*/React.createElement(Icon, {
    name: "external-link",
    size: 14
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-12) auto 0',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid rgba(255,255,255,.14)',
      fontSize: 'var(--text-caption)',
      color: 'var(--blue-300)'
    }
  }, "\xA9 2026 PT. ATW Alam Hijau. Alam Energy by Shizen Energy Group."));
}
Object.assign(window, {
  Wordmark,
  SiteHeader,
  SiteFooter,
  Section,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  HeroBanner,
  Breadcrumb,
  SectionHeading,
  Card,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  Alert,
  Icon
} = window.AlamEnergyDesignSystem_9cfe29;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const [agree, setAgree] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroBanner, {
    image: brandImages.serviceJcm,
    height: "340px",
    align: "left"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    tone: "inverse",
    items: ['Beranda', 'Kontak']
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: 'var(--white)',
      fontSize: 'var(--text-display-2)',
      margin: 'var(--space-5) 0 0'
    }
  }, "Kami menantikan kerja sama"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--blue-100)',
      fontSize: 'var(--text-lead)',
      maxWidth: 620,
      marginTop: 'var(--space-4)'
    }
  }, "menuju planet yang ditenagai oleh energi terbarukan")), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr .8fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    elevation: "md",
    padding: "var(--space-10)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Contact Form",
    title: "Hubungi Kami",
    style: {
      marginBottom: 'var(--space-8)'
    }
  }), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Formulir terkirim"
  }, "Terima kasih. Kami akan menghubungi Anda dalam 2 hari kerja.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First Name",
    placeholder: "Nama depan"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Last Name",
    placeholder: "Nama belakang"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    required: true,
    placeholder: "nama@perusahaan.co.id"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company Name",
    placeholder: "PT ..."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Department/Position",
    placeholder: "Facility Manager"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Subject",
    placeholder: "Pilih topik",
    options: ['Layanan tenaga surya', 'Proyek Model JCM', 'Kemitraan', 'Media']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "Your Message",
    rows: 5,
    placeholder: "Ceritakan kebutuhan energi Anda"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Saya menyetujui kebijakan privasi",
    checked: agree,
    onChange: () => setAgree(!agree)
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconAfter: "arrow-right",
    disabled: !agree,
    onClick: () => setSent(true)
  }, "Submit Form"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, [['building', 'PT. ATW Alam Hijau', 'Alam Energy by Shizen Energy Group'], ['mail', 'Email', 'info@alamenergy.co.id'], ['linkedin', 'LinkedIn', 'linkedin.com/company/alamenergy'], ['globe', 'Bahasa', 'Indonesia · English · 日本語']].map(([ic, t, b]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    elevation: "xs",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20,
    color: "var(--brand-primary)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 'var(--text-small)',
      color: 'var(--text-heading)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, b)))))))));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  HeroBanner,
  Button,
  SectionHeading,
  Quote,
  StatTile,
  ProjectCard,
  Card,
  Icon,
  Badge
} = window.AlamEnergyDesignSystem_9cfe29;
const HERO = [{
  t: ['Kami sangat meyakini potensi Indonesia untuk menciptakan dampak positif', 'dalam menjaga kelestarian dan mewariskan planet biru ini kepada generasi mendatang.'],
  cta: 'Lihat (Tentang Kami)',
  go: 'tentang'
}, {
  t: ['Kami menyediakan energi bersih yang andal bagi pelanggan kami di Indonesia,', 'mengatasi tantangan satu demi satu'],
  cta: 'Lihat (Proyek Kami)',
  go: 'proyek'
}, {
  t: ['Kami menyediakan solusi PV surya bagi perusahaan yang membutuhkan', 'energi terbarukan dan listrik yang terjangkau'],
  cta: 'Lihat (Layanan Kami)',
  go: 'layanan'
}];
function HomeScreen({
  go
}) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % HERO.length), 6000);
    return () => clearInterval(t);
  }, []);
  const s = HERO[i];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroBanner, {
    image: brandImages.heroToba,
    height: "620px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-overline)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: 'var(--blue-200)',
      marginBottom: 'var(--space-5)'
    }
  }, "Alam Energy by Shizen Energy Group"), s.t.map((line, n) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'clamp(28px,3.1vw,42px)',
      lineHeight: 1.18,
      letterSpacing: '-.02em',
      textWrap: 'balance'
    }
  }, line)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconAfter: "arrow-right",
    onClick: () => go(s.go)
  }, s.cta)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'center',
      marginTop: 'var(--space-10)'
    }
  }, HERO.map((_, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setI(n),
    "aria-label": 'Slide ' + (n + 1),
    style: {
      width: n === i ? 28 : 10,
      height: 6,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: n === i ? 'var(--white)' : 'rgba(255,255,255,.45)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "inverse"
  }, /*#__PURE__*/React.createElement(Quote, {
    attribution: "Visi Kami"
  }, "Masa depan yang lebih cerah bagi generasi mendatang dengan energi terbarukan."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-10)',
      marginTop: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    tone: "inverse",
    value: "12",
    unit: "proyek",
    label: "Instalasi C&I di Indonesia"
  }), /*#__PURE__*/React.createElement(StatTile, {
    tone: "inverse",
    value: "11,5",
    unit: "MWp",
    label: "Kapasitas terpasang"
  }), /*#__PURE__*/React.createElement(StatTile, {
    tone: "inverse",
    value: "5",
    unit: "proyek",
    label: "JCM Model Project"
  }), /*#__PURE__*/React.createElement(StatTile, {
    tone: "inverse",
    value: "7",
    unit: "negara",
    label: "Rekam jejak internasional"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Layanan Kami",
    title: "Instalasi energi surya tanpa investasi",
    align: "center",
    lead: "Berkontribusi pada pengurangan emisi karbon sekaligus menghemat biaya listrik tanpa investasi. Kami siap mewujudkannya."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)'
    }
  }, [['sun', 'Pengembangan & Perancangan', 'Studi kelayakan atap, simulasi hasil produksi, dan desain sistem yang sesuai profil beban Anda.'], ['factory', 'Pengadaan & Konstruksi', 'Solusi satu atap EPC dengan standar kualitas internasional untuk sektor Komersial & Industri.'], ['plug', 'Operasi & Pemeliharaan', 'Pemantauan performa dan pemeliharaan berkala sepanjang masa perjanjian.']].map(([ic, t, b]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    interactive: true,
    elevation: "sm"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 48,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-brand-soft)',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24,
    color: "var(--brand-primary)"
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 var(--space-3)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-small)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconAfter: "arrow-right",
    onClick: () => go('layanan')
  }, "Lihat Layanan Kami"))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Proyek Kami",
    title: "Rekam jejak di Indonesia",
    lead: "Daftar pengembangan proyek-proyek energi terbarukan di Indonesia dan beberapa mitra utama di sekitar Asia Tenggara."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)'
    }
  }, projectsIndonesia.slice(0, 4).map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.name
  }, p, {
    onClick: e => {
      e.preventDefault();
      go('proyek');
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconAfter: "arrow-right",
    onClick: () => go('proyek')
  }, "Semua proyek"))), /*#__PURE__*/React.createElement(Section, {
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-10)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "Kolaborasi"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 'var(--space-4) 0 0',
      maxWidth: 640
    }
  }, "Alam Energy dikelola melalui kolaborasi antara lima pihak: Shizen Energy, Alamport, NiX, EBH, dan Kanematsu")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconAfter: "arrow-right",
    onClick: () => go('kontak')
  }, "Hubungi Kami"))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  HeroBanner,
  Breadcrumb,
  SectionHeading,
  Tabs,
  Tag,
  ProjectCard,
  Card,
  Switch,
  Button
} = window.AlamEnergyDesignSystem_9cfe29;
function ProjectsScreen() {
  const [tab, setTab] = React.useState('id');
  const [loc, setLoc] = React.useState('Semua');
  const [showMap, setShowMap] = React.useState(true);
  const locs = ['Semua', ...Array.from(new Set(projectsIndonesia.map(p => p.location)))];
  const list = loc === 'Semua' ? projectsIndonesia : projectsIndonesia.filter(p => p.location === loc);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroBanner, {
    image: brandImages.projectsHero,
    height: "380px",
    align: "left"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    tone: "inverse",
    items: ['Beranda', 'Proyek Kami']
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: 'var(--white)',
      fontSize: 'var(--text-display-2)',
      margin: 'var(--space-5) 0 0'
    }
  }, "Proyek Kami"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--blue-100)',
      fontSize: 'var(--text-lead)',
      maxWidth: 680,
      marginTop: 'var(--space-4)'
    }
  }, "Daftar pengembangan proyek-proyek energi terbarukan di Indonesia dan beberapa mitra utama di sekitar Asia Tenggara.")), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'id',
      label: 'Proyek di Indonesia'
    }, {
      id: 'intl',
      label: 'Klien Utama di Negara Lain'
    }],
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: 'var(--space-8)'
    }
  }), tab === 'id' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-8)'
    }
  }, locs.map(l => /*#__PURE__*/React.createElement(Tag, {
    key: l,
    active: l === loc,
    onClick: () => setLoc(l)
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: showMap,
    onChange: setShowMap,
    label: "Tampilkan peta"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)'
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.name
  }, p)))), showMap && /*#__PURE__*/React.createElement(Card, {
    elevation: "sm",
    style: {
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: brandImages.projectsMap,
    alt: "Peta sebaran proyek",
    style: {
      width: '100%'
    }
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)'
    }
  }, projectsInternational.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.name,
    image: p.image,
    name: p.name,
    location: 'Location ' + p.location
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle",
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    overline: "Shizen Energy Group",
    title: "Kunjungi Shizen International untuk informasi lebih lanjut"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconAfter: "external-link"
  }, "Shizen International"))));
}
window.ProjectsScreen = ProjectsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
const {
  HeroBanner,
  Breadcrumb,
  SectionHeading,
  FeatureRow,
  Button,
  Card,
  Alert,
  Badge,
  Tooltip
} = window.AlamEnergyDesignSystem_9cfe29;
const JCM = [['1', 'PT Bintang Toedjoe', '1.681', 'Proyek PLTS Atap 4,2 MW untuk Pabrik Farmasi, Dealer Kendaraan, dan Pabrik Kayu'], ['2', 'PT Sumber Graha Sejahtera (Sampoerna Kayoe)', '1.739', ''], ['3', 'PT Agung Automall', '803', ''], ['4', 'PT Kao Indonesia', '1.530', 'Sistem Tenaga Surya Atap 3,1 MW untuk Pabrik Barang Konsumsi dan Percetakan di Pulau Jawa'], ['5', 'PT DNP Indonesia', '1.658', '']];
function ServicesScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroBanner, {
    image: brandImages.serviceNoInvest,
    height: "420px",
    align: "left"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    tone: "inverse",
    items: ['Beranda', 'Layanan']
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: 'var(--white)',
      fontSize: 'var(--text-display-2)',
      margin: 'var(--space-5) 0 0',
      maxWidth: 760
    }
  }, "Instalasi Energi Surya Tanpa Investasi"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--blue-100)',
      fontSize: 'var(--text-lead)',
      maxWidth: 620,
      marginTop: 'var(--space-4)'
    }
  }, "Berkontribusi pada pengurangan emisi karbon sekaligus menghemat biaya listrik tanpa investasi. Kami siap mewujudkannya.")), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement(FeatureRow, {
    image: brandImages.serviceQuality,
    title: "Menghadirkan Kualitas Internasional untuk Sektor Komersial & Industri di Indonesia"
  }, /*#__PURE__*/React.createElement("p", null, "Kami menyediakan solusi satu atap untuk instalasi tenaga surya, mulai dari pengembangan, perancangan, pengadaan, dan konstruksi, hingga tahap pengoperasian dan pemeliharaan.")), /*#__PURE__*/React.createElement(FeatureRow, {
    reverse: true,
    image: brandImages.serviceTrack,
    title: "Rekam Jejak Sektor Komersial dan Industri di Indonesia dan Luar Negeri",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconAfter: "arrow-right",
      onClick: () => go('proyek')
    }, "Lihat rekam jejak kami")
  }, /*#__PURE__*/React.createElement("p", null, "Kami memiliki rekam jejak di sektor Komersial dan Industri (C&I), baik di Indonesia maupun di negara lain.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "JCM",
    title: "Penerapan Mekanisme Kredit Bersama (JCM) pada Instalasi Anda",
    lead: "Kementerian Lingkungan Hidup Jepang menerapkan \u201CProyek Model JCM\u201D, yang memberikan dukungan finansial hingga setengah dari biaya investasi awal."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("img", {
    src: brandImages.jcmDiagram,
    alt: "Skema JCM antara Jepang dan Negara Mitra",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-sm)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-3)',
      fontStyle: 'italic'
    }
  }, "Referensi Situs web Global Environment Centre Foundation")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "Manfaat Ekonomis"
  }, "Harga menarik dari Alam Energy."), /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Manfaat Branding"
  }, "Publikasi sebagai Proyek Model JCM membantu menyampaikan komitmen pelanggan terhadap pengurangan emisi GRK dan menjadi \u201Chijau\u201D ke pasar."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Hingga November 2022, negara mitra JCM berjumlah 25 negara dengan total 234 proyek, termasuk Indonesia."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, "Proyek Model JCM yang Sukses oleh Alam Energy"), /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    elevation: "sm"
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-small)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--surface-brand-soft)'
    }
  }, ['No.', 'Perusahaan', 'Kapasitas (kWp)', 'Judul Proyek Model JCM'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'left',
      padding: '14px 18px',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-caption)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--blue-700)',
      fontWeight: 700
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, JCM.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0],
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 18px',
      color: 'var(--text-muted)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 18px',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, r[1]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 18px',
      color: 'var(--brand-primary)',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "kilowatt-peak"
  }, /*#__PURE__*/React.createElement("span", null, r[2]))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 18px',
      color: 'var(--text-body)'
    }
  }, r[3] || /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--neutral-400)'
    }
  }, "\u2014"))))))))));
}
window.ServicesScreen = ServicesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Brand imagery hotlinked from alamenergy.co.id — cross-origin download was blocked
// in this environment. Replace with local files in assets/img/ before production use.
const brandImages = {
  heroToba: 'https://alamenergy.co.id/wp-content/uploads/2023/03/crop-toba-lake-1-e1726556659278.png',
  serviceNoInvest: 'https://alamenergy.co.id/wp-content/uploads/2023/03/Service-Page-1.png',
  serviceQuality: 'https://alamenergy.co.id/wp-content/uploads/2023/03/4.-Service-Page-4-Revisi-7.png',
  serviceTrack: 'https://alamenergy.co.id/wp-content/uploads/2023/03/3.-Service-Page-3-Revisi-7.png',
  serviceJcm: 'https://alamenergy.co.id/wp-content/uploads/2023/03/Service-Page-4.png',
  jcmDiagram: 'https://alamenergy.co.id/wp-content/uploads/2023/03/Gambar2.png',
  projectsMap: 'https://alamenergy.co.id/wp-content/uploads/2023/03/Negara.png',
  projectsHero: 'https://alamenergy.co.id/wp-content/uploads/2023/01/B7-Deltamas-scaled.jpg'
};
const projectsIndonesia = [{
  name: 'Bintang Toedjoe Cikarang',
  capacity: '1.218 kWp',
  location: 'West Java',
  image: 'https://alamenergy.co.id/wp-content/uploads/2023/01/B7-Deltamas-scaled.jpg'
}, {
  name: 'Bintang Toedjoe Pulogadung',
  capacity: '463 kWp',
  location: 'Jakarta',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/B7-Pulogadung-b-scaled.jpg'
}, {
  name: 'Sampoerna Kayoe Tanon',
  capacity: '1.199 kWp',
  location: 'East Java',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/SK-Tanon-2-scaled.jpg'
}, {
  name: 'Sampoerna Kayoe Pundong',
  capacity: '540 kWp',
  location: 'East Java',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/SK-Pundong-2-scaled.jpg'
}, {
  name: 'Agung Automall Batam',
  capacity: '310 kWp',
  location: 'Batam',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/Agung-Batam.jpeg'
}, {
  name: 'Agung Automall Bali',
  capacity: '494 kWp',
  location: 'Bali',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/Agung-Bali-2-scaled.jpg'
}, {
  name: 'Anugrah Pharmindo Lestari',
  capacity: '813 kWp',
  location: 'West Java',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/APL-scaled.jpg'
}, {
  name: 'Steel Pipe Industry of Indonesia Unit IV',
  capacity: '309 kWp',
  location: 'East Java',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/SPINDO-IV-2-scaled.jpg'
}, {
  name: 'Steel Pipe Industry of Indonesia Unit VI',
  capacity: '657 kWp',
  location: 'East Java',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/SPINDO-VI-2-scaled.jpg'
}];
const projectsInternational = [{
  name: 'AMPAS',
  location: 'Thailand',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/AMPAS.png'
}, {
  name: 'NAMIKI',
  location: 'Japan',
  image: 'https://alamenergy.co.id/wp-content/uploads/2023/03/Namiki-Precision-（Thailand）Rooftop__40910945.jpg'
}, {
  name: 'TOP GLOVE PHASE 3.2',
  location: 'Malaysia',
  image: 'https://alamenergy.co.id/wp-content/uploads/2023/01/TOP-GLOVE-PHASE-3.2-MALAYSIA.jpg'
}, {
  name: 'HAU GIANG',
  location: 'Vietnam',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/hau-giang.png'
}, {
  name: 'CAPAO SECO',
  location: 'Brazil',
  image: 'https://alamenergy.co.id/wp-content/uploads/2022/12/CAPAO-SECO-1-BRAZIL.png'
}];
Object.assign(window, {
  brandImages,
  projectsIndonesia,
  projectsInternational
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.FeatureRow = __ds_scope.FeatureRow;

__ds_ns.HeroBanner = __ds_scope.HeroBanner;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.LanguageSwitcher = __ds_scope.LanguageSwitcher;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
