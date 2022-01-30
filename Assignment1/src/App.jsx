
const element = (
    <div className="main">
            <div className="name">Nishu Singh</div>

            <img src="./image/photo.jpeg" alt="girl"></img>

            <div className="description">
                    <p>Hi, I am Nishu Singh, pursuing my second master in Big Data Analytics from San Diego State University. I'm passionate about data and data engineering. Recently, I have started learning web development, this is new field for me and trying to conquer in this field.</p>
                    <br></br>
                    <p>I have completed my first master degree from Delhi Technological University. I have 5 years of experience in Sharda University as an Assistant Professor/Research in computer science department. I have taught python programming, data structure, design algortihms, compiler and c programming.I have multitude skill and quality includes positive attitude, confident nature, desire to work as a part of team.</p>
                    <br></br>
                    <p>In my free time I like to play chess, I play almost every night before going to bed..</p>
            </div>
            <div className="button">
                    <a href="https://github.com/nishusingh11/full-stack-web-development-cse648" className="github_button">View my GitHub Repo</a>
            </div>

    </div>
);

ReactDOM.render(element, document.getElementById('contents'));