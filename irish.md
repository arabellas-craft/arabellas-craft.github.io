---
layout: default
title: "Irish Folklore & Celtic Mythology: 20+ Research-Based Guides"
short-description: "Irish and Celtic folklore from primary sources: the four mythological cycles, ogham divination, Bealtaine and Imbolc customs, and Celtic Reconstructionism explained."
categories: Irish folklore, Celtic mythology, Irish mythology, four cycles of Irish mythology, Tuatha Dé Danann, Celtic Reconstructionism, ogham, ogham divination, Bealtaine, Imbolc, Samhain, Irish folk customs, the evil eye, St Brigid's cross, Irish folk magic, Fenian Cycle, Ulster Cycle, Mythological Cycle, Cycle of the Kings, Cú Chulainn
permalink: /irish
breadcrumb: "Irish Folklore & Magic"
breadcrumb-parent-name: "Articles"
breadcrumb-parent-url: "/articles/"
page-type: CollectionPage
---
<h1>Irish Folklore, Mythology &amp; Folk Magic</h1>

Irish folklore survives in an unusually complete record. The [National Folklore Collection](https://www.duchas.ie/en){:target="_blank" rel="noopener noreferrer"} in Dublin holds thousands of pages gathered from people who still kept the old customs: what you did on May morning, which families were known to carry the evil eye, how to fold a rush so a Brigid's cross would actually protect the house. The guides here are built from that archive and the medieval manuscripts behind it. When a custom is well attested, the article says so. When it's a modern addition, the article says that too.

Irish myth is usually sorted into [four cycles](/irish-mythology-four-cycles) — the Mythological, Ulster, Fenian, and Kings. Reading them in order gives you the shape of the whole tradition, from the [Tuatha Dé Danann](/irish-mythology-four-cycles) arriving in Ireland through the heroes of the Red Branch and the Fianna to the sacral kings of Tara. If you're new to all of it, start with the overview and follow the links into each cycle from there.

The seasonal guides follow the Irish year as it was actually lived. You'll find the [folk customs for Bealtaine](/irish-bealtaine-traditions) that protected milk and cattle, the [Brigid's cross traditions](/st-brigids-day-crosses) of Imbolc, and what the [Dúchas archive records about the evil eye](/the-evil-eye-in-irish-folklore) — including its odd geography, where certain counties and families were named more than others. For Samhain, [what the festival is and when it falls](/what-is-samhain) covers the name, the pronunciation, and how the Irish first day of winter differs from Halloween.

For readers building a practice rather than just reading about one, the Celtic Reconstructionism guides cover [what CR is and where to start](/celtic-reconstructionism-introduction-guide), how it differs from Wicca, and its theology. If you want a divination system rooted in the actual sources, the [ogham guides](/how-to-read-ogham-divination) explain the Irish alphabet and how it came to be read for guidance.

**Support This Work**

These guides are free and always will be. If they've helped your research or your practice, you can [support me on Ko-fi](https://ko-fi.com/juniperdivination/donate){:target="_blank" rel="noopener noreferrer"}. It's never expected, and it keeps the archive growing.

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
