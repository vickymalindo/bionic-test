<template>
  <nav>
    <div class="flex items-center justify-between">
      <section
        class="flex items-center justify-between p-2 bg-slate-300 rounded-md drop-shadow">
        <p class="text-green-500">Marketing Planner</p>
        <button class="p-1.5 bg-orange-300 text-white rounded">See Job</button>
      </section>
      <section
        class="flex items-center justify-between p-2 bg-slate-300 rounded-md drop-shadow">
        <p class="text-green-500">UI/UX Content Creator</p>
        <button class="p-1.5 bg-orange-300 text-white rounded">See Job</button>
      </section>
    </div>
    <div class="flex items-center justify-between">
      <section
        class="flex items-center justify-between p-2 bg-slate-300 rounded-md drop-shadow">
        <p class="text-green-500">UI/UX Content Planner</p>
        <button class="p-1.5 bg-orange-300 text-white rounded">See Job</button>
      </section>
      <section
        class="flex items-center justify-between p-2 bg-slate-300 rounded-md drop-shadow">
        <p class="text-green-500">UI/UX Designer</p>
        <button class="p-1.5 bg-orange-300 text-white rounded">See Job</button>
      </section>
    </div>
    <div class="flex items-center justify-between">
      <section
        class="flex items-center justify-between p-2 bg-slate-300 rounded-md drop-shadow">
        <p class="text-green-500">Marketing Planner</p>
        <button class="p-1.5 bg-orange-300 text-white rounded">See Job</button>
      </section>
      <section
        class="flex items-center justify-between p-2 bg-slate-300 rounded-md drop-shadow">
        <p class="text-green-500">Marketing Planner</p>
        <button class="p-1.5 bg-orange-300 text-white rounded">See Job</button>
      </section>
    </div>
  </nav>
</template>

<script>
import jsonData from './../data.js';
export default {
  data: {
    name: 'SoalB',
    return: {
      datas: jsonData,
    },
  },
};
</script>
