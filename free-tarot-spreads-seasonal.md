---
layout: default
title: "Free Sabbat & Seasonal Tarot Spreads - Celtic Wheel of the Year | Juniper Divination"
permalink: /free-tarot-spreads/seasonal/
categories: Sabbat tarot spread, seasonal tarot spread, Samhain tarot spread, Imbolc tarot spread, Beltane tarot spread, Celtic wheel of the year tarot, free seasonal tarot spread, pagan tarot spread
short-description: "Free sabbat and seasonal tarot spreads tied to the Celtic calendar: Samhain, Imbolc, Bealtaine, solstices, equinoxes, and more."
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

{% assign count = site.posts | where: "category", "Holidays" | size %}

# Free Sabbat & Seasonal Tarot Spreads

This is the largest category in the collection, with {{ count }} spreads tied to the Celtic calendar and seasonal turning points. There are spreads for each of the major sabbats (Samhain, Imbolc, Bealtaine, Lughnasadh) and for the solstices and equinoxes.

The seasonal framing is grounded in Irish and Celtic folk practice where it's relevant, not generic neo-Wiccan frameworks. Each spread includes context for why the positions map to that specific seasonal moment, along with a secular version if you prefer to use the themes without the religious framing.

The year-ahead spread is useful at any new year turning point — January 1st, Samhain, or your birthday — and is one of the most-used spreads in the collection.

← [Back to all free tarot spreads](/free-tarot-spreads/)

<br>
<div class="gallery tarot-gallery">
{% for post in site.posts %}
  {% if post.category == 'Holidays' %} 
    <a href="{{ post.url }}"><img src="/assets/img/free-tarot-spread/thumbs/{{post.img}}" alt="{{post.title}}"></a>
  {% endif %}
{% endfor %}
</div>
<br><br>
