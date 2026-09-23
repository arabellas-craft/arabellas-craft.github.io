---
layout: default
title: "Free Sabbat & Holiday Tarot Spreads: Samhain, Imbolc, Beltane & More | Juniper Divination"
permalink: /free-tarot-spreads/seasonal/
categories: Sabbat tarot spread, seasonal tarot spread, Samhain tarot spread, Imbolc tarot spread, Beltane tarot spread, halloween tarot spread, new year tarot spread, free seasonal tarot spread, pagan tarot spread, sabbat oracle card spread, seasonal oracle spread, pagan oracle spread, Samhain oracle spread, Imbolc oracle spread
short-description: "Free tarot spreads for the four Irish festivals (Samhain, Imbolc, Bealtaine, Lughnasadh), the solstices and equinoxes, Halloween, Thanksgiving, and New Year."
breadcrumb: "Sabbats & Holidays"
breadcrumb-parent-name: "Free Tarot Spreads"
breadcrumb-parent-url: "/free-tarot-spreads/"
page-type: CollectionPage
---
{% assign count = site.posts | where: "category", "Holidays" | size %}

# Free Sabbat & Holiday Tarot Spreads

This is the largest category in the collection, with {{ count }} spreads. There are spreads for the four Irish festivals that open each season (Samhain, Imbolc, Bealtaine, and Lughnasadh), for the solstices and equinoxes, and for Halloween, Thanksgiving, and New Year.

The four festivals are the old Irish calendar. Adding the solstices and equinoxes to make an eight-part Wheel of the Year is a modern arrangement that many Pagans now keep.

The year-ahead spread is useful at any new year turning point, January 1st, Samhain, or your birthday, and is one of the most-used spreads in the collection.

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
