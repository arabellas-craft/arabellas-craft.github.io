---
layout: default
title: "Irish Folklore & Celtic Mythology: 20+ Research-Based Guides"
short-description: Irish and Celtic folklore from primary sources:\ the four mythological cycles, ogham divination, Bealtaine and Imbolc customs, and Celtic Reconstructionism explained.
categories: Irish folklore, Celtic mythology, Irish mythology, four cycles of Irish mythology, Tuatha Dé Danann, Celtic Reconstructionism, ogham, ogham divination, Bealtaine, Imbolc, Samhain, Irish folk customs, the evil eye, St Brigid's cross, Irish folk magic, Fenian Cycle, Ulster Cycle, Mythological Cycle, Cycle of the Kings, Cú Chulainn
permalink: /irish
---
<h1>Irish Folklore, Mythology &amp; Folk Magic</h1>

Irish folklore survives in an unusually complete record. The [National Folklore Collection](https://www.duchas.ie/en) in Dublin holds thousands of pages gathered from people who still kept the old customs: what you did on May morning, which families were known to carry the evil eye, how to fold a rush so a Brigid's cross would actually protect the house. The guides here are built from that archive and the medieval manuscripts behind it. When a custom is well attested, the article says so. When it's a modern addition, the article says that too.

Irish myth is usually sorted into [four cycles](/irish-mythology-four-cycles) — the Mythological, Ulster, Fenian, and Kings. Reading them in order gives you the shape of the whole tradition, from the [Tuatha Dé Danann](/irish-mythology-four-cycles) arriving in Ireland through the heroes of the Red Branch and the Fianna to the sacral kings of Tara. If you're new to all of it, start with the overview and follow the links into each cycle from there.

The seasonal guides follow the Irish year as it was actually lived. You'll find the [folk customs for Bealtaine](/irish-bealtaine-traditions) that protected milk and cattle, the [Brigid's cross traditions](/st-brigids-day-crosses) of Imbolc, and what the [Dúchas archive records about the evil eye](/the-evil-eye-in-irish-folklore) — including its odd geography, where certain counties and families were named more than others.

For readers building a practice rather than just reading about one, the Celtic Reconstructionism guides cover [what CR is and where to start](/celtic-reconstructionism-introduction-guide), how it differs from Wicca, and its theology. If you want a divination system rooted in the actual sources, the [ogham guides](/how-to-read-ogham-divination) explain the Irish alphabet and how it came to be read for guidance.

**Support This Work**

These guides are free and always will be. If they've helped your research or your practice, you can [support me on Ko-fi](https://ko-fi.com/juniperdivination/donate). It's never expected, and it keeps the archive growing.

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

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the four cycles of Irish mythology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Irish myth is traditionally grouped into four cycles. The Mythological Cycle covers the Tuatha Dé Danann and Ireland's gods. The Ulster Cycle follows Cú Chulainn, the Táin Bó Cúailnge, and the Red Branch warriors. The Fenian Cycle tells of Fionn mac Cumhaill, the Fianna, and Oisín in Tír na nÓg. The Cycle of the Kings deals with sacral kingship, the sovereignty goddess, and the legendary high kings of Tara. The grouping is a scholarly convenience rather than an ancient division, but it remains the clearest way to navigate the material."
      }
    },
    {
      "@type": "Question",
      "name": "Is ogham a real ancient alphabet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Ogham is a genuine 4th-to-5th-century Irish script, carved as sets of strokes along an edge and preserved on hundreds of surviving standing stones. Its origins are phonetic and linguistic, built to write early Irish. Reading ogham for divination is a later development drawn from medieval sources like the Book of Ballymote; the popular 'tree calendar' attached to it is a modern addition with no early historical basis."
      }
    },
    {
      "@type": "Question",
      "name": "What is Celtic Reconstructionism?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Celtic Reconstructionism (CR) is a modern polytheist practice that rebuilds pre-Christian Gaelic religion from historical and archaeological evidence rather than from 20th-century invented tradition. CR practitioners draw on medieval Irish and Gaulish sources, folklore archives, and academic scholarship. It differs from Wicca in structure and theology: there's no Wheel of the Year in the Wiccan sense, no fixed liturgy, and a strong emphasis on matching practice to what the sources actually support."
      }
    },
    {
      "@type": "Question",
      "name": "What were traditional Irish Bealtaine (May Day) customs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bealtaine marked the start of summer and the move of cattle to summer pasture, and most of its customs protected milk, butter, and livestock from harm and from the theft of their 'profit.' People lit bonfires, gathered yellow May flowers to lay at thresholds, guarded against neighbors drawing water or fire from the house before sunrise, and watched for anyone trying to skim luck from the dairy. Many of these practices are recorded in detail in the Dúchas folklore collection."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find primary sources for Irish folklore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The single best starting point is Dúchas (duchas.ie), the digitized National Folklore Collection, which includes the Schools' Collection gathered from Irish children and their families in the 1930s. For seasonal custom, Kevin Danaher's 'The Year in Ireland' is a standard reference. The guides on this site cite these sources directly so you can check the original record rather than relying on secondhand New Age reinterpretation."
      }
    }
  ]
}
</script>
