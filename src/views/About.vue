<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Aulia Rizky Ramadhan</strong>, I'm currently working at <a href="https://logixsquare.com/"> LogixSquare Corporation. </a><br/>
        Before working at LogixSquare, I was a PhD Student at <a href="https://www.teu.ac.jp/"> Tokyo University of Technology. </a><br/>
        I spend my days living in Hachioji, Tokyo with my wife, and we had our beautiful marriage for almost a year now. <br/>
        <br/>
        I'm also a passionate free-time game developer (mostly gameplay programmer using Unity and Unreal Engine) and I love discussing, designing and developing apps and games in general. 
      </div>

      <div style="margin-top: 20px;">I've worked on <router-link to="/other-projects">multiple research </router-link>in graduate school, <router-link to="/game-projects">2D and 3D Game Projects </router-link> (to showcase my capabilities using Unity, or just to play around), on <router-link to="/other-projects">mobile and web app development</router-link>, and enjoyed 3D modeling and printing them on 3D Printer as well.</div>

      <div style="margin-top: 20px;">If you want to discuss about games, apps, or development in general. You can reach me at <a href="mailto:aulia91111@gmail.com">aulia91111@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/wedding.jpg" alt="Photo of Myself" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 2px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>