---
layout: single
title: "About Me"
permalink: /about/
description: "Professional summary, skills, education, and certifications."
author_profile: true
classes: wide
---

## Summary
I build ML and analytics solutions with a strong emphasis on clean data, measurable evaluation, and production readiness. I enjoy simplifying complex systems, making outputs interpretable, pipelines maintainable, and results useful to both technical and non-technical stakeholders.

## Skills
- **Programming**: Python • SQL • TypeScript • C++
- **Machine Learning**: Scikit-learn • TensorFlow • Keras • PyTorch • CV • NLP • LLMs
- **Data Engineering**: PySpark • Hadoop • Airflow • Apache Spark • Terraform
- **Data Analysis / Data Science**: Pandas • Numpy • Matplotlib • Seaborn
- **Cloud & DevOps**: AWS • GCP • Snowflake • Azure • Docker • Kubernetes
- **Version Control**: Git • GitHub
- **Web Development**: Streamlit • Flask • Jekyll
- **Other Tools**: VS Code • Excel • Git • Power BI 

## Experience Snapshot
- Designed and delivered end-to-end data and machine learning solutions, covering problem framing, data ingestion, feature engineering, model training, evaluation, and deployment-ready outputs.
- Built reproducible data pipelines and analytics workflows to transform raw, noisy data into reliable inputs for modeling, reporting, and decision-making.
- Developed and evaluated machine learning models with a strong focus on appropriate metrics, validation strategies, and interpretability to support trustworthy results.
- Collaborated with cross-functional stakeholders by translating ambiguous requirements into clear technical approaches, experiments, and actionable insights.
- Packaged solutions into usable artifacts such as dashboards, APIs, notebooks, and documentation to enable adoption, maintenance, and iteration.

## Education
- **Master of Science in Data Science/Artificial Intelligence**, Campbellsville University (USA), 2024-26
- **Master of Data Science**, Illinois Institute of Technology (USA), 2019-21
- **Bachelor of Computer Science and Engineering**, Visvesvaraya Technological University (India), 2013-17

## Certifications {#certifications}
<div class="card-grid">
  {% assign certs = site.data.certifications | sort: "date" | reverse %}
  {% for c in certs %}
    <div class="card">
      <h4>{{ c.title }}</h4>
      <p class="muted">{{ c.issuer }} • {{ c.date }}</p>
      {% if c.url and c.url != "" %}
        <p><a href="{{ c.url }}">Verify</a></p>
      {% endif %}
    </div>
  {% endfor %}
</div>
