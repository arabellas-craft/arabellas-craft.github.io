---
layout: default
title: Free Tarot Spreads | Arabella's Craft | Tarot Readings | Online Tarot Card Reading
permalink: /free-tarot-spreads/
---
{% assign spreads_by_category = site.data.free-tarot-spreads | group_by: "category" %}
{% for cat in site.categories-order %}
  {% assign currentCat = spreads_by_category | where: 'name', cat | first %}
  <h1>{{ currentCat.name }} Tarot Spreads</h1>
  <ul>
  {% for item in currentCat.items %}
    <li class="collapsed">
      <a href="{{ site.baseurl }}{{ item.name }}">
        {{ item.title }}
      </a>
    </li>
  {% endfor %}
  </ul>
  <br>
{% endfor %}
