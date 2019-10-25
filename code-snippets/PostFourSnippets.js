import { CodeBlockJS } from "./CodeBlocks";

export const One = () => {
  return (
    <CodeBlockJS
      code={`// App.svelte
    <script>
    	let name= "Adam Berry"
    	let interests = ["movies", "music", "magic the gathering"];
    	let show = false;
    </script>

    <style>
    	section {
    		width: 300px;
    		margin: auto;
    	}
    	h2 {
    		font-size: 2rem;
    	}
    </style>

    <section class="bioSection">
    	<h2 class="bioHeader">{name}</h2>
    	<img class="bioImg" src="htpps://...." alt="avatar"/>
    	<button on:click={() => show = true}>Toggle</button>
    	{#if show}
    		<p class="bioP">
    			This is where I write about the things that I like.
    		</p>
    		<ul>
    			{#each interests as interest}
    			<li>{interest}</li>
    			{/each}
    		</ul>
    	{/if}
    </section>`}
    />
  );
};

export const Two = () => {
  return (
    <CodeBlockJS
      code={`// if statements
      {#if <condition> }
        <div>...</div>
          {:else}
            <div>... </div>
      {/if}`}
    />
  );
};

export const Three = () => {
  return (
    <CodeBlockJS
      code={`// loops
      {#each list as item}
        <div>{item}</div>
      {/each}`}
    />
  );
};

export const Four = () => {
  return (
    <CodeBlockJS
      code={`<button on:click={<callback fn>}>A Svelte Button</button>`}
    />
  );
};
