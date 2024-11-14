<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Aulia Rizky Ramadhan</strong>, an Indonesian PhD course student with lots of free time on my hands, so I used that time to develop my skill in game programming and game design.
      <br />
      <br />When I was in college, with my friends I invested a very limited amount of time and money to create our own game for about three years, and was finally able to release it on <a href="https://store.steampowered.com/app/1402900/Twilight_Memoria/"> Steam. </a>
      <br />
      <br />After that, I started my own little game studio called <a href="https://bedroom-studio.itch.io/"> BedRoom Studio </a>
      <br />After this experience, game creation became part of my passion and work, and I began to work on it in parallel with my university activities. I'm looking for a Mixed Reality (XR) Engineer job, so if you have any opportunity feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides development, I'm passionate about video games. Also I love hiking, modeling, and photography.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of John" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work & Internship Experience</h2>

      <h3>Game Designer・<a href="https://store.steampowered.com/app/1402900/Twilight_Memoria/">Twilight Memoria</a></h3>
      <h4>August 2017 - December 2019</h4>

      <div>Design and development of an RPG game.</div>
      <div>- Game combat design.</div>
      <div>- Background illustration design.</div>

      <div class="tech-stack">RPG Maker, Aseprite, Adobe Photoshop</div>

      <h3>Mobile Application Tester・<a href="https://activesleep.jp/app/">Active Sleep App </a></h3>
      <h4>March 2020 - January 2021</h4>

      <div>QA and QC tester for mobile app development.</div>
      <div>- Mobile app testing.</div>
      <div>- Bug fixing.</div>
      <div>- Interacting with client.</div>

      <div class="tech-stack">Android Studio, Xcode, Android & iOS system smartphones</div>

      <h3>2 Days Internship・<a href="https://www.microsoft.com/ja-jp/hololens">Microsoft Japan </a></h3>
      <h4>November 2019</h4>

      <div>Internship on the development of HoloLens 2.</div>
      <div>- On site seminar and lectures.</div>
      <div>- HoloLens 2 hands-on development.</div>

      <div class="tech-stack">Visual Studio, HoloLens 2 device</div>

      <h3>30 Days Internship・<a href="https://v-sync.co.jp/">V-Sync Co.,Ltd. </a></h3>
      <h4>October 2019</h4>

      <div>Internship on the development of Care Assist System.</div>
      <div>- Designing digital signage.</div>
      <div>- Implementing new features.</div>
      <div>- Product maintenance.</div>

      <div class="tech-stack">Visual Studio, Unity, C++, C#</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Languages</h3>
        <SkillRate name="C#" :rate="5" />
        <SkillRate name="C++" :rate="4" />
        <SkillRate name="Python" :rate="4" />
        <SkillRate name="Java" :rate="3" />
        <SkillRate name="JavaScript" :rate="3" />
      </div>

      <div class="skill-set">
        <h3>Gamedev</h3>
        <SkillRate name="Unity" :rate="4" />
        <SkillRate name="Unreal Engine" :rate="5" />
        <SkillRate name="Photoshop" :rate="4" />
        <SkillRate name="Audacity" :rate="4" />
        <SkillRate name="Blender" :rate="3" />
      </div>

      <div class="skill-set">
        <h3>Editing</h3>
        <SkillRate name="Adobe Lightroom" :rate="5" />
        <SkillRate name="DaVinci Resolve 19" :rate="4" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>HAL Tokyo - College of Technology and Design </h3>
      <h4>2017 - 2021・Bachelor Degree</h4>
      <div>AI System Development Course, Department of Advanced Information Technology</div>
      <div>Specialty in robotics and mechatronics system</div>

      <h3>Tokyo University of Technology </h3>
      <h4>2021 - 2023・Master Degree</h4>
      <div>Graduate School of Bionics, Computer and Media Sciences, Computer Science Program</div>
      <div>Specialty in accessibility system and design in Mixed Reality (XR)</div>

      <h3>Tokyo University of Technology </h3>
      <h4>2023 - Present・Doctorate Course</h4>
      <div>Graduate School of Bionics, Computer and Media Sciences, Computer Science Program</div>
      <div>Specialty in accessibility system and design in board games</div>

      <h2>Languages</h2>
      <h3>Indonesian</h3>
      <div>Fluent as it is my mother tongue</div>

      <h3>English</h3>
      <div>Fluent (TOEIC 920/990) with a lots of humor</div>

      <h3>Japanese</h3>
      <div>N1 Level since I live in Japan from 2015</div>


      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Video Games</h3>
        <div>Some of my GOTYs: Sekiro, Dark Souls 3, God of War... I also ruined my teenage years on DoTA and still going until now.</div>
        <div>I love playing them, watching them, talking about them, studying them, watching studies about them, designing them...</div>

        <h3>I 🧡 Digital and Film Photography</h3>
        <div>I have a Sony mirrorless camera and Minolta film camera that I always bring everywhere to shoot some interesting moments.</div>

        <h3>I 💛 Videography</h3>
        <div>I love to go outside and shoot everyday life and editing them into short videos.</div>

        <h3>I 💚 Memes</h3>
        <div>Any kind of memes.</div>
        <div>I aspire to be a meme connoisseur so if you have dank memes, please send it to me.</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>