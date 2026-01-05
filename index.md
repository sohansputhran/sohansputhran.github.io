---
layout: splash
title: "Hi, I'm Sohan Sanjeeva Puthran"
subtitle: "Data Scientist | Machine Learning Engineer | Data Engineer"
header:
  overlay_color: "#000"
  overlay_filter: "0.3"
  overlay_image: /assets/images/banner.jpg
  actions:
    - label: "💼 View My Projects"
      url: "/projects/"
    - label: "📄 Download Resume"
      url: "/assets/resume.pdf"
    - label: "📧 Contact Me"
      url: "mailto:sohanputhran@gmail.com"
excerpt: "Turning data into smart, scalable solutions. Open to Data Science & AI roles in Fintech, Healthcare, and Tech."
---

<section class="section">
  <h1>Data Scientist / AI-ML Engineer</h1>
  <p class="muted">
    I build practical ML + data solutions, from experimentation to deployment, focused on measurable outcomes and clear communication.
  </p>
</section>

<section class="section">
  <h2>🔧 Tech Stack Highlights</h2>
  <ul>
    <li><strong>Programming:</strong> Python • SQL • TypeScript • C++</li>
    <li><strong>Machine Learning:</strong> Scikit-learn • TensorFlow • Keras • PyTorch • CV • NLP • LLMs</li>
    <li><strong>Data Engineering:</strong> PySpark • Hadoop • Airflow • Apache Spark • Terraform</li>
    <li><strong>Data Analysis / Data Science:</strong> Pandas • Numpy • Matplotlib • Seaborn</li>
    <li><strong>Cloud & DevOps:</strong> AWS • GCP • Snowflake • Azure • Docker • Kubernetes</li>
    <li><strong>Version Control:</strong> Git • GitHub</li>
    <li><strong>Web Development:</strong> Streamlit • Flask • Jekyll</li>
    <li><strong>Other Tools:</strong> VS Code • Excel • Git • Power BI</li>
  </ul>
</section>  

<section class="section">
  <h2>Featured Projects</h2>
  <div class="card-grid">
    {% assign featured = site.projects | where: "featured", true | sort: "date" | reverse %}
    {% for p in featured limit: 6 %}
      <div class="card" data-tags="{{ p.tags | join: ',' }}">
        <h3><a href="{{ p.url | relative_url }}">{{ p.title }}</a></h3>
        <p class="muted">{{ p.short_description }}</p>
        <p class="kv"><strong>Stack:</strong> {{ p.stack | join: " • " }}</p>
        <div>
          {% for t in p.tags %}
            <span class="tag" aria-pressed="false">{{ t }}</span>
          {% endfor %}
        </div>
      </div>
    {% endfor %}
  </div>

  <p style="margin-top:1rem;">
    <a href="{{ '/projects/' | relative_url }}">All projects →</a>
  </p>
</section>

<section class="section">
  <h2>Certifications</h2>
  {% assign certs = site.data.certifications | sort: "date" | reverse %}
  <div class="card-grid">
    {% for c in certs limit: 3 %}
      <div class="card">
        <h4>{{ c.title }}</h4>
        <p class="muted">{{ c.issuer }} • {{ c.date }}</p>
        {% if c.url and c.url != "" %}
          <p><a href="{{ c.url }}">Verify</a></p>
        {% endif %}
      </div>
    {% endfor %}
  </div>

  <p style="margin-top:1rem;">
    <a href="{{ '/about/' | relative_url }}#certifications">All certifications →</a>
  </p>
</section>

## 💡 Why Work With Me?

I bring a rare blend of **analytical mindset** and **software engineering skillset**. I thrive in data-driven environments where I can:

- Build reliable pipelines & predictive models
- Deliver actionable insights
- Drive measurable impact for teams and customers

Let's connect! 🚀