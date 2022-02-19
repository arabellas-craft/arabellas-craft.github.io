---
layout: gallery
title: Free Tarot Spreads | Arabella's Craft | Tarot Readings | Online Tarot Card Reading
permalink: /free-tarot-spreads/
---

{% for entry in site.tarot-spreads %}
  <article>
    <img src="/assets/img/article/{{post.img}}">
    <a href="{{ post.url }}">
    <h1>
      {{ post.title }}
    </h1>
    <br>
    <p class="no-padding-bottom">{{ post.short-description }}</p>
    </a>
  </article>
  <br>
  <img src="/assets/img/divider.svg">
{% endfor %}
