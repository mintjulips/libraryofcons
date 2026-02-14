---
layout: default
title: scam library
---

## newest postings

<label for="typeFilter" class="meta">filter:</label>
<select id="typeFilter">
  <option value="all">all</option>
  {% assign types = site.scams | map: "type" | uniq | sort %}
  {% for t in types %}
    <option value="{{ t | escape }}">{{ t }}</option>
  {% endfor %}
</select>

<ul class="dir" id="scamList">
{% assign items = site.scams | sort: "date" | reverse %}
{% for scam in items limit: 200 %}
  <li data-type="{{ scam.type | escape }}">
    <a href="{{ scam.url | relative_url }}">{{ scam.title }}</a>
    <span class="meta">({{ scam.type }} · {{ scam.date | date: "%b %d, %Y" }})</span>
  </li>
{% endfor %}
</ul>

<p class="meta">
  Prefer browsing? <a href="{{ '/scams/types/' | relative_url }}">browse by type →</a>
</p>
