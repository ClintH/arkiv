import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/Layout';

export default class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Arkixd. Interaction Design bachelor programme at Malmö University" />
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    Interaction Design bachelor programme at Malmö University
                  </h2>
                  <div class="notification is-link">
                    For a formal description of the programme and further
                    information about who to contact or how to apply, please see
                    the{' '}
                    <a href="https://edu.mau.se/en/Program/TGIDE">syllabus</a>
                  </div>
                  <p>
                    Interaction design at Malmö University is not like other
                    digital-design related educations. We set ourselves apart in
                    three main ways:
                  </p>
                  <h2>1. The design of interaction</h2>
                  <p>
                    We understand interaction design as part of the tradition of
                    design, with a focus on the design of interactivity - not
                    just how an artefact looks or what it does, but how it
                    responds and how it feels to use. Exploring and expressing
                    interactivity requires technical skills. As such, you will
                    have to opportunity to acquire and develop basic programming
                    skills throughout the programme. We teach programming in a
                    way that is relevant for interaction design and that any
                    motivated student can learn. You will prototype interactive
                    experiences across a range of devices and platforms,
                    including for web and mobile.
                  </p>
                  <p>
                    The products and services interaction designers create are
                    not just software. We have a strong tradition and
                    world-class facilities for working with physical formats,
                    and you will learn techniques such as laser-cutting and 3D
                    printing. Together with basic electronic skills and a
                    microprocessor, you will be able to develop concepts related
                    to the Internet of Things, wearables and other forms of
                    smart products.
                  </p>
                  <p>
                    You won’t just make good-looking mock-ups, you'll bring your
                    ideas to life.
                  </p>
                  <h2>2. Responsible, sensitive design</h2>
                  <p>
                    To design is to make a change in the world; whether the
                    designer intends to or not, their work has wider
                    implications. Our education instils a responsible, sensitive
                    design approach which takes issues of ethics and
                    sustainability seriously, and focuses on design with human
                    values in mind. Moreover, at Malmö University we have a
                    strong tradition in participatory design approaches,
                    designing not just for users but with users and other
                    stakeholders. Interaction design can be done not just for
                    commercial purposes but also to serve and challenge the
                    pressing societal issues of our time.
                  </p>
                  <h2>3. Research-based teaching</h2>
                  <p>
                    At Malmö University, you will not only pick up the applied
                    skills of an interaction designer - conducting fieldwork,
                    programming, making mock-ups, creating concept videos, and
                    so on - you will also engage with cutting-edge forms of
                    interactivity and deep, theoretical perspectives on design
                    and interaction. You will develop reflective, critical
                    approaches, understanding not only how to create, but also
                    when and why (or why not). This is particularly important in
                    a technology-related field such as interaction design, where
                    developments happen quickly and practitioners need to be
                    able to make sense of new technologies and shifting
                    practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--gradient">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <h1>Structure</h1>
                  For students starting in 2018, the programme looks as follows.
                  Please{' '}
                  <a href="https://edu.mau.se/en/Program/TGIDE">
                    refer to the syllabus for full course information and
                    details
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container is-widescreen">
            <h1 className="title">Year 1</h1>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-horizontal">
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <span className="courseName">Methods I</span>
                    <span className="courseHp">(7.5HP)</span>
                    <div className="courseDescr">
                      Introduction to design and interactivity
                    </div>
                  </article>
                </div>
                <div className="tile is-3 is-parent is-vertical">
                  <article className="tile is-child box">
                    <span className="courseName">GUI</span>{' '}
                    <span className="courseHp">(7.5HP)</span>
                    <div className="courseDescr">
                      Visual design, graphical user interface principles and
                      genres, sketching and web technologies
                    </div>
                  </article>
                  <article className="tile is-child box">
                    <span className="courseName">Programming I</span>{' '}
                    <span className="courseHp">(7.5HP)</span>
                    <div className="courseDescr">
                      Creative coding with Javascript
                    </div>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <span className="courseName">
                      Research Field Introduction
                    </span>
                    <span className="courseHp">(7.5HP)</span>
                    <div className="courseDescr">
                      Engaging with scholarly discourse and academic writing
                    </div>
                  </article>
                </div>
                <div className="tile is-3 is-parent is-vertical">
                  <article className="tile is-child box">
                    <span className="courseName">Physical Prototyping</span>
                    <span className="courseHp">(7.5HP)</span>
                    <div className="courseDescr">
                      Design theory, physical making techniques, electronics
                    </div>
                  </article>
                  <article className="tile is-child box">
                    <span className="courseName">Programming II</span>
                    <span className="courseHp">(7.5HP)</span>
                    <div className="courseDescr">
                      Advanced creative coding with Javascript and
                      microcontrollers
                    </div>
                  </article>
                </div>
                <div className="tile is-3 is-parent is-vertical">
                  <article className="tile is-child box">
                    <span className="courseName">Digital Prototyping</span>
                    <span className="courseHp">(7.5HP)</span>
                    <div className="courseDescr">
                      Design theory, rapid prototyping with visual tools and
                      video
                    </div>
                  </article>
                  <article className="tile is-child box">
                    <span className="courseName">Methods II</span>
                    <span className="courseHp">(7.5HP)</span>
                    <div className="courseDescr">
                      Design research, qualitative methods
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container is-widescreen">
            <h1 className="title">Year 2</h1>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-horizontal">
                <div className="tile is-parent ">
                  <article className="tile is-child box">
                    <span className="courseName">Interactivity</span>{' '}
                    <span className="courseHp">(15HP)</span>
                    <div className="courseDescr">
                      Designerly exploration of interaction aesthetics
                    </div>
                  </article>
                </div>
                <div className="tile is-parent ">
                  <article className="tile is-child box">
                    <span className="courseName">
                      Tangible & Embodied Interaction
                    </span>
                    <span className="courseHp">(15HP)</span>
                    <div className="courseDescr">
                      Theory and practice of physical computing and developing a
                      concept
                    </div>
                  </article>
                </div>
                <div className="tile is-parent ">
                  <article className="tile is-child box">
                    <span className="courseName">Playful Interaction</span>{' '}
                    <span className="courseHp">(15HP)</span>
                    <div className="courseDescr">
                      Playful qualities of interaction and games
                    </div>
                  </article>
                </div>
                <div className="tile is-parent ">
                  <article className="tile is-child box">
                    <span className="courseName">Service Design</span>{' '}
                    <span className="courseHp">(15HP)</span>
                    <div className="courseDescr">
                      Codesign and holistic perspective
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container is-widescreen">
            <h1 className="title">Year 3</h1>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-horizontal">
                <div className="tile is-6 is-parent ">
                  <article className="tile  is-child box">
                    <span className="courseName">
                      Internship / elective / study abroad
                    </span>
                    <span className="courseHp">(30HP)</span>
                  </article>
                </div>
                <div className="tile is-2 is-parent ">
                  <article className="tile is-child box">
                    <span className="courseName">Thesis prep</span>{' '}
                    <span className="courseHp">(7.5HP)</span>
                    <div className="courseDescr" />
                  </article>
                </div>
                <div className="tile is-4 is-parent ">
                  <article className="tile is-child box">
                    <span className="courseName">Thesis</span>{' '}
                    <span className="courseHp">(22.5HP)</span>
                    <div className="courseDescr" />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
