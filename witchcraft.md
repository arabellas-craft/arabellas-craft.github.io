---
layout: default
title: Witchcraft & Chaos Magic Articles | Juniper Divination and Witchery
short-description: Practical, research-grounded guides to chaos magic and witchcraft basics — sigils, gnosis, paradigm shifting, belief as a tool, plus resources and common questions for beginners.
permalink: /witchcraft
---
<h1>Witchcraft</h1>
<div class="article-list">
{% for post in site.posts %}
  {% if post.topic == "witchcraft" %}
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
