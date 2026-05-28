---
layout: default
title: "Free Career Tarot Spread - Professional Direction Reading | Juniper Divination"
permalink: /free-tarot-spreads/career/
categories: Career tarot spread, work tarot spread, professional tarot reading, tarot for career decisions, job tarot spread, free career tarot spread
short-description: "Free career tarot spreads for major professional decisions: direction, strengths, obstacles, and next steps clearly laid out."
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

{% assign count = site.posts | where: "category", "Work and Career" | size %}

# Free Career Tarot Spreads

{% if count == 1 %}1 career spread{% else %}{{ count }} career spreads{% endif %} for significant professional crossroads: a job change, a decision about direction, a question about whether to stay or leave. These cover your current position, your strengths, what's blocking you, and what a realistic next step looks like.

Day-to-day work questions are better served by a shorter 3-card spread from the [beginner collection](/free-tarot-spreads/beginner/). The spreads here are for the bigger decisions that deserve a longer reading.

← [Back to all free tarot spreads](/free-tarot-spreads/)

<br>
<div class="gallery tarot-gallery">
{% for post in site.posts %}
  {% if post.category == 'Work and Career' %} 
    <a href="{{ post.url }}"><img src="/assets/img/free-tarot-spread/thumbs/{{post.img}}" alt="{{post.title}}"></a>
  {% endif %}
{% endfor %}
</div>
<br><br>
