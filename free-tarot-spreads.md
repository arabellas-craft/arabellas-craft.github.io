---
layout: default
title: Free Tarot Spreads | Juniper Divination and Witchery | Tarot Readings | Online Tarot Card Reading
permalink: /free-tarot-spreads/
---
# Free Tarot Spreads
Trying out new tarot spreads is a great way to practice and get comfortable with your cards! These spreads are part of my personal library and I hope you find these tarot card spreads inspirational and insightful.

These tarot card spreads can be used with any combination of tarot, oracle, or any other kinds of cards you feel called to use. The only restriction is that they may not be sold and credit must be given when reposted.
<br>
<br>

<div class="categories">
{% assign spreads_by_category = site.data.free-tarot-spreads | group_by: "category" %}
{% for cat in site.categories-order %}
  {% assign currentCat = spreads_by_category | where: 'name', cat | first %}
  <div>
  <h2>{{ currentCat.name }} Tarot Spreads</h2>
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
  </div>
{% endfor %}
</div>
