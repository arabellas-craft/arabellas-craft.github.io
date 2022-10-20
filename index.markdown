---
layout: home
title: Arabella's Craft | Witchcraft | Tarot Readings | Online Tarot Card Reading
---

Tarot helps us navigate life’s transitions with grace and compassion. It illuminates the unconscious, encourages self-reflection, and aids us in making informed choices. 

I use this space to write about my journey with tarot and magical practices.


<form action="https://app.gumroad.com/follow_from_embed_form" class="form gumroad-follow-form-embed" method="post">
<input name="seller_id" type="hidden" value="3221571659806">
<input name="email" placeholder="Your email address" type="email">
<button data-custom-highlight-color="" type="submit">Stay in Touch</button>
</form>
<br>

# Latest Articles
{% for post in site.posts %}
  <article>
    <img src="/assets/img/article/{{post.img}}" alt="{{post.categories}}">
    <a href="{{ post.url }}">
    <h1>
      {{ post.title }}
    </h1>
    <p class="no-padding-bottom">{{ post.short-description }}</p>
    </a>
  </article>
<br>
<img src="/assets/img/divider.svg">
{% endfor %}
