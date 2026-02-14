---
layout: default
title: browse by type
---

## browse by type

{% assign types = site.scams | map: "type" | uniq | sort %}

<ul class="dir">
  {% for t in types %}
    <li><a href="#{{ t | slugify }}">{{ t }}</a></li>
  {% endfor %}
</ul>

<hr>

{% for t in types %}
### <a id="{{ t | slugify }}"></a>{{ t }}

<ul class="dir">
  {% assign items = site.scams | where: "type", t | sort: "date" | reverse %}
  {% for scam in items %}
    <li>
      <a href="{{ scam.url | relative_url }}">{{ scam.title }}</a>
      <span class="meta">({{ scam.date | date: "%b %d, %Y" }})</span>
    </li>
  {% endfor %}
</ul>

{% endfor %}
