---
layout: default
title: "Free Celtic Mythology Tarot Spreads - Irish Mythology Readings | Juniper Divination"
permalink: /free-tarot-spreads/celtic-mythology/
categories: Celtic tarot spread, Irish mythology tarot spread, Tuatha De Danann tarot, Celtic cosmology tarot spread, Three Realms tarot spread, free Celtic tarot spread, Celtic oracle card spread, Irish mythology oracle spread, Celtic oracle spread
short-description: Free tarot and oracle card spreads built from Irish mythological frameworks. Each spread draws its card positions from a specific aspect of Irish myth, with context included.
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "name": {{ page.title | jsonify }},
      "description": {{ page.short-description | jsonify }},
      "url": "{{ site.url }}{{ page.url }}"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "{{ site.url }}/" },
        { "@type": "ListItem", "position": 2, "name": "Free Tarot Spreads", "item": "{{ site.url }}/free-tarot-spreads/" },
        { "@type": "ListItem", "position": 3, "name": {{ page.title | split: " |" | first | jsonify }}, "item": "{{ site.url }}{{ page.url }}" }
      ]
    }
  ]
}
</script>

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
