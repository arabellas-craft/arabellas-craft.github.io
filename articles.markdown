---
layout: default
title: "All Articles: Irish Folklore, Divination & Witchcraft Guides"
short-description: "Every article on Juniper Divination: Irish folklore and mythology, divination and cartomancy, chaos magic and witchcraft."
permalink: /articles/
breadcrumb: "Articles"
page-type: CollectionPage
---
<div class="article-list">
{% for post in site.posts %}
  {% if post.layout == "article" %}
  <div class="article">
    <a href="{{ post.url }}"> <img src="/assets/img/article/{{post.img}}"></a>
      <a href="{{ post.url }}">
      <h3>
        {{ post.title }}
      </h3>
      <p class="no-padding-bottom">{{ post.short-description }}</p>
      <span class="read-more">Read article &rarr;</span>
      </a>
  </div>
  {% endif %}
{% endfor %}
</div>