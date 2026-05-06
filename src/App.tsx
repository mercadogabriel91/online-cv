import './App.css'

function App() {
  return (
    <main className="cv-page">
      <header className="cv-section">
        <h1>GABRIEL MERCADO</h1>
        <p>
          <strong>Location:</strong> Salta - Argentina
        </p>
        <p>
          <strong>Phone:</strong> +54 38745673
        </p>
        <p>
          <strong>Email:</strong> fercado.gabriel5@hotmail.com
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/mercadogabriel/" target="_blank" rel="noreferrer">
            https://www.linkedin.com/in/mercadogabriel/
          </a>
        </p>
      </header>

      <section className="cv-section">
        <h2>Professional Summary</h2>
        <p>
          Software engineer with six years of experience designing, developing, and maintaining
          high-availability cloud systems, backend services, and full-stack products. Strong
          foundation in AWS, containers, CI/CD, and TypeScript/Python. Currently expanding
          technical specialization through a degree at UTN, with a focus on modern algorithmic
          topics. Proven track record in working as part of multinational teams, optimizing system
          performance and reliability, and bridging the gap between robust infrastructure and
          scalable next-generation AI solutions.
        </p>
      </section>

      <section className="cv-section">
        <h2>Technical Skills</h2>

        <h3>Languages</h3>
        <p>Python - TypeScript - JavaScript - SQL - C++</p>

        <h3>Cloud, Platform</h3>
        <p>
          AWS (ECS, Fargate, EC2, Lambda, RDS, S3, CloudFront, IAM, CloudWatch, API Gateway,
          Cognito, SNS) - Docker - Infrastructure as Code (Pulumi: TypeScript/Python) - CI/CD
          (GitHub Actions, AWS CodePipeline) - Microservices - Serverless - Monitoring &
          observability
        </p>

        <h3>Frameworks & Tech</h3>
        <p>NestJS - NodeJS - Express - React - Redux Toolkit - TypeORM - Serverless Framework</p>

        <h3>Engineering Practices</h3>
        <p>Git - GitHub - Bitbucket - SonarQube - Unit testing - Code review</p>
      </section>

      <section className="cv-section">
        <h2>Work History</h2>

        <article className="job">
          <h3>odaclick (Jun 2025 - to present)</h3>
          <p className="job-title">DevOps Engineer (Promoted from Frontend Developer)</p>
          <p>
            Promoted to DevOps and Cloud infrastructure initiatives for US-based industries and
            delivering scalable, cloud-native solutions.
          </p>
          <h4>Key Responsibilities & Achievements:</h4>
          <ul>
            <li>
              Infrastructure & Automation: Architected and maintained cloud-native infrastructures
              using AWS (ECS, Lambda, RDS, S3), reducing manual operations through automated
              Python/TypeScript scripts and Pulumi (IaC).
            </li>
            <li>
              AI-Enhanced Development: Integrated AI agent-assisted tools (Cursor, Kiro) into the
              development lifecycle, leveraging spec-driven development to improve code quality and
              accelerate feature delivery.
            </li>
            <li>
              Local & Linux Environments: Configured and managed Linux-based environments to run
              and test AI models locally, optimizing resource usage and ensuring data privacy for
              internal workflows.
            </li>
            <li>
              CI/CD Orchestration: Designed and implemented robust CI/CD pipelines using GitHub
              Actions and AWS CodePipeline, ensuring 99% uptime for microservices and internal
              tools.
            </li>
            <li>
              Observability & Performance: Monitored system health using CloudWatch, implementing
              proactive logging and alerting strategies to optimize system reliability and
              performance.
            </li>
          </ul>
        </article>

        <article className="job">
          <h3>Beta ma (Jan 2025 - Jun 2025)</h3>
          <p className="job-title">Internal Systems Developer | Shenzhen, China</p>
          <ul>
            <li>
              Custom Software Solutions: Architected and deployed a bespoke management platform to
              digitize institution operations, including student tracking and curriculum management.
            </li>
            <li>
              Workflow Automation: Designed an automated notification system that streamlined
              communication between staff and parents, reducing administrative overhead.
            </li>
            <li>
              End-to-End Ownership: Single-handedly managed full development lifecycle, from
              requirement gathering with non-technical stakeholders to deployment and maintenance.
            </li>
            <li>
              Operational Optimization: Translated complex institutional pain points into a
              centralized digital workflow, with measurable daily service and data accuracy
              improvements.
            </li>
          </ul>
        </article>

        <article className="job">
          <h3>Darwoft (Oct 2023 - Aug 2024)</h3>
          <p className="job-title">Software Developer</p>
          <ul>
            <li>
              Frontend Architecture: Engineered complex, feature-rich interfaces for global clients
              using React and Redux Toolkit.
            </li>
            <li>
              Quality Assurance & Testing: Achieved 85%+ test coverage in mission-critical modules
              with Jest and React Testing Library.
            </li>
            <li>
              Collaboration & Standards: Worked across cross-functional teams in agile environments,
              using Bitbucket, SonarQube, and Jira to maintain code quality and delivery standards.
            </li>
          </ul>
        </article>

        <article className="job">
          <h3>DinoCloud (Aug 2021 - Oct 2023)</h3>
          <p className="job-title">Software Developer | AWS Premier Tier Partner company</p>
          <ul>
            <li>
              Cloud-Native MVP Development: Engineered high-performance MVPs and prototypes for
              enterprise clients, utilizing AWS Lambda, EC2, and RDS.
            </li>
            <li>
              Infrastructure Optimization: Implemented robust backend architectures using
              TypeScript, NestJS, and TypeORM, with DynamoDB and PostgreSQL.
            </li>
            <li>
              System Reliability: Leveraged AWS API Gateway, Cognito, and SNS to build secure,
              event-driven communication and identity management systems.
            </li>
          </ul>
        </article>

        <article className="job">
          <h3>Syncode (Jan 2020 - Dec 2020)</h3>
          <p className="job-title">Software Developer</p>
          <p>
            Full-stack mobile delivery: Developed and deployed cross-platform mobile applications
            using React Native, implementing core features like Firebase authentication, real-time
            cloud functions, and relational database management via GraphQL/Hasura.
          </p>
        </article>
      </section>
    </main>
  )
}

export default App
