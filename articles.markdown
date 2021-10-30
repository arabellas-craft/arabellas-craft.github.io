---
layout: default
title: Articles | Arabella's Craft | Tarot Readings | Online Tarot Card Reading
permalink: /articles/
---

{% for post in site.posts %}
  <article>
    <h1>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </h1>
    <br>
    <p class="no-padding-bottom">{{ post.short-description }}</p>
    <p><small><a href="{{ post.url }}">Read more</a></small></p>
  </article>
  <br>
{% endfor %}
