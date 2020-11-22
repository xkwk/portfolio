import img_jihwan from "./resources/jihwan2.jpg";
import img_powerbi1 from "./resources/powerbi1.png";
import tccs_report from "./resources/Light_Rail_Operations_Analytics.pdf";


function Profile(props) {
  return (
    <div className="user-profile">
      <img className="avatar" src={img_jihwan} alt="Jihwan Bae" />
      <h1 className="username">Jihwan Bae</h1>
      <div className="bio">
        baejihwan@gmail.com<br />
        Canberra, Australia
      </div>
      <p className="description">
        Hello, I am Jihwan Bae. <br />
        I am starting my journey to become a software developer! <br />
        Feel free to take a look at my recent works. <br />
      </p>
    </div>
  );
}


function Journal(props) {
  var id = props.topic;

  if (id === 'Home') {
    return (
      <Profile />
    );
  } else if (id === 'React') {
    return (
      <article>
        <h1>React</h1>
        <p>This website is built with React. With React, you can build a powerful single-page application. React's components, <code>props</code> and <code>state</code> are amazing!</p>
      </article>
    );
  } else if (id === 'Node.js') {
    return (
      <article>
        <h1>Node.js</h1>
        <p>To <b>be</b> <code>updated</code> ...</p>
      </article>
    );
  } else if (id === 'Django') {
    return (
      <article>
        <h1>Django</h1>
        <p>I have been teaching myself Django. Now, I can use Django to build a CRUD application!</p>
        <p>Link to <span class="nav"><a href="https://django-jihwan.herokuapp.com/" target="_blank" rel="noreferrer">my Django website</a></span>.</p>
      </article>
    );
  } else if (id === 'Internship') {
    return (
      <article>
        <h1>TCCS Internship</h1>
        <img src={img_powerbi1} alt="Power BI 1" width="550" height="300" />
        <p>I did my internship at <b>Transport Canberra and City Services (TCCS)</b> from Februrary to May 2020. It was an amazing experience because I could apply what I learned from uni to the real workplace. My project was <b>Light Rail Operations Analytics</b>. I used the business intelligence tool <b>Power BI</b> to build dashboards using light rail operations data provided by <a href="https://www.data.act.gov.au/" target="_blank" rel="noreferrer">ACT Open Data Portal</a>. It is very meaningful that the dashboards are actively used in TCCS to identify trends and patterns of light rail passengers. The most impressive thing is that the team actively adopted <b>Agile</b> approach using Jira. It was a real fun to work in <b>Scrum</b> framework which consists of sprint planning, stand ups, sprints, and retrospectives.</p>
        <p>If you are interested in my internship project, see <a href={tccs_report} download="Light Rail Operations Analyics.pdf">the report</a>.</p>
        <p>Also, watch <span class="nav"><a href="https://youtu.be/_BsVXn6vMKM" target="_blank" rel="noreferrer">my pitch video</a></span>.</p>
      </article>
    );
  } else {
    return (
      <article>
        <h1>Sorry, there is no page for {id}.</h1>
      </article>
    );
  }
}

export default Journal;