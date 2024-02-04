---
layout: default
title: Articles | Juniper Divination and Witchery | Tarot Readings | Online Tarot Card Reading
short-description: Explore a treasure trove of articles at Juniper Divination, where mystical wisdom meets modern living. Uncover the secrets of tarot card meanings, explore diverse divination practices, and discover spiritual guidance for your journey.
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
