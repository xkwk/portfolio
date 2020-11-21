import photo from "./jihwan.png";

function Profile(props) {
  return (
    <div className="user-profile">
      <img className="avatar" src={photo} alt="Jihwan Bae" />
      <h1 className="username">Jihwan Bae</h1>
      <div className="bio">
        jihwan.bae@anu.edu.au<br/>
        Canberra, Australia
      </div>
      <p className="description">
        Hello, I am Jihwan Bae. <br/>
        I am starting my journey to become a software developer! <br/>
        Feel free to take a look at my recent works. <br/>
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
        <p>This <b>Smooth Anchor Scrolling</b> pen was written to reduce the bloat of your project and provide a simple and easy solution for projects using <code>Jquery</code> to apply smooth link scrolling throughout your application or website.</p>
        <p>Example link to <span class="nav"><a href="#3" target="_blank" rel="noreferrer">Section 3</a></span></p>
      </article>
    );
  } else if (id === 'Node.js') {
    return (
      <article>
        <h1>Node.js</h1>
        <p>This <b>Smooth Anchor Scrolling</b> pen was written to reduce the bloat of your project and provide a simple and easy solution for projects using <code>Jquery</code> to apply smooth link scrolling throughout your application or website.</p>
        <p>Example link to <span class="nav"><a href="#3" target="_blank" rel="noreferrer">Section 3</a></span></p>
      </article>
    );
  } else if (id === 'Django') {
    return (
      <article>
        <h1>Django</h1>
        <p>This <b>Smooth Anchor Scrolling</b> pen was written to reduce the bloat of your project and provide a simple and easy solution for projects using <code>Jquery</code> to apply smooth link scrolling throughout your application or website.</p>
        <p>Link to <span class="nav"><a href="https://django-jihwan.herokuapp.com/" target="_blank" rel="noreferrer">My Django Portfolio</a></span></p>
      </article>
    );
  } else if (id === 'Internship') {
    return (
      <article>
        <h1>TCCS Internship</h1>
        <p>This <b>Smooth Anchor Scrolling</b> pen was written to reduce the bloat of your project and provide a simple and easy solution for projects using <code>Jquery</code> to apply smooth link scrolling throughout your application or website.</p>
        <p>Example link to <span class="nav"><a href="#3" target="_blank" rel="noreferrer">Section 3</a></span></p>
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