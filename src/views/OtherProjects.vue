<template>
  <div>
    <h1>Research and other projects!</h1>

    <div style="margin-bottom: 30px;">
      Here are some other stuff I'm heavily contributed to, and my research projects that I've made. <br/>
      I also showcase my photography skill in this page, feel free to look at them.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
