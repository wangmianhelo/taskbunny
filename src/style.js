import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@font-face {font-family: "iconfont";
  src: url('./statics/icon/iconfont.eot?t=1599064726788'); /* IE9 */
  src: url('./statics/icon/iconfont.eot?t=1599064726788#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./statics/icon/iconfont.woff?t=1599064726788') format('woff'),
  url('./statics/icon/iconfont.ttf?t=1599064726788') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./statics/icon/iconfont.svg?t=1599064726788#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}






`;

export default GlobalStyle;