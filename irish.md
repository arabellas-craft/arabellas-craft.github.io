---
layout: default
title: Irish Folklore & Mythology Articles | Juniper Divination and Witchery
short-description: Historically grounded guides to Irish folklore, mythology, and Celtic Reconstructionism — seasonal customs, the four mythological cycles, ogham, and primary-source folk practice.
permalink: /irish
---
<h1>Irish Folklore and Magic</h1>
<div class="article-list">
{% for post in site.posts %}
  {% if post.topic == "irish" %}
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
