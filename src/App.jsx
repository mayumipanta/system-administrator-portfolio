import React from 'react';

const pathLevels = [
  {
    level: 'Entry Level',
    title: 'Help Desk / IT Support Technician',
    description:
      'First line of support — the starting point for most IT careers.',
    responsibilities: [
      'Log and resolve support tickets',
      'Reset passwords and manage user accounts',
      'Set up new workstations and peripherals',
      'Document issues in a ticketing system',
    ],
    skills: [
      'Windows 10/11 basics',
      'Hardware troubleshooting',
      'Customer service',
      'Basic user account management',
      'CompTIA A+ (target certification)',
    ],
  },
  {
    level: 'Intermediate',
    title: 'Junior System Administrator / System Administrator',
    description:
      'Maintains servers and network services — proactive, not just reactive.',
    responsibilities: [
      'Manage Windows and Linux servers',
      'Configure user permissions and access',
      'Set up and verify backups',
      'Monitor server health and apply patches',
    ],
    skills: [
      'Windows Server',
      'Networking (DNS/DHCP)',
      'Virtualization',
      'PowerShell or Bash',
      'Network+ (target certification)',
    ],
  },
  {
    level: 'Advanced',
    title: 'Systems Engineer / IT Infrastructure Manager',
    description:
      'Designs infrastructure and leads teams — strategic and architectural.',
    responsibilities: [
      'Design infrastructure architecture',
      'Implement security policies',
      'Lead cloud migration projects',
      'Mentor junior staff and manage budgets',
    ],
    skills: [
      'Advanced security',
      'Project management',
      'Leadership',
    ],
  },
];

const skillItems = [
  {
    title: 'Operating System Administration',
    text: 'The foundation of the role — nearly every sysadmin task depends on Windows or Linux knowledge.',
  },
  {
    title: 'Networking',
    text: 'You cannot troubleshoot "no internet" without understanding how devices communicate.',
  },
  {
    title: 'Troubleshooting',
    text: 'A logical, methodical approach to finding root causes instead of guessing.',
  },
  {
    title: 'Security Fundamentals',
    text: 'Even junior staff protect company data through updates, firewalls, and access control.',
  },
  {
    title: 'Scripting',
    text: 'Automating repetitive tasks is what separates a sysadmin from basic IT support.',
  },
];

const jobRoleItems = [
  {
    role: 'Help Desk Technician',
    description:
      'Reactive, user-facing. Responds after a problem occurs. Focused on people and tickets.',
  },
  {
    role: 'System Administrator',
    description:
      'Proactive, system-facing. Maintains and monitors servers so problems do not occur.',
  },
  {
    role: 'Systems Engineer / Infrastructure Manager',
    description:
      'Strategic, design-facing. Plans the future of the infrastructure and leads the team.',
  },
];

const toolItems = [
  {
    name: 'VirtualBox / VMware',
    purpose: 'Practice server setups safely on your own laptop — free and beginner-friendly.',
  },
  {
    name: 'Windows Server / Ubuntu Server',
    purpose: 'The actual environments used in the workplace; familiarity is expected.',
  },
  {
    name: 'osTicket / Freshdesk',
    purpose: 'Learn the real workflow of IT support ticketing before your first job.',
  },
];

function App() {
  const [theme, setTheme] = React.useState(
    () => (localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'),
  );
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="portfolio-shell">
        <section className="hero-shell">
          <nav className="floating-nav navbar navbar-expand-lg">
            <div className="container-fluid px-3 py-2">
              <a className="nav-brand" href="#home" aria-label="Mayumi N. Panta home">
                MNP<span>.dev</span>
              </a>
              <div className="nav-controls">
                <button
                  className="theme-toggle"
                  type="button"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                  title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                  aria-pressed={theme === 'light'}
                >
                  <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
                </button>
                <a href="#about" className="nav-cta" onClick={closeMenu}>Let's Talk</a>
                <button
                  className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
                  type="button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                  aria-expanded={isMenuOpen}
                  aria-controls="primary-navigation"
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>
              <div
                className={`nav-links${isMenuOpen ? ' is-open' : ''}`}
                id="primary-navigation"
              >
                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#pathway" onClick={closeMenu}>Career Pathway</a>
                <a href="#skills" onClick={closeMenu}>Skills</a>
                <a href="#roles" onClick={closeMenu}>Job Roles</a>
                <a href="#tools" onClick={closeMenu}>Tools</a>
                <a href="#about" onClick={closeMenu}>About</a>
              </div>
            </div>
          </nav>

          <div id="home" className="hero-content-row">
            <div className="hero-copy">
              <p className="hero-greeting">Top of the morning <span aria-hidden="true">☕</span></p>
              <h1>IT Support to <span>Infrastructure</span></h1>
              <p>
                I am Mayumi, an aspiring system administrator building the skills to grow from help desk support into infrastructure engineering.
              </p>
              <div className="hero-actions">
                <a href="#pathway" className="btn btn-primary rounded-pill px-4">Explore my career path</a>
                <a href="#about" className="btn btn-outline-dark rounded-pill px-4">Meet Mayumi</a>
              </div>
            </div>

            <div className="portrait-area">
              <div className="portrait-ring">
                <img src="/profile-portrait.png" alt="Mayumi N. Panta" className="portrait-placeholder" />
              </div>
            </div>
          </div>
        </section>

        <main className="content-page">
          <section id="pathway" className="py-5 bg-soft-light">
            <div className="container">
              <div className="section-heading mb-4">
                <p className="section-kicker mb-2">System Administrator Career Pathway</p>
                <h2 className="fw-bold text-primary-dark">Three levels of professional growth, from first job to leadership.</h2>
              </div>

              <div className="row g-4">
                {pathLevels.map(({ level, title, description, responsibilities, skills }) => (
                  <div className="col-lg-4" key={title}>
                    <div className="card h-100 border-0 shadow-sm rounded-4 p-4 career-card">
                      <span className="badge text-bg-primary-subtle text-primary mb-3">{level}</span>
                      <h3 className="h4 fw-bold text-primary-dark">{title}</h3>
                      <p className="text-muted">{description}</p>

                      <div className="mt-3">
                        <h4 className="small text-uppercase fw-bold text-primary">Main Responsibilities</h4>
                        <ul className="mt-2 mb-3 ps-3">
                          {responsibilities.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="small text-uppercase fw-bold text-primary">Skills Needed</h4>
                        <ul className="mt-2 mb-0 ps-3">
                          {skills.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <h3 className="h4 fw-bold text-primary-dark mb-3">How the Levels Differ</h3>
                <div className="table-responsive rounded-4 overflow-hidden border shadow-sm">
                  <table className="table table-striped table-hover align-middle mb-0">
                    <thead className="table-primary text-primary-dark">
                      <tr>
                        <th scope="col" className="px-4 py-3">Category</th>
                        <th scope="col" className="px-4 py-3">Help Desk</th>
                        <th scope="col" className="px-4 py-3">System Administrator</th>
                        <th scope="col" className="px-4 py-3">Systems Engineer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="px-4 py-3 fw-semibold text-primary-dark">Focus</th>
                        <td className="px-4 py-3">Users</td>
                        <td className="px-4 py-3">Systems</td>
                        <td className="px-4 py-3">Architecture</td>
                      </tr>
                      <tr>
                        <th scope="row" className="px-4 py-3 fw-semibold text-primary-dark">Mode</th>
                        <td className="px-4 py-3">Reactive</td>
                        <td className="px-4 py-3">Proactive</td>
                        <td className="px-4 py-3">Strategic</td>
                      </tr>
                      <tr>
                        <th scope="row" className="px-4 py-3 fw-semibold text-primary-dark">Success measure</th>
                        <td className="px-4 py-3">Tickets closed</td>
                        <td className="px-4 py-3">Uptime</td>
                        <td className="px-4 py-3">Projects delivered</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="py-5">
            <div className="container">
              <div className="section-heading mb-4">
                <p className="section-kicker mb-2">Skills and Qualifications</p>
                <h2 className="fw-bold text-primary-dark">Skills and Qualifications</h2>
              </div>

              <div className="row g-4">
                {skillItems.map(({ title, text }, index) => (
                  <div className="col-md-6 col-xl-4" key={title}>
                    <div className="card h-100 border-0 shadow-sm rounded-4 p-4 skill-card">
                      <div className="skill-number mb-3">{String(index + 1).padStart(2, '0')}</div>
                      <h3 className="h5 fw-bold text-primary-dark">{title}</h3>
                      <p className="mb-0 text-muted">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="roles" className="py-5 bg-soft-light">
            <div className="container">
              <div className="section-heading mb-4">
                <p className="section-kicker mb-2">Job Roles and Responsibilities</p>
                <h2 className="fw-bold text-primary-dark">Job Roles and Responsibilities</h2>
              </div>

              <div className="row g-4">
                {jobRoleItems.map(({ role, description }) => (
                  <div className="col-lg-4" key={role}>
                    <div className="card h-100 border-0 shadow-sm rounded-4 p-4 role-card">
                      <h3 className="h4 fw-bold text-primary-dark">{role}</h3>
                      <p className="text-muted mb-0">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="tools" className="py-5">
            <div className="container">
              <div className="section-heading mb-4">
                <p className="section-kicker mb-2">Required Skills and Tools</p>
                <h2 className="fw-bold text-primary-dark">Required Skills and Tools</h2>
              </div>

              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
                    <h3 className="h5 fw-bold text-primary-dark mb-3">Skills:</h3>
                    <ul className="mb-0 ps-3">
                      <li>OS Administration</li>
                      <li>Networking</li>
                      <li>Troubleshooting</li>
                      <li>Security Fundamentals</li>
                      <li>Scripting and Automation</li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
                    <h3 className="h5 fw-bold text-primary-dark mb-3">Tools:</h3>
                    <div className="row g-3">
                      {toolItems.map(({ name, purpose }) => (
                        <div className="col-12" key={name}>
                          <div className="tool-card border rounded-4 p-3 h-100">
                            <h4 className="h6 fw-bold text-primary-dark mb-2">{name}</h4>
                            <p className="mb-0 text-muted">{purpose}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="py-5 bg-primary-dark text-white">
            <div className="container">
              <div className="row g-4 align-items-center">
                <div className="col-lg-4">
                  <div className="profile-card text-center p-4 rounded-4 border border-white border-opacity-25 bg-white bg-opacity-10">
                    <div className="profile-avatar mx-auto mb-3">
                      <img src="/profile-portrait.png" alt="Mayumi N. Panta" className="profile-avatar-image" />
                    </div>
                    <h2 className="h4 mb-1">Mayumi N. Panta</h2>
                    <p className="mb-0 text-white-50">BS Information Technology</p>
                  </div>
                </div>

                <div className="col-lg-8">
                  <p className="section-kicker text-sky mb-2">About the Developer</p>
                  <h2 className="fw-bold mb-3">Mayumi N. Panta</h2>
                  <p className="text-white-75 mb-3">
                    I am Mayumi N. Panta, a BSIT student at Occidental Mindoro State University — Mamburao Campus, interested in server management and IT infrastructure. I study Linux, networking, and basic scripting outside of class, and practice using virtual machines to get familiar with real server environments.
                  </p>
                  <p className="text-white-75 mb-3">
                    <strong>Preferred IT Career Path:</strong> Help Desk / IT Support Technician as an entry point, progressing toward System Administrator and eventually Systems Engineer.
                  </p>
                  <p className="text-white-75 mb-0">
                    <strong>Professional Goals:</strong> Earn CompTIA A+ and CompTIA Network+ certifications before graduating in June 2027, land an entry-level IT support role, then specialize in server administration and cloud infrastructure.
                  </p>

                  <div className="about-contact-card mt-4">
                    <h3 className="h6 text-uppercase fw-bold mb-3">Contact Information</h3>
                    <ul className="about-contact-list mb-0">
                      <li><span>Email</span><a href="mailto:mayumipanta04@gmail.com">mayumipanta04@gmail.com</a></li>
                      <li><span>Mobile</span><a href="tel:+639106436782">09106436782</a></li>
                      <li><span>Location</span><p>Mamburao, Occidental Mindoro, Philippines</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="py-4 border-top bg-light">
        <div className="container text-center text-muted small">
          <span>© 2026 Mayumi N. Panta — System Administrator Career Portfolio</span>
        </div>
      </footer>
    </>
  );
}

export default App;
