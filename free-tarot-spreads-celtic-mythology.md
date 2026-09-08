---
layout: default
title: "Free Celtic Mythology Tarot Spreads - Irish Mythology Readings | Juniper Divination"
permalink: /free-tarot-spreads/celtic-mythology/
categories: Celtic tarot spread, Irish mythology tarot spread, Tuatha De Danann tarot, Celtic cosmology tarot spread, Three Realms tarot spread, free Celtic tarot spread, Celtic oracle card spread, Irish mythology oracle spread, Celtic oracle spread
short-description: Free tarot and oracle card spreads built from Irish mythological frameworks. Each spread draws its card positions from a specific aspect of Irish myth, with context included.
breadcrumb: "Celtic Mythology"
breadcrumb-parent-name: "Free Tarot Spreads"
breadcrumb-parent-url: "/free-tarot-spreads/"
page-type: CollectionPage
---
{% assign count = site.posts | where: "category", "Celtic" | size %}

# Free Celtic Mythology Tarot Spreads

{{ count }} spreads built directly from Irish mythological frameworks. Each one draws its card positions from a specific aspect of Irish myth: a cosmological structure, a set of mythological objects, a narrative cycle. The context for each framework is included in the spread itself, so you don't need to come in knowing the mythology.

These work for any question with tarot or oracle cards. The mythological framing is a reading lens, not a prerequisite.

← [Back to all free tarot spreads](/free-tarot-spreads/)

<br>
<div class="gallery tarot-gallery">
{% for post in site.posts %}
  {% if post.category == 'Celtic' %} 
    <a href="{{ post.url }}"><img src="/assets/img/free-tarot-spread/thumbs/{{post.img}}" alt="{{post.title}}"></a>
  {% endif %}
{% endfor %}
</div>
<br><br>
