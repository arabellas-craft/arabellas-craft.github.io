---
layout: default
title: Articles | Juniper Divination and Witchery | Tarot Readings | Online Tarot Card Reading
short-description: Explore a treasure trove of articles at Juniper Divination, where mystical wisdom meets modern living. Uncover the secrets of tarot card meanings, explore diverse divination practices, and discover spiritual guidance for your journey.
permalink: /articles/
---

<div class="article-list">
{% for post in site.posts %}
  {% if post.layout == "article" %}
  <div class="article">
    <a href="{{ post.url }}"> <img src="/assets/img/article/{{post.img}}"></a>
      <a href="{{ post.url }}">
      <h2>
        {{ post.title }}
      </h2>
      <br class="hide-on-mobile">
      <p class="no-padding-bottom">{{ post.short-description }}</p>
      </a>
  </div>
  {% endif %}
{% endfor %}
</div>