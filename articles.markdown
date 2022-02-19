---
layout: default
title: Articles | Arabella's Craft | Tarot Readings | Online Tarot Card Reading
permalink: /articles/
---

{% for post in site.posts %}
  <article>
    <img src="/assets/img/article/{{post.img}}">
    <a href="{{ post.url }}">
    <h1>
      {{ post.title }}
    </h1>
    <br class="hide-on-mobile">
    <p class="no-padding-bottom">{{ post.short-description }}</p>
    </a>
  </article>
<br>
<img src="/assets/img/divider.svg">
{% endfor %}
