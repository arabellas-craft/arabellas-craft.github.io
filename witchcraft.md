---
layout: default
title: "Witchcraft & Chaos Magic: Sigils, Gnosis & Beginner Guides"
short-description: "Research-grounded chaos magic and witchcraft guides: how to make sigils, reach gnosis, shift paradigms, plus vetted beginner resources and moon ritual ideas."
categories: witchcraft for beginners, chaos magic, how to make a sigil, sigils, gnosis, paradigm shifting, belief as a tool, chaos magic glossary, Austin Osman Spare, Peter Carroll, history of chaos magic, full moon ritual, new moon ritual, witchcraft books, witchcraft resources, beginner witch
permalink: /witchcraft
---
<h1>Witchcraft &amp; Chaos Magic</h1>

Chaos magic starts from a simple, unsettling idea: belief is a tool you can pick up and put down. You don't commit to one tradition's gods or cosmology for life. You adopt whatever framework gets results, work with it, then set it aside. Most of the guides here work through what that means in practice, from the [philosophy of belief as a tool](/chaos-magic-belief-as-tool) to the techniques that put it to use.

If you're new to the whole approach, start with [what chaos magic is](/what-is-chaos-magic) and the [glossary of key terms](/chaos-magic-terms-explained), then read how the movement came together from Austin Osman Spare to Peter Carroll. From there, the practical core is three skills that build on each other: [making a sigil](/how-to-make-sigils-austin-osman-spare-method) to encode an intention, reaching [gnosis](/gnosis-techniques-chaos-magic) to charge it, and [paradigm shifting](/chaos-magic-paradigm-shifting) to change your beliefs on purpose when a working calls for it.

Not everything here is chaos magic. There are accessible guides for anyone starting a practice, including [answers to common witchcraft questions](/common-witchcraft-questions) and full and new moon ritual ideas with journal prompts you can use no matter what tradition you follow.

The most useful thing a new witch can have is reliable sources. The [recommended books, podcasts, and videos](/recommendations/) guide points you toward well-vetted material and away from the recycled misinformation that fills a lot of beginner content.

**Support This Work**

These guides are free and stay that way. If they've helped your practice, you can [support me on Ko-fi](https://ko-fi.com/juniperdivination/donate){:target="_blank" rel="noopener noreferrer"}. It's never expected, but it keeps the free resources coming.

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
