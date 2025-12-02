---
layout: home
title: Juniper Divination - Discover Your Truth with Tarot, Divination & Witchcraft Supplies 
short-description: Free tarot guides, printable divination zines, and beginner-friendly witchcraft resources. Download tarot spreads, tea leaf reading guides & more from Juniper Divination.
categories: Divination, Tarot readings, Psychic readings, Tarot card meanings, Spiritual guidance, Fortune telling, Tarot card decks, Tarot card interpretations, Psychic services, Online tarot readings, Intuitive readings, Oracle cards, Tarot reading online, Tarot spreads, Psychic insights, Love tarot readings, Career tarot readings, Tarot reader profiles, Tarot blog, Divination tools
---

## Free Tarot Spreads
{% assign tarot-spreads = site.posts | where_exp:"post",
"post.tag contains 'tarot-spread'" %}
<div class="gallery tarot-gallery">
{% for post in tarot-spreads limit:4 %}
  <a href="{{ post.url }}"><img src="/assets/img/free-tarot-spread/thumbs/{{post.img}}" alt="{{post.title}}"></a>
{% endfor %}
<p class="gallery-link"><a href="/free-tarot-spreads">View All Tarot Spreads</a></p>
</div>


## Articles
{% assign articles = site.posts | where_exp:"post",
"post.tag contains 'article'" %}
<div class="gallery article-gallery">
{% for post in articles limit:4 %}
<a href="{{ post.url }}">
 <div class="article" style="background-image:url(/assets/img/article/{{post.img}});">
    <div class="white-overlay">
      <h3>
        {{ post.title }}
      </h3>
    </div>
  </div>
</a>
{% endfor %}
<p class="gallery-link"><a href="/articles">View All Articles</a></p>
</div>

## Books and Zines
<div class="gallery">
  <a href="https://ko-fi.com/s/f24c63dba8"><img src="/assets/img/zines/beyond-the-little-white-book-zine.jpg" alt="Beyond the Little White Book: A Zine for Tarot Interpretation and Intuitive Reading for Beginners"></a>
  <a href="https://ko-fi.com/s/95f9c29692"><img src="/assets/img/zines/playing-card-divination-zine.jpg" alt="Shuffle, Draw, Discover: Learn Playing Card Divination"></a>
  <a href="https://ko-fi.com/s/ff7d47ded3"><img src="/assets/img/zines/dice-divination-zine.jpg" alt="Dice Divination Zine: Learn How to Tell Fortunes with Dice | Beginner-Friendly Astragalomancy Guide"></a>
  <a href="https://ko-fi.com/s/16c793f6af"><img src="/assets/img/zines/tea-leaf-reading-zine.jpg" alt="Tea Leaf Reading Zine for Beginners | Learn Tasseography"></a>
  <a href="https://ko-fi.com/s/71bb6a9240"><img src="/assets/img/zines/bibliomancy-ebook.jpg" alt="Learn Book Divination (Bibliomancy) eBook"></a>
  
</div>

## Tarot Decks
<div class="gallery">
  <a href="https://juniperdivination.etsy.com/listing/1288443302"><img src="/assets/img/tarot-decks/magpie-tarot-deck.jpg" alt="Magpie Tarot Deck"></a>
  <a href="https://juniperdivination.etsy.com/listing/1320932639"><img src="/assets/img/tarot-decks/magpie-tarot-booster-pack.jpg" alt="Magpie Booster"></a>
  <a href="https://ko-fi.com/s/5f1138f832"><img src="/assets/img/tarot-decks/rider-waite-smith-digital-tarot-deck.jpg" alt="Rider-Waite-Smith Printable Tarot Deck"></a>
  <a href="https://ko-fi.com/s/522351405d"><img src="/assets/img/tarot-decks/ancien-tarot-de-marseille-digital-tarot-deck.jpg" alt="Vintage Tarot de Marseille Deck: Classic Printable Cards (PDF Download)"></a>
  <a href="https://ko-fi.com/s/1dfb630559"><img src="/assets/img/tarot-decks/la-sibylle-des-salons-digital-deck.jpg" alt="Vintage Oracle Card Deck Printable - La Sibylle Fortune Telling Cards | Antique French Divination "></a>
</div>