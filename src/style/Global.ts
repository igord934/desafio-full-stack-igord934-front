import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`


html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: "Inter", sans-serif;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
  font-family: "Inter", sans-serif;
}
body {
  line-height: 1;
  font-family: "Inter", sans-serif;
}
ol,
ul {
  list-style: none;
  font-family: "Inter", sans-serif;
}
blockquote,
q {
  quotes: none;
  font-family: "Inter", sans-serif;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
  font-family: "Inter", sans-serif;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  font-family: "Inter", sans-serif;
}


:root {
  --primary: #6d00a1;
  --primary-focus: #9032bb;
  --primary-negative: #59323f;

  --grey-0: #f8f9fa;
  --grey-1: #868e96;
  --grey-2: #343b41;
  --grey-3: #212529;
  --grey-4: #121214;

  --sucess: #3fe864;
  --negative: #e83f5b;

  --text-color: #fff;

  --background: #000;
  --background-transparent: #00000080;
}
`;
