---
title: "Projects"
permalink: /projects/
layout: single
classes: wide projects-clean
author_profile: true
toc: false
related: false
---

<p class="muted">Browse projects by tag.</p>

<div id="tag-bar" style="margin:1rem 0;"></div>

<div id="projects-grid" class="card-grid">
  {% assign projects_sorted = site.projects | sort: "date" | reverse %}
  {% for p in projects_sorted %}
    <article class="card project-card" data-tags="{{ p.tags | join: ',' | downcase }}">
      <h3>
        <!-- If you want click to open repo instead of project page, switch the href below -->
        <a href="{{ p.repo_url }}">{{ p.title }}</a>
      </h3>
      <p class="muted">{{ p.short_description }}</p>

      <div>
        {% for t in p.tags %}
          <button class="tag tag-btn" type="button" aria-pressed="false" data-tag="{{ t | downcase }}">{{ t }}</button>
        {% endfor %}
      </div>

      <p style="margin-top:.5rem;">
        {% if p.demo_url and p.demo_url != "" %} • <a href="{{ p.demo_url }}" target="_blank" rel="noopener">Demo</a>{% endif %}
      </p>
    </article>
  {% endfor %}
</div>

<script src="{{ '/assets/js/filter-projects.js' | relative_url }}"></script>