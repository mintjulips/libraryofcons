---
layout: default
title: scam library
---

## newest postings

<ul class="dir">
{% assign items = site.scams | sort: "date" | reverse %}
{% for scam in items limit: 200 %}
  <li>
    <a href="{{ scam.url | relative_url }}">{{ scam.title }}</a>
    <span class="meta">({{ scam.type }} · {{ scam.date | date: "%b %d, %Y" }})</span>
  </li>
{% endfor %}
</ul>
