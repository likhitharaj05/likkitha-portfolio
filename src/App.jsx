import React, { useEffect, useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'Auditorium Booking Application',
    category: 'Full-stack application',
    description: 'A web application project focused on managing auditorium booking requests and reservation information, with a booking workflow, backend API integration, and database-backed application design.',
    stack: ['React.js', 'Node.js', 'Express.js', 'Database'],
    link: '',
    status: 'Project details to confirm',
  },
  {
    number: '02',
    title: 'Product Management System',
    category: 'Full-stack application',
    description: 'A full-stack application for managing product information through a web interface and backend services, including product data management, REST API integration, and database operations.',
    stack: ['React.js', 'Node.js', 'Express.js', 'Database'],
    link: '',
    status: 'Project details to confirm',
  },
  {
    number: '03',
    title: 'Eye Disease Detection',
    category: 'Machine learning',
    description: 'A machine learning project exploring eye disease classification using the VGG19 convolutional neural network architecture, including image preprocessing, transfer-learning-based classification, and model evaluation.',
    stack: ['Python', 'Deep Learning', 'VGG19'],
    link: '',
    status: 'Project details to confirm',
  },
  {
    number: '04',
    title: 'AI-Assisted Data Validation & Reconciliation',
    category: 'Data engineering',
    description: 'A workflow for comparing source and target datasets, validating schemas and values, identifying discrepancies, and generating reconciliation reports, including source-to-target validation, data quality checks, mismatch identification, and audit reports.',
    stack: ['Python', 'SQL', 'Microsoft Fabric', 'Azure Data Factory'],
    link: '',
    status: 'Project details to confirm',
  },
]

const skillGroups = [
  { title: 'Programming Languages', items: ['Python', 'JavaScript', 'SQL', 'Java (training)'] },
  { title: 'Full-Stack Development', items: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'HTML', 'CSS'] },
  { title: 'Data Engineering', items: ['ETL Pipelines', 'Data Validation', 'Data Reconciliation', 'Data Quality', 'Schema Validation', 'Data Profiling', 'Bronze / Silver / Gold', 'Microsoft Fabric', 'Azure Data Factory'] },
  { title: 'Databases & Analytics', items: ['MySQL', 'MongoDB', 'Oracle SQL (training)', 'Pandas', 'NumPy', 'Power BI', 'DAX', 'Power Query'] },
  { title: 'Tools & Technologies', items: ['Git', 'GitHub', 'VS Code', 'GitHub Copilot', 'Streamlit', 'Vite'] },
]

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
}

function ExternalIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /></svg>
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']]
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Go to home"><span className="brand-mark">L</span><span>likhitha<span className="brand-dot">.</span></span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      <nav className={open ? 'nav nav-open' : 'nav'}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowIcon /></a>
      </nav>
    </header>
  )
}

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Header />
      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES <span className="eyebrow-line" /></div>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>Lakshmi Likhitha<br /><span>Vasamsetti.</span></h1>
            <h2>Data Engineer <span className="accent-slash">&</span> Full-Stack Developer</h2>
            <p className="hero-description">I build reliable data pipelines, interactive web applications, and data-driven solutions. With experience across full-stack development, Python, SQL, and data validation, I enjoy transforming complex problems into practical, scalable solutions. Currently exploring data engineering, Microsoft Fabric, and AI-assisted automation.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowIcon /></a>
              <a className="button button-ghost" href="#contact">Get in touch</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/likhitharaj05" target="_blank" rel="noreferrer">GitHub <ExternalIcon /></a>
              <a href="https://www.linkedin.com/in/likhitha-vasamsetti/" target="_blank" rel="noreferrer">LinkedIn <ExternalIcon /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Decorative code-inspired graphic">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="visual-grid" />
            <div className="code-card">
              <div className="code-card-top"><div className="window-dots"><i /><i /><i /></div><span>developer.js</span><span className="code-lock">JS</span></div>
              <div className="code-lines">
                <p><span className="line-no">01</span><span className="code-purple">const</span> developer = {'{'}</p>
                <p><span className="line-no">02</span>&nbsp; name: <span className="code-green">'Likhitha'</span>,</p>
                <p><span className="line-no">03</span>&nbsp; focus: <span className="code-green">'Data + Full-stack'</span>,</p>
                <p><span className="line-no">04</span>&nbsp; curious: <span className="code-orange">true</span>,</p>
                <p><span className="line-no">05</span>&nbsp; learning: <span className="code-green">'Always'</span></p>
                <p><span className="line-no">06</span>{'}'};</p>
                <p className="code-comment"><span className="line-no">07</span>// building one idea at a time</p>
              </div>
              <div className="code-card-bottom"><span className="pulse-dot" /> Ready to build <span>↗</span></div>
            </div>
            <div className="floating-chip chip-react"><span>⚛</span> React.js</div>
            <div className="floating-chip chip-node"><span>◈</span> Node.js</div>
            <div className="floating-chip chip-data"><span>⌘</span> Data + AI</div>
            <div className="visual-caption">DESIGN <span>·</span> DEVELOP <span>·</span> ITERATE</div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-mouse" /> Scroll to explore</a>
        </section>

        <section className="section-wrap section-block reveal" id="about">
          <div className="section-label"><span>01</span> ABOUT ME</div>
          <div className="about-grid">
            <div><h2 className="section-title">Curious by nature.<br /><span>Developer by choice.</span></h2></div>
            <div className="about-content">
              <p className="large-copy">I'm a Computer Science and Engineering graduate interested in building useful, reliable software and data solutions.</p>
              <p>My experience spans web development, APIs, databases, data validation, data reconciliation, and machine learning projects. I like understanding how systems work end to end—from the interface people use to the data that powers it.</p>
              <p>I'm continuing to grow my engineering skills through hands-on projects and practical problem-solving.</p>
              <div className="about-facts">
                <div><strong>8.50</strong><span>B.Tech CGPA / 10</span></div>
                <div><strong>Full-stack</strong><span>Primary focus</span></div>
                <div><strong>Always</strong><span>Learning mindset</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block reveal" id="skills">
          <div className="section-label"><span>02</span> TOOLKIT</div>
          <div className="section-heading-row"><h2 className="section-title">Tools I work <span>with.</span></h2><p>A practical toolkit across full-stack development, data engineering, analytics, machine learning, and development tools.</p></div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => <article className="skill-card" key={group.title} style={{ '--delay': `${index * 70}ms` }}>
              <div className="skill-card-index">0{index + 1}</div><h3>{group.title}</h3>
              <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
            </article>)}
          </div>
        </section>

        <section className="section-wrap section-block reveal" id="projects">
          <div className="section-label"><span>03</span> SELECTED WORK</div>
          <div className="section-heading-row"><h2 className="section-title">Projects with a <span>purpose.</span></h2><p>A selection of full-stack development, machine-learning, and data-engineering work.</p></div>
          <div className="projects-grid">
            {projects.map(project => <article className="project-card" key={project.number}>
              <div className="project-card-top"><span className="project-number">{project.number}</span><span className="project-category">{project.category}</span></div>
              <div className={`project-art art-${project.number}`}>
                {project.number === '01' && <div className="mini-calendar"><div className="mini-calendar-head">BOOKING OVERVIEW <span>•••</span></div><div className="mini-calendar-main"><b>Room schedule</b><div className="calendar-bars"><i /><i /><i /><i /><i /></div><div className="calendar-labels"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span></div></div></div>}
                {project.number === '02' && <div className="mini-products"><div className="product-block p-one" /><div className="product-block p-two" /><div className="product-block p-three" /><div className="product-info"><i /><i /><i /></div></div>}
                {project.number === '03' && <div className="mini-eye"><div className="eye-shape"><div className="eye-iris"><div /></div></div><span>IMAGE CLASSIFICATION</span></div>}
                {project.number === '04' && <div className="mini-pipeline"><div className="pipeline-node">ADF</div><span>→</span><div className="pipeline-node fabric-node">FABRIC</div><span>→</span><div className="pipeline-node">QA</div><div className="pipeline-caption">VALIDATE · RECONCILE</div></div>}
              </div>
              <div className="project-card-body"><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                 </div>
            </article>)}
          </div>
           </section>

        <section className="section-wrap section-block reveal" id="experience">
          <div className="section-label"><span>04</span> EXPERIENCE & EDUCATION</div>
          <div className="timeline-grid">
            <div><h2 className="section-title">Learning through <span>building.</span></h2><p className="timeline-intro">Internships and education that shaped my technical foundation.</p></div>
            <div className="timeline">
              <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-meta">PROFESSIONAL EXPERIENCE(MARCH 2026 - PRESENT)</div><h3>Techwave</h3><p className="timeline-role">Intern Trainee / Trainee Engineer</p><p>Working with data validation and reconciliation workflows, SQL, Python, and enterprise data sources, with exposure to Microsoft Fabric, Azure Data Factory, and financial data quality checks.</p></article>
              <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-meta">JUL 2025 — JAN 2026</div><h3>Labmentix Pvt. Ltd.</h3><p className="timeline-role">Web Development Intern</p><p>Experience in web development, application development, and related implementation work.</p></article>
              <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-meta">APR 2025 — JUN 2025</div><h3>Skill Dzire</h3><p className="timeline-role">Machine Learning Intern</p><p>Exposure to machine learning concepts and practical model development.</p></article>
              <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-meta">2022 — 2026</div><h3>RGUKT, Nuzvid</h3><p className="timeline-role">B.Tech — Computer Science and Engineering</p><p>CGPA: 8.50 / 10</p></article>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap reveal" id="contact">
          <div className="contact-orb" />
          <div className="section-label"><span>05</span> CONTACT</div>
          <p className="contact-kicker">HAVE A ROLE OR PROJECT IN MIND?</p>
          <h2>Let's make something<br /><span>meaningful.</span></h2>
          <p className="contact-description">I'm interested in opportunities where I can contribute, keep learning, and build reliable software with a thoughtful team.</p>
          <div className="contact-actions">
            <a className="button button-primary" href="https://github.com/likhitharaj05" target="_blank" rel="noreferrer">Visit GitHub <ExternalIcon /></a>
            <a className="button button-ghost" href="https://www.linkedin.com/in/likhitha-vasamsetti/" target="_blank" rel="noreferrer">Connect on LinkedIn <ExternalIcon /></a>
          </div>
          <p className="contact-email-note"><a href="mailto:vlakshmilikhitha05@gmail.com">vlakshmilikhitha05@gmail.com</a></p>
        </section>
      </main>
      <footer className="site-footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">L</span><span>likhitha<span className="brand-dot">.</span></span></a><a href="#home" className="back-top">Back to top ↑</a></footer>
    </div>
  )
}

export default App
