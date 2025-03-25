---
title: "Test Project"
excerpt: "This is just a sample project to check if the collection renders."
tags: [test]
---

Hello world from the projects collection!

**Tags:**  
{% for tag in page.tags %}
<span class="tag-badge">{{ tag }}</span>
{% endfor %}