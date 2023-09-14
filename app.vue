<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
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
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
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
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

:root {
  --color-primary: #9145f1;
  --color-hover: #b67cff;
  --color-accent: #7b13ff;
  --color-disable: #cbcacc;

  --color-derive-1: #c9a6f5;
  --color-derive-2: #dec7fb;
  --color-derive-3: #f2e9fd;

  --color-text-title: #18121f;
  --color-text-sub-title: #656466;
  --color-text-paragraph: #989799;
  --color-text-hint: #b2b1b2;

  --color-border: #b2b1b2;
  --color-divide-1: #d9d9d9;
  --color-divide-2: #f0f0f0;
  --color-divide: var(--color-divide-1);
  --color-background: #e9e6ec;

  --color-error: #ff3838;
  --color-success: #2fe382;
  --color-warn: #ffb93e;

  --color-background-overlay: rgba(24, 18, 31, 0.6);

  --color-white: #ffffff;

  --plyr-color-main: var(--color-primary);
  /* vfans 前缀 */
  --vfans-content-horizontal-padding: 16px;
  --vfans-content-activity-image-gap: 5px;
}
:root:root {
  --van-primary-color: var(--color-primary);
}
</style>
