---
layout: default
title: Divination & Card Reading Articles | Juniper Divination and Witchery
short-description: Beginner-friendly guides to tarot, cartomancy, and other divination methods — reading skills, playing cards, La Sibylle, tea leaves, bibliomancy, and how to choose a system.
permalink: /divination
---
<h1>Divination</h1>
<div class="article-list">
{% for post in site.posts %}
  {% if post.topic == "divination" %}
  <div class="article">
    <a href="{{ post.url }}"> <img src="/assets/img/article/{{post.img}}"></a>
      <a href="{{ post.url }}">
      <h3>
        {{ post.title }}
      </h3>
      <br class="hide-on-mobile">
      <p class="no-padding-bottom">{{ post.short-description }}</p>
      </a>
  </div>
  {% endif %}
{% endfor %}
</div>
