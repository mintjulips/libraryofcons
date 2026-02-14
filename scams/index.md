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
