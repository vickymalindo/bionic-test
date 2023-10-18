<template>
  <header
    class="bg-blue-600 w-full h-32 flex items-center justify-center text-white border-8 border-black">
    <p>1</p>
  </header>
  <section class="flex justify-center items-center flex-col md:flex-row">
    <div
      class="bg-blue-600 w-full h-32 flex items-center justify-center text-white border-8 border-black">
      <p>2</p>
    </div>
    <div
      class="bg-blue-600 w-full h-32 flex items-center justify-center text-white border-8 border-black">
      <p>3</p>
    </div>
  </section>
  <main class="flex flex-col md:flex-row">
    <section class="border-8 border-black bg-blue-600 w-full md:w-2/3">
      <div class="p-2 bg-transparent">
        <div
          class="bg-red-400 w-full h-32 border-4 border-black flex justify-center items-center text-white">
          <p>4</p>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div
          class="bg-blue-600 w-full h-20 flex items-center justify-center text-white border-8 border-black">
          <p>5</p>
        </div>
        <div
          class="bg-blue-600 w-full h-20 flex items-center justify-center text-white border-8 border-black">
          <p>6</p>
        </div>
        <div
          class="bg-blue-600 w-full h-20 flex items-center justify-center text-white border-8 border-black">
          <p>7</p>
        </div>
      </div>
    </section>
    <section
      class="bg-blue-600 p-3 border-8 border-black w-full md:w-1/3 h-[240px] flex flex-col gap-3">
      <div
        class="bg-red-400 w-full h-[65px] border-4 border-black flex justify-center items-center text-white">
        <p>8</p>
      </div>
      <div
        class="bg-red-400 w-full h-[65px] border-4 border-black flex justify-center items-center text-white">
        <p>9</p>
      </div>
      <div
        class="bg-red-400 w-full h-[65px] border-4 border-black flex justify-center items-center text-white">
        <p>10</p>
      </div>
    </section>
  </main>
  <!-- <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>
