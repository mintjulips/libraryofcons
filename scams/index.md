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
