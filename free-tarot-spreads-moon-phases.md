---
layout: default
title: "Free Moon Phase Tarot Spreads - Lunar Cycle Readings | Juniper Divination"
permalink: /free-tarot-spreads/moon-phases/
categories: Moon phase tarot spread, full moon tarot spread, new moon tarot spread, lunar tarot spread, dark moon tarot, waxing moon tarot, free lunar tarot spread
short-description: Free moon phase tarot spreads for the full moon, new moon, dark moon, waxing moon, and month-ahead planning. No lunar practice required to use them.
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

{% assign count = site.posts | where: "category", "Lunar" | size %}

# Free Moon Phase Tarot Spreads

{{ count }} spreads timed to the lunar cycle. Each one is built around the energy of a specific phase: the full moon's illumination, the dark moon's stillness, the waxing moon's momentum, and the new moon's reset.

You don't need to follow a moon practice to use these. They work as standalone readings at any point in the cycle, but they're most useful when you do them at or near the phase they're designed for.

The month-ahead lunar spread is the most flexible of the group: it uses the new moon as a starting point for a full month of intentions and check-ins.

← [Back to all free tarot spreads](/free-tarot-spreads/)

<br>
<div class="gallery tarot-gallery">
{% for post in site.posts %}
  {% if post.category == 'Lunar' %} 
    <a href="{{ post.url }}"><img src="/assets/img/free-tarot-spread/thumbs/{{post.img}}" alt="{{post.title}}"></a>
  {% endif %}
{% endfor %}
</div>
<br><br>
