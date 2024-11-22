import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "Active Sleep App", "img/projects/active-sleep-4.jpg", `
    <div class="paragraph">
      <strong>Active Sleep App</strong> is an Android & iOS application for monitoring sleep quality.
      <br/>It analyzes heartbeats, breathing, and body movements that cannot be understood just by sleeping, scores the sleep of the day, and gives a little advice.
      <br/>Images by <a target="_blank" href="https://activesleep.jp/">Paramount Bed</a>.

          </div>
            <div class="paragraph center">
              <a href="https://play.google.com/store/apps/details?id=com.paramount.bed&hl=en" target="_blank"><img src="img/projects/play-store-logo.png" alt="Google Play Store button" /></a> <a href="https://apps.apple.com/jp/app/active-sleep-app/id1453118417" target="_blank"><img src="img/projects/app-store-logo.png" alt="Apple Store button" /></a>
          </div>

          <div class="paragraph">
            Main features :
            <ul>
            <li>I was a QA and QC tester back when I did a part-time job for this client.</li>
            <li>The app has a lot of useful function inside it, and me myself used it for a year while being a tester.</li>
            <li>One function that I am proud of is the Snore System, I probably managed to strike a highscore in that :)</li>
            <li>Another great function is that the system also works with an automated bed system</li>
            </ul>
        </div>

        <div class="paragraph center">
          <img class="phone-screenshot" src="img/projects/active-sleep-1.png" alt="Active Sleep App Screenshot" />
          <img class="phone-screenshot" src="img/projects/active-sleep-2.png" alt="Active Sleep App Screenshot" />
          <img class="phone-screenshot" src="img/projects/active-sleep-3.png" alt="Active Sleep App Screenshot" />
          <img class="phone-screenshot" src="img/projects/active-sleep-logo.jpg" alt="Active Sleep App Screenshot" />
        </div>
    `, "#07457e", true, false),
    new ProjectData("project-7", "Digital School Note", "img/projects/digital-school-note.png", `
    <div class="paragraph">
                The <strong>Digital School Note</strong> Uchida Yoko is an educational application designed to enhance digital learning environments.
                <br/>It supports collaborative activities by allowing students and teachers to create, share, and edit notes in real-time on tablets or computers. This system integrates digital tools to promote interactive and effective learning in classrooms.
                <br/>Images by <a target="_blank" href="https://www.uchida.co.jp/index.html">Uchida Yoko</a>.
            </div>

            <div class="paragraph">
              Main features :
              <ul>
              <li>Real-Time Collaboration: Enables teachers and students to share and edit notes simultaneously, fostering interactive learning.</li>
              <li>Digital Whiteboard Functionality: Supports visual teaching with annotations, drawings, and multimedia integration.</li>
              <li>Personalized Learning: Allows individual note-taking and organization while syncing with shared classroom content.</li>
              <li>Device Compatibility: Works across tablets, computers, and other devices, ensuring accessibility.</li>
              </ul>
          </div>

            <div class="paragraph">
              <div class="notice">
                You can find more information about this application directly from <a href="https://www.uchida.co.jp/education/solution/digital-school-note/" target="_blank">Uchida Yoko</a>
              </div>
            </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="img/projects/digital-school-note-1.png" alt="Digital School Note Screenshot" />
                <img class="pc-screenshot" src="img/projects/digital-school-note-2.png" alt="Digital School Note Screenshot" />
                <img class="pc-screenshot" src="img/projects/digital-school-note-3.png" alt="Digital School Note Screenshot" />
                <img class="pc-screenshot" src="img/projects/digital-school-note-4.png" alt="Digital School Note Screenshot" />
            </div>`, "#1ca1e2", false, true),
    new ProjectData("project-8", "Master's Research Project: Accessibility for Hard-of-Hearing gamers", "img/projects/master-research-1.png", `
    <div class="paragraph">
                <strong>My researches</strong> advances human-computer interaction (HCI) and accessibility to create inclusive gaming experiences.
                <br/>During my Master's, I developed immersive VR horror games for the hearing impaired using Meta Quest 3, enhancing sensory feedback for universal enjoyment.
            </div>
          
            <div class="paragraph">
              <div class="notice">
                Here is a brief description of my Master's research theme. <a class="download-link" href="d/master_thesis.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
              </div>
            </div>

          <div class="paragraph">
          <strong>Fear the Glitch: Studying the Effects of Visual Warning for Deaf Gamers in VR Horror Escape Games</strong>
          <br/>Main features :
          <ul>
          <li><strong>Development of the Glitch Effect</strong></li>
           <ul>
              <li>A unique accessibility feature called the "Glitch Effect" was designed as a visual warning for deaf and hard-of-hearing gamers.</li>
              <li>It mimics visual static noise, increasing in intensity and frequency as an enemy approaches, helping players sense danger without relying on sound.</li>
           </ul>
          <li><strong>Comparative Study Between Analog and Digital Glitch Effects</strong></li>
           <ul>
              <li>Two variations, the Analog Glitch (resembling old television static) and the Digital Glitch (resembling dead pixels), were developed and tested.</li>
              <li>Experiments evaluated the psychological and usability impacts, showing the Analog Glitch effectively induced anxiety and enhanced the horror experience, while the Digital Glitch was preferred for modern usability.</li>
           </ul>
          <li><strong>Focus on Accessibility and Inclusivity</strong></li>
           <ul>
              <li>The study highlighted the challenge of making VR horror games accessible without altering gameplay rules.</li>
              <li>It aimed to provide an equivalent gaming experience for deaf players by replacing audio cues with visual feedback.</li>
           </ul>
          <li><strong>User-Centered Experimentation and Design</strong></li>
           <ul>
              <li>Gameplay experiments were conducted with non-impaired participants due to COVID-19 restrictions, using controlled VR environments to assess fear, immersion, and performance.</li>
              <li>Feedback showed that the Glitch Effects increased game tension and usability, enhancing both accessibility and the horror experience.</li>
           </ul>
          </ul>
      </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="img/projects/master-research-logo.png" alt="Master Research Screenshot" />
                <img class="pc-screenshot" src="img/projects/master-research-2.png" alt="Master Research Screenshot" />
                <img class="pc-screenshot" src="img/projects/master-research-3.png" alt="Master Research Screenshot" />
                <img class="pc-screenshot" src="img/projects/master-research-4.png" alt="Master Research Screenshot" />
            </div>`, "#e82a2a"),
    new ProjectData("project-9", "Doctor's Research Project: Accessibility for Visually Impaired gamers", "img/projects/doctor-research-logo.jpg", `
    <div class="paragraph">
                <strong>My researches</strong> advances human-computer interaction (HCI) and accessibility to create inclusive gaming experiences.
                <br/>Now, in my PhD, I focus on tactile interfaces for board games, enabling visually impaired players to engage under the same rules and challenges as others, promoting truly inclusive design and universal accessibility.
            </div>
          
            <div class="paragraph">
              <div class="notice">
                Here is a brief description of my Doctor's research theme. <a class="download-link" href="d/doctor-research.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
              </div>
            </div>

          <div class="paragraph">
          <strong>Fear the Glitch: Studying the Effects of Visual Warning for Deaf Gamers in VR Horror Escape Games</strong>
          <br/>Main features :
          <ul>
          <li><strong>Development of a Transformable Tactile Board</strong></li>
           <ul>
              <li>A tactile board equipped with pins and motors that dynamically reconfigure to represent game states through touch.</li>
              <li>This enables visually impaired players to perceive and interact with the board game environment, including positions of pawns, cards, and resources.</li>
           </ul>
          <li><strong>Integration of Real-Time State Tracking</strong></li>
           <ul>
              <li>Utilizes camera-based technology and computer vision algorithms to track and update the positions of game elements during gameplay.</li>
              <li>Real-time updates ensure players stay informed about ongoing changes, facilitating effective strategic decisions.</li>
           </ul>
          <li><strong>Focus on Inclusive and Accessible Gaming</strong></li>
           <ul>
              <li>Designed specifically for visually impaired players to engage with modern board games that rely heavily on visual cues.</li>
              <li>Aims to provide equal participation opportunities by combining tactile and audio feedback, bridging the gap between visual and non-visual gameplay experiences.</li>
           </ul>
          <li><strong>Evaluation Through User-Centered Testing</strong></li>
           <ul>
              <li>Plans to involve visually impaired participants in testing the device to gather feedback on usability and effectiveness.</li>
              <li>Insights from these evaluations will refine the framework to enhance accessibility and inclusivity in board games.</li>
           </ul>
          </ul>
      </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="img/projects/doctor-research-2.jpg" alt="Doctor Research Screenshot" />
                <img class="pc-screenshot" src="img/projects/doctor-research-3.jpg" alt="Doctor Research Screenshot" />
                <img class="pc-screenshot" src="img/projects/doctor-research-4.png" alt="Doctor Research Screenshot" />
            </div>`, "#e82a2a"),
];