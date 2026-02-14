---
layout: default
title: dictionary
---

## dictionary (A–Z)

{% assign terms = site.dictionary | sort: "term" %}

<p class="meta">
{% assign letters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z" | split: "," %}
{% for l in letters %}
  <a href="#{{ l }}">{{ l }}</a>
{% endfor %}
</p>

---

{% for l in letters %}
### <a id="{{ l }}"></a>{{ l }}

<ul class="dir">
{% for item in terms %}
  {% assign first = item.term | slice: 0 | upcase %}
  {% if first == l %}
    <li>
      <a href="{{ item.url | relative_url }}">{{ item.term }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>

{% endfor %}
