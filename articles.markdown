---
layout: default
title: Articles | Juniper Divination and Witchery | Tarot Readings | Online Tarot Card Reading
permalink: /articles/
---

{% for post in site.posts %}
  {% if post.layout == "article" %}
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
  {% endif %}
{% endfor %}
