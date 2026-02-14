---
layout: default
title: scam library
---

## Scam Listings

<ul>
{% for scam in site.scams %}
  <li>
    <a href="{{ scam.url }}">{{ scam.title }}</a>
    — {{ scam.type }}
  </li>
{% endfor %}
</ul>

title: libraryofcons
markdown: kramdown
permalink: pretty

collections:
  scams:
    output: true
    permalink: /scams/:name/

---
layout: default
title: scam library
---

## newest postings

<ul class="dir">
{% assign items = site.scams | sort: "date" | reverse %}
{% for scam in items limit: 80 %}
  <li>
    <a href="{{ scam.url | relative_url }}">{{ scam.title }}</a>
    <span class="meta">({{ scam.type }} · {{ scam.date | date: "%b %d, %Y" }})</span>
  </li>
{% endfor %}
</ul>
